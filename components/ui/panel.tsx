"use client";

import { usePanel } from "@/features/dashboard/hooks/use-panel";
import { cn } from "@/lib/utils";
import React from "react";
import Icons from "../icons";

const Panel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isExpanded } = usePanel();

  return (
    <aside
      ref={ref}
      className={cn(
        "h-screen sticky top-0 transition-all duration-300 ease-in-out  text-darkText md:flex overflow-y-hidden overflow-x-hidden",
        isExpanded ? "w-max-fit" : "w-0",
        !isExpanded && "invisible",
        className
      )}
      {...props}
    >
      <div className="h-full w-full">{props.children}</div>
    </aside>
  );
});

Panel.displayName = "Panel";

const PanelTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { isExpanded, togglePanel } = usePanel();

  return (
    <button
      ref={ref}
      onClick={togglePanel}
      className={cn(className)}
      {...props}
    >
      {isExpanded ? (
        <Icons.panelleft className="h-4 w-4" />
      ) : (
        <Icons.panelright className="h-4 w-4" />
      )}
    </button>
  );
});

PanelTrigger.displayName = "PanelTrigger";

export { Panel, PanelTrigger };
