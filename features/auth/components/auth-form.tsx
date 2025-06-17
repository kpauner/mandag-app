"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Icons from "@/components/icons";
import pb from "@/lib/pocketbase";
import { useAuthStore } from "@/features/auth/hooks/auth-store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AuthForm() {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const router = useRouter();
  if (isLoading) {
    return <Icons.loader className="w-5 h-5 animate-spin" />;
  }
  const handleGoogleLogin = async () => {
    try {
      const authData = await pb.collection("users").authWithOAuth2({
        provider: "google",
      });

      // Save the user in the store
      setUser(authData.record);

      // Optionally redirect after successful login
      router.push("/dashboard"); // or wherever you want to redirect
    } catch (error) {
      console.error("OAuth error details:", {
        message: error instanceof Error ? error.message : "Unknown error",
        error,
      });
      // Show error to user with more details
      toast.error(
        `Login failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  // If user is already logged in, you might want to redirect
  // or show a different UI
  if (user) {
    return (
      <>
        <Button
          variant="destructive"
          size="lg"
          onClick={() => {
            pb.authStore.clear();
            setUser(null);
          }}
        >
          Logout
        </Button>
        <Button
          onClick={() => router.push("/dashboard")}
          variant="default"
          size="lg"
        >
          Dashboard
        </Button>
      </>
    );
  }

  return (
    <Button
      onClick={handleGoogleLogin}
      variant="default"
      size="lg"
      className="flex items-center gap-2"
    >
      <Icons.google className="w-5 h-5" />
      Continue with Google
    </Button>
  );
}
