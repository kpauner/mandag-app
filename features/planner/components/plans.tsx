"use client";

import { useGetPlansByUserIdAndDate } from "@/features/planner/queries/use-get-plans-by-userid-and-date";
import { format } from "date-fns";

export default function Plans() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  const { data, isLoading } = useGetPlansByUserIdAndDate(
    "cfed58fe-549e-4f04-af19-15e080a407f2",
    formattedDate
  );
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
