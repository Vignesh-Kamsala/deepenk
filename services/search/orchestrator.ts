import { randomUUID } from "crypto";
import { parseIntent } from "../ai/intent.js";
import { generateInsights } from "../ai/insights.js";
import type { AIInsights } from "../ai/types.js";
import { runAdapter } from "../adapters/index.js";
import { getRedis, SEARCH_STATE_PREFIX, SEARCH_CACHE_PREFIX, CACHE_TTL_SEC } from "../../config/redis.js";
import { prisma } from "../../config/db.js";

export type SearchStatus = "FETCHING" | "PROCESSING" | "COMPLETED";

export type SearchState = {
  searchId: string;
  status: SearchStatus;
  query: string;
  category: string;
  primaryRecommendation?: unknown;
  aiSummary?: string;
  aiInsights?: AIInsights;
  alternatives?: unknown[];
  createdAt: string;
};

const STATE_TTL = 3600;

async function setState(searchId: string, state: SearchState): Promise<void> {
  const redis = getRedis();
  await redis.setex(
    `${SEARCH_STATE_PREFIX}${searchId}`,
    STATE_TTL,
    JSON.stringify(state)
  );
}

export async function getState(searchId: string): Promise<SearchState | null> {
  const redis = getRedis();
  const raw = await redis.get(`${SEARCH_STATE_PREFIX}${searchId}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SearchState;
  } catch {
    return null;
  }
}

export async function startSearch(query: string, userId?: string): Promise<{ searchId: string; status: SearchStatus }> {
  const searchId = randomUUID();
  const state: SearchState = {
    searchId,
    status: "FETCHING",
    query: query.trim(),
    category: "",
    createdAt: new Date().toISOString(),
  };
  await setState(searchId, state);

  setImmediate(() => runOrchestrator(searchId, query.trim(), userId).catch((err) => console.error("Orchestrator error:", err)));

  return { searchId, status: "FETCHING" };
}

async function runOrchestrator(searchId: string, query: string, userId?: string): Promise<void> {
  const redis = getRedis();
  const cacheKey = `${SEARCH_CACHE_PREFIX}${query.toLowerCase()}:${userId ?? "anon"}`;
  const cached = await redis.get(cacheKey);
  if (cached) {
    const parsed = JSON.parse(cached) as SearchState;
    parsed.searchId = searchId;
    parsed.createdAt = new Date().toISOString();
    await setState(searchId, { ...parsed, status: "PROCESSING" });
    await new Promise((r) => setTimeout(r, 300));
    await setState(searchId, { ...parsed, status: "COMPLETED" });
    await persistSearch(searchId, parsed, userId);
    return;
  }

  const current = await getState(searchId);
  await setState(searchId, {
    ...current,
    searchId,
    status: "PROCESSING",
    query: current?.query ?? query,
    category: current?.category ?? "",
    createdAt: current?.createdAt ?? new Date().toISOString(),
  });

  const intent = parseIntent(query);
  const adapterResult = runAdapter(intent);
  const primary = (adapterResult as { primary: unknown }).primary;
  const alternatives = (adapterResult as { alternatives: unknown[] }).alternatives;
  const aiInsights = generateInsights(intent.category, query, {
    primary,
    alternatives,
    category: intent.category,
  });

  const completedState: SearchState = {
    searchId,
    status: "COMPLETED",
    query,
    category: intent.category,
    primaryRecommendation: primary,
    aiSummary: aiInsights.aiSummary,
    aiInsights,
    alternatives,
    createdAt: (await getState(searchId))?.createdAt ?? new Date().toISOString(),
  };

  await setState(searchId, completedState);
  await redis.setex(cacheKey, CACHE_TTL_SEC, JSON.stringify(completedState));
  await persistSearch(searchId, completedState, userId);
}

async function persistSearch(
  searchId: string,
  state: SearchState,
  userId?: string
): Promise<void> {
  const search = await prisma.search.create({
    data: {
      searchId,
      userId: userId ?? null,
      query: state.query,
      category: state.category,
      status: state.status,
      primaryRecommendation: state.primaryRecommendation ?? undefined,
      aiSummarySnapshot: state.aiSummary ?? null,
      aiInsightsSnapshot: state.aiInsights ?? undefined,
      alternativesSnapshot: (state.alternatives ?? undefined) as import("@prisma/client").Prisma.InputJsonValue | undefined,
    },
  });
  await prisma.searchAnalytics.create({
    data: { searchId: search.id, event: "search_completed", payload: { query: state.query, category: state.category } },
  });
}
