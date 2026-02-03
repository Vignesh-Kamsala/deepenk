import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import { env } from "./config/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { optionalAuth } from "./middleware/auth.js";
import { authRoutes } from "./modules/auth/routes.js";
import { searchRoutes } from "./modules/search/routes.js";
import { historyRoutes } from "./modules/history/routes.js";
import { analyticsRoutes } from "./modules/analytics/routes.js";

const app = Fastify({ logger: env.NODE_ENV === "development" });

app.setErrorHandler(errorHandler);

await app.register(cors, {
  origin: true,
  credentials: true,
});

await app.register(rateLimit, {
  max: 100,
  timeWindow: "1 minute",
});

app.addHook("preHandler", optionalAuth);

app.register(authRoutes, { prefix: "/api/auth" });
app.register(searchRoutes, { prefix: "/api/search" });
app.register(historyRoutes, { prefix: "/api/history" });
app.register(analyticsRoutes, { prefix: "/api/analytics" });

app.get("/health", async (_req, reply) => {
  return reply.send({ status: "ok", timestamp: new Date().toISOString() });
});

const port = env.PORT;
try {
  await app.listen({ port, host: "0.0.0.0" });
  console.log(`Deepenk API listening on http://0.0.0.0:${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
