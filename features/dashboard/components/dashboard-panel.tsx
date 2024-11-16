"use client";

import React from "react";
import { Panel } from "@/components/ui/panel";
import { DatePicker } from "./date-picker";

export default function DashboardPanel() {
  return (
    <Panel>
      <DatePicker />
    </Panel>
  );
}
