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
  differenceInMinutes,
} from "date-fns";

export default function CurrentTimeIndicator() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const minutesSinceMidnight = differenceInMinutes(
    now,
    setHours(setMinutes(now, 0), 0)
  );
  const top = (minutesSinceMidnight / 1440) * 100; // 1440 minutes in a day
  return (
    <div
      className="absolute left-0 right-0 border-t-2 border-red-500 z-10 h-1"
      style={{ top: `${top}%` }}
    >
      <span className="absolute -top-3 -left-16 text-red-500 text-sm">
        {format(now, "HH:mm")}
      </span>
    </div>
  );
}
