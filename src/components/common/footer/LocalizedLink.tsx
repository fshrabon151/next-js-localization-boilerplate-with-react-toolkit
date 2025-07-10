"use client";

import { useLocale } from "next-intl";

export const useLocalizedHref = () => {
  const locale = useLocale();
  return (href: string) => {
    if (href.startsWith("http") || href.startsWith("#")) return href;
    return `/${locale}${href}`;
  };
};
