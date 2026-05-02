import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-cyan) focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-(--color-cyan) text-(--color-deep-blue)",
        secondary: "border-transparent bg-(--color-mist) text-(--color-text)",
        outline: "border-(--color-border) text-(--color-text)",
        success: "border-transparent bg-(--color-success)/10 text-(--color-success)",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
