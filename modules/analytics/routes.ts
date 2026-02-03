import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { getOverview, recordPageVisit } from "./service.js";
import { authMiddleware } from "../../middleware/auth.js";

const visitBodySchema = z.object({ path: z.string().min(1).max(500) });

export async function analyticsRoutes(app: FastifyInstance): Promise<void> {
  app.post("/visit", {
    config: { rateLimit: { max: 60, timeWindow: "1 minute" } },
    schema: {
      body: { type: "object", required: ["path"], properties: { path: { type: "string" } } },
      response: { 204: { type: "null" } },
    },
  }, async (request, reply) => {
    const userId = (request as { userId?: string }).userId;
    const body = visitBodySchema.parse(request.body);
    await recordPageVisit(userId, body.path);
    return reply.code(204).send();
  });

  app.get("/overview", {
    preHandler: [authMiddleware],
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            totalUsers: { type: "number" },
            totalSearches: { type: "number" },
            searchesPerCategory: { type: "object", additionalProperties: { type: "number" } },
            popularQueries: {
              type: "array",
              items: { type: "object", properties: { query: { type: "string" }, count: { type: "number" } } },
            },
            pageVisits: { type: "number" },
          },
        },
      },
    },
  }, async (_request, reply) => {
    const overview = await getOverview();
    return reply.send(overview);
  });
}
