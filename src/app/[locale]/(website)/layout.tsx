import fonts from "@/app/fonts/fonts";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { localeDirections, locales } from "@/i18n/config";
import { cn } from "@/lib/utils";
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
    <html
      lang={locale}
      dir={direction}
      className={cn("bg-[#FBFCFE]", fonts.satoshi, fonts.avenirArabic)}
    >
      <body className="min-h-screen ltr:font-satoshi rtl:font-avenir-arabic">
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Navigation />
            <main className="pt-[72px] pb-12">{children}</main>
            <Footer />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
