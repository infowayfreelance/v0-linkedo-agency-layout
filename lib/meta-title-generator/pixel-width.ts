// Approximate rendered pixel width for a title, based on average per-character
// widths in the proportional font Google typically uses for search result
// titles (around 18-20px Arial/Roboto). These are estimates only — actual
// rendering depends on the visitor's device, font availability and Google's
// own layout, which we cannot observe here. Never present this as the exact
// cutoff Google uses.
const CHAR_WIDTHS: Record<string, number> = {
  i: 3, j: 3, l: 3, I: 4, f: 4, t: 4, " ": 4, ".": 3, ",": 3, "'": 3, ":": 3, ";": 3, "!": 4, "|": 4, "-": 5, "(": 5,
  ")": 5, "/": 5, r: 5, J: 5,
  a: 7, b: 7, c: 6, d: 7, e: 7, g: 7, h: 7, k: 6, n: 7, o: 7, p: 7, q: 7, s: 6, u: 7, v: 6, x: 6, y: 6, z: 6,
  "?": 7, "0": 7, "1": 7, "2": 7, "3": 7, "4": 7, "5": 7, "6": 7, "7": 7, "8": 7, "9": 7,
  w: 9, A: 9, E: 9, F: 8, K: 9, L: 7, P: 9, S: 8, T: 7, U: 9, V: 9, X: 9, Y: 8, Z: 8,
  m: 11, B: 9, C: 10, D: 10, G: 10, H: 10, N: 10, O: 10, Q: 10, R: 9,
  M: 12, W: 12,
}

const DEFAULT_CHAR_WIDTH = 7

/** Estimated rendered pixel width for a title string. An approximation, not a guarantee of how any device will render it. */
export function estimatePixelWidth(text: string): number {
  let width = 0
  for (const char of text) {
    width += CHAR_WIDTHS[char] ?? DEFAULT_CHAR_WIDTH
  }
  return width
}

// Common reference points cited for where Google may start truncating a
// title on desktop and mobile search results. Treated here purely as
// guidance for our own preview — not a guaranteed Google limit.
export const DESKTOP_PIXEL_GUIDANCE = 600
export const MOBILE_PIXEL_GUIDANCE = 580
