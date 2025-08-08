import React from "react";

type SectionProps = {
  children?: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return (
    <div className="w-full min-h-48 border rounded-md flex items-center justify-center gap-2 py-8 px-4 overflow-x-scroll">
      {children}
    </div>
  );
};
