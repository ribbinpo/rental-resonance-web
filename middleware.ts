import createMiddleware from "next-intl/middleware";
import { NextResponse, NextRequest } from "next/server";

import { LOCALES, routing } from "./i18n/routing";
import { isTokenExpired } from "./utils/jwt.util";
import { getNewATAction } from "./actions/auth/getNewAT.action";

const publicPages = ["/auth/login"];

const handleI18nRouting = createMiddleware(routing);

// export default createMiddleware(routing);
export default async function middleware(req: NextRequest, res: NextResponse) {
  const publicPathnameRegex = RegExp(
    `^(/(${LOCALES.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const [, locale, ...segments] = req.nextUrl.pathname.split("/");

  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");
  if (!isPublicPage) {
    if (
      !accessToken ||
      (accessToken.value && isTokenExpired(accessToken.value))
    ) {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      if (refreshToken) {
        try {
          const newAT = await getNewATAction();

          if (newAT.success) {
            req.cookies.set("accessToken", newAT?.accessToken!);
            req.cookies.set("refreshToken", newAT?.refreshToken!);
          }
        } catch (error) {
          if (typeof error === "string") {
            console.log(JSON.parse(error));
          }
          req.nextUrl.pathname = `/${locale}/auth/login`;
          req.cookies.delete("accessToken");
          req.cookies.delete("refreshToken");
        }
      } else {
        req.nextUrl.pathname = `/${locale}/auth/login`;
        req.cookies.delete("accessToken");
        req.cookies.delete("refreshToken");
      }
    }
  } else {
    if (accessToken && !isTokenExpired(accessToken.value)) {
      req.nextUrl.pathname = `/${locale}`;
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return handleI18nRouting(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(th|en)/:path*"],
};
