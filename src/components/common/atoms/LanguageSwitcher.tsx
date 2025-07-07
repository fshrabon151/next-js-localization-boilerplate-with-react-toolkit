"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as "en" | "ar" | null;
    const initialLang = storedLang || "en";
    setLang(initialLang);
    document.documentElement.lang = initialLang;
    document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={toggleLang}
      className="relative flex w-32 h-12 rounded-full border-2 border-blue-500 overflow-hidden bg-white"
    >
      {/* Logical direction-aware background slider */}
      <div
        className={`absolute top-0 h-full w-1/2 bg-blue-600 rounded-full transition-all duration-300 z-0 ${
          lang === "en" ? "start-0" : "start-1/2"
        }`}
      />

      {/* Labels */}
      <div className="relative flex w-full z-10 text-sm font-semibold">
        <div
          className={`w-1/2 flex items-center justify-center transition-colors duration-300 ${
            lang === "en" ? "text-white" : "text-blue-600"
          }`}
        >
          English
        </div>
        <div
          className={`w-1/2 flex items-center justify-center transition-colors duration-300 ${
            lang === "ar" ? "text-white" : "text-blue-600"
          }`}
        >
          العربية
        </div>
      </div>
    </button>
  );
}
