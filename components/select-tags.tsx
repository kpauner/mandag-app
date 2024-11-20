import { Badge } from "@/components/ui/badge";
import { RECURRING_TYPES } from "@/constants/events";
import { cn } from "@/lib/utils";

interface SelectTagsProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function SelectTags({ value = [], onChange }: SelectTagsProps) {
  const handleToggle = (badgeValue: string) => {
    const newValue = value.includes(badgeValue)
      ? value.filter((v) => v !== badgeValue)
      : [...value, badgeValue];

    onChange?.(newValue);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {Object.values(RECURRING_TYPES).map((type) => (
        <Badge
          key={type.value}
          variant="neutral"
          className={cn(
            "cursor-pointer hover:bg-primary/10",
            value.includes(type.value) &&
              "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={() => handleToggle(type.value)}
        >
          {type.label}
        </Badge>
      ))}
    </div>
  );
}
