import {
  pgTable,
  serial,
  timestamp,
  boolean,
  text,
  integer,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { recurringEnum } from "./enums";
import { sql } from "drizzle-orm";
import { Recurring } from "@/features/tasks/types/tasks";

const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  due: timestamp("due"),
  recurring: recurringEnum("recurring")
    .array()
    .notNull()
    .default(sql`ARRAY['none']::recurring[]`),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export default tasks;
