import React from "react";
import { Button } from "./button";
import { figma } from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=13%3A7982",
  {
    props: {
      label: figma.string("label"),
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
      trailingVisual: figma.instance("trailingVisual"),
    },
    example: ({label, disabled, variant, size, leadingVisual, trailingVisual}) => (
      <Button
        disabled={disabled}
        variant={variant}
        size={size}
        leadingVisual={leadingVisual}
        trailingVisual={trailingVisual}
      >
        {label}
      </Button>
    ),
  },
);
