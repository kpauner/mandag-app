"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { toast } from "sonner";

export function useDeleteWorkout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      if (!id) {
        throw new Error("No workout ID provided");
      }
      return pb.collection("workouts").delete(id);
    },
    onSuccess: () => {
      toast.success("Workout deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
    onError: (error: Error) => {
      toast.error(`Error deleting workout: ${error.message}`);
    },
  });
}
