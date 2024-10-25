import { client } from "@/lib/hono";

export async function GetPlansByUserIdAndDate(userId: string, date: string) {
  const response = await client.api.plans[":userId"].$get({
    param: { userId },
    query: { date },
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch location");
  }
  const { data } = await response.json();
  return data;
}
