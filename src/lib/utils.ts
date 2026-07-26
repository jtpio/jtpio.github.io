import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date)
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

// format the slug to remove the date prefix
export function formatSlug(slug: string) {
  return slug.replace(/^\d+-\d+-\d+-/, "")
}

// blocks that open a post but don't read as prose in a search result
const NOT_PROSE = [
  /^(?:import|export)\s/, // MDX statements
  /^#{1,6}\s/, // headings
  /^!\[[^\]]*\]\([^)]*\)$/, // a lone image
  /^\(?\[[^\]]*\]\([^)]*\)\)?$/, // a lone link, e.g. "(Link to the notebook)"
  /^[<|]/, // JSX/HTML blocks and tables
  /^\$\$/, // display math
]

// build a plain text summary of a Markdown/MDX body, for use as a meta description
export function excerpt(body: string, maxLength = 160) {
  const prose = body
    // drop fenced code first, so its contents can't leak into the summary
    .replace(/^```[\s\S]*?^```/gm, "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !NOT_PROSE.some((pattern) => pattern.test(block)))

  if (!prose) {
    return ""
  }

  const text = prose
    .replace(/^\s{0,3}(?:>\s?|[-*+]\s+|\d+\.\s+)/gm, "") // quote and list markers
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links, keeping their text
    .replace(/<[^>]*>/g, "") // JSX/HTML tags
    .replace(/\{[^{}]*\}/g, "") // MDX expressions
    .replace(/`([^`]*)`/g, "$1") // inline code
    .replace(/[*_~]/g, "") // emphasis
    .replace(/\$+/g, "") // math delimiters
    .replace(/\s+/g, " ")
    .trim()

  if (text.length <= maxLength) {
    return text
  }

  // cut on a word boundary so the summary doesn't end mid-word
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`
}
