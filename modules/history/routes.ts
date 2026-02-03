import type { FastifyInstance } from "fastify";
import { prisma } from "../../config/db.js";
import { authMiddleware } from "../../middleware/auth.js";

const CATEGORY_MAP: Record<string, string> = {
  shopping: "E-commerce",
  food: "Food",
  rides: "Rides",
  travel: "Travels",
  hotels: "Hotels",
};

export async function historyRoutes(app: FastifyInstance): Promise<void> {
  app.addHook("preHandler", authMiddleware);

  app.get("/", {
    schema: {
      querystring: {
        type: "object",
        properties: {
          category: { type: "string" },
          limit: { type: "number" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  searchId: { type: "string" },
                  query: { type: "string" },
                  category: { type: "string" },
                  categoryLabel: { type: "string" },
                  timestamp: { type: "string" },
                  primaryRecommendation: {},
                  aiSummarySnapshot: { type: "string" },
                  status: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  }, async (request, reply) => {
    const userId = (request as unknown as { userId: string }).userId;
    const q = request.query as { category?: string; limit?: number };
    const limit = Math.min(q.limit ?? 50, 100);
    const where: { userId: string; category?: string } = { userId };
    if (q.category && q.category !== "All") {
      const cat = Object.entries(CATEGORY_MAP).find(([, v]) => v === q.category)?.[0] ?? q.category.toLowerCase();
      where.category = cat;
    }
    const searches = await prisma.search.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
    });
    const items = searches.map((s) => {
      const primary = s.primaryRecommendation as Record<string, unknown> | null;
      const title = primary?.name ?? primary?.title ?? s.query;
      const image = (primary as { image?: string })?.image ?? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop";
      return {
        id: s.id,
        searchId: s.searchId,
        query: s.query,
        title: String(title),
        image,
        category: s.category,
        categoryLabel: CATEGORY_MAP[s.category] ?? s.category,
        timestamp: s.createdAt.toISOString(),
        date: `Completed on ${new Date(s.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`,
        primaryRecommendation: s.primaryRecommendation,
        aiSummarySnapshot: s.aiSummarySnapshot,
        status: "Completed",
      };
    });
    return reply.send({ items });
  });
}
