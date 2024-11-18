import { Recurring } from "@/types";

export type Task = {
  id: number;
  name: string;
  description: string;
  type: "task";
  startAt: string;
  duration: number;
  recurring: Recurring;
  userId: string;
  createdAt: string | null;
  updatedAt: string | null;
};
