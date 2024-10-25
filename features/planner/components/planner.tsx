"use client";

import React, { useState, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import { useGetPlansByUserIdAndDate } from "../queries/use-get-plans-by-userid-and-date";
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

export default function Planner() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const userId = "cfed58fe-549e-4f04-af19-15e080a407f2";
  const formattedDate = format(currentDate, "yyyy-MM-dd");
  const {
    data: plannerData,
    isLoading,
    error,
  } = useGetPlansByUserIdAndDate(userId, formattedDate);

  // Combine all event types into a single array
  const allEvents = React.useMemo(() => {
    if (!plannerData) return [];
    return [
      ...(plannerData.tasks || []),
      ...(plannerData.workouts || []),
      ...(plannerData.recipes || []),
    ];
  }, [plannerData]);

  const getEventsForHour = (hour: number) => {
    return allEvents.filter((event) => {
      if (!event.due) return false;
      const eventDate = parseISO(event.due);
      return isSameDay(currentDate, eventDate) && eventDate.getHours() === hour;
    });
  };

  const navigateDay = (direction: "prev" | "next") => {
    setCurrentDate((prevDate) =>
      addDays(prevDate, direction === "next" ? 1 : -1)
    );
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading planner data</div>;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={() => navigateDay("prev")}>Previous Day</Button>
        <h1 className="text-2xl font-bold text-center">
          {isToday(currentDate)
            ? "Today"
            : format(currentDate, "EEEE, MMMM d, yyyy")}
        </h1>
        <Button onClick={() => navigateDay("next")}>Next Day</Button>
      </div>
      <div className="mx-auto w-full max-w-4xl rounded-xl bg-muted/50 p-4">
        <div className="grid grid-cols-1 gap-1 relative">
          {isToday(currentDate) && <CurrentTimeIndicator />}
          {hours.map((hour) => (
            <div key={hour} className="flex border-b border-gray-200 py-2">
              <div className="w-16 font-semibold text-right pr-4">
                {format(setHours(setMinutes(currentDate, 0), hour), "HH:mm")}
              </div>
              <div className="flex-1 bg-sidebar">
                {getEventsForHour(hour).map((event) => (
                  <EventCard
                    key={event.id}
                    name={event.name}
                    description={event.description || ""}
                    due={
                      event.due
                        ? format(parseISO(event.due), "HH:mm")
                        : "All day"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
