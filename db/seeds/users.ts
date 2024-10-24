import { db } from "@/db";
import data from "@/db/seeds/data/tasks.json";
import { tasks } from "@/db/schema";
import { DB } from "@/db";

export default async function seed(db: DB) {
  const formattedData: any[] = data.map((item, index) => ({
    id: index + 1,
    name: item.name,
    description: item.description,
    dueDate: item.dueDate,
    completed: item.completed,
    userId: item.userId,
  }));
  if (!formattedData) {
    return;
  }
  await db.insert(tasks).values(formattedData);
}
