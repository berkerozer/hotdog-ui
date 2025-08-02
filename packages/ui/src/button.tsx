"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className="bg-amber-300 text-5xl font-extrabold"
      onClick={() => alert(`Hello from your ${appName} app! değişti`)}
    >
      {children}
    </button>
  );
};
