import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

type EventCardProps = {
  name: string;
  description: string;
  type: string;
  duration: number | null;
  startAt: string;
  className?: string;
};

export default function EventCard({
  name,
  description,
  type,
  duration,
  startAt,
  className,
}: EventCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex flex-row group items-stretch h-8 p-1 bg-secondary pr-4  border rounded-sm overflow-hidden",
            {
              "bg-chart-1/20 text-chart-1 border-chart-1/30": type === "task",
              "bg-chart-2/20 text-chart-2 border-chart-2": type === "workout",
              "bg-chart-3/20 text-chart-3 border-chart-3": type === "meal",
              "bg-chart-4/20 text-chart-4 border-chart-4": type === "leisure",
              "bg-chart-5/20 text-chart-5 border-chart-5": type === "other",
            },
            className
          )}
        >
          <div
            className={cn("w-1 flex-shrink-0 h-full rounded-sm", {
              "bg-chart-1": type === "task",
              "bg-chart-2": type === "workout",
              "bg-chart-3": type === "meal",
              "bg-chart-4": type === "leisure",
              "bg-chart-5": type === "other",
            })}
          />
          <div className="ml-2 flex items-center">{name}</div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {description}
        {startAt}
        <div className="text-xs text-muted-foreground">{duration} minutes</div>
      </HoverCardContent>
    </HoverCard>
  );
}
