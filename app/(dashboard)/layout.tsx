import React from "react";
import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen inset-0 h-full w-full bg-white bg-[radial-gradient(#d9dade_1px,transparent_1px)] [background-size:16px_16px]">
      <DashboardSidebar />
      {children}
    </div>
  );
}
