import React from "react";
import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PanelTrigger } from "@/components/ui/panel";
import DashboardPanel from "@/features/dashboard/components/dashboard-panel";
import Timeline from "@/features/dashboard/components/timeline";

export default function DashboardPage() {
  return (
    <div className="relative flex min-h-screen absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <DashboardSidebar />
      <main className="flex-1 relative p-6">
        <div className="sticky top-4 w-full flex justify-between z-50">
          <SidebarTrigger className="p-1.5 rounded-full bg-background border" />
          <PanelTrigger className="p-1.5 rounded-full bg-background border" />
        </div>

        {/* Main content */}
        <div className="mt-4">
          <Timeline />
        </div>
      </main>
      <DashboardPanel />
    </div>
  );
}
