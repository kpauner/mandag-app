import { tasks } from "@/db/schema";
import { recurringEnum } from "@/db/schema/enums";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const selectTaskSchema = createSelectSchema(tasks, {
  recurring: z.array(z.enum(recurringEnum.enumValues)),
});

// TYPES
export type Task = z.infer<typeof selectTaskSchema>;
