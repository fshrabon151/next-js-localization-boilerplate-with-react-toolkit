"use client";

import Link from "next/link";
import { navLinks } from "./FooterData";
import { useLocalizedHref } from "./LocalizedLink";

export function FooterNavLinks() {
  const localizedHref = useLocalizedHref();

  return (
    <div className="grid grid-cols-2 gap-4 text-gray-700 md:col-span-2">
      {navLinks.map((group, i) => (
        <div key={i} className="flex flex-col space-y-2">
          {group.map(({ href, label }) => (
            <Link
              key={href}
              href={localizedHref(href)}
              className="hover:text-blue-600 text-[16px] md:text-xl font-normal"
            >
              {label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
