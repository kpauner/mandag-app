import { db } from "@/db";
import data from "@/db/seeds/data/users.json";
import { tasks, users } from "@/db/schema";
import { DB } from "@/db";

export default async function seed(db: DB) {
  const formattedData: any[] = data.map((item, index) => ({
    id: item.id,
    email: item.email,
    emailVerified: item.emailVerified,
  }));
  if (!formattedData) {
    return;
  }
  await db.insert(users).values(formattedData);
}
