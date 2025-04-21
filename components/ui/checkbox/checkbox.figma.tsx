import React from "react"
import { Checkbox } from "./checkbox"
import figma from "@figma/code-connect"

figma.connect(
  Checkbox,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=26%3A470",
  {
    props: {
      checked: figma.enum("checkedState", {
        indeterminate: "indeterminate",
      }),
      disabled: figma.enum("state", {
        disabled: true,
      }),
    },
    example: (props) => (
      <Checkbox checked={props.checked} disabled={props.disabled} />
    ),
  },
)
