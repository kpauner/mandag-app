"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { formatInTimeZone } from "date-fns-tz";
import { APP_TIMEZONE } from "@/constants/app-config";

const baseEventVariants = cva(
  "flex items-center gap-2 whitespace-nowrap justify-between rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        tasks:
          "bg-chart-1/50 hover:bg-chart-1/90 [&_svg]:text-chart-1-foreground",
        workouts:
          "bg-chart-2 hover:bg-chart-2/90 [&_svg]:text-chart-2-foreground",
        meals: "bg-chart-3 hover:bg-chart-3/90 [&_svg]:text-chart-3-foreground",
        leisure:
          "bg-chart-4 hover:bg-chart-4/90 [&_svg]:text-chart-4-foreground",
        other: "bg-chart-5/10 hover:bg-chart-5/20",
      },
      size: {
        default: "h-12 px-4 py-2",
        xs: "h-8  rounded-full px-3 text-xs",
        sm: "h-10  rounded-lg px-3 text-xs",
        lg: "h-14 rounded-lg px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type BaseEventProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof baseEventVariants> & {
    title: string;
    icon: React.ReactNode;
    startAt?: Date;
    duration?: number;
    asChild?: boolean;
  };

const BaseEvent = React.forwardRef<HTMLButtonElement, BaseEventProps>(
  (
    {
      className,
      variant,
      size,
      title,
      icon,
      asChild = false,
      startAt,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(baseEventVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex flex-row items-center gap-4">
          {icon}
          <div className="flex flex-col gap-px">
            <h6 className="text-sm font-medium text-start">{title}</h6>
            {props.children}
          </div>
        </div>
        {!!startAt && (
          <p className="text-xs font-medium tracking-wide leading-none opacity-90 text-start">
            {formatInTimeZone(startAt, APP_TIMEZONE, "HH:mm")}
          </p>
        )}
      </Comp>
    );
  }
);
BaseEvent.displayName = "BaseEvent";

type TaskEventProps = BaseEventProps & {
  duration?: number;
};

const TaskEvent = React.forwardRef<HTMLButtonElement, TaskEventProps>(
  ({ duration, ...props }, ref) => (
    <BaseEvent {...props} ref={ref} variant="tasks">
      {!!duration && (
        <p className="text-xs font-medium tracking-wide leading-none opacity-90 text-start">
          {duration} min
        </p>
      )}
    </BaseEvent>
  )
);

TaskEvent.displayName = "TaskEvent";

type WorkoutEventProps = BaseEventProps & {
  duration?: number;
  reps?: number;
  sets?: number;
};

const WorkoutEvent = React.forwardRef<HTMLButtonElement, WorkoutEventProps>(
  ({ duration, reps, sets, ...props }, ref) => (
    <BaseEvent {...props} ref={ref} variant="workouts">
      <div className="flex flex-row items-center gap-2">
        {!!duration && (
          <p className="text-xs font-medium tracking-wide leading-none opacity-90 text-start">
            {duration} min,
          </p>
        )}
        {!!reps && !!sets && (
          <p className="text-xs font-medium tracking-wide leading-none opacity-90 text-start">
            {reps} reps x {sets} sets
          </p>
        )}
      </div>
    </BaseEvent>
  )
);

WorkoutEvent.displayName = "WorkoutEvent";

export { BaseEvent, baseEventVariants, TaskEvent, WorkoutEvent };
