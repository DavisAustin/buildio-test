import * as React from "react";

import { cn } from "@/lib/utils";

function Alert({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        "rounded-default text-body-md relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 border px-4 py-3 shadow-lg has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&_svg:not([class*='text-'])]:text-current [&>svg]:size-4 [&>svg]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-fg-muted text-body-md col-start-2 grid justify-items-start gap-1",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
