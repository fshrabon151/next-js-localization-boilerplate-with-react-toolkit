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
        "relative flex w-[110px] h-[26px] rounded-full border-2 border-brandBlue overflow-hidden bg-white"
      )}
    >
      {/* Background slider */}
      <div
        className={cn(
          "absolute top-0 h-full w-1/2 bg-brandBlue rounded-full transition-all duration-300 z-0",
          lang === "en" ? "start-0" : "start-1/2"
        )}
      />

      {/* Labels */}
      <div className="relative flex w-full z-10 text-xs font-semibold">
        <div
          className={cn(
            "w-1/2 flex items-center justify-center transition-colors duration-300",
            lang === "en" ? "text-white" : "text-brandBlue",
            "font-satoshi"
          )}
        >
          English
        </div>
        <div
          className={cn(
            "w-1/2 flex items-center justify-center transition-colors duration-300",
            lang === "ar" ? "text-white" : "text-brandBlue",
            "font-avenir-arabic"
          )}
        >
          العربية
        </div>
      </div>
    </button>
  );
}
