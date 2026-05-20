"use client";

import { useTranslation } from "./TranslationProvider";

const benefitIcons = ["📧", "🎥", "⏱️"];
const benefitColors = ["pink", "purple", "cyan"];

const WHATSAPP_NUMBER = "5511920047538";

export function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const level = data.get("level") as string;
    const goals = data.get("goals") as string;

    const message = [
      `Olá! Meu nome é ${name}.`,
      `Meu nível de inglês: ${level}.`,
      goals ? `Meus objetivos: ${goals}` : "",
      `Gostaria de agendar minha aula experimental gratuita!`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

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
          <form onSubmit={handleSubmit} className="space-y-5">
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
              className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl text-lg hover:shadow-xl hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
