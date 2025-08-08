"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageStackDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message({ key: "stack-message", message: "This is a message!" })
          }
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="secondary"
          onClick={() =>
            message.success({
              key: "stack-message",
              message: "This is a message!",
            })
          }
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="info"
          onClick={async () => {
            message.warning({
              key: "stack-message",
              message: "This is a message!",
            });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            message.info({
              key: "stack-message",
              message: "This is a message!",
            });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            message.error({
              key: "stack-message",
              message: "This is a message!",
            });
          }}
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};

export const MessageStackDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";

export const MessageStackDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message({ key: "stack-message", message: "This is a message!" })
          }
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="secondary"
          onClick={() =>
            message.success({
              key: "stack-message",
              message: "This is a message!",
            })
          }
        >
          Open Message
        </Button>
        <Button
          variant="default"
          color="info"
          onClick={async () => {
            message.warning({
              key: "stack-message",
              message: "This is a message!",
            });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            message.info({
              key: "stack-message",
              message: "This is a message!",
            });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            message.error({
              key: "stack-message",
              message: "This is a message!",
            });
          }}
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="MessageStackDemo.tsx" code={code} />
  );
};
