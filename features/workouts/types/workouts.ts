import { RecurringArray, RecurringArraySchema } from "@/types";
import { RecordModel } from "pocketbase";
import { z } from "zod";

export const WorkoutFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  duration: z.number().min(1, { message: "Duration must be greater than 0" }),
  recurring: RecurringArraySchema.optional(),
  startAt: z.date(),
});

export type WorkoutFormValues = z.infer<typeof WorkoutFormSchema>;

export type Workout = {
  id: string;
  title: string;
  description: string;
  image: string;
  reps: number;
  sets: number;
  startAt: Date;
  duration: number;
  recurring: RecurringArray;
  userId: string;
} & RecordModel;

export type WorkoutRecord = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Workout[];
};
