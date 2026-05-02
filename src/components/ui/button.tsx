import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-(--color-cyan) text-white font-semibold hover:bg-(--color-cyan-soft) shadow-sm hover:shadow-[0_8px_24px_-8px_rgba(32,181,162,0.45)]",
        secondary:
          "bg-(--color-deep-blue) text-white hover:bg-(--color-deep-blue-soft)",
        outline:
          "border border-(--color-border) bg-white text-(--color-text-strong) hover:border-(--color-cyan) hover:text-(--color-cyan)",
        ghost:
          "bg-transparent text-(--color-text-strong) hover:bg-(--color-mist)",
        "ghost-white":
          "bg-transparent text-white border border-white/30 hover:bg-white/10",
        link: "text-(--color-cyan) underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-5 py-2",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
