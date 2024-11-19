import { Recurring } from "@/types";

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
