import { Hono } from "hono";
import { db } from "@/db";
import { tasks } from "@/db/schema";

const app = new Hono().get("/", async (c) => {
  const data = await db.select().from(tasks);
  // const data = [
  //   {
  //     id: 1,
  //     name: "Task 1",
  //   },
  // ];
  return c.json({ data });
});

export default app;
