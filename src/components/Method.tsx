"use client";

import { useTranslation } from "./TranslationProvider";

export function Method() {
  const { t } = useTranslation();

  return (
    <section id="method" className="py-24 px-6 bg-[#0a0212] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold text-sm uppercase tracking-widest">
            {t.method.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            {t.method.title}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{t.method.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            {t.method.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.method.cards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
