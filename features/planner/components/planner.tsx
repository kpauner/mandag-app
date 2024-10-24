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

type TaskItem = {
  id: string;
  datetime: string;
  task: string;
};

// Function to generate sample tasks for the current date
const generateSampleTasks = (date: Date): TaskItem[] => {
  const dateString = format(date, "yyyy-MM-dd");
  return [
    { id: "1", datetime: `${dateString}T06:00`, task: "Wake up" },
    { id: "2", datetime: `${dateString}T06:30`, task: "Shower" },
    { id: "3", datetime: `${dateString}T07:00`, task: "Breakfast" },
    { id: "4", datetime: `${dateString}T08:00`, task: "Start work" },
    { id: "5", datetime: `${dateString}T12:00`, task: "Lunch break" },
    { id: "6", datetime: `${dateString}T17:00`, task: "End work" },
    { id: "7", datetime: `${dateString}T18:00`, task: "Gym" },
    { id: "8", datetime: `${dateString}T20:00`, task: "Dinner" },
    { id: "9", datetime: `${dateString}T22:00`, task: "Read a book" },
  ];
};

const hours = Array.from({ length: 24 }, (_, i) => i);

export default function Planner() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  useEffect(() => {
    // Update tasks when the current date changes
    setTasks(generateSampleTasks(currentDate));
  }, [currentDate]);

  const getTasksForHour = (hour: number) => {
    return tasks.filter((task) => {
      const taskDate = parseISO(task.datetime);
      return isSameDay(currentDate, taskDate) && taskDate.getHours() === hour;
    });
  };

  const navigateDay = (direction: "prev" | "next") => {
    setCurrentDate((prevDate) =>
      addDays(prevDate, direction === "next" ? 1 : -1)
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigateDay("prev")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous Day
        </button>
        <h1 className="text-2xl font-bold text-center">
          {isToday(currentDate)
            ? "Today"
            : format(currentDate, "EEEE, MMMM d, yyyy")}
        </h1>
        <button
          onClick={() => navigateDay("next")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Day
        </button>
      </div>
      <div className="mx-auto w-full max-w-4xl rounded-xl bg-muted/50 p-4">
        <div className="grid grid-cols-1 gap-1">
          {hours.map((hour) => (
            <div key={hour} className="flex border-b border-gray-200 py-2">
              <div className="w-16 font-semibold text-right pr-4">
                {format(setHours(setMinutes(currentDate, 0), hour), "HH:mm")}
              </div>
              <div className="flex-1">
                {getTasksForHour(hour).map((task) => (
                  <div key={task.id} className="bg-blue-100 rounded p-1 mb-1">
                    <span className="font-medium">
                      {format(parseISO(task.datetime), "HH:mm")}
                    </span>{" "}
                    - {task.task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
