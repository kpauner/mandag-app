"use client";

import { useSidebar } from "@/features/dashboard/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isExpanded } = useSidebar();

  return (
    <aside
      ref={ref}
      className={cn(
        "h-screen sticky top-0 transition-all duration-300 ease-in-out bg-secondaryBlack text-darkText  overflow-y-hidden overflow-hidden",
        isExpanded ? "w-[19.5rem]" : "w-0",
        !isExpanded && "invisible",
        className
      )}
      {...props}
    >
      <div className="h-full w-full">{props.children}</div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      onClick={toggleSidebar}
      className={cn(className)}
      {...props}
    >
      {isExpanded ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
  );
});

SidebarTrigger.displayName = "SidebarTrigger";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-4", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

export { Sidebar, SidebarTrigger, SidebarGroup };
