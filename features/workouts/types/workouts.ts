import { RecurringArray, RecurringArraySchema } from "@/types";
import { RecordModel } from "pocketbase";
import { z } from "zod";

export const WorkoutFormSchema = z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  title: z.string().min(1),
  image: z.union([z.instanceof(File), z.string()]).optional(),
  description: z.string().optional(),
  reps: z.number().min(1, { message: "Reps must be greater than 0" }),
  sets: z.number().min(1, { message: "Sets must be greater than 0" }),
  duration: z.number().min(1, { message: "Duration must be greater than 0" }),
  recurring: RecurringArraySchema.optional(),
  startAt: z
    .union([z.string(), z.date()])
    .transform((val) => (typeof val === "string" ? new Date(val) : val)),
});

export type WorkoutFormValues = z.infer<typeof WorkoutFormSchema>;

export type Workout = {
  id: string;
  collectionName: "workouts";
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
