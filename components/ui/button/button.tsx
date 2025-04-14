import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-default text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-border-focus focus-visible:ring-border-focus/50 focus-visible:ring-[3px] aria-invalid:ring-border-danger-emphasis/50 aria-invalid:border-border-danger-emphasis",
  {
    variants: {
      variant: {
        default:
          "bg-bg-accent-emphasis text-fg-on-emphasis shadow-sm hover:bg-bg-accent-emphasis-hover",
        danger:
          "bg-bg-danger-emphasis text-fg-on-emphasis shadow-sm hover:bg-bg-danger-emphasis-hover focus-visible:ring-border-danger-emphasis/50",
        secondary:
          "border border-border-default bg-bg-default text-fg-default shadow-sm hover:bg-bg-default-hover hover:text-fg-default",
        "tertiary-accent":
          "bg-bg-default text-fg-accent hover:bg-bg-accent-hover",
        tertiary:
          "hover:bg-bg-default-hover hover:text-fg-default",
        link: "text-fg-default underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-3 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-default gap-1.5 px-2.5 has-[>svg]:px-2",
        lg: "h-10 rounded-default px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
