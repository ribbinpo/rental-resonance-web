"use client";
import { useLocale } from "next-intl";

import { useRouter, usePathname } from "@/configs/navigation";
import { locales, localeLabels, ILocale } from "@/configs/i18n.config";

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

  const onSwitchLocaleChange = (locale: ILocale) => {
    router.replace(pathname, { locale });
  };
  return (
    <Select onValueChange={onSwitchLocaleChange} defaultValue={locale}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={localeLabels[locale as ILocale]} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((_locale) => {
          return (
            <SelectItem value={_locale} key={_locale}>
              {localeLabels[_locale]}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
