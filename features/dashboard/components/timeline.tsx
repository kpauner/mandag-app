"use client";

import { Button } from "@/components/ui/button";
import { useGetTasksByUserId } from "@/features/tasks/hooks/use-get-tasks-by-userid";
import { addHours, format, startOfDay } from "date-fns";
import { PlusIcon } from "lucide-react";
import React from "react";
type TimelineProps = {
  items?: {
    id: string;
    title: string;
    startTime: Date;
  }[];
};
const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const date = addHours(startOfDay(new Date()), i);
  return {
    time: format(date, "HH:mm"),
    date: date,
  };
});

export default function Timeline({ items = [] }: TimelineProps) {
  const { data } = useGetTasksByUserId(1);

  return (
    <div className="space-y-2">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {timeSlots.map((slot) => {
        const matchingItem = items.find(
          (item) => format(item.startTime, "HH:mm") === slot.time
        );

        return (
          <div key={slot.time} className="flex items-center gap-2">
            <div className="w-16 text-sm text-muted-foreground">
              {slot.time}
            </div>
            {matchingItem ? (
              <Button variant="noShadow" className="w-full" size="xl">
                {matchingItem.title}
              </Button>
            ) : (
              <div className="w-full h-12 border border-dashed rounded-md" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function TimelineItem() {
  return (
    <Button variant="noShadow" className="w-full px-4" size="xl">
      <div className="flex items-center justify-between w-full bg-background gap-2">
        <PlusIcon className="w-6 h-6" />
        <span>Create new</span>
      </div>
    </Button>
  );
}
