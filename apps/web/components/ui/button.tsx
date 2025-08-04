import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        outline:
          "border bg-background shadow-xs hover:border-primary hover:text-primary",
        dashed:
          "border border-dashed bg-background shadow-xs hover:border-primary hover:text-primary",
        ghost: "bg-accent text-primary shadow-xs hover:bg-accent/80",
        text: "hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:text-primary/60 dark:hover:text-primary/80",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      animation: {
        ripple: "overflow-hidden relative",
        pulse:
          "hover:scale-105 active:scale-95 transition-transform duration-150",
        shine: "active:ring-4 active:ring-primary/20 duration-150 ease-in-out",
        press:
          "shadow-md active:shadow-sm active:translate-y-0.5 active:scale-95 transition-transform duration-150",
        none: "",
      },
      shape: {
        rounded: "rounded-md",
        square: "rounded-none",
        circle: "rounded-full size-9",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "ripple",
      shape: "rounded",
    },
  }
);

function Button({
  className,
  variant,
  size,
  animation,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, animation, shape, className })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
