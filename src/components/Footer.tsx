"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "./common/atoms/Typography";
import Copyright from "./Copyright";

const socialLinks = [
  {
    href: "#",
    label: "Facebook",
    color: "hover:text-blue-600",
    icon: "/images/facebook.svg",
  },
  {
    href: "#",
    label: "Instagram",
    color: "hover:text-pink-500",
    icon: "/images/instagram.svg",
  },
  {
    href: "#",
    label: "X",
    color: "hover:text-black",
    icon: "/images/x.svg",
  },
];

const navLinks = [
  [
    { href: "/", label: "Home" },
    { href: "/loans", label: "My Loans" },
    { href: "/notifications", label: "Notifications" },
    { href: "/profile", label: "My Profile" },
  ],
  [
    { href: "/faq", label: "FAQ" },
    { href: "/support", label: "Help / Support" },
    { href: "/terms", label: "Terms and Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
];

const appButtons = [
  {
    href: "#",
    img: "/images/googleplay.png",
    alt: "Get it on Google Play",
  },
  {
    href: "#",
    img: "/images/appstore.png",
    alt: "Download on the App Store",
  },
];

export default function Footer() {
  const locale = useLocale();

  // Prepend locale to href if not an external link
  const localizedHref = (href: string) => {
    if (href.startsWith("http") || href.startsWith("#")) return href;
    return `/${locale}${href}`;
  };

  return (
    <footer
      className="bg-white"
      style={{ boxShadow: "0px -8px 24px 0px #00000005" }}
    >
      <div className="pt-10 pb-5 md:py-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm container">
        {/* Left Column */}
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
                <Image
                  src={icon}
                  alt={label}
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:block"></div>

        {/* Center Links */}
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

        {/* App Buttons */}
        <div className="flex justify-start md:justify-end">
          <div className="grid grid-cols-2 md:flex md:flex-col md:justify-center items-center gap-4">
            {appButtons.map(({ href, img, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={img}
                  alt={alt}
                  width={160}
                  height={48}
                  className="w-[152px] h-[44px] md:w-[190px] md:h-[55px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
}
