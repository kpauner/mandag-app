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

const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  due: timestamp("due"),
  recurring: recurringEnum("recurring")
    .array()
    .notNull()
    .default(sql`ARRAY[]::recurring[]`),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export default tasks;
