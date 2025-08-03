import React from "react";
import { Ripple } from "@repo/ui/ripple";
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
  animation?: "ripple" | "pulse" | "none";
}

export const Button = ({
  color = "primary",
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
      {...props}
    >
      {children}
      {props.animation === "ripple" && (
        <Ripple
          className={
            props.variant === "default"
              ? "bg-white"
              : props.variant === "link"
                ? "bg-transparent"
                : "bg-primary"
          }
        />
      )}
    </BaseButton>
  );
};

Button.displayName = "Button";
