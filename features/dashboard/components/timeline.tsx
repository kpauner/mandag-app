"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { addHours, format, startOfDay } from "date-fns";
import useGetUserEvents from "@/features/events/hooks/use-get-user-events";
import { TasksDialog } from "@/features/tasks/components/tasks-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { Task } from "@/features/tasks/types/tasks";
import { Workout } from "@/features/workouts/types/workouts";

const EVENT_COMPONENTS = {
  tasks: TasksDialog,
  workouts: TaskItem,
} as const;
type Event = Task | Workout;
type CollectionName = keyof typeof EVENT_COMPONENTS;

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const date = addHours(startOfDay(new Date()), i);
  return {
    time: format(date, "HH:mm"),
    date,
  };
});

export default function Timeline() {
  const [tasksQuery, workoutsQuery] = useGetUserEvents();

  const events = [
    ...(tasksQuery.data?.items || []),
    ...(workoutsQuery.data?.items || []),
  ] as Event[];

  return (
    <div className="space-y-2">
      {timeSlots.map((slot) => {
        const matchingItem = events.find((item) => {
          const itemDate = new Date(item.startAt);
          const itemTime = format(itemDate, "HH:mm");
          return itemTime === slot.time;
        });

        return (
          <div key={slot.time} className="flex items-center gap-2">
            <div className="w-16 text-sm text-muted-foreground">
              {slot.time}
            </div>
            {matchingItem &&
              (() => {
                const Component =
                  EVENT_COMPONENTS[
                    matchingItem.collectionName as CollectionName
                  ];
                return Component && <Component data={matchingItem} />;
              })()}
          </div>
        );
      })}
    </div>
  );
}

function TaskItem({ data }: { data: Task | Workout }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="noShadow" className="w-full px-4" size="xl">
          <div className="flex items-center justify-between w-full bg-background gap-2">
            <PlusIcon className="w-6 h-6" />
            <span>Create new</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              {data.title}
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
