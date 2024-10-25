"use client";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from "react";
import { useMountedState } from "react-use";

export default function UiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <TooltipProvider>
        {children}
        <Toaster />
      </TooltipProvider>
    </>
  );
}
