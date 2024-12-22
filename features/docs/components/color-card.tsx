import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const colorVariants = cva("rounded-md px-4 py-2 min-h-24", {
  variants: {
    variant: {
      tasks: "bg-chart-1 text-chart-1-foreground",
      workouts: "bg-chart-2 text-chart-2-foreground",
      meals: "bg-chart-3 text-chart-3-foreground",
      leisure: "bg-chart-4 text-chart-4-foreground",
      other: "bg-chart-5 text-chart-5-foreground",
    },
  },
  defaultVariants: {
    variant: "tasks",
  },
});

type ColorCardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof colorVariants> & {
    name: string;
    hsl: string;
  };

export default function ColorCard({ variant, name, hsl }: ColorCardProps) {
  return (
    <div className={colorVariants({ variant })}>
      <div className="space-y-0">
        <h6 className="text-lg font-medium">{name}</h6>
        <p className="text-sm">{hsl}</p>
      </div>
    </div>
  );
}
