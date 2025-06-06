import { clsx, type ClassValue } from "clsx"
import { twMerge } from "../twMergeConfig"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
