"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageTypesDemo = () => {
  const handleMessage = (
    type: "success" | "error" | "info" | "warning" | "default"
  ) => {
    message[type]({
      message: `This is a ${type} message!`,
      description: `This message indicates a ${type} operation.`,
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() => handleMessage("default")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="success"
          onClick={() => handleMessage("success")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="danger"
          onClick={() => handleMessage("error")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="warning"
          onClick={() => handleMessage("warning")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="info"
          onClick={() => handleMessage("info")}
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};

export const MessageTypesDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";

export const MessageTypesDemo = () => {
  const handleMessage = (type: "success" | "error" | "info" | "warning" | "default") => {
    message[type]({
      message: \`This is a \${type} message!\`,
      description: \`This message indicates a \${type} operation.\`,
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() => handleMessage("default")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="success"
          onClick={() => handleMessage("success")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="danger"
          onClick={() => handleMessage("error")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="warning"
          onClick={() => handleMessage("warning")}
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="info"
          onClick={() => handleMessage("info")}
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="MessageTypesDemo.tsx" code={code} />
  );
};
