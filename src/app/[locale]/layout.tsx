import Navigation from "@/components/Navigation";
import { localeDirections, locales } from "@/lib/i18n/config";
import StoreProvider from "@/lib/store/StoreProvider";
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
    <html lang={locale} dir={direction}>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
