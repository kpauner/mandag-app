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
  const [tasksQuery, workoutsQuery] = useGetUserEvents(selectedDate);
  const events = useMemo(
    () => [...(tasksQuery.data || []), ...(workoutsQuery.data || [])],
    [tasksQuery.data, workoutsQuery.data]
  );

  const shouldShowEvent = useCallback(
    (event: EventType, slotTime: string) => {
      const eventDate = new Date(event.startAt);
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
      <pre className="w-full whitespace-pre-wrap">
        {JSON.stringify(events, null, 2)}
      </pre>
      {timeSlots.map((slot) => (
        <div key={slot.time} className="space-y-2 ">
          <span className="text-xs font-regular text-muted-foreground tracking-wide">
            {slot.time}
          </span>
          <div className="space-y-2 pb-4">
            {events
              .filter((item) => shouldShowEvent(item, slot.time))
              .map((event) => renderEvent(event))}
          </div>
        </div>
      ))}
    </div>
  );
}
