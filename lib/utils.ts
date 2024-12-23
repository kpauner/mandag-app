import { clsx, type ClassValue } from "clsx";
import { isToday } from "date-fns";
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

export const calculateChartData = (
  events: Array<{
    collectionName: string;
    duration?: number;
    startAt: Date;
  }>
) => {
  const todaysEvents = events.filter((event) =>
    isToday(new Date(event.startAt))
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
