"use client";
import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageSoundDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message.success({
              message: "This is a message!",
              sound: "/assets/ding-sound.mp3",
            })
          }
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};

export const MessageSoundDemoSource = () => {
  const code = `import React from "react";
import { Button, message } from "@/components/hotdog-ui";
import { CodeBlock } from "@/components/ui/code-block";

export const MessageSoundDemo = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-4">
        <Button
          variant="default"
          color="primary"
          onClick={() =>
            message.success({ message: "This is a message!", sound: "/assets/ding-sound.mp3" })
          }
        >
          Open Message
        </Button>
      </div>
    </div>
  );
};`;

  return (
    <CodeBlock language="tsx" filename="MessageSoundDemo.tsx" code={code} />
  );
};
