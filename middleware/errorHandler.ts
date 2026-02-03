import type { FastifyError, FastifyRequest, FastifyReply } from "fastify";
import { ZodError } from "zod";
import { env } from "../config/index.js";

export function errorHandler(
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply
): void {
  if (error instanceof ZodError) {
    reply.code(400).send({
      error: "Validation error",
      message: error.flatten().fieldErrors,
    });
    return;
  }

  const statusCode = (error as FastifyError & { statusCode?: number }).statusCode ?? 500;
  const message = env.NODE_ENV === "production" ? "Internal server error" : error.message;

  reply.code(statusCode).send({
    error: statusCode === 500 ? "Internal server error" : error.message,
    message,
  });
}
