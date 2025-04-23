import React from "react"
import { Avatar } from "./avatar"
import figma from "@figma/code-connect"

figma.connect(
  Avatar,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=104%3A13",
  {
    props: {
      "size": figma.enum('size', {
        "xs": "xs",
        "sm": "sm",
        "default": "default",
        "lg": "lg",
        "xl": "xl"
      }),
    },
    example: (props) => <Avatar
    size={props.size}
    />,
  },
)
