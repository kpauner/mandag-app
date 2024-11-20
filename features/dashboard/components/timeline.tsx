"use client";

import React, { useMemo } from "react";
import { format } from "date-fns";
import useGetUserEvents from "@/features/events/hooks/use-get-user-events";
import { TasksDialog } from "@/features/tasks/components/tasks-dialog";
import { useTimeslotsStore } from "../hooks/use-timeslots-store";
import { WorkoutsDialog } from "@/features/workouts/components/workouts-dialog";

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
      const date = new Date();
      date.setHours(startHour + i, 0, 0, 0);
      return {
        time: formatTimeSlot(date),
        date,
      };
    });
  }, [timeRange]);

  return (
    <div className="flex flex-col gap-4">
      {timeSlots.map((slot) => (
        <div key={slot.time} className="space-y-2 border-t-2 border-black">
          <span className="text-lg font-black text-white bg-black p-1">
            {slot.time}
          </span>
          <div className="">
            {events
              .filter(
                (item) => formatTimeSlot(new Date(item.startAt)) === slot.time
              )
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
