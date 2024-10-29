"use client";

import React, { useState } from "react";
import {
  format,
  setHours,
  setMinutes,
  addDays,
  isSameDay,
  parseISO,
  isToday,
} from "date-fns";
import { Task } from "@/features/tasks/types/tasks";

import CurrentTimeIndicator from "./current-time-indicator";
import EventCard from "./event-card";

const hours = Array.from({ length: 24 }, (_, i) => i);

const allowedRecurringValues = [
  "none",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

type PlannerProps = {
  tasks: Task[];
  workouts: Task[];
  recipes: Task[];
};

export default function Planner({ tasks, workouts, recipes }: PlannerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState<Task[]>([]);

  // Combine all event types into a single array
  const allEvents = React.useMemo(() => {
    if (!tasks) return [];
    return [...(tasks || []), ...(workouts || []), ...(recipes || [])];
  }, [tasks, workouts, recipes]);

  const getEventsForHour = (hour: number) => {
    return allEvents.filter((event) => {
      if (!event.startAt) return false;
      const eventDate = parseISO(event.startAt.toISOString());
      return isSameDay(currentDate, eventDate) && eventDate.getHours() === hour;
    });
  };

  return (
    <div className="grid grid-cols-1 gap-1 relative">
      <CurrentTimeIndicator />
      {hours.map((hour) => (
        <div key={hour} className="flex border-b border-gray-200 py-2">
          <div className="w-16 font-semibold text-right pr-4">
            {format(setHours(setMinutes(currentDate, 0), hour), "HH:mm")}
          </div>
          <div className="flex-1">
            {getEventsForHour(hour).map((event) => (
              <EventCard
                key={event.id}
                name={event.name}
                description={event.description || ""}
                duration={event.duration}
                type={event.type}
                className=""
                startAt={
                  event.startAt
                    ? format(parseISO(event.startAt.toISOString()), "HH:mm")
                    : "All day"
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
