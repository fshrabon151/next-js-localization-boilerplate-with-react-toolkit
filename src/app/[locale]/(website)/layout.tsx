import Navigation from "@/components/Navigation";
import { localeDirections, locales } from "@/i18n/config";
import { cn } from "@/lib/utils";
import StoreProvider from "@/store/StoreProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const satoshi = localFont({
  src: [
    {
      path: "../../../../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/satoshi/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const avenirArabic = localFont({
  src: [
    {
      path: "../../../../public/fonts/avenir-arabic/avenir-arabic-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/avenir-arabic/avenir-arabic-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/avenir-arabic/avenir-arabic-heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/avenir-arabic/avenir-arabic-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir-arabic",
  display: "swap",
});

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
      className={cn("bg-[#FBFCFE]", satoshi.variable, avenirArabic.variable)}
    >
      <body className="min-h-screen ltr:font-satoshi rtl:font-avenir-arabic">
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <>
              <Navigation />
              <main className="pt-[72px]">{children}</main>
              <div className="h-screen bg-slate-50 mt-9"></div>
            </>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
