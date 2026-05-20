"use client";

import { useTranslation } from "./TranslationProvider";

const benefitIcons = ["📧", "🎥", "⏱️"];
const benefitColors = ["pink", "purple", "cyan"];

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#0f0518]">
      {/* Background glows */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left side - Info */}
        <div>
          <span className="text-pink-400 font-bold text-sm uppercase tracking-widest">
            {t.contact.label}
          </span>
          <h2 className="text-4xl font-black text-white mt-3 mb-4 leading-tight">
            {t.contact.title}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">{t.contact.titleHighlight}</span>
          </h2>

          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full text-lg font-bold shadow-xl shadow-pink-500/20 animate-pulse-glow">
            {t.contact.badge}
          </div>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {t.contact.description}
          </p>

          <div className="space-y-4">
            {t.contact.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${benefitColors[i]}-500/10 border border-${benefitColors[i]}-500/20 rounded-xl flex items-center justify-center text-xl`}>
                  {benefitIcons[i]}
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 neon-border">
          <form
            action="https://formsubmit.co/bbok.englishclass@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="New Student Interest - Free Trial Class" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label htmlFor="name" className="block mb-1.5 font-semibold text-gray-200 text-sm">
                {t.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t.contact.form.namePlaceholder}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1.5 font-semibold text-gray-200 text-sm">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t.contact.form.emailPlaceholder}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1.5 font-semibold text-gray-200 text-sm">
                {t.contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={t.contact.form.phonePlaceholder}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="level" className="block mb-1.5 font-semibold text-gray-200 text-sm">
                {t.contact.form.level}
              </label>
              <select
                id="level"
                name="level"
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              >
                <option value="" disabled className="bg-gray-900">{t.contact.form.levelPlaceholder}</option>
                {t.contact.form.levels.map((level, i) => (
                  <option key={i} value={["beginner", "elementary", "intermediate", "advanced"][i]} className="bg-gray-900">
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="goals" className="block mb-1.5 font-semibold text-gray-200 text-sm">
                {t.contact.form.goals}
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={3}
                placeholder={t.contact.form.goalsPlaceholder}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:shadow-xl hover:shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
