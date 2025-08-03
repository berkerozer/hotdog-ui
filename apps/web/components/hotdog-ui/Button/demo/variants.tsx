import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const ButtonVariantsDemo = () => {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export const ButtonVariantsDemoSource = () => {
  const code = `import React from "react";
import { Button } from "@/components/hotdog-ui";

export const ButtonVariantsDemo = () => {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="dashed">Dashed</Button>
      <Button variant="text">Text</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="ButtonVariantsDemo.tsx" code={code} />
  );
};
