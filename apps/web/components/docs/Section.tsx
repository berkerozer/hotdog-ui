import React from "react";

type SectionProps = {
  children?: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return (
    <div className="w-full min-h-96 border rounded-md flex items-center justify-center gap-2">
      {children}
    </div>
  );
};
