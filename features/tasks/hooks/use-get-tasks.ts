import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Task } from "@/features/tasks/types/tasks";
import { QUERY_KEYS } from "@/constants/query-keys";
import { env } from "@/lib/env";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export function useGetTasks() {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get<Task[]>(
          `/api/collections/tasks/records`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw new Error(
          error instanceof Error ? error.message : "Failed to fetch tasks"
        );
      }
    },
  });
}
