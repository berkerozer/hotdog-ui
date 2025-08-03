import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const ButtonColorsDemo = () => {
  return (
    <div className="flex gap-2">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="sharp">Sharp</Button>
      <Button color="muted">Muted</Button>
      <Button color="accent">Accent</Button>
    </div>
  );
};

export const ButtonColorsDemoSource = () => {
  const code = `import React from "react";
import { Button } from "@/components/hotdog-ui";

export const ButtonColorsDemo = () => {
  return (
    <div className="flex gap-2">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="sharp">Sharp</Button>
      <Button color="muted">Muted</Button>
      <Button color="accent">Accent</Button>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="ButtonColorsDemo.tsx" code={code} />
  );
};
