import React from "react";

export const Colors = () => {
  return (
    <div className="flex space-x-2">
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-primary">
        <span className="text-sm text-primary-foreground">Primary</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-secondary">
        <span className="text-sm text-secondary-foreground">Secondary</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-warning">
        <span className="text-sm text-warning-foreground">Warning</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-success">
        <span className="text-sm text-success-foreground">Success</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-info">
        <span className="text-sm text-info-foreground">Info</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-sharp">
        <span className="text-sm text-sharp-foreground">Sharp</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-muted">
        <span className="text-sm text-muted-foreground">Muted</span>
      </div>
      <div className="flex space-x-1 items-center px-2 py-1 rounded-full bg-accent">
        <span className="text-sm text-accent-foreground">Accent</span>
      </div>
    </div>
  );
};
