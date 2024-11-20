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

// Create an array schema from the enum
export const RecurringArraySchema = z.array(RecurringSchema);

// Export the type for use in your components
export type Recurring = z.infer<typeof RecurringSchema>;
export type RecurringArray = z.infer<typeof RecurringArraySchema>;
