import { Calendar } from "@/components/ui/calendar";
import { SidebarGroup } from "@/components/ui/sidebar";

export function DatePicker() {
  return (
    <SidebarGroup className="px-0">
      <Calendar className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]" />
    </SidebarGroup>
  );
}
