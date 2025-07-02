// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "../src/lib/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale: "en", // Must match next.config.js
});

export const config = {
  matcher: ["/", "/:locale(en|ar)/:path*"],
  // Only redirect root `/` and URLs without locale prefix.
};
