import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";
import figma from "@figma/code-connect";

figma.connect(
  Accordion,
  "https://www.figma.com/design/7gFdOSsbUxcHxyp84Ql45Z/%F0%9F%8C%90-OPL-Components-Beta?node-id=175-709&t=05zr8qkSdVaRrvJn-4",
  {
    props: {

    },
    example: () => (
      // This is the basic structure for Accordions. Code Connect is too rudimentary to
      // to support the full component structure, so we have to do it manually.
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion Trigger Label...</AccordionTrigger>
          <AccordionContent>
            Accordion Content...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion Trigger Label...</AccordionTrigger>
          <AccordionContent>
            Accordion Content...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Accordion Trigger Label...</AccordionTrigger>
          <AccordionContent>
            Accordion Content...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
);
