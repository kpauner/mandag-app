import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const TextareaVariants = cva(
  "flex min-h-[80px] w-full rounded-base border-2 text-text dark:text-darkText font-base selection:bg-main selection:text-black border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack py-2 text-sm ring-offset-white placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "px-3 ",
        ghost:
          "border-none shadow-none bg-transparent hover:bg-accent/50 focus-visible:ring-0 text-md",
      },
    },
  }
);

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & {
    variant?: "default" | "ghost";
  }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <textarea
      className={cn(TextareaVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
