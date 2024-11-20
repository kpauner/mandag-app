import { z } from "zod";

export const RecurringSchema = z.enum([
  "none",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "lastDayOfMonth",
]);

export type Recurring = z.infer<typeof RecurringSchema>;
