"use client";

import { addDays, format, isToday } from "date-fns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Icons from "@/components/icons";

export default function DateNavigation() {
  const [currentDate, setCurrentDate] = useState(new Date());

  function onNavigate(direction: "prev" | "next") {
    setCurrentDate((prevDate) =>
      addDays(prevDate, direction === "next" ? 1 : -1)
    );
  }

  return (
    <div className="flex justify-between items-center  w-full ">
      <Button
        size="icon"
        variant="ghost"
        className="size-7"
        onClick={() => onNavigate("prev")}
      >
        <Icons.chevronleft />
      </Button>
      <h1 className="font-bold text-center">
        {isToday(currentDate)
          ? "Today"
          : format(currentDate, "EEEE, MMMM d, yyyy")}
      </h1>
      <Button
        size="icon"
        variant="ghost"
        className="size-7"
        onClick={() => onNavigate("next")}
      >
        <Icons.chevronright />
      </Button>
    </div>
  );
}
