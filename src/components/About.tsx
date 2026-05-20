export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f0518] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Teacher photo */}
        <div className="relative animate-slide-in-left flex justify-center">
          <div className="relative">
            {/* Glow behind photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-40 scale-95" />
            {/* Photo frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-pink-500/30 neon-border">
              {/* 
                REPLACE: swap the image path with your own photo
                e.g. /english-class/images/teacher.jpg — just drop it in public/images/ 
              */}
              <img
                src="/english-class/images/teacher.svg"
                alt="English teacher"
                className="w-[350px] h-[400px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-sm shadow-lg shadow-pink-500/30 animate-float">
              ✨ Teacher
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="animate-slide-in-right">
          <span className="text-pink-400 font-bold text-sm uppercase tracking-widest">
            ♡ About Me
          </span>
          <h2 className="text-4xl font-black text-white mt-3 mb-6 leading-tight">
            Passionate About
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"> Your Success</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I&apos;m a dedicated English teacher who makes learning feel exciting,
            not boring. Whether you need English for work, travel, or just
            because it&apos;s cool — I&apos;ll create a vibe that works for you.
          </p>
          <div className="flex gap-6">
            <div className="text-center p-4 bg-pink-500/10 border border-pink-500/20 rounded-2xl">
              <div className="text-3xl font-black bg-gradient-to-b from-pink-400 to-purple-400 bg-clip-text text-transparent">500+</div>
              <div className="text-xs text-gray-400 mt-1">Students</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
              <div className="text-3xl font-black bg-gradient-to-b from-purple-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
              <div className="text-xs text-gray-400 mt-1">Years</div>
            </div>
            <div className="text-center p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
              <div className="text-3xl font-black bg-gradient-to-b from-cyan-400 to-pink-400 bg-clip-text text-transparent">⭐ 4.9</div>
              <div className="text-xs text-gray-400 mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
