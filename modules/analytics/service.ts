import type { Prisma } from "@prisma/client";
import { prisma } from "../../config/db.js";

export async function recordSearchEvent(searchId: string, event: string, payload?: Record<string, unknown>): Promise<void> {
  const search = await prisma.search.findFirst({ where: { searchId } });
  if (!search) return;
  await prisma.searchAnalytics.create({
    data: { searchId: search.id, event, payload: payload as Prisma.InputJsonValue | undefined },
  });
}

export async function recordPageVisit(userId: string | undefined, path: string): Promise<void> {
  await prisma.pageVisit.create({
    data: { userId: userId ?? null, path } as { userId: string | null; path: string },
  });
}

export async function getOverview(): Promise<{
  totalUsers: number;
  totalSearches: number;
  searchesPerCategory: Record<string, number>;
  popularQueries: Array<{ query: string; count: number }>;
  pageVisits: number;
}> {
  const [totalUsers, totalSearches, searchesByCat, popularQueries, pageVisits] = await Promise.all([
    prisma.user.count(),
    prisma.search.count(),
    prisma.search.groupBy({ by: ["category"], _count: { id: true } }),
    prisma.search.groupBy({ by: ["query"], _count: { id: true }, orderBy: { _count: { id: "desc" } }, take: 10 }),
    prisma.pageVisit.count(),
  ]);

  const searchesPerCategory: Record<string, number> = {};
  for (const row of searchesByCat) {
    searchesPerCategory[row.category] = row._count.id;
  }

  const popularQueriesList = popularQueries.map((row) => ({ query: row.query, count: row._count.id }));

  return {
    totalUsers,
    totalSearches,
    searchesPerCategory,
    popularQueries: popularQueriesList,
    pageVisits,
  };
}
