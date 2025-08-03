import React from "react";
import { Ripple } from "hotdogui/ripple";
import { Button as BaseButton } from "@/components/ui/button";

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
  shape?: "rounded" | "square" | "circle";
}

export const Button = ({
  animation = "ripple",
  color = "primary",
  variant = "default",
  size = "default",
  shape = "rounded",
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

Button.displayName = "Button";
