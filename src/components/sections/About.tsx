import { Burst, Scribble, Star } from "@/components/Doodles";

export function About() {
  return (
    <section id="about" className="relative px-4 md:px-8 py-24 md:py-36 border-t-[3px] border-ink">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
        <div className="relative">
          <div className="sketch-border bg-cream p-8 rotate-1n shadow-hard">
            <span className="font-hand text-3xl text-blush block mb-2">our pov</span>
            <p className="font-display text-3xl md:text-4xl leading-tight">
              We see what's <span className="italic highlight-acid">missing</span> — then we make it.
            </p>
          </div>
          <Burst className="absolute -bottom-6 -left-6 text-acid" size={70} />
          <Scribble className="absolute top-1/2 -right-16 text-ink/60 hidden md:block" size={120} />
        </div>

        <div>
          <span className="font-hand text-2xl text-blush flex items-center gap-2 mb-2">
            <Star size={22} /> about the studio
          </span>
          <h2 className="text-5xl md:text-7xl mb-8">
            We're a small studio with a <span className="italic font-display highlight-acid">big eye.</span>
          </h2>
          <div className="space-y-5 text-lg md:text-xl leading-relaxed max-w-xl">
            <p>
              VEWS is a creative content studio for brands that would rather be remembered than approved of.
              We make video, design, and AI-driven work — the kind that lives somewhere between a magazine spread,
              a music video, and a sticker on a laptop.
            </p>
            <p>
              No template decks. No "innovative solutions." Just a few people who really care how a frame is cut,
              how a poster reads at 3 a.m., and why one font is funnier than another.
            </p>
            <p className="font-hand text-2xl text-blush">
              — made by humans, with a healthy obsession.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
