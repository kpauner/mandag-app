import Icons from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { cn, getEventIcon } from "@/lib/utils";
import { EventType } from "@/types/events";

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
  const IconComponent = getEventIcon(type as EventType);
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
        <div className="text-base font-bold pb-2 flex items-center justify-between gap-2">
          {name}
          <IconComponent className="w-4 h-4" />
        </div>
        <Separator />
        <div className="text-sm text-muted-foreground">{description}</div>
        <Separator />
        <div className="text-sm text-muted-foreground">{type}</div>
        <Separator />
        {startAt}
        <div className="text-xs text-muted-foreground">{duration} minutes</div>
      </HoverCardContent>
    </HoverCard>
  );
}
