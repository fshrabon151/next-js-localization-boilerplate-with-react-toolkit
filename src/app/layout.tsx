import { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css"; // Ensure global styles are imported
export const metadata: Metadata = {
  title: "Hawamsh",
  description:
    "Access real-time financing offers tailored to your needs. From the comfort of your home.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
