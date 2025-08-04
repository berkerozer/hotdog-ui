import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";
import { Clock2 } from "lucide-react";

export const ButtonShapesDemo = () => {
  return (
    <div className="flex gap-2">
      <Button shape="rounded">Rounded</Button>
      <Button shape="square">Square</Button>
      <Button shape="circle">
        <Clock2 size={24} />
      </Button>
      <Button shape="pill">Pill</Button>
    </div>
  );
};

export const ButtonShapesDemoSource = () => {
  const code = `import React from "react";
import { Button } from "@/components/hotdog-ui";
import { Clock2 } from "lucide-react";

export const ButtonShapesDemo = () => {
  return (
    <div className="flex gap-2">
      <Button shape="rounded">Rounded</Button>
      <Button shape="square">Square</Button>
      <Button shape="circle">
        <Clock2 size={24} />
      </Button>
      <Button shape="pill">Pill</Button>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="ButtonShapesDemo.tsx" code={code} />
  );
};
