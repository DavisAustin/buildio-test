import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-default border px-2 py-0.5 text-body-sm w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible-state invalid-state transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-border-accent bg-bg-accent text-fg-accent [a&]:hover:bg-bg-accent-hover",
        secondary:
          "border-border-default bg-bg-muted text-fg-default [a&]:hover:bg-bg-subtle-hover",
        destructive:
          "border-border-danger bg-bg-danger text-fg-danger [a&]:hover:bg-bg-danger-hover focus-visible-danger-state",
        outline:
          "text-fg-default [a&]:hover:bg-bg-default-hover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
