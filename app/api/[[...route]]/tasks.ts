import { Hono } from "hono";

import db from "@/db";

const app = new Hono().get("/", async (c) => {
  const data = {
    message: "Hello World",
  };
  return c.json({ data });
});

export default app;
