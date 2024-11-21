import { useMutation, useQueryClient } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { QUERY_KEYS } from "@/constants/query-keys";
import { TaskFormValues } from "../types/tasks";
import { toast } from "sonner";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: TaskFormValues) => {
      if (!pb.authStore.isValid) {
        throw new Error("Authentication required");
      }

      if (!pb.authStore.model?.id) {
        throw new Error("User not authenticated");
      }

      return pb.collection("tasks").create({
        ...data,
        startAt: data.startAt?.toISOString(),
        user: pb.authStore.model.id,
      });
    },
    onSuccess: () => {
      toast.success("Task created successfully");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
    },
    onError: () => {
      toast.error("Error creating task");
    },
  });
}
