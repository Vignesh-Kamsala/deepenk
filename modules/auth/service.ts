import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/db.js";
import { env } from "../../config/index.js";
import type { RegisterBody, LoginBody } from "./schema.js";

const JWT_SECRET = env.JWT_SECRET;
const SALT_ROUNDS = 10;

export async function register(data: RegisterBody): Promise<{ user: { id: string; email: string; name: string | null }; token: string }> {
  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) {
    const err = new Error("Email already registered") as Error & { statusCode?: number };
    err.statusCode = 409;
    throw err;
  }
  const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: passwordHash,
      name: data.name ?? null,
    },
  });
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
  return {
    user: { id: user.id, email: user.email, name: user.name },
    token,
  };
}

export async function login(data: LoginBody): Promise<{ user: { id: string; email: string; name: string | null }; token: string }> {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) {
    const err = new Error("Invalid email or password") as Error & { statusCode?: number };
    err.statusCode = 401;
    throw err;
  }
  const ok = await bcrypt.compare(data.password, user.password);
  if (!ok) {
    const err = new Error("Invalid email or password") as Error & { statusCode?: number };
    err.statusCode = 401;
    throw err;
  }
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
  return {
    user: { id: user.id, email: user.email, name: user.name },
    token,
  };
}
