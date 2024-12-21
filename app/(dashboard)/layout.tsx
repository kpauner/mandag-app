import React from "react";
import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen inset-0 h-full w-full ">
        <DashboardSidebar />
        {children}
      </div>
    </SidebarProvider>
  );
}
