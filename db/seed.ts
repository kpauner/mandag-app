import { env } from "@/lib/env";
import { DB, db } from ".";
import * as schema from "@/db/schema";
import * as seeds from "@/db/seeds";
import { sql, Table } from "drizzle-orm";

if (!env.DB_SEEDING) {
  throw new Error('You must set DB_SEEDING to "true" when running seeds');
}

// USE EXECUTE IN POSTGRES TO RESET TABLES
async function resetTable(db: DB, table: Table) {
  return db.execute(sql`truncate table ${table} restart identity cascade`);
}

async function seedDatabase() {
  for (const table of [schema.tasks]) {
    await resetTable(db, table);
  }

  await seeds.users(db);
  await seeds.tasks(db);
}

seedDatabase()
  .catch((err) => {
    console.error("Error seeding database:", err);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seeding complete");
    process.exit(0);
  });
