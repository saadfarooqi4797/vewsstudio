import logo from "@/assets/vews-logo.png";
import { Arrow, Burst, EyeDoodle, Scribble, Star } from "@/components/Doodles";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden">
      {/* floating doodles */}
      <Star className="absolute top-28 left-[8%] text-ink animate-float" size={32} />
      <Burst className="absolute top-40 right-[12%] text-blush animate-float" size={70} />
      <Scribble className="absolute bottom-32 left-[15%] text-ink/60" size={140} />
      <EyeDoodle className="absolute top-[42%] right-[6%] text-ink rotate-2p hidden md:block" size={90} />
      <Star className="absolute bottom-20 right-[20%] text-ink animate-wobble" size={28} />

      <div className="max-w-[1400px] mx-auto relative">
        {/* meta line */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="w-10 h-px bg-ink" />
          <span className="font-hand text-xl text-blush">est. a creative studio</span>
          <span className="text-2xl">✺</span>
          <span className="text-xs uppercase tracking-[0.3em] font-medium">Earth / Internet</span>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-6 items-end">
          <h1 className="text-[14vw] md:text-[10.5vw] lg:text-[9.5vw] leading-[0.85]">
            <span className="block">Visuals that</span>
            <span className="block">
              <span className="highlight-acid italic font-display">stop</span> the
            </span>
            <span className="block flex items-center gap-4 flex-wrap">
              scroll
              <span className="inline-block relative">
                <img
                  src={logo}
                  alt=""
                  className="h-[0.85em] w-auto inline-block align-middle rotate-2p animate-float"
                  style={{ ["--r" as string]: "3deg" }}
                />
              </span>
              <span className="font-hand text-blush text-[0.45em] -ml-2">.</span>
            </span>
          </h1>

          <div className="flex flex-col items-start md:items-end gap-4 max-w-sm md:text-right">
            <p className="text-base md:text-lg leading-relaxed">
              We're <span className="font-display italic font-black">VEWS Studio</span> — a creative collective making
              video, design, and AI-driven content for brands that refuse to look like everybody else.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#contact"
                className="bg-ink text-cream px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="px-4 py-3 font-bold underline underline-offset-4 decoration-2 hover:text-blush"
              >
                View work ↓
              </a>
            </div>
          </div>
        </div>

        {/* footer of hero — marquee */}
        <div className="mt-16 md:mt-24 -mx-4 md:-mx-8 border-y-[3px] border-ink py-3 overflow-hidden bg-acid">
          <div className="flex gap-8 whitespace-nowrap animate-marquee font-display text-2xl md:text-3xl font-black">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-8 items-center">
                {["VIDEO EDITING", "GRAPHIC DESIGN", "AI VIDEOS", "SOCIAL MEDIA", "MOTION", "DIRECTION", "ZINES & POSTERS"].map((t, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-8">
                    {t}
                    <Star size={22} className="text-ink shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* hand arrow pointing down */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink/70">
          <span className="font-hand text-lg">scroll, look around</span>
          <Arrow className="rotate-90" size={50} />
        </div>
      </div>
    </section>
  );
}
