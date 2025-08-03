import { GitHubIcon } from "nextra/icons";

export default {
  index: {
    title: "Home",
    //type: "page",
  },
  "02": {
    theme: {
      layout: "full",
    },
  },
  "###": {
    type: "separator",
    title: "My Items", // Title is optional
  },
  adana: (
    <Italic className="my-class">
      <GitHubIcon height="20" />
      Contact Us
    </Italic>
  ),
};

// Custom component for italicized text
function Italic({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <i {...props}>{children}</i>;
}
