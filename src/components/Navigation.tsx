"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations("common");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link
              href={`/${locale}`}
              className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hover:bg-blue-700 px-3 py-2 rounded-md font-medium"
            >
              {t("contact")}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
