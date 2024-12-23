"use client";

import React from "react";
import { Panel } from "@/components/ui/panel";
import { DatePicker } from "./date-picker";
import { SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { TimelineSettings } from "./timeline-settings";
import { DonutChart } from "@/components/donut-chart";
import useGetUserEvents from "@/features/events/hooks/use-get-user-events";
import { ChartConfig } from "@/components/ui/chart";
import { calculateChartData } from "@/lib/utils";

export default function DashboardPanel() {
  const [tasksQuery, workoutsQuery] = useGetUserEvents();

  const events = [
    ...(tasksQuery.data?.items || []),
    ...(workoutsQuery.data?.items || []),
  ];

  const chartData = calculateChartData(events);

  const chartConfig = {
    tasks: {
      label: "Tasks",
      color: "hsl(var(--chart-1))",
    },
    workouts: {
      label: "Workouts",
      color: "hsl(var(--chart-2))",
    },
    meals: {
      label: "Meals",
      color: "hsl(var(--chart-3))",
    },
    leisure: {
      label: "Leisure",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <Panel>
      <SidebarGroup>
        <DatePicker />
      </SidebarGroup>
      <SidebarGroup>
        <TimelineSettings />
      </SidebarGroup>
      <SidebarGroup>
        {/* <pre className="whitespace-pre-wrap">
          {JSON.stringify(events, null, 2)}
        </pre> */}
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(chartData, null, 2)}
        </pre>
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <DonutChart chartData={chartData} chartConfig={chartConfig} />
      </SidebarGroup>
    </Panel>
  );
}
