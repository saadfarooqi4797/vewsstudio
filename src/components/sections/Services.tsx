import { Burst, EyeDoodle, Scribble, Star, Squiggle } from "@/components/Doodles";

const services = [
  {
    n: "01",
    title: "Video Editing",
    sub: "cuts that breathe",
    body: "Edits with rhythm, pace and personality. Short-form, long-form, music-driven, narrative. We cut for feeling first.",
    tags: ["Reels", "YT", "Brand Films", "Music Vids"],
    rotate: "rotate-1n",
    bg: "bg-cream",
    accent: "text-ink",
  },
  {
    n: "02",
    title: "Graphic Design",
    sub: "posters, type, identity",
    body: "Editorial, expressive, opinionated. Identity systems, campaign visuals, and design that looks like it was made by people, not templates.",
    tags: ["Identity", "Print", "Web", "Type"],
    rotate: "rotate-1p",
    bg: "bg-ink text-cream",
    accent: "text-acid",
  },
  {
    n: "03",
    title: "AI Videos",
    sub: "weird in a good way",
    body: "We bend generative tools into something that actually has taste. New visual language, surreal worlds, fast iteration.",
    tags: ["Generative", "VFX", "Concept", "R&D"],
    rotate: "rotate-2n",
    bg: "bg-acid",
    accent: "text-ink",
  },
  {
    n: "04",
    title: "Social Media",
    sub: "feeds with a face",
    body: "Strategy + production for brands who want a feed that doesn't look like the algorithm threw up. We make it consistent, weird, and yours.",
    tags: ["Strategy", "Content", "Direction", "Calendar"],
    rotate: "rotate-1p",
    bg: "bg-cream",
    accent: "text-blush",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 md:px-8 py-24 md:py-36 border-t-[3px] border-ink">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-20 flex-wrap">
          <div>
            <span className="font-hand text-2xl text-blush flex items-center gap-2">
              <Star size={24} /> what we do
            </span>
            <h2 className="text-6xl md:text-8xl mt-2">
              Four <span className="italic font-display">things,</span><br />done loud.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed">
            Pick one, pick all four. We work as a studio — most projects pull from a few of these at once.
            <Squiggle className="mt-3 text-blush" width={180} />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {services.map((s) => (
            <article
              key={s.n}
              className={`group relative ${s.bg} ink-border-thick p-7 md:p-10 ${s.rotate} hover:rotate-0 transition-transform duration-300 shadow-hard`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display text-7xl md:text-8xl font-black leading-none">{s.n}</span>
                <Burst className={s.accent} size={50} />
              </div>
              <h3 className="text-4xl md:text-5xl mb-2">{s.title}</h3>
              <p className={`font-hand text-2xl mb-5 ${s.accent}`}>{s.sub}</p>
              <p className="text-base leading-relaxed mb-6 opacity-90 max-w-md">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs uppercase tracking-wider px-2.5 py-1 border-2 border-current">
                    {t}
                  </span>
                ))}
              </div>
              <EyeDoodle className={`absolute -top-5 -right-3 ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity`} size={50} />
            </article>
          ))}
        </div>
      </div>

      <Scribble className="absolute right-6 top-10 text-ink/40" size={120} />
    </section>
  );
}
