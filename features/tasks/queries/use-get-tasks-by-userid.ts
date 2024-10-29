import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { getTasksByUserId } from "@/data-access/tasks";

export function useGetTasksByUserId(userId: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.TASKS],
    queryFn: () => getTasksByUserId(userId),
  });
}
