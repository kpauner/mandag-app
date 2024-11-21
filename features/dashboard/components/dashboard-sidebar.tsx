"use client";

import React from "react";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Icons from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/features/auth/hooks/auth-store";
import { cn } from "@/lib/utils";
import { useEventsDialogStore } from "@/features/events/hooks/use-events-dialog-store";
import { DialogType } from "@/features/events/types/events";
import Link from "next/link";

const sidebarMenu = {
  main: [
    {
      icon: Icons.home,
      label: "Home",
      href: "/dashboard",
      iconColor: "text-white/60",
    },
    {
      icon: Icons.analytics,
      label: "Analytics",
      href: "/dashboard/analytics",
      iconColor: "text-white/60",
    },
    {
      icon: Icons.settings,
      label: "Settings",
      href: "/dashboard/settings",
      iconColor: "text-white/60",
    },
  ],
  events: [
    {
      icon: Icons.task,
      label: "Tasks",
      href: "/dashboard",
      iconColor: "text-chart-1",
      type: "task",
    },
    {
      icon: Icons.workout,
      label: "Workouts",
      href: "/dashboard",
      iconColor: "text-chart-2",
      type: "workout",
    },
    {
      icon: Icons.meal,
      label: "Meals",
      href: "/dashboard",
      iconColor: "text-chart-3",
      type: "meal",
    },
    {
      icon: Icons.leisure,
      label: "Leisure",
      href: "/dashboard",
      iconColor: "text-chart-4",
      type: "leisure",
    },
    {
      icon: Icons.other,
      label: "Other",
      href: "/dashboard",
      iconColor: "text-chart-5",
      type: "other",
    },
  ],
} as const;

export default function DashboardSidebar() {
  const { user } = useAuthStore();
  const { onOpen } = useEventsDialogStore();

  const handleAddClick = (type: DialogType) => {
    onOpen(type);
  };

  return (
    <Sidebar className="text-white bg-black">
      <SidebarGroup>
        <div className="flex items-center gap-3 rounded-full">
          <Avatar>
            <AvatarImage
              src={user?.avatar || "https://github.com/shadcn.png"}
              alt={user?.name || "potato"}
            />
            <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
          <div className="text-lg font-black">{user?.name}khend pauner</div>
        </div>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel className="pb-4">Dashboard</SidebarGroupLabel>
        <SidebarMenu className="space-y-4 font-sans text-lg">
          {sidebarMenu.main.map((item) => (
            <SidebarMenuItem className="" key={item.label}>
              <Link href={item.href} className="flex items-center gap-4">
                <item.icon className={cn(item.iconColor, "size-5")} />
                {item.label}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel className="pb-4">Events</SidebarGroupLabel>

        <SidebarMenu className="space-y-4 font-sans text-lg">
          {sidebarMenu.events.map((item) => (
            <SidebarMenuItem
              key={item.label}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <item.icon className={cn(item.iconColor, "size-5")} />
                {item.label}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddClick(item.type);
                }}
                className="hover:bg-gray-800 rounded-full p-1"
              >
                <Icons.plus className="size-4" />
              </button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </Sidebar>
  );
}
