import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "./alert-dialog";
import { figma } from "@figma/code-connect";

figma.connect(
  AlertDialog,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=184-643&t=fj0kKDbslWnVPTgK-11",
  {
    props: {
      alertDialogHeader: figma.nestedProps("AlertDialogHeader", {
        title: figma.string("title"),
        description: figma.string("description"),
      })
    },
    example: ({alertDialogHeader}) => (
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertDialogHeader.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertDialogHeader.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* Button text is not dynamic. Must be edited manually */}
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
  },
);
