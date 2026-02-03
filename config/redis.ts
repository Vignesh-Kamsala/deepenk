import Redis from "ioredis";

/**
 * Redis constants
 */
export const SEARCH_STATE_PREFIX = "search:state:";
export const SEARCH_CACHE_PREFIX = "search:cache:";
export const CACHE_TTL_SEC = 60 * 10; // 10 minutes

/**
 * Redis client singleton
 */
const redis = new Redis(process.env.REDIS_URL ?? "redis://localhost:6379", {
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log("✅ Redis connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err);
});

/**
 * Getter (keeps compatibility with orchestrator)
 */
export function getRedis() {
  return redis;
}

export default redis;
