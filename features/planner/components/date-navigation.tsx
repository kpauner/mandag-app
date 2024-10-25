import React from "react";
import { format, isToday } from "date-fns";
import { Button } from "@/components/ui/button";

interface DateNavigationProps {
  currentDate: Date;
  onNavigate: (direction: "prev" | "next") => void;
}

export default function DateNavigation({
  currentDate,
  onNavigate,
}: DateNavigationProps) {
  return (
    <div className="flex justify-between items-center mb-4 bg-muted p-4 rounded-xl">
      <Button onClick={() => onNavigate("prev")}>Previous Day</Button>
      <h1 className="text-2xl font-bold text-center">
        {isToday(currentDate)
          ? "Today"
          : format(currentDate, "EEEE, MMMM d, yyyy")}
      </h1>
      <Button onClick={() => onNavigate("next")}>Next Day</Button>
    </div>
  );
}
