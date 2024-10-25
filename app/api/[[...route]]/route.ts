import { Hono, Context } from "hono";
import { handle } from "hono/vercel";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { env } from "@/lib/env";

import plans from "./plans";
import tasks from "./tasks";

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", env.HOST_NAME!], // Add your frontend URL(s) here
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.use("*", logger());

app.use("*", async (c, next) => {
  // const session = await auth();
  // c.set("session", session);
  await next();
});

const routes = app.route("/tasks", tasks).route("/plans", plans);
// Error handling
app.onError((err, c) => {
  console.error("Global error:", err);
  return c.json({ error: "Internal Server Error" }, 500);
});

// 404 handler
app.notFound((c) => {
  console.log("Route not found:", c.req.method, c.req.url);
  return c.json({ error: "Not Found" }, 404);
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export type AppType = typeof routes;
