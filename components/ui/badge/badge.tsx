import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-default w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible-state invalid-state transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "border bg-bg-default text-fg-default [&_svg:not([class*='text-'])]:text-fg-muted [a&]:hover:bg-bg-default-hover",
        secondary: "bg-bg-muted text-fg-default [&_svg:not([class*='text-'])]:text-fg-muted [a&]:hover:bg-bg-subtle-hover",
        emphasis:
          "bg-bg-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-emphasis-hover",
        accent:
          "bg-bg-accent-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-accent-emphasis-hover",
        info: "bg-bg-info-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-info-emphasis-hover",
        new: "bg-bg-new-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-new-emphasis-hover",
        success:
          "bg-bg-success-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-success-emphasis-hover",
        attention:
          "bg-bg-attention-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-attention-emphasis-hover",
        danger:
          "bg-bg-danger-emphasis text-fg-on-emphasis [a&]:hover:bg-bg-danger-emphasis-hover",
      },
      size: {
        sm: "text-body-sm min-w-5 h-5 px-1 gap-0.5 [&>svg]:size-3",
        default: "text-body-md min-w-6 h-6 px-2 gap-1 [&>svg]:size-3.5",
        lg: "text-body-lg min-w-7 h-7 p-2 gap-1 [&>svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
