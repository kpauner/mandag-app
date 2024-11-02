import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventType } from "@/types/events";
import Icons from "@/components/icons";
import { LucideIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEventIcon(type: EventType): LucideIcon {
  const iconMap: Record<EventType, LucideIcon> = {
    task: Icons.task,
    workout: Icons.workout,
    meal: Icons.meal,
    leisure: Icons.leisure,
    other: Icons.other,
  };

  return iconMap[type] || iconMap.other;
}
