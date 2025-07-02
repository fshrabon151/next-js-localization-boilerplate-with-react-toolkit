import { hasLocale } from "next-intl";
import { defineRouting } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./config";

const routing = defineRouting({
  locales,
  defaultLocale,
});

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (
    await import(`../../messages/${locale}.json`, {
      assert: { type: "json" },
    })
  ).default;

  return {
    locale,
    messages,
  };
});
