"use client";

import { useSidebar } from "@/features/dashboard/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import React from "react";
import Icons from "@/components/icons";
import { Slot } from "@radix-ui/react-slot";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isExpanded } = useSidebar();

  return (
    <aside
      ref={ref}
      className={cn(
        "h-screen sticky top-0 transition-all duration-300 ease-in-out  text-darkText  overflow-y-hidden overflow-hidden",
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
        <Icons.panelright className="h-4 w-4" />
      ) : (
        <Icons.panelleft className="h-4 w-4" />
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
      className={cn("relative flex w-full min-w-0 flex-col p-6", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center tracking-wide rounded-md text-sm font-bold text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

export {
  Sidebar,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
};
