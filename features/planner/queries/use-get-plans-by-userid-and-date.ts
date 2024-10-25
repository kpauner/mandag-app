import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { GetPlansByUserIdAndDate } from "@/features/planner/api/get-plans-by-userid-and-date";

export function useGetPlansByUserIdAndDate(
  userId: string,
  formattedDate: string
) {
  return useQuery({
    queryKey: [QUERY_KEYS.PLANS, userId, formattedDate],
    queryFn: () => GetPlansByUserIdAndDate(userId, formattedDate),
    enabled: !!userId && !!formattedDate,
  });
}
