import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  FileText,
  FileImage,
  FileVideo,
  File,
  type LucideIcon,
} from "lucide-react";
import { EventType } from "@/types/events";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEventIcon(type: EventType): LucideIcon {
  const iconMap: Record<EventType, LucideIcon> = {
    task: FileText,
    workout: FileImage,
    meal: FileVideo,
    leisure: File,
    other: File,
  };

  return iconMap[type] || iconMap.other;
}
