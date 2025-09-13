import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";
import { Clock2 } from "lucide-react";

export const ButtonGroupDemo = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button.Group>
        <Button>Rounded</Button>
        <Button>Square</Button>
        <Button>Pill</Button>
      </Button.Group>

      <Button.Group gap>
        <Button>Rounded</Button>
        <Button>Square</Button>
        <Button>Pill</Button>
      </Button.Group>

      <Button.Group>
        <Button variant="outline">Rounded</Button>
        <Button variant="outline">Square</Button>
        <Button variant="outline">Pill</Button>
      </Button.Group>

      <Button.Group gap>
        <Button variant="outline">Rounded</Button>
        <Button variant="outline">Square</Button>
        <Button variant="outline">Pill</Button>
      </Button.Group>
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
