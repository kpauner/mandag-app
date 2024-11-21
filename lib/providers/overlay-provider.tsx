"use client";

import { useState, useEffect } from "react";
import CreateTaskDialog from "@/features/tasks/components/create-task-dialog";
import { Toaster } from "@/components/ui/sonner";
import { useEventsDialogStore } from "@/features/events/hooks/use-events-dialog-store";
import CreateWorkoutDialog from "@/features/workouts/components/create-workout-dialog";

export default function OverlayProvider() {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, activeOverlay, onClose } = useEventsDialogStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateTaskDialog
        open={isOpen && activeOverlay === "task"}
        onOpenChangeAction={onClose}
      />
      <CreateWorkoutDialog
        open={isOpen && activeOverlay === "workout"}
        onOpenChangeAction={onClose}
      />
      <Toaster />
    </>
  );
}
