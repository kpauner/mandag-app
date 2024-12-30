"use client";

import React from "react";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { useEventsDialogStore } from "@/features/events/hooks/use-events-dialog-store";
import { DialogType } from "@/features/events/types/events";
import Link from "next/link";
import { NavUser } from "@/features/auth/components/nav-user";

const sidebarMenu = {
  main: [
    {
      icon: Icons.home,
      label: "Home",
      href: "/dashboard",
      iconColor: "text-foreground",
    },
    {
      icon: Icons.analytics,
      label: "Analytics",
      href: "/dashboard/analytics",
      iconColor: "text-foreground",
    },
    {
      icon: Icons.settings,
      label: "Settings",
      href: "/dashboard/settings",
      iconColor: "text-foreground",
    },
  ],
  events: [
    {
      icon: Icons.task,
      label: "Tasks",
      href: "/dashboard",
      iconColor: "text-chart-1-foreground",
      type: "task",
    },
    {
      icon: Icons.workout,
      label: "Workouts",
      href: "/dashboard",
      iconColor: "text-chart-2-foreground",
      type: "workout",
    },
    {
      icon: Icons.meal,
      label: "Meals",
      href: "/dashboard",
      iconColor: "text-chart-3-foreground",
      type: "meal",
    },
    {
      icon: Icons.leisure,
      label: "Leisure",
      href: "/dashboard",
      iconColor: "text-chart-4-foreground",
      type: "leisure",
    },
    {
      icon: Icons.other,
      label: "Other",
      href: "/dashboard",
      iconColor: "text-chart-5-foreground",
      type: "other",
    },
  ],
} as const;

export default function DashboardSidebar() {
  const { onOpen } = useEventsDialogStore();

  const handleAddClick = (type: DialogType) => {
    onOpen(type);
  };

  return (
    <Sidebar className="px-2 bg-sidebar">
      <SidebarHeader>
        <NavUser />
      </SidebarHeader>
      <SidebarGroup className="">
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <SidebarMenu>
          {sidebarMenu.main.map((item) => (
            <SidebarMenuItem className="" key={item.label}>
              <Link href={item.href} className="flex items-center gap-4">
                <SidebarMenuButton>
                  <item.icon className={cn(item.iconColor, "")} />
                  {item.label}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel className="pb-4">Events</SidebarGroupLabel>

        <SidebarMenu className="space-y-2">
          {sidebarMenu.events.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4 ">
                  <item.icon className={cn(item.iconColor, "size-5")} />
                  {item.label}
                </div>
                <Icons.plus
                  className="size-8 hover:text-sidebar-accent-foreground opacity-50 hover:opacity-100 "
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddClick(item.type);
                  }}
                />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </Sidebar>
  );
}
