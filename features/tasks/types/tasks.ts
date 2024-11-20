import { RecurringArray, RecurringArraySchema } from "@/types";
import { z } from "zod";

export const TaskFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  duration: z.number().min(1, { message: "Duration must be greater than 0" }),
  recurring: RecurringArraySchema.optional(),
  startAt: z.date(),
});

export type TaskFormValues = z.infer<typeof TaskFormSchema>;

export type Task = {
  id: string;
  collectionId: number;
  collectionName: "tasks";
  title: string;
  description: string;
  startAt: Date;
  duration: number;
  recurring: RecurringArray;
  userId: string;
  createdAt: string | null;
  updatedAt: string | null;
};

export type TaskRecord = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Task[];
};
