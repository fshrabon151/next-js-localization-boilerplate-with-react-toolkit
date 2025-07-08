"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageToggler from "./LanguageToggler";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-rich-black-20">
      <div className="container">
        <div className="flex justify-between items-center h-[72px]">
          <Link href={"/"}>
            <Image
              src={"/images/headerLogo.png"}
              alt="Header Logo"
              width={104}
              height={36}
            />
          </Link>

          {/* Desktop links */}
          <div className="flex justify-between items-center gap-6">
            <LanguageToggler />
            <svg
              width={2}
              height={32}
              viewBox="0 0 2 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0V32"
                stroke="#495A6E"
                strokeOpacity="0.2"
                strokeWidth="1.5"
              />
            </svg>
            <Button variant={"secondary"} size={"auth"}>
              Login
            </Button>
            <Button className="hidden md:block" size={"auth"}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
