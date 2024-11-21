import { DashboardContent } from "@/components/layout/dashboard";

import DisplayForm from "@/features/settings/components/display-form";
import React from "react";

export default function Settings() {
  return (
    <DashboardContent title="Settings">
      <DisplayForm />
    </DashboardContent>
  );
}
