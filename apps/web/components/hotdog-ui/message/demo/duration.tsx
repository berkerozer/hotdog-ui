"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageDurationDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message({ message: "This is a message!", duration: 1000 })
          }
        >
          Open Message (1s)
        </Button>
        <Button
          variant="default"
          color="secondary"
          onClick={() =>
            message({
              message: "This is a message!",
              duration: 3000,
            })
          }
        >
          Open Message (3s)
        </Button>
      </div>
    </div>
  );
};

export const MessageDurationDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";

export const MessageDurationDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message({ message: "This is a message!", duration: 1000 })
          }
        >
          Open Message (1s)
        </Button>
        <Button
          variant="default"
          color="secondary"
          onClick={() =>
            message({
              message: "This is a message!",
              duration: 3000,
            })
          }
        >
          Open Message (3s)
        </Button>
      </div>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="MessageDurationDemo.tsx" code={code} />
  );
};
