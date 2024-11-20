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

const menuItems = [
  { icon: Icons.task, label: "Tasks", iconColor: "text-chart-1" },
  { icon: Icons.workout, label: "Workouts", iconColor: "text-chart-2" },
  { icon: Icons.meal, label: "Meals", iconColor: "text-chart-3" },
  { icon: Icons.leisure, label: "Leisure", iconColor: "text-chart-4" },
  { icon: Icons.other, label: "Other", iconColor: "text-chart-5" },
] as const;

export default function DashboardSidebar() {
  const { user } = useAuthStore();
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
        <SidebarGroupLabel className="pb-4">Aktiviteter</SidebarGroupLabel>
        <SidebarMenu className="space-y-4 font-sans text-lg">
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.label}
              className="flex items-center gap-4"
            >
              <item.icon className={cn(item.iconColor, "size-5")} />
              {item.label}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </Sidebar>
  );
}
