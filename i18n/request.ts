import { getRequestConfig } from "next-intl/server";

import { routing, ILOCALES } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as ILOCALES)) {
    locale = routing.defaultLocale;
  }
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Asia/Bangkok";

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone,
  };
});
