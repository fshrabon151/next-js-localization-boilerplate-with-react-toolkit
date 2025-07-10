"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography } from "../atoms/Typography";
import { socialLinks } from "./FooterData";

export function FooterLeftColumn() {
  return (
    <div className="space-y-4">
      <Image
        src="/images/footerLogo.png"
        alt="hawamsh logo"
        width={171}
        height={52}
      />
      <Typography className="max-w-xs">
        Simple, secure financing backed by trusted banks in Saudi Arabia.
      </Typography>
      <div className="flex space-x-4 font-normal">
        {socialLinks.map(({ href, label, color, icon }, i) => (
          <Link
            key={i}
            href={href}
            aria-label={label}
            className={`text-gray-500 ${color}`}
          >
            <Image src={icon} alt={label} width={28} height={28} />
          </Link>
        ))}
      </div>
    </div>
  );
}
