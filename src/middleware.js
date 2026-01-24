import { NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt-edge"; // ✅ use edge-compatible version

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");

  // --- 1. Global Redirects (WWW to Non-WWW, HTTP to HTTPS) ---

  // Skip redirects for local development (localhost, 127.0.0.1, or any port-based local URL)
  const isLocal =
    host &&
    (host.includes("localhost") ||
      host.includes("127.0.0.1") ||
      host.includes(":3000"));

  if (!isLocal) {
    // WWW to Non-WWW Redirect
    if (host && host.startsWith("www.")) {
      url.hostname = host.replace("www.", "");
      url.port = ""; // Explicitly remove dev ports if they leaked in
      url.protocol = "https:"; // Enforce production HTTPS
      return NextResponse.redirect(url, 301);
    }

    // HTTP to HTTPS enforcement
    const proto = request.headers.get("x-forwarded-proto");
    if (proto === "http") {
      url.protocol = "https:";
      url.port = ""; // Ensure standard HTTPS port
      return NextResponse.redirect(url, 301);
    }
  }

  // --- 2. Admin Authentication Logic ---

  if (url.pathname.startsWith("/admin")) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const decoded = await verifyToken(token);

    if (!decoded || decoded.role !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Ensure middleware only runs on relevant routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml
     * - robots.txt
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
