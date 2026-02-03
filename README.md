# Deepenk – Backend

AI-powered universal assistant backend (Shopping, Food, Rides, Travel, Hotels).  
Node.js, TypeScript, Fastify, PostgreSQL (Prisma), Redis, JWT.

## Quickstart

### 1. Install dependencies (root = backend + monorepo scripts)

```bash
npm install
```

### 2. Start Postgres and Redis (Docker)

```bash
docker-compose up -d
```

### 3. Database setup

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### 4. Run the API

```bash
npm run dev
```

API: **http://localhost:3001**

### 5. Run the frontend (separate terminal)

```bash
cd deepenk-app && npm install && npm run dev
```

Frontend: **http://localhost:5173**

Set `VITE_API_URL=http://localhost:3001` in `deepenk-app/.env` if the API runs on a different host.

## Environment

Copy `.env.example` to `.env` and set:

- `DATABASE_URL` – PostgreSQL connection string
- `REDIS_URL` – Redis connection string (default: `redis://localhost:6379`)
- `JWT_SECRET` – Min 32 characters
- `PORT` – API port (default: 3001)

## API

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/auth/register` | No | Register (email, password, name?) |
| POST | `/api/auth/login` | No | Login (email, password) |
| POST | `/api/search` | Optional | Start search (body: `{ query, category? }`) → `{ searchId, status }` |
| GET | `/api/search/:searchId` | No | Poll search result (status, data) |
| GET | `/api/history` | Yes | User search history |
| POST | `/api/analytics/visit` | Optional | Record page visit (body: `{ path }`) |
| GET | `/api/analytics/overview` | Yes | Analytics overview |

Search flow: `POST /api/search` returns immediately with `searchId` and `status: "FETCHING"`.  
Poll `GET /api/search/:searchId` until `status` is `"COMPLETED"`; `data` then contains full result.

## Scripts

- `npm run dev` – Start API with watch
- `npm run build` – Compile TypeScript
- `npm run start` – Run compiled server
- `npm run db:generate` – Generate Prisma client
- `npm run db:push` – Push schema (no migrations)
- `npm run db:migrate` – Run migrations
- `npm run db:seed` – Seed demo user
- `npm run db:studio` – Open Prisma Studio

## Demo user

After seed: `demo@deepenk.com` / `password123`

## Project structure

```
config/       – env, db, redis
middleware/   – auth, error handler
modules/      – auth, search, history, analytics (routes + services)
services/     – ai (intent, insights), adapters (shopping, food, rides, travel, hotels), search orchestrator
prisma/       – schema, seed
server.ts     – Fastify app entry
```

## Docker (API not in Docker)

Only Postgres and Redis run in Docker. Run the API and frontend on the host as above.  
For production, build the API and run behind a reverse proxy; use the same env vars.
