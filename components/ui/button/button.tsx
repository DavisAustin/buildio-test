import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-default text-body-md disabled-state [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible-state invalid-state",
  {
    variants: {
      variant: {
        primary:
          "bg-bg-accent-emphasis text-fg-on-emphasis shadow-sm hover:bg-bg-accent-emphasis-hover",
        secondary:
          "border border-border-default bg-bg-default text-fg-default shadow-sm hover:bg-bg-default-hover hover:text-fg-default",
        tertiary: "hover:bg-bg-default-hover hover:text-fg-default",
        "secondary-accent":
        "border border-border-accent bg-bg-default text-fg-accent shadow-sm hover:bg-bg-accent-hover hover:text-fg-accent",
        "tertiary-accent":
          "bg-bg-default text-fg-accent hover:bg-bg-accent-hover",
        "primary-danger":
          "bg-bg-danger-emphasis text-fg-on-emphasis shadow-sm hover:bg-bg-danger-emphasis-hover focus-visible-danger-state",
        "secondary-danger":
          "border border-border-danger bg-bg-default text-fg-danger shadow-sm hover:bg-bg-danger-hover hover:text-fg-danger focus-visible-danger-state",
        "tertiary-danger":
          "bg-bg-default text-fg-danger hover:bg-bg-danger-hover focus-visible-danger-state",
        link: "text-fg-default underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-6 rounded-default gap-1.5 px-2 pb-0.25",
        default: "h-8 gap-2 px-3 pb-0.25",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  isLoading,
  leadingVisual,
  trailingVisual,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    leadingVisual?: React.ReactNode;
    trailingVisual?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Loader2 className="animate-spin" /> : leadingVisual}
      <Slottable>{children}</Slottable>
      {trailingVisual}
    </Comp>
  );
}

export { Button, buttonVariants };
