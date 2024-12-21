"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { formatInTimeZone } from "date-fns-tz";
import { APP_TIMEZONE } from "@/constants/app-config";

const eventVariants = cva(
  "flex items-center gap-2 whitespace-nowrap justify-between rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        tasks: "bg-chart-1/10 hover:bg-chart-1/20",
        workouts: "bg-chart-2/10 hover:bg-chart-2/20",
        meals:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        leisure:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        other: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-8  rounded-full px-3 text-xs",
        sm: "h-8  rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type EventProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof eventVariants> & {
    title: string;
    icon: React.ReactNode;
    startAt?: Date;
    duration?: number;
    asChild?: boolean;
  };

const Event = React.forwardRef<HTMLButtonElement, EventProps>(
  (
    {
      className,
      variant,
      size,
      title,
      icon,
      startAt,
      duration,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(eventVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex flex-row items-center gap-2">
          {icon}
          {title}
        </div>
        <div className="flex flex-row items-center gap-2">
          {!!startAt && (
            <span className="text-sm font-medium tracking-wide leading-none text-black">
              {formatInTimeZone(startAt, APP_TIMEZONE, "HH:mm")}
            </span>
          )}

          {!!duration && (
            <span className="text-sm font-medium tracking-wide leading-none text-black">
              / {duration} min
            </span>
          )}
        </div>
      </Comp>
    );
  }
);
Event.displayName = "Event";

export { Event, eventVariants };
