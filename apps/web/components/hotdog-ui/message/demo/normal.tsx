"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() => message({ message: "This is a message!" })}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="secondary"
          onClick={() =>
            message({
              message: "This is a message!",
              description: "This is a message description.",
            })
          }
        >
          With Description
        </Button>
      </div>
    </div>
  );
};

export const MessageDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";

export const MessageDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() => message({ message: "This is a message!" })}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="secondary"
          onClick={() =>
            message({
              message: "This is a message!",
              description: "This is a message description.",
            })
          }
        >
          With Description
        </Button>
      </div>
    </div>
  );
};`;

  return <CodeBlock language="tsx" filename="MessageDemo.tsx" code={code} />;
};
