import { Recurring, RecurringSchema } from "@/types";
import { z } from "zod";

export const WorkoutFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  duration: z.number().min(1, { message: "Duration must be greater than 0" }),
  recurring: RecurringSchema.optional(),
  startAt: z.string().datetime(),
});

export type WorkoutFormValues = z.infer<typeof WorkoutFormSchema>;

export type Workout = {
  id: string;
  collectionId: number;
  collectionName: "workouts";
  title: string;
  description: string;
  startAt: string;
  duration: number;
  recurring: Recurring;
  userId: string;
  createdAt: string | null;
  updatedAt: string | null;
};

export type WorkoutRecord = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Workout[];
};
