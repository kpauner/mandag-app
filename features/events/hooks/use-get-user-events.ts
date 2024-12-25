import { useCallback } from "react";
import axios from "axios";
import { env } from "@/lib/env";
import { useQueries } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { format, isLastDayOfMonth, isSameDay } from "date-fns";
import { WorkoutRecord } from "@/features/workouts/types/workouts";
import { Recurring } from "@/types";
import { TaskRecord } from "@/features/tasks/types/tasks";
import { EventType } from "../types/events";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

// TODO: Move to utils as this us used throughout the app to determine if an event should be displayed
const shouldShowEvent = (event: EventType, selectedDate: Date) => {
  const eventDate = new Date(event.startAt);
  // Direct date match
  if (isSameDay(eventDate, selectedDate)) return true;
  // Check recurring rules
  if (event.recurring?.length) {
    // Check last day of month
    if (event.recurring.includes("lastDayOfMonth")) {
      return isLastDayOfMonth(selectedDate);
    }
    // Check day of week
    const currentDayName = format(
      selectedDate,
      "EEEE"
    ).toLowerCase() as Recurring;
    return event.recurring.includes(currentDayName);
  }
  return false;
};

export default function useGetUserEvents(selectedDate?: Date) {
  const selectTasks = useCallback(
    (data: TaskRecord) => {
      if (!selectedDate) return data.items;
      return data.items.filter((task) => shouldShowEvent(task, selectedDate));
    },
    [selectedDate]
  );

  const selectWorkouts = useCallback(
    (data: WorkoutRecord) => {
      if (!selectedDate) return data.items;
      return data.items.filter((workout) =>
        shouldShowEvent(workout, selectedDate)
      );
    },
    [selectedDate]
  );

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
        select: selectTasks,
      },
      {
        queryKey: [QUERY_KEYS.WORKOUTS],
        queryFn: async () => {
          const response = await axiosInstance.get<WorkoutRecord>(
            `/api/collections/workouts/records`
          );
          return response.data;
        },
        select: selectWorkouts,
      },
    ],
  });
}
