"use client";

import { useTranslation } from "./TranslationProvider";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          ✦ English Classes
        </div>
        <p className="mb-6 text-gray-500">
          {t.footer.tagline}
        </p>
        <div className="border-t border-white/5 pt-6">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} English Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
