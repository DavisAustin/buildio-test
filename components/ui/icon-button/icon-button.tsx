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
        "secondary-accent":
          "border border-border-accent bg-bg-default text-fg-accent shadow-sm hover:bg-bg-accent-hover hover:text-fg-accent",
        tertiary: "hover:bg-bg-default-hover hover:text-fg-default",
        "tertiary-accent":
          "bg-bg-default text-fg-accent hover:bg-bg-accent-hover",
        danger:
          "bg-bg-danger-emphasis text-fg-on-emphasis shadow-sm hover:bg-bg-danger-emphasis-hover focus-visible-danger-state",
      },
      size: {
        sm: "size-6",
        default: "size-8",
      },
    },
    defaultVariants: {
      variant: "tertiary",
      size: "default",
    },
  },
);

function IconButton({
  className,
  variant,
  size,
  isLoading = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Slottable>
        {isLoading ? <Loader2 className="size-4 animate-spin" /> : children}
      </Slottable>
    </Comp>
  );
}

export { IconButton, buttonVariants };
