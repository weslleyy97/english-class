"use client";

import { useTranslation } from "./TranslationProvider";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0518]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(236,72,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Floating sparkles */}
      <div className="absolute top-20 left-[15%] text-2xl animate-float">✦</div>
      <div className="absolute top-40 right-[20%] text-xl animate-float" style={{ animationDelay: '0.5s' }}>♦</div>
      <div className="absolute bottom-32 left-[25%] text-lg animate-float" style={{ animationDelay: '1s' }}>✧</div>
      <div className="absolute top-[60%] right-[15%] text-2xl animate-float" style={{ animationDelay: '1.5s' }}>★</div>
      <div className="absolute top-[30%] left-[10%] text-sm animate-sparkle">💫</div>
      <div className="absolute bottom-[25%] right-[10%] text-sm animate-sparkle" style={{ animationDelay: '0.7s' }}>⭐</div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="inline-block px-5 py-2 mb-8 text-sm font-bold text-pink-300 bg-pink-500/10 backdrop-blur-sm rounded-full border border-pink-500/30 neon-border animate-fade-in uppercase tracking-widest">
          {t.hero.badge}
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none animate-fade-in-up text-glow">
          {t.hero.title1}
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl mx-auto animate-fade-in-up">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <a
            href="#contact"
            className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300"
          >
            {t.hero.cta}
          </a>
          <a
            href="#about"
            className="px-10 py-4 border-2 border-purple-400/40 text-purple-300 font-semibold rounded-full text-lg hover:bg-purple-500/10 hover:border-purple-400 backdrop-blur-sm transition-all duration-300"
          >
            {t.hero.learnMore}
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0518] to-transparent" />
    </section>
  );
}
