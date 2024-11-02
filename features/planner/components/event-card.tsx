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
          variant={type as EventType}
          className={cn(
            "flex flex-row items-center justify-start group py-6 px-4 w-full  border rounded-sm overflow-hidden",
            className
          )}
        >
          <div className="flex items-center justify-center bg-background rounded-full size-8">
            <IconComponent className="size-16 text-foreground" />
          </div>
          <div className="ml-2 flex items-center">{name}</div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="text-base font-bold pb-2 flex items-center justify-between gap-2">
          {name}
          <IconComponent className="size-8" />
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
