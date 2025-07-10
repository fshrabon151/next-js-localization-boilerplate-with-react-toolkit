"use client";
import { FooterAppButtons } from "./FooterAppButtons";
import { FooterLeftColumn } from "./FooterLeftColumn";
import { FooterNavLinks } from "./FooterNavLinks";

export default function Footer() {
  return (
    <footer
      className="bg-white"
      style={{ boxShadow: "0px -8px 24px 0px #00000005" }}
    >
      <div className="pt-10 pb-5 md:py-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm container">
        <FooterLeftColumn />
        <div className="hidden lg:block"></div>
        <FooterNavLinks />
        <FooterAppButtons />
      </div>

      <div className="border-t border-gray-200 mt-6 py-4 text-center text-[16px] md:text-lg font-medium text-brandRichBlack-60 container">
        ©{new Date().getFullYear()} hawamsh. All rights reserved.
      </div>
    </footer>
  );
}
