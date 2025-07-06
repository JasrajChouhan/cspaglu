import { waitListStatus } from "actions";
import { PATH } from "constant";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  if (pathname.startsWith(PATH.COURSES)) {
    try {
      const data = await waitListStatus();

      const isWaitListEnded = data?.flags?.waitlistEnded;

      if (!isWaitListEnded) {
        return NextResponse.redirect(new URL("/", origin));
      }
    } catch (error) {
      console.error("Middleware error:", error);
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/courses/:path*",
};
