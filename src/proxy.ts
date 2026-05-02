import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect the Keystatic admin panel with a password
  if (pathname.startsWith("/keystatic") || pathname.startsWith("/api/keystatic")) {
    const password = process.env.KEYSTATIC_PASSWORD;
    if (!password) return NextResponse.next(); // No password set → open (dev only)

    // Check session cookie
    const session = request.cookies.get("ks-auth")?.value;
    if (session === password) return NextResponse.next();

    // Allow the login page itself through to avoid redirect loop
    if (pathname === "/keystatic/login") return NextResponse.next();

    // Redirect to login
    const loginUrl = new URL("/keystatic/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/keystatic/:path*", "/api/keystatic/:path*"],
};
