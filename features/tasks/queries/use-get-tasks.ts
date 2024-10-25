import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { GetTasks } from "@/features/tasks/api/get-tasks";

export function useGetTasks() {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: GetTasks,
  });
}
