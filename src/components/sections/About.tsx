import { Burst, Star, Squiggle } from "@/components/Doodles";

export function About() {
  return (
    <section id="about" className="relative px-4 md:px-8 py-24 md:py-36 border-t-[3px] border-ink">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
        <div className="relative">
          <div className="sketch-border bg-acid p-10 inline-block rotate-1n shadow-hard">
            <div className="font-display font-black text-[5rem] md:text-[7rem] leading-none italic">
              V<span className="text-blush">★</span>W<span className="block text-right -mt-4">S</span>
            </div>
            <Squiggle className="text-ink mt-2" width={180} />
          </div>
          <span className="absolute -top-6 -right-2 font-hand text-2xl text-blush rotate-1p inline-block">
            est. small, loud →
          </span>
          <Burst className="absolute -bottom-6 -left-6 text-blush" size={70} />
          <Star className="absolute top-1/2 -right-10 text-ink hidden md:block animate-wobble" size={48} />
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
