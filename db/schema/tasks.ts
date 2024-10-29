import {
  pgTable,
  serial,
  timestamp,
  boolean,
  text,
  integer,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { recurringEnum } from "./enums";
import { sql } from "drizzle-orm";
import { Recurring } from "@/features/tasks/types/tasks";

const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  type: text("type").notNull().default("task"),
  duration: integer("duration"),
  startAt: timestamp("start_at", {
    mode: "date",
  }).default(sql`now()`),
  recurring: recurringEnum("recurring")
    .array()
    .notNull()
    .default(sql`ARRAY['none']::recurring[]`),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export default tasks;
