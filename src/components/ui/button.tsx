"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-[0.14em] transition-[transform,background-color,border-color,color] duration-150 ease-[var(--ease-out)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg hover:bg-fg",
        ghost:
          "border border-border bg-transparent text-fg hover:border-accent hover:text-accent",
        faint: "text-muted hover:text-fg",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-sm",
        xl: "h-14 w-full px-8 text-base sm:w-auto",
        sm: "h-9 px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
