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
  meals: Task[];
};

export default function Planner({ tasks, workouts, meals }: PlannerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState<Task[]>([]);
  const displayDates = React.useMemo(
    () => [addDays(currentDate, -1), currentDate, addDays(currentDate, 1)],
    [currentDate]
  );
  // Combine all event types into a single array
  const allEvents = React.useMemo(() => {
    if (!tasks) return [];
    return [...(tasks || []), ...(workouts || []), ...(meals || [])];
  }, [tasks, workouts, meals]);

  const getEventsForHour = (hour: number, date: Date) => {
    return allEvents.filter((event) => {
      if (!event.startAt) return false;

      const eventDate = parseISO(event.startAt.toISOString());
      const eventHour = eventDate.getHours();

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
    <div className="flex flex-row gap-4 relative">
      {displayDates.map((date) => (
        <div key={date.toISOString()} className="flex-1 flex flex-col">
          <div className="text-center pb-2 font-medium">
            {isToday(date) ? "Today" : format(date, "EEE, MMM d")}
          </div>
          <div className="flex flex-col relative">
            <CurrentTimeIndicator />
            {hours.map((hour) => (
              <div key={hour} className="flex flex-row min-h-16">
                <div className="font-thin text-right text-muted-foreground text-xs pr-2 w-12">
                  {format(setHours(setMinutes(date, 0), hour), "HH:mm")}
                </div>
                <Separator orientation="vertical" />
                <div className="flex-1 border-t border-gray-200">
                  <div className="space-y-1 p-1">
                    {getEventsForHour(hour, date).map((event) => (
                      <EventCard
                        key={event.id}
                        name={event.name}
                        description={event.description || ""}
                        duration={event.duration}
                        type={event.type}
                        startAt={
                          event.startAt
                            ? format(
                                parseISO(event.startAt.toISOString()),
                                "HH:mm"
                              )
                            : "All day"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
