"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker"
 
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/icon-button/icon-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/pro-solid-svg-icons";
 
export type CalendarProps = React.ComponentProps<typeof DayPicker>
 
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-body-sm",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "tertiary" })
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-fg-muted rounded-md w-8 text-body-sm font-regular",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-bg-accent [&:has([aria-selected].day-outside)]:bg-bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "tertiary" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start hover:bg-bg-accent-emphasis-hover",
        day_range_end: "day-range-end hover:bg-bg-accent--emphasis-hover",
        day_selected:
          "bg-bg-accent-emphasis text-fg-on-emphasis hover:bg-bg-accent-emphasis-hover hover:text-fg-on-emphasis focus:bg-bg-accent-emphasis focus:text-fg-on-emphasis",
        day_today: "bg-bg-muted text-fg-default",
        day_outside:
          "day-outside text-fg-muted aria-selected:bg-bg-accent aria-selected:text-fg-accent",
        day_disabled: "text-fg-disabled",
        day_range_middle:
          "aria-selected:bg-bg-accent aria-selected:text-fg-accent",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <FontAwesomeIcon icon={faChevronLeft} className={className} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <FontAwesomeIcon icon={faChevronRight} className={className} {...props} />
        ),
      }}
      {...props}
    />
  )
}
 
export { Calendar }
