import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith("/dashboard")
  const hasAdminAuth = request.cookies.get("adminAuth")

  if (isAdminPath && !hasAdminAuth) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"]
}</content>