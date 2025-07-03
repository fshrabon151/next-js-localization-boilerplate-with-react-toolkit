import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css"; // Ensure global styles are imported
export const metadata: Metadata = {
  title: "MySite",
  description: "A modern multilingual app using Next.js and Redux.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
