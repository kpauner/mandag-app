import { Task } from "@/features/tasks/types/tasks";
import { Workout } from "@/features/workouts/types/workouts";

export type DialogType = "task" | "workout" | "meal" | "leisure" | "other";
export type EventType = Task | Workout;
