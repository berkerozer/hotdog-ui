import React from "react";
import { Ripple } from "hotdogui/ripple";
import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "success"
    | "info"
    | "sharp"
    | "muted"
    | "accent";
  variant?: "default" | "ghost" | "outline" | "dashed" | "text" | "link";
  animation?: "ripple" | "pulse" | "shine" | "press" | "none";
  size?: "default" | "sm" | "lg" | "icon";
  shape?: "rounded" | "square" | "circle" | "pill";
  loading?: boolean;
}

export const Button = ({
  animation = "ripple",
  color = "primary",
  variant = "default",
  size = "default",
  shape = "rounded",
  loading = false,
  style,
  children,
  ...props
}: ButtonProps) => {
  const colorVariable =
    color === "primary"
      ? {}
      : {
          "--primary": `var(--${color})`,
          "--primary-foreground": `var(--${color}-foreground)`,
        };

  return (
    <BaseButton
      style={
        {
          ...colorVariable,
          ...style,
        } as React.CSSProperties
      }
      animation={animation}
      variant={variant}
      size={size}
      shape={shape}
      {...props}
    >
      {loading && <span className="loader animate-in" />}
      {children}
      {animation === "ripple" && (
        <Ripple
          className={
            variant === "default"
              ? "bg-white"
              : variant === "link"
                ? "bg-transparent"
                : "bg-primary"
          }
        />
      )}
    </BaseButton>
  );
};

const ButtonGroup = ({
  children,
  gap = false,
}: {
  children: React.ReactNode;
  gap?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[&>*:hover[class~='border']]:border-x!",
        {
          "[&>*+*]:ml-0.5": gap,
          "[&>*:hover+*[class~='border']]:border-l-0 [&>*+*]:border-l": !gap,
          "[&>*:not(:last-child)]:border-r-0": !gap,
        },
        "[&>*+*]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none"
      )}
    >
      {children}
    </div>
  );
};

Button.Group = ButtonGroup;
Button.displayName = "Button";
