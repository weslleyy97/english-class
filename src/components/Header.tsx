"use client";

import { useTranslation } from "./TranslationProvider";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-pink-500/20">
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          ✦ English Classes
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#about" className="text-gray-300 hover:text-pink-400 font-medium transition-colors text-sm">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#method" className="text-gray-300 hover:text-pink-400 font-medium transition-colors text-sm">
              {t.nav.method}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full text-sm hover:shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all"
            >
              {t.nav.freeClass}
            </a>
          </li>
          <li>
            <LangToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
