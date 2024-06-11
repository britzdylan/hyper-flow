import type { HttpContext } from '@adonisjs/core/http'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isActive(route: string, ctx: HttpContext, style: string) {
  return route === ctx.request.url() ? style : ''
}
