import * as React from "react";
import { Plus } from "lucide-react";

import { Calendars } from "@/components/calendars";
import { DatePicker } from "@/components/date-picker";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { PieChartDonut } from "../../../components/charts/pie-chart-donut";

// This is sample data.
const data = {
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
};

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      side="right"
      collapsible="offcanvas"
      className="sticky hidden lg:flex top-0 h-svh "
      {...props}
    >
      <SidebarContent>
        <DatePicker />
        <PieChartDonut
          label="visitors"
          data={[
            { event: "task", visitors: 275, fill: "var(--color-chrome)" },
            { event: "break", visitors: 200, fill: "var(--color-safari)" },
            { event: "workout", visitors: 287, fill: "var(--color-firefox)" },
            { event: "meal", visitors: 173, fill: "var(--color-edge)" },
            { event: "other", visitors: 190, fill: "var(--color-other)" },
          ]}
        />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
