import { pgTable, serial, timestamp, boolean, text } from "drizzle-orm/pg-core";
import { users } from "./users";

const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  dueDate: timestamp("dueDate"),
  completed: boolean("completed").default(false).notNull(),
  userId: text("userId").references(() => users.id),
});

export default tasks;
