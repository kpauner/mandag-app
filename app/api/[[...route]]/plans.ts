import { Hono } from "hono";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { eq } from "drizzle-orm";

const planParamSchema = z.object({
  userId: z.string().uuid(),
});

const planQuerySchema = z.object({
  date: z.string().min(1),
});

const app = new Hono()
  .get("/", async (c) => {
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
  })
  .get(
    ":userId",
    zValidator("param", planParamSchema),
    zValidator("query", planQuerySchema),
    async (c) => {
      const { userId } = c.req.valid("param");
      const { date } = c.req.valid("query");

      console.log("Received request with userId:", userId, "and date:", date);

      if (!userId || !date) {
        console.log("Missing userId or date");
        return c.json({ error: "Missing userId or date" }, 400);
      }
      // Fetch tasks, workouts, and recipes for the user on the specified date
      // const userTasks = await db.select().from(tasks).where({ userId, date });
      // const userWorkouts = await db.select().from(workouts).where({ userId, date });
      // const userRecipes = await db.select().from(recipes).where({ userId, date });
      const userTasks = [
        {
          id: 1,
          name: "Complete project proposal",
          description: "Finish and submit the project proposal document",
          due: new Date("2024-10-25T12:30:00.000Z"),
          recurring: ["none"],
          userId: 1,
        },
      ];
      const userWorkouts = [
        {
          id: 1,
          name: "Workout",
          description: "Complete a 30-minute workout",
          due: new Date("2024-10-25T08:00:00.000Z"),
          recurring: ["none"],
          userId: 1,
        },
      ];
      const userRecipes = [
        {
          id: 1,
          name: "Recipe",
          description: "Complete a 30-minute workout",
          due: new Date("2024-10-25T08:00:00.000Z"),
          recurring: ["none"],
          userId: 1,
        },
      ];

      return c.json({
        data: {
          date,
          tasks: userTasks,
          workouts: userWorkouts,
          recipes: userRecipes,
        },
      });
    }
  );

export default app;
