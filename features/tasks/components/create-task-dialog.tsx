"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { useTasksStore } from "../hooks/use-tasks-store";

export default function CreateTaskDialog() {
  const { isOpen, onClose } = useTasksStore();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create task</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
