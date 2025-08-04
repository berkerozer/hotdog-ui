import React from "react";
import { Button } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const ButtonStatesDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button variant="default" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="ghost" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="outline" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="dashed" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="text" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="link" color="secondary" disabled>
          Loading
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="default" color="info" loading>
          Loading
        </Button>
        <Button variant="ghost" color="info" loading>
          Loading
        </Button>
        <Button variant="outline" color="info" loading>
          Loading
        </Button>
        <Button variant="dashed" color="info" loading>
          Loading
        </Button>
        <Button variant="text" color="info" loading>
          Loading
        </Button>
        <Button variant="link" color="info" loading>
          Loading
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="default" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="ghost" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="outline" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="dashed" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="text" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="link" color="success" loading disabled>
          Loading
        </Button>
      </div>
      <div className="flex gap-4"></div>
    </div>
  );
};

export const ButtonStatesDemoSource = () => {
  const code = `import React from "react";
import { Button } from "@/components/hotdog-ui";

export const ButtonStatesDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button variant="default" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="ghost" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="outline" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="dashed" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="text" color="secondary" disabled>
          Loading
        </Button>
        <Button variant="link" color="secondary" disabled>
          Loading
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="default" color="info" loading>
          Loading
        </Button>
        <Button variant="ghost" color="info" loading>
          Loading
        </Button>
        <Button variant="outline" color="info" loading>
          Loading
        </Button>
        <Button variant="dashed" color="info" loading>
          Loading
        </Button>
        <Button variant="text" color="info" loading>
          Loading
        </Button>
        <Button variant="link" color="info" loading>
          Loading
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="default" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="ghost" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="outline" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="dashed" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="text" color="success" loading disabled>
          Loading
        </Button>
        <Button variant="link" color="success" loading disabled>
          Loading
        </Button>
      </div>
      <div className="flex gap-4"></div>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="ButtonStatesDemo.tsx" code={code} />
  );
};
