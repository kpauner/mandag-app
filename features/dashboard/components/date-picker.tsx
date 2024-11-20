import { Calendar } from "@/components/ui/calendar";

export function DatePicker() {
  return (
    <Calendar className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]" />
  );
}
