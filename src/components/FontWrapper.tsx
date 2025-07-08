"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Detect locale from pathname
function getLocaleFromPath(pathname: string) {
  const parts = pathname.split("/");
  return parts[1] || "en";
}

export function FontWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const currentLocale = getLocaleFromPath(pathname);
    setLocale(currentLocale);
  }, [pathname]);

  const isArabic = locale === "ar";

  return (
    <div className={cn(isArabic ? "font-avenir-arabic" : "font-satoshi")}>
      {children}
    </div>
  );
}
