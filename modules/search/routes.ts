import type { FastifyInstance } from "fastify";
import { searchBodySchema } from "./schema.js";
import { startSearch, getState } from "../../services/search/orchestrator.js";
import { authMiddleware } from "../../middleware/auth.js";

export async function searchRoutes(app: FastifyInstance): Promise<void> {
  app.post("/", {
    config: { rateLimit: { max: 30, timeWindow: "1 minute" } },
    schema: {
      body: {
        type: "object",
        required: ["query"],
        properties: {
          query: { type: "string" },
          category: { type: "string", enum: ["shopping", "food", "rides", "travel", "hotels"] },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            searchId: { type: "string" },
            status: { type: "string", enum: ["FETCHING", "PROCESSING", "COMPLETED"] },
          },
        },
      },
    },
  }, async (request, reply) => {
    const body = searchBodySchema.parse(request.body);
    const userId = (request as { userId?: string }).userId;
    const { searchId, status } = await startSearch(body.query, userId);
    return reply.send({ searchId, status });
  });

  app.get<{ Params: { searchId: string } }>("/:searchId", {
    schema: {
      params: { type: "object", required: ["searchId"], properties: { searchId: { type: "string" } } },
      response: {
        200: {
          type: "object",
          properties: {
            status: { type: "string" },
            data: { type: "object" },
          },
        },
      },
    },
  }, async (request, reply) => {
    const { searchId } = request.params;
    const state = await getState(searchId);
    if (!state) {
      return reply.code(404).send({ error: "Search not found", message: "Search expired or invalid ID" });
    }
    const data: Record<string, unknown> = {
      searchId: state.searchId,
      query: state.query,
      category: state.category,
      primaryRecommendation: state.primaryRecommendation,
      aiSummary: state.aiSummary,
      aiInsights: state.aiInsights,
      alternatives: state.alternatives,
    };
    return reply.send({ status: state.status, data });
  });
}
