import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import "./globals.css"; // Ensure global styles are imported
export const metadata: Metadata = {
  title: "Hawamsh",
  description:
    "Access real-time financing offers tailored to your needs. From the comfort of your home.",
};

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-BlackItalic.otf",
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
      path: "../../public/fonts/avenir-arabic/avenir-arabic-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir-arabic/avenir-arabic-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir-arabic/avenir-arabic-heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir-arabic/avenir-arabic-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir-arabic",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={cn(satoshi.variable, avenirArabic.variable)}>
      <body>{children}</body>
    </html>
  );
}
