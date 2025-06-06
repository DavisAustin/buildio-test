import React from "react"
import { Badge } from "./badge"
import figma from "@figma/code-connect"

figma.connect(
  Badge,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=114-602&t=05zr8qkSdVaRrvJn-4",
  {
    props: {
      label: figma.string("label"),
      variant: figma.enum('variant', {
        "primary": "primary",
        "secondary": "secondary",
        "emphasis": "emphasis",
        "accent": "accent",
        "info": "info",
        "new": "new",
        "success": "success",
        "attention": "attention",
        "danger": "danger",
      }),
      "size": figma.enum('size', {
        "sm": "sm",
        "default": "default",
        "lg": "lg",
      }),
      icon: figma.instance("icon"),
    },
    example: ({label, variant, size, icon}) => <Badge
    variant={variant}
    size={size}
    >
      {icon}
      {label}
    </Badge>,
  },
)
