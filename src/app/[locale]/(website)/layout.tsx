import { FontWrapper } from "@/components/FontWrapper";
import Navigation from "@/components/Navigation";
import { localeDirections, locales } from "@/i18n/config";
import StoreProvider from "@/store/StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure locale is valid
  if (!locales.includes(locale as any)) {
    return null;
  }

  const messages = await getMessages();
  const direction = localeDirections[locale as keyof typeof localeDirections];

  return (
    <html lang={locale} dir={direction} className="bg-[#FBFCFE]">
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <FontWrapper>
              <Navigation />
              <main className="pt-[72px]">{children}</main>
              <div className="h-screen bg-slate-50"></div>
            </FontWrapper>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
