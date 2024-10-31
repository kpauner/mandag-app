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
import { PieChartDonut } from "@/components/charts/pie-chart-donut";
import { Asidebar, AsidebarFooter } from "@/components/ui/asidebar";
import { Statistics } from "@/components/statistics";

// This is sample data.
const data = {
  statistics: [
    {
      name: "Nutrition",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "workout",
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
}: React.ComponentProps<typeof Asidebar>) {
  return (
    <Asidebar
      side="right"
      // className="sticky hidden lg:flex top-0 h-svh "
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
        <Statistics statistics={data.statistics} />
      </SidebarContent>
      <AsidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </AsidebarFooter>
    </Asidebar>
  );
}
