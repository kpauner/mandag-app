import { eq } from "drizzle-orm";
import { db } from "@/db/";
import { tasks } from "@/db/schema";

export async function getTasksByUserId(userId: string) {
  return await db.select().from(tasks).where(eq(tasks.userId, userId));
}