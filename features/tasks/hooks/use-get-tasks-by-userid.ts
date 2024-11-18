import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Task } from "@/features/tasks/types/tasks";

const BASE_URL = "http://127.0.0.1:8787";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export function useGetTasksByUserId(userId: number) {
  return useQuery({
    queryKey: ["tasks", userId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get<Task[]>(`/tasks`);
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
