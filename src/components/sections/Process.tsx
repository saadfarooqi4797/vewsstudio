import { Arrow, Burst, Dots, HandNumber, Scribble, Star } from "@/components/Doodles";

const steps = [
  {
    n: 1,
    title: "Discover",
    body: "We listen, dig, look at your shelf, your feed, your taste. Then we steal nothing and propose a point of view.",
    note: "the staring phase",
    rot: "rotate-1n",
  },
  {
    n: 2,
    title: "Create",
    body: "We sketch, shoot, edit, design, render. Loud opinions, fast iterations, lots of receipts. You see real work, not mood-words.",
    note: "where the magic (and sweat) happens",
    rot: "rotate-1p",
  },
  {
    n: 3,
    title: "Deliver",
    body: "Files, formats, schedules, captions, edits for every platform. Then we hand it off — or stay on as your in-house weirdos.",
    note: "ship & celebrate",
    rot: "rotate-1n",
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-4 md:px-8 py-24 md:py-36 bg-acid border-y-[3px] border-ink overflow-hidden">
      <Burst className="absolute top-10 left-[3%] text-ink/20 hidden md:block" size={55} />
      <Scribble className="absolute bottom-10 right-[3%] text-ink/25 hidden md:block" size={100} />
      <Dots className="absolute bottom-32 left-[42%] text-ink/25 hidden md:block" size={20} />
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-16">
          <span className="font-hand text-2xl flex items-center justify-center gap-2" style={{ transform: 'rotate(-0.9deg)' }}>
            <Star size={22} /> how it works <Star size={22} />
          </span>
          <h2 className="text-6xl md:text-8xl mt-2">
            <span className="underline-scribble">Three moves,</span> <span className="italic font-display">no fluff.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className={`bg-cream ink-border-thick p-8 ${s.rot} shadow-hard h-full`}>
                <div className="flex items-baseline justify-between mb-4">
                  <HandNumber n={s.n} className="text-ink" />
                  <span className="font-hand text-xl text-blush rotate-1p">{s.note}</span>
                </div>
                <h3 className="text-4xl md:text-5xl mb-4">{s.title}</h3>
                <p className="text-base leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 z-10">
                  <Arrow className="text-ink" size={80} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
