import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get the base path for GitHub Pages deployment
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/portfolio' : ''
}

// Get the full asset path with base path prefix
export function getAssetPath(path: string) {
  if (!path) return path
  // If path already starts with http(s), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  // If path doesn't start with /, add it
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${getBasePath()}${normalizedPath}`
}
