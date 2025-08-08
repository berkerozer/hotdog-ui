"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageLoadingDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={async () => {
            message.loading({
              key: "some-process-key",
              message: "This is a loading message!",
            });
            await new Promise((resolve) => setTimeout(resolve, 2000));
            message.success({
              key: "some-process-key",
              message: "This is a success message!",
            });
          }}
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};

export const MessageLoadingDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";

export const MessageLoadingDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={async () => {
            message.loading({
              key: "some-process-key",
              message: "This is a loading message!",
            });
            await new Promise((resolve) => setTimeout(resolve, 2000));
            message.success({
              key: "some-process-key",
              message: "This is a success message!",
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
    <CodeBlock language="tsx" filename="MessageLoadingDemo.tsx" code={code} />
  );
};
