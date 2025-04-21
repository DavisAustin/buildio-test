import React from "react";
import { Button } from "./button";
import { figma } from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=13%3A7982",
  {
    props: {
      label: figma.textContent("Button"),
      disabled: figma.enum("state", {
        disabled: true,
      }),
      variant: figma.enum("variant", {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        "secondary-accent": "secondary-accent",
        "tertiary-accent": "tertiary-accent",
        "primary-danger": "primary-danger",
        "secondary-danger": "secondary-danger",
        "tertiary-danger": "tertiary-danger",
      }),
      size: figma.enum("size", {
        small: "sm",
        default: "default",
      }),
      leadingVisual: figma.instance("leadingVisual"),
      trailingVisual: figma.instance("trailingVisual")
    },
    example: (props) => (
      <Button
        disabled={props.disabled}
        variant={props.variant}
        size={props.size}
        leadingVisual={props.leadingVisual}
        trailingVisual={props.trailingVisual}
      />
    ),
  },
);
