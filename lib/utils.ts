import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isRoutableLink(href?: string | null): boolean {
  if (!href || href === "#") return false
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")
}
