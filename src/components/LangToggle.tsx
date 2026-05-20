"use client";

import { useTranslation } from "./TranslationProvider";

export function LangToggle() {
  const { lang, setLang } = useTranslation();

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="px-3 py-1.5 text-xs font-bold rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-gray-300 hover:border-pink-500/40 hover:text-pink-300 transition-all"
      aria-label="Toggle language"
    >
      {lang === "pt" ? "EN 🇺🇸" : "PT 🇧🇷"}
    </button>
  );
}
