import { Asterisk, Burst, Dots, Scribble, Star, Squiggle } from "@/components/Doodles";
import servicesBg from "@/assets/Work-section-image.png";
import peakingOut from "@/assets/peaking-out.png";
import mascotSwinging from "@/assets/mascot-sitting-swinging.png";
import peakingSide from "@/assets/Peaking-side.png";
import peakingSideAlt from "@/assets/Peaking-side-alternate.png";

const services = [
  {
    n: "01",
    title: "Brand Identity",
    sub: "logos that live",
    body: "Visual systems built to last. Marks, typography, colour, and guidelines for brands that know exactly who they are — or need help figuring it out.",
    tags: ["Logo Design", "Identity", "Guidelines", "Print"],
    rotate: "rotate-1n",
    bg: "bg-cream",
    accent: "text-ink",
  },
  {
    n: "02",
    title: "Social Content",
    sub: "feeds with a face",
    body: "Original design and production for brands that want a social presence that actually looks like them. Consistent, creative, and built for real engagement.",
    tags: ["Instagram", "Reels", "Templates", "Strategy"],
    rotate: "rotate-1p",
    bg: "bg-ink text-cream",
    accent: "text-acid",
  },
  {
    n: "03",
    title: "AI Film Production",
    sub: "generated, not generic",
    body: "AI-assisted visual storytelling with taste. Surreal worlds, fast iteration, and a directorial eye that keeps it from looking like everyone else's AI content.",
    tags: ["AI Video", "Generative", "Concept", "Direction"],
    rotate: "rotate-2n",
    bg: "bg-acid",
    accent: "text-ink",
  },
  {
    n: "04",
    title: "Motion Design",
    sub: "movement with intention",
    body: "Animated logos, title sequences, social motion, and brand films. We make things move for a reason — not just because we can.",
    tags: ["Animation", "Brand Film", "Titles", "Social Motion"],
    rotate: "rotate-1p",
    bg: "bg-cream",
    accent: "text-blush",
  },
  {
    n: "05",
    title: "Poster Design",
    sub: "print that stops the eye",
    body: "Editorial posters, event collateral, and campaign print work. The kind you'd actually want on your wall — not just another flyer.",
    tags: ["Posters", "Editorial", "Zines", "Campaign Print"],
    rotate: "rotate-1n",
    bg: "bg-ink text-cream",
    accent: "text-acid",
  },
  {
    n: "06",
    title: "Creative Campaigns",
    sub: "one idea, everywhere",
    body: "End-to-end campaign thinking — concept, design, motion, social. For launches, activations, and cultural moments that need to land hard and look right.",
    tags: ["Campaign", "Art Direction", "Multi-channel", "Launch"],
    rotate: "rotate-1p",
    bg: "bg-acid",
    accent: "text-ink",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 md:px-8 py-24 md:py-36 border-t-[3px] border-ink overflow-x-clip">
      <img
        src={servicesBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.08, mixBlendMode: "multiply", zIndex: 0 }}
      />
      <div className="max-w-[1400px] mx-auto relative z-[1]">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-20 flex-wrap">
          <div>
            <span className="font-hand text-2xl text-blush flex items-center gap-2" style={{ transform: "rotate(-0.4deg)" }}>
              <Star size={24} /> what we create
            </span>
            <h2 className="text-5xl md:text-7xl mt-2">
              Six disciplines,<br />
              <span className="italic font-display">one studio.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed">
            Most projects blend two or three. We work as one team — so the brand identity,
            the motion, and the social content all speak the same language.
            <Squiggle className="mt-3 text-blush" width={180} />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {services.map((s) => (
            <div key={s.n} className="relative group">

              {s.n === "03" ? (
                <img
                  src={peakingSide}
                  alt="" aria-hidden="true"
                  className="absolute top-4 left-0 h-28 pointer-events-none z-0
                             opacity-0 translate-x-0
                             group-hover:-translate-x-[80%] group-hover:opacity-100
                             transition-all duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                />
              ) : s.n === "04" ? (
                <img
                  src={peakingSideAlt}
                  alt="" aria-hidden="true"
                  className="absolute top-0 right-0 h-28 pointer-events-none z-0
                             opacity-0 translate-x-0
                             group-hover:translate-x-[80%] group-hover:-translate-y-[5%] group-hover:opacity-100
                             transition-all duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                />
              ) : s.n === "01" ? (
                <img
                  src={mascotSwinging}
                  alt="" aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-32 pointer-events-none z-0
                             translate-y-[30%] opacity-0
                             group-hover:-translate-y-[62%] group-hover:opacity-100 group-hover:z-[2]
                             transition-all duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                />
              ) : (
                <img
                  src={peakingOut}
                  alt="" aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 pointer-events-none z-0
                             translate-y-[10%] opacity-0
                             group-hover:-translate-y-[60%] group-hover:opacity-100 group-hover:rotate-6
                             transition-all duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                />
              )}

              <article
                className={`relative z-[1] ${s.bg} ink-border-thick p-7 md:p-10 ${s.rotate} hover:rotate-0 transition-transform duration-300 shadow-hard`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-7xl md:text-8xl font-black leading-none">{s.n}</span>
                  <Burst className={s.accent} size={50} />
                </div>
                <h3 className="text-3xl md:text-4xl mb-2">{s.title}</h3>
                <p className={`font-hand text-2xl mb-5 ${s.accent}`}>{s.sub}</p>
                <p className="text-base leading-relaxed mb-6 opacity-90 max-w-md">{s.body}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs uppercase tracking-wider px-2.5 py-1 border-2 border-current">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <Scribble className="absolute right-6 top-10 text-ink/30" size={120} />
      <Asterisk className="absolute bottom-16 left-8 text-blush/60 hidden md:block" size={16} />
      <Dots className="absolute top-16 left-[42%] text-ink/25 hidden md:block" size={20} />
    </section>
  );
}
