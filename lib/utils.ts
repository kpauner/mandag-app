import { EventType } from "@/features/events/types/events";
import { Recurring } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { format, isLastDayOfMonth, isToday } from "date-fns";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatZodError(error: ZodError) {
  return error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join(", ");
}

export const shouldShowEvent = (event: EventType, selectedDate: Date) => {
  const eventDate = new Date(event.startAt);

  // Direct date match
  if (isToday(eventDate)) return true;
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

export const calculateChartData = (events: EventType[]) => {
  const todaysEvents = events.filter((event) =>
    shouldShowEvent(event, new Date())
  );
  return Object.entries(
    todaysEvents.reduce((acc, event) => {
      const type = event.collectionName;
      acc[type] = (acc[type] || 0) + (event.duration || 0);
      return acc;
    }, {} as Record<string, number>)
  ).map(([type, count]) => ({
    type,
    count,
    fill: `var(--color-${type})`,
  }));
};
