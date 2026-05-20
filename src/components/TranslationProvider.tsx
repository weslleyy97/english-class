"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Lang } from "@/lib/translations";

type Translations = (typeof translations)[Lang];

type TranslationContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <TranslationContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within TranslationProvider");
  return context;
}
