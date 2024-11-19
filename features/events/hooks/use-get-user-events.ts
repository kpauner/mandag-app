import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { TaskRecord } from "@/features/tasks/types/tasks";
import { WorkoutRecord } from "@/features/workouts/types/workouts";
import { QUERY_KEYS } from "@/constants/query-keys";
import { env } from "@/lib/env";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export default function useGetUserEvents() {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.TASKS],
        queryFn: async () => {
          const response = await axiosInstance.get<TaskRecord>(
            `/api/collections/tasks/records`
          );
          return response.data;
        },
      },
      {
        queryKey: [QUERY_KEYS.WORKOUTS],
        queryFn: async () => {
          const response = await axiosInstance.get<WorkoutRecord>(
            `/api/collections/workouts/records`
          );
          return response.data;
        },
      },
    ],
  });
}
