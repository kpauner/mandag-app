import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type EventCardProps = {
  name: string;
  description: string;
  due: string;
};

export default function EventCard({ name, description, due }: EventCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="flex flex-row space-x-2 group items-center h-full">
          <div className=" w-[3px] bg-destructive shrink-0 h-full">dw</div>
          <div className="flex flex-col justify-center ml-2">
            <div>{name}</div>
          </div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {description}
        {due}
      </HoverCardContent>
    </HoverCard>
  );
}
