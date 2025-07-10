"use client";

import { cn } from "@/lib/utils";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function LanguageToggler() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const lang = params.locale as string;

  const switchLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${lang}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    switchLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className={cn(
        "appearance-none relative flex w-[100px] h-[26px] items-center justify-between rounded-full border-2 border-brandBlue overflow-hidden bg-white"
      )}
    >
      {/* Background highlight for active language */}
      <div
        className={cn(
          "absolute top-0 h-full w-1/2 bg-brandBlue rounded-full transition-all duration-300 z-0",
          lang === "en" ? "start-0" : "start-1/2"
        )}
      />

      {/* English */}
      <div
        className={cn(
          "font-satoshi text-[10px] px-2 z-10 transition-colors duration-300 font-bold",
          lang === "en" ? "text-white" : "text-brandBlue"
        )}
      >
        English
      </div>

      {/* Arabic */}
      <div
        className={cn(
          "font-avenir-arabic text-[10px] px-2 z-10 transition-colors duration-300 font-bold",
          lang === "ar" ? "text-white" : "text-brandBlue"
        )}
      >
        العربية
      </div>
    </button>
  );
}
