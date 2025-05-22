import React from "react";
import { Calendar } from "./calendar";
import { figma } from "@figma/code-connect";


figma.connect(
  Calendar,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=182-585&t=fj0kKDbslWnVPTgK-11",
  {
    props: {

    },
    example: ({  }) => (
      <Calendar
        mode="single"
      />
    ),
  },
);