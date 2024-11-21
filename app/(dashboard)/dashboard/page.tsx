import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PanelTrigger } from "@/components/ui/panel";
import DashboardPanel from "@/features/dashboard/components/dashboard-panel";
import Timeline from "@/features/dashboard/components/timeline";
import WelcomeMessage from "@/features/dashboard/components/welcome-message";
import pb from "@/lib/pocketbase";
import { DashboardContent } from "@/components/layout/dashboard";

export default function DashboardPage() {
  const user = pb.authStore.model;
  return (
    <>
      <DashboardContent>
        <div className="sticky top-4 w-full flex justify-between z-50">
          <SidebarTrigger className="p-1.5 rounded-full bg-background border" />
          <WelcomeMessage username={user?.username} />
          <PanelTrigger className="p-1.5 rounded-full bg-background border" />
        </div>

        {/* Main content */}
        <div className="mt-4">
          <Timeline />
        </div>
      </DashboardContent>
      <DashboardPanel />
    </>
  );
}
