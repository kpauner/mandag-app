import Icons from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div>
      <Link
        href="/api/login/google"
        className={cn(
          buttonVariants({
            variant: "secondary",
          }),
          "w-full"
        )}
      >
        <Icons.google className="stroke-white mr-2 h-5 w-5" />
        Sign in with Google
      </Link>
    </div>
  );
}
