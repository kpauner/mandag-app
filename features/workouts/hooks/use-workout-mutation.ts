"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { WorkoutFormSchema, WorkoutFormValues } from "../types/workouts";
import { toast } from "sonner";
import { formatZodError } from "@/lib/utils";

export function useWorkoutMutation(id?: string) {
  const queryClient = useQueryClient();
  const isUpdate = Boolean(id);

  return useMutation({
    mutationFn: async (values: WorkoutFormValues) => {
      if (!pb.authStore.isValid) {
        throw new Error("Not authenticated");
      }
      const result = WorkoutFormSchema.safeParse(values);
      if (!result.success) {
        throw new Error(`Error: ${formatZodError(result.error)}`);
      }
      return isUpdate && id
        ? pb.collection("workouts").update(id, result.data)
        : pb.collection("workouts").create({
            ...result.data,
            user: pb.authStore.model?.id,
          });
    },
    onError: (error: Error) => {
      toast.error(
        `Error ${isUpdate ? "updating" : "creating"} workout: ${error.message}`
      );
    },
    onSuccess: () => {
      toast.success(`Workout ${isUpdate ? "updated" : "created"} successfully`);
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
}
