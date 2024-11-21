"use client";

import { useState, useEffect } from "react";
import CreateTaskDialog from "@/features/tasks/components/create-task-dialog";
import { Toaster } from "@/components/ui/sonner";

export default function OverlayProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      {/* <ProModal /> */}
      <CreateTaskDialog />
      <Toaster />
    </>
  );
}
