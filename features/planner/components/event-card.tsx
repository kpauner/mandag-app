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
  className: string;
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
            "flex flex-row group items-center h-full p-0 bg-secondary pr-4 border-border/50 border rounded-sm min-h-4",
            className
          )}
        >
          <div
            className={cn(" w-2 rounded-l-sm bg-destructive shrink-0 h-full", {
              "bg-chart-1 opacity-70": type === "task",
              "bg-chart-2": type === "meeting",
              "bg-chart-3": type === "break",
              "bg-chart-4": type === "focus",
              "bg-chart-5": type === "other",
            })}
          />
          <div className="flex flex-col justify-center ml-2">
            <div>{name}</div>
          </div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {description}
        {startAt}
        {duration}
      </HoverCardContent>
    </HoverCard>
  );
}
