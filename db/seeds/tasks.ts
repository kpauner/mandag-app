import { db } from "@/db";
import data from "@/db/seeds/data/tasks.json";
import { tasks } from "@/db/schema";
import { DB } from "@/db";
import { Task } from "@/features/tasks/types/tasks";
import { recurringEnum } from "../schema/enums";

function ensureDate(value: unknown): Date | null {
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === "string" || typeof value === "number") {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }
  console.warn(`Invalid date value: ${value}, type: ${typeof value}`);
  return null;
}

export default async function seed(db: DB) {
  const formattedData: Task[] = data.map((item, index) => ({
    id: index + 1,
    name: item.name,
    description: item.description,
    due: ensureDate(item.due),
    recurring: (Array.isArray(item.recurring)
      ? item.recurring
      : [item.recurring]) as (typeof recurringEnum.enumValues)[number][],
    userId: item.userId,
  }));
  if (!formattedData) {
    return;
  }
  for (const item of formattedData) {
    await db.insert(tasks).values(item).onConflictDoUpdate({
      target: tasks.id,
      set: item,
    });
  }
}
