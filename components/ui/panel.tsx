"use client";

import { usePanel } from "@/features/dashboard/hooks/use-panel";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Panel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isExpanded } = usePanel();

  return (
    <aside
      ref={ref}
      className={cn(
        "h-screen transition-all duration-300 ease-in-out bg-secondaryBlack text-darkText",
        isExpanded ? "opacity-100 w-80" : "opacity-0 w-0",
        !isExpanded && "invisible",
        className
      )}
      {...props}
    >
      <div className="h-full w-full overflow-y-auto">{props.children}</div>
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
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
  );
});

PanelTrigger.displayName = "PanelTrigger";

export { Panel, PanelTrigger };
