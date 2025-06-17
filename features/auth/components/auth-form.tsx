"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/features/auth/hooks/auth-store";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import Icons from "@/components/icons";
import pb from "@/lib/pocketbase";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type AuthFormProps = {
  className?: string;
};

export default function AuthForm({ className }: AuthFormProps) {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const router = useRouter();

  if (isLoading) {
    return <Loader className="w-5 h-5 animate-spin" />;
  }

  const handleGoogleLogin = async () => {
    try {
      const authData = await pb.collection("users").authWithOAuth2({
        provider: "google",
      });

      const userData = await pb.collection("users").getOne(authData.record.id);
      pb.authStore.save(pb.authStore.token, userData);
      setUser(authData.record);

      router.push("/dashboard");
    } catch (error) {
      console.error("OAuth error:", error);
      toast.error(
        `Login failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  if (user) {
    return (
      <>
        <Button
          onClick={() => router.push("/dashboard")}
          variant="default"
          size="lg"
          className={cn("rounded-full", className)}
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
      className={cn("rounded-full", className)}
    >
      <Icons.google className="w-5 h-5" />
      Continue with Google
    </Button>
  );
}
