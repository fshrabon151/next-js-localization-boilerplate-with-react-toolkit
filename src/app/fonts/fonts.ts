// lib/fonts.ts
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    { path: "./satoshi/Satoshi-Light.otf", weight: "300", style: "normal" },
    {
      path: "./satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    { path: "./satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./satoshi/Satoshi-Italic.otf", weight: "400", style: "italic" },
    { path: "./satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    {
      path: "./satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    { path: "./satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    {
      path: "./satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    { path: "./satoshi/Satoshi-Black.otf", weight: "900", style: "normal" },
    {
      path: "./satoshi/Satoshi-BlackItalic.otf",
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
      path: "./avenir-arabic/avenir-arabic-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./avenir-arabic/avenir-arabic-book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./avenir-arabic/avenir-arabic-heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./avenir-arabic/avenir-arabic-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir-arabic",
  display: "swap",
});

const fonts = {
  satoshi: satoshi.variable,
  avenirArabic: avenirArabic.variable,
};

export default fonts;
