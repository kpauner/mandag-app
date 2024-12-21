"use client";

import React, { useCallback, useMemo } from "react";
import { format, isLastDayOfMonth, isSameDay } from "date-fns";
import useGetUserEvents from "@/features/events/hooks/use-get-user-events";
import { TasksDialog } from "@/features/tasks/components/tasks-dialog";
import { useTimeslotsStore } from "../hooks/use-timeslots-store";
import { WorkoutsDialog } from "@/features/workouts/components/workouts-dialog";
import { EventType } from "@/features/events/types/events";
import { Recurring } from "@/types";
import { useCalendarStore } from "../hooks/use-calendar-store";
import { formatInTimeZone } from "date-fns-tz";
import { APP_TIMEZONE } from "@/constants/app-config";

function renderEvent(event: EventType) {
  switch (event.collectionName) {
    case "tasks":
      return <TasksDialog key={event.id} data={event} />;
    case "workouts":
      return <WorkoutsDialog key={event.id} data={event} />;
    default:
      return null;
  }
}

export default function Timeline() {
  const { selectedDate } = useCalendarStore();
  const { timeRange, hideEmptySlots } = useTimeslotsStore();
  const [tasksQuery, workoutsQuery] = useGetUserEvents();

  const events = useMemo(
    () => [
      ...(tasksQuery.data?.items || []),
      ...(workoutsQuery.data?.items || []),
    ],
    [tasksQuery.data?.items, workoutsQuery.data?.items]
  );

  const shouldShowEvent = useCallback(
    (event: EventType, slotTime: string) => {
      // Create a new UTC date from the ISO string
      const eventDate = new Date(event.startAt);
      // Get the time in UTC format for comparison
      const eventTime = formatInTimeZone(
        new Date(event.startAt),
        APP_TIMEZONE,
        "HH:mm"
      );

      if (eventTime !== slotTime) return false;

      if (isSameDay(eventDate, selectedDate)) return true;
      if (event.recurring?.length) {
        if (event.recurring.includes("lastDayOfMonth")) {
          return isLastDayOfMonth(selectedDate);
        }
        const currentDayName = format(
          selectedDate,
          "EEEE"
        ).toLowerCase() as Recurring;
        return event.recurring.includes(currentDayName);
      }
      return false;
    },
    [selectedDate]
  );

  const timeSlots = useMemo(() => {
    const { startHour, endHour } = timeRange;
    const length = endHour - startHour + 1;
    const slots = Array.from({ length }, (_, i) => {
      const date = new Date();
      date.setUTCHours(startHour + i, 0, 0, 0);
      return {
        time: formatInTimeZone(date, APP_TIMEZONE, "HH:mm"),
        date,
      };
    });

    return hideEmptySlots
      ? slots.filter((slot) =>
          events.some((event) => shouldShowEvent(event, slot.time))
        )
      : slots;
  }, [timeRange, hideEmptySlots, events, shouldShowEvent]);

  return (
    <div className="flex flex-col gap-4">
      {timeSlots.map((slot) => (
        <div key={slot.time} className="space-y-2 border-t-2 border-black">
          <span className="text-sm font-black text-muted-foreground tracking-wide">
            {slot.time}
          </span>
          <div className="space-y-2 py-4">
            {events
              .filter((item) => shouldShowEvent(item, slot.time))
              .map((event) => renderEvent(event))}
          </div>
        </div>
      ))}
    </div>
  );
}
