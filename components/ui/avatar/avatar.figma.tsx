import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import figma from "@figma/code-connect";

figma.connect(
  Avatar,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=104%3A13",
  {
    props: {
      size: figma.enum("size", {
        xs: "xs",
        sm: "sm",
        default: "default",
        lg: "lg",
        xl: "xl",
      }),
      imageUrl: figma.enum("type", {
        image: "https://placehold.co/400",
      }),
      initials: figma.string("initials"),
      icon: figma.instance("icon"),
    },
    example: ({ size, imageUrl, initials, icon }) => <Avatar size={size}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>{initials}{icon}</AvatarFallback>
      </Avatar>,
  },
);
