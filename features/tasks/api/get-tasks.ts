import { client } from "@/lib/hono";

export async function GetTasks() {
  const response = await client.api.tasks.$get();

  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }
  const { data } = await response.json();
  return data;
}
