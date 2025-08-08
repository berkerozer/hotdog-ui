"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { Clock2 } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageCustomIconDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message.warning({ message: "This is a message!", Icon: Clock2 })
          }
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};

export const MessageCustomIconDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { Clock2 } from "lucide-react";

export const MessageCustomIconDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() => message.warning({ message: "This is a message!", Icon: Clock2 })}
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};`;

  return (
    <CodeBlock
      language="tsx"
      filename="MessageCustomIconDemo.tsx"
      code={code}
    />
  );
};
