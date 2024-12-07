"use client";
import { useLocale } from "next-intl";

import { ILOCALES, usePathname, useRouter, LOCALES } from "@/i18n/routing";

// import { useRouter, usePathname } from "@/i18n/navigation";
// import { locales, localeLabels, ILocale } from "@/i18n/i18n.config";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SwitchLanguage = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSwitchLocaleChange = (locale: ILOCALES) => {
    router.replace(pathname, { locale });
  };
  return (
    <Select onValueChange={onSwitchLocaleChange} defaultValue={locale}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={locale} />
      </SelectTrigger>
      <SelectContent>
        {LOCALES.map((_locale) => {
          return (
            <SelectItem value={_locale} key={_locale}>
              {_locale}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
