import { Badge } from "@/components/ui/badge";
import { RECURRING_TYPES } from "@/constants/events";
import Icons from "@/components/icons";
import { format } from "date-fns";
import { RecurringArray } from "@/types";
import { cn } from "@/lib/utils";

interface BadgeCloudProps {
  startAt?: string | Date;
  duration?: number;
  collectionName?: React.ReactNode;
  recurring?: RecurringArray;
  className?: string;
}

export function BadgeCloud({
  startAt,
  duration,
  collectionName,
  recurring,
  className,
}: BadgeCloudProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {collectionName && (
        <Badge variant="default" className={cn("", className)}>
          {collectionName}
        </Badge>
      )}

      {startAt && (
        <Badge variant="default">
          <Icons.calendar className="w-4 h-4 mr-2" />
          {format(new Date(startAt), "dd MMM, HH:mm")}
        </Badge>
      )}

      {duration && (
        <Badge variant="default">
          <Icons.clock className="w-4 h-4 mr-2" />
          {duration} min
        </Badge>
      )}

      {recurring?.map((recurringType) => (
        <Badge key={recurringType} variant="neutral">
          {RECURRING_TYPES[recurringType.toUpperCase()]?.label}
        </Badge>
      ))}
    </div>
  );
}
