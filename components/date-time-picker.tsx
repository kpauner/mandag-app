import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DateTimePicker({ value, onChange }: DateTimePickerProps) {
  const [date, setDate] = useState<Date | undefined>(value);
  const [hours, setHours] = useState(value ? format(value, "HH") : "00");
  const [minutes, setMinutes] = useState(value ? format(value, "mm") : "00");

  const handleDateChange = (newDate: Date | undefined) => {
    if (!newDate) return;

    // Create new date with current hours/minutes
    const updatedDate = new Date(newDate);
    updatedDate.setHours(parseInt(hours), parseInt(minutes));
    setDate(updatedDate);
    onChange?.(updatedDate);
  };

  const handleTimeChange = (type: "hours" | "minutes", value: string) => {
    if (!date) return;

    let numValue = parseInt(value || "0");
    let newHours = parseInt(hours);
    let newMinutes = parseInt(minutes);

    if (type === "hours") {
      if (numValue > 23) numValue = 23;
      if (numValue < 0) numValue = 0;
      newHours = numValue;
      setHours(numValue.toString().padStart(2, "0"));
    } else {
      if (numValue > 59) numValue = 59;
      if (numValue < 0) numValue = 0;
      newMinutes = numValue;
      setMinutes(numValue.toString().padStart(2, "0"));
    }

    // Create new date with updated hours/minutes
    const updatedDate = new Date(date);
    updatedDate.setHours(newHours, newMinutes);
    setDate(updatedDate);
    onChange?.(updatedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"noShadow"}
          className={cn(
            "w-[320px] justify-start text-left font-normal space-x-2",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2" />
          {date ? format(date, "PPP HH:mm") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          className="!shadow-none border-none"
        />
        <div className="flex items-center gap-2 p-3">
          <Input
            type="number"
            min={0}
            max={23}
            value={hours}
            onChange={(e) => handleTimeChange("hours", e.target.value)}
            className="w-16"
          />
          <span className="font-bold">:</span>
          <Input
            type="number"
            min={0}
            max={59}
            value={minutes}
            onChange={(e) => handleTimeChange("minutes", e.target.value)}
            className="w-16"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
