"use client";

import React from "react";
import { Panel } from "@/components/ui/panel";
import { DatePicker } from "./date-picker";
import { SidebarGroup } from "@/components/ui/sidebar";
import { TimelineSettings } from "./timeline-settings";

export default function DashboardPanel() {
  return (
    <Panel>
      <SidebarGroup>
        <DatePicker />
      </SidebarGroup>
      <SidebarGroup>
        <TimelineSettings />
      </SidebarGroup>
    </Panel>
  );
}
