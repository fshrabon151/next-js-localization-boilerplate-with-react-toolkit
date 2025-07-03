// middleware.ts
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "../src/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale, // Must match next.config.js
});

export const config = {
  matcher: ["/", "/:locale(en|ar)/:path*"],
  // Only redirect root `/` and URLs without locale prefix.
};
