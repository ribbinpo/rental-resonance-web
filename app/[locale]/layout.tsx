import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ILOCALES, routing } from "@/i18n/routing";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: ILOCALES }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
