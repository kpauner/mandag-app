"use client";

import { Calendar } from "@/components/ui/calendar";
import { useCalendarStore } from "../hooks/use-calendar-store";

export function DatePicker() {
  const { selectedDate, setSelectedDate } = useCalendarStore();

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={(date) => setSelectedDate(date || new Date())}
      className="rounded-md border"
    />
  );
}
