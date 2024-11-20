import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full rounded-base border-2 text-text dark:text-darkText font-base selection:bg-main selection:text-black border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "px-3  h-10",
        ghost:
          "border-none shadow-none bg-transparent hover:bg-accent/50 focus-visible:ring-0 font-bold md:text-xl placeholder:text-lg placeholder:font-bold",
      },
    },
  }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "ghost";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
