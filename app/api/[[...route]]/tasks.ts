import { Hono } from "hono";
import { db } from "@/db";
import { tasks } from "@/db/schema";

const app = new Hono().get("/", async (c) => {
  // const data = await db.select().from(tasks);
  const data = [
    {
      id: 1,
      name: "Complete project proposal",
      description: "Finish and submit the project proposal document",
      due: new Date("2024-10-30T12:30:00.000Z"),
      recurring: ["none"],
      userId: 1,
    },
    {
      id: 2,
      name: "Team meeting",
      description: "Attend weekly team sync-up",
      due: new Date("2024-10-24T08:00:00.000Z"),
      recurring: ["monday", "wednesday", "friday"],
      userId: 1,
    },
  ];
  return c.json({ data });
});

export default app;
