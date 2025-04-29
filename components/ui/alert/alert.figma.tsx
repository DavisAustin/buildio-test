import React from "react";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { figma } from "@figma/code-connect";
import { faCircleCheck, faCircleExclamation, faCircleInfo } from "@fortawesome/pro-solid-svg-icons";

figma.connect(
  Alert,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=182-585&t=fj0kKDbslWnVPTgK-11",
  {
    props: {
      variant: figma.enum("variant", {
        default: undefined,
        success: <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-fg-success size-4"
              />,
        info: <FontAwesomeIcon
                icon={faCircleInfo}
                className="text-fg-info size-4"
              />,
        danger: <FontAwesomeIcon
                icon={faCircleExclamation}
                className="text-fg-danger size-4"
              />
      }),
      alertTitle: figma.string("alertTitle"),
      alertDescription: figma.string("alertDescription"),
    },
    example: ({ variant, alertTitle, alertDescription }) => (
      <Alert>
        {variant}
        <AlertTitle>{alertTitle}</AlertTitle>
        <AlertDescription>
          {alertDescription}
        </AlertDescription>
      </Alert>
    ),
  },
);
