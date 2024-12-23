"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { QUERY_KEYS } from "@/constants/query-keys";
import { WorkoutFormSchema, WorkoutFormValues } from "../types/workouts";
import { toast } from "sonner";

export function useCreateWorkout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: WorkoutFormValues) => {
      if (!pb.authStore.isValid) {
        throw new Error("Not authenticated");
      }

      console.log("VALUES", {
        values,
      });

      const result = WorkoutFormSchema.safeParse(values);

      if (!result.success) {
        const errors = result.error.issues
          .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
          .join(", ");
        throw new Error(`Invalid form data: ${errors}`);
      }

      const formData = new FormData();
      const { image, ...rest } = result.data;

      formData.append("user", pb.authStore.model?.id || "");

      Object.entries(rest).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(
            key,
            value instanceof Date ? value.toISOString() : String(value)
          );
        }
      });

      if (image && image instanceof File) {
        formData.append("image", image);
      }

      return pb.collection("workouts").create(formData);
    },
    onError: (error: Error) => {
      toast.error(`Error creating workout: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Workout created successfully");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WORKOUTS] });
    },
  });
}
