import type { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import { env } from "../config/index.js";
import { prisma } from "../config/db.js";

const JWT_SECRET = env.JWT_SECRET;

export type JwtPayload = { userId: string; email: string };

export async function authMiddleware(
  request: FastifyRequest<{ Params?: Record<string, string> }>,
  reply: FastifyReply
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    reply.code(401).send({ error: "Unauthorized", message: "Missing or invalid token" });
    return;
  }
  const token = authHeader.slice(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) {
      reply.code(401).send({ error: "Unauthorized", message: "User not found" });
      return;
    }
    (request as FastifyRequest & { userId: string; userEmail: string }).userId = user.id;
    (request as FastifyRequest & { userEmail: string }).userEmail = user.email;
  } catch {
    reply.code(401).send({ error: "Unauthorized", message: "Invalid or expired token" });
  }
}

export function optionalAuth(
  request: FastifyRequest,
  _reply: FastifyReply
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return;
  const token = authHeader.slice(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    (request as FastifyRequest & { userId?: string }).userId = decoded.userId;
  } catch {
    // ignore
  }
}
