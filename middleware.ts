import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// /uk was permanently removed (no redirect) and must return 410 Gone
// so search engines deindex it rather than treat it as a temporary error.
export function middleware(request: NextRequest) {
  return new NextResponse(
    "<!DOCTYPE html><html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>",
    {
      status: 410,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    },
  )
}

export const config = {
  matcher: "/uk",
}
