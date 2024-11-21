import { cn } from "@/lib/utils"; // Add this import
import React from "react";

interface DashboardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const DashboardContent = React.forwardRef<HTMLElement, DashboardProps>(
  ({ className, children, title, ...props }, ref) => {
    return (
      <main
        className={cn("flex-1 relative p-6", className)}
        ref={ref}
        {...props}
      >
        {title && <h1 className="text-4xl font-bold pb-6">{title}</h1>}
        {children}
      </main>
    );
  }
);
DashboardContent.displayName = "DashboardContent";

export { DashboardContent };
