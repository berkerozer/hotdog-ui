import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const ButtonAnimationsDemo = () => {
  return (
    <div className="flex gap-2">
      <Button animation="ripple">Ripple</Button>
      <Button animation="pulse">Pulse</Button>
      <Button animation="shine">Shine</Button>
      <Button animation="press">Press</Button>
      <Button animation="none">None</Button>
    </div>
  );
};

export const ButtonAnimationsDemoSource = () => {
  const code = `import React from "react";
import { Button } from "@/components/hotdog-ui";

export const ButtonAnimationsDemo = () => {
  return (
    <div className="flex gap-2">
      <Button animation="ripple">Ripple</Button>
      <Button animation="pulse">Pulse</Button>
      <Button animation="shine">Shine</Button>
      <Button animation="press">Press</Button>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="ButtonAnimationsDemo.tsx" code={code} />
  );
};
