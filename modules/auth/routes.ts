import type { FastifyInstance } from "fastify";
import { registerSchema, loginSchema } from "./schema.js";
import * as authService from "./service.js";

export async function authRoutes(app: FastifyInstance): Promise<void> {
  app.post("/register", {
    schema: {
      body: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { type: "string", format: "email" },
          password: { type: "string", minLength: 8 },
          name: { type: "string" },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            user: { type: "object", properties: { id: { type: "string" }, email: { type: "string" }, name: { type: "string" } } },
            token: { type: "string" },
          },
        },
      },
    },
  }, async (request, reply) => {
    const body = registerSchema.parse(request.body);
    const result = await authService.register(body);
    return reply.code(201).send(result);
  });

  app.post("/login", {
    schema: {
      body: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: { type: "string", format: "email" },
          password: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            user: { type: "object", properties: { id: { type: "string" }, email: { type: "string" }, name: { type: "string" } } },
            token: { type: "string" },
          },
        },
      },
    },
  }, async (request, reply) => {
    const body = loginSchema.parse(request.body);
    const result = await authService.login(body);
    return reply.send(result);
  });
}
