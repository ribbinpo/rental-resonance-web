import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "th"],

  defaultLocale: "th",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(th|en)/:path*"],
};
