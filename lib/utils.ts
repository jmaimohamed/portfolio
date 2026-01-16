import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path for GitHub Pages - must match next.config.mjs basePath
export const BASE_PATH = '/portfolio'

// Get the full asset path with base path prefix (for regular <img> tags only, NOT for Next.js <Image>)
export function getAssetPath(path: string) {
  if (!path) return path
  // If path already starts with http(s), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  // If path already has the base path, return as is
  if (path.startsWith(BASE_PATH)) return path
  // If path doesn't start with /, add it
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}
