"use client";

import React, { useMemo } from "react";
import { format, isLastDayOfMonth, isSameDay } from "date-fns";
import useGetUserEvents from "@/features/events/hooks/use-get-user-events";
import { TasksDialog } from "@/features/tasks/components/tasks-dialog";
import { useTimeslotsStore } from "../hooks/use-timeslots-store";
import { WorkoutsDialog } from "@/features/workouts/components/workouts-dialog";
import { EventType } from "@/features/events/types/events";
import { Recurring } from "@/types";

const EVENT_COMPONENTS = {
  tasks: TasksDialog,
  workouts: WorkoutsDialog,
} as const;

const formatTimeSlot = (date: Date) => format(date, "HH:mm");

export default function Timeline() {
  const { timeRange } = useTimeslotsStore();
  const [tasksQuery, workoutsQuery] = useGetUserEvents();

  const events = useMemo(
    () => [
      ...(tasksQuery.data?.items || []),
      ...(workoutsQuery.data?.items || []),
    ],
    [tasksQuery.data?.items, workoutsQuery.data?.items]
  );

  const timeSlots = useMemo(() => {
    const { startHour, endHour } = timeRange;
    const length = endHour - startHour + 1;
    return Array.from({ length }, (_, i) => {
      const date = new Date(); // This will be today's date
      date.setHours(startHour + i, 0, 0, 0);
      return {
        time: formatTimeSlot(date),
        date,
      };
    });
  }, [timeRange]);

  const shouldShowEvent = (event: EventType, slotTime: string) => {
    const eventDate = new Date(event.startAt);
    const today = new Date();

    // Check if time matches
    if (formatTimeSlot(eventDate) !== slotTime) return false;

    // If event is today, show it
    if (isSameDay(eventDate, today)) return true;

    // If event has recurring pattern, check if today matches the pattern
    if (event.recurring?.length) {
      if (event.recurring.includes("lastDayOfMonth")) {
        return isLastDayOfMonth(today);
      }

      const currentDayName = format(today, "EEEE").toLowerCase() as Recurring;
      return event.recurring.includes(currentDayName);
    }

    return false;
  };

  return (
    <div className="flex flex-col gap-4">
      {timeSlots.map((slot) => (
        <div key={slot.time} className="space-y-2 border-t-2 border-black">
          <span className="text-lg font-black text-white bg-black p-1">
            {slot.time}
          </span>
          <div className="">
            {events
              .filter((item) => shouldShowEvent(item, slot.time))
              .map((event, index) => {
                const Component = EVENT_COMPONENTS[event.collectionName];
                return (
                  Component && (
                    <Component key={`${event.id}-${index}`} data={event} />
                  )
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
