import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const ButtonSizesDemo = () => {
  return (
    <div className="flex gap-2">
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" shape="circle">
        Icon
      </Button>
    </div>
  );
};

export const ButtonSizesDemoSource = () => {
  const code = `import React from "react";
import { Button } from "@/components/hotdog-ui";

export const ButtonSizesDemo = () => {
  return (
    <div className="flex gap-2">
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">Icon</Button>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="ButtonSizesDemo.tsx" code={code} />
  );
};
