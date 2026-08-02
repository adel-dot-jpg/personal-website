import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  if (hostname === "vitals.adelfaruque.me") {
    return NextResponse.rewrite(new URL("/vitals", req.url));
  }

  if (
    (hostname === "adelfaruque.me" || hostname === "www.adelfaruque.me") &&
    url.pathname === "/vitals"
  ) {
    return NextResponse.redirect("https://vitals.adelfaruque.me", 301);
  }

  return NextResponse.next();
}
