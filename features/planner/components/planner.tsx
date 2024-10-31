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
import { Recurring, Task } from "@/features/tasks/types/tasks";
import CurrentTimeIndicator from "./current-time-indicator";
import EventCard from "./event-card";
import { Separator } from "@/components/ui/separator";

const hours = Array.from({ length: 24 }, (_, i) => i);

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
      const eventHour = eventDate.getHours();

      // Check if the event starts at this hour
      if (eventHour !== hour) return false;

      // Handle recurring events
      if (
        event.recurring &&
        event.recurring.length > 0 &&
        !event.recurring.includes("none")
      ) {
        // Create a type guard to ensure the day string is a valid Recurring day
        const currentDay = format(currentDate, "EEEE").toLowerCase();
        const isValidDay = (day: string): day is Recurring[number] => {
          return [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "none",
          ].includes(day);
        };

        if (!isValidDay(currentDay)) return false;
        return event.recurring.includes(currentDay);
      }

      return isSameDay(currentDate, eventDate);
    });
  };
  return (
    <div className="flex flex-col relative">
      <CurrentTimeIndicator />
      {hours.map((hour) => (
        <div key={hour} className="flex flex-row min-h-16">
          <div className="font-thin text-right text-muted-foreground text-xs pr-2 w-12">
            {format(setHours(setMinutes(currentDate, 0), hour), "HH:mm")}
          </div>
          <Separator orientation="vertical" />
          <div className="flex-1 border-t border-gray-200">
            <div className="space-y-1 p-1">
              {getEventsForHour(hour).map((event) => (
                <EventCard
                  key={event.id}
                  name={event.name}
                  description={event.description || ""}
                  duration={event.duration}
                  type={event.type}
                  startAt={
                    event.startAt
                      ? format(parseISO(event.startAt.toISOString()), "HH:mm")
                      : "All day"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
