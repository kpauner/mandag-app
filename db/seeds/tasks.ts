import { db } from "@/db";
import data from "@/db/seeds/data/tasks.json";
import { tasks } from "@/db/schema";
import { DB } from "@/db";
import { Recurring, Task } from "@/features/tasks/types/tasks";
import { recurringEnum } from "../schema/enums";

export default async function seed(db: DB) {
  const today = new Date();
  const randomMinutes = Math.floor(Math.random() * 60);
  today.setHours(14, randomMinutes, 0, 0);
  const formattedData: Omit<Task, "id">[] = data.map((item, index) => ({
    name: item.name,
    description: item.description,
    type: item.type,
    duration: item.duration,
    startAt: today,
    recurring: item.recurring as Recurring[],
    userId: item.userId,
  }));
  if (!formattedData) {
    return;
  }
  await db.insert(tasks).values(formattedData);
}
