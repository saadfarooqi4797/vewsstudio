import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import { Arrow, Star } from "@/components/Doodles";

const works = [
  { img: w1, title: "Eye Index", tag: "Identity / Print", cls: "md:col-span-5 md:row-span-2 rotate-1n", tape: "left-6 -top-3 -rotate-12" },
  { img: w2, title: "Tear Sheet 01", tag: "Editorial / AI", cls: "md:col-span-4 rotate-1p", tape: "right-8 -top-3 rotate-6" },
  { img: w5, title: "Hand Notes", tag: "Social Campaign", cls: "md:col-span-3 md:row-span-2 -mt-4 md:-mt-12 rotate-2p", tape: "left-1/2 -top-3 -translate-x-1/2" },
  { img: w3, title: "Third Eye", tag: "Brand Film", cls: "md:col-span-4 rotate-1n", tape: "right-6 -top-3 -rotate-3" },
  { img: w4, title: "Stage Frame", tag: "Music Video", cls: "md:col-span-5 rotate-1p -mt-6 md:-mt-10", tape: "left-10 -top-3 rotate-12" },
];

export function Work() {
  return (
    <section id="work" className="relative px-4 md:px-8 py-24 md:py-36 bg-ink text-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <span className="font-hand text-2xl text-acid flex items-center gap-2">
              <Star size={24} className="text-acid" /> selected work
            </span>
            <h2 className="text-6xl md:text-8xl mt-2 text-cream">
              An art wall<br /><span className="italic font-display text-acid">of recent</span> obsessions.
            </h2>
          </div>
          <a href="#contact" className="font-hand text-2xl text-acid flex items-center gap-3 hover:gap-5 transition-all">
            commission a piece <Arrow size={70} className="text-acid" />
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          {works.map((w, i) => (
            <figure
              key={i}
              className={`relative group ${w.cls} cursor-pointer`}
            >
              <div className="relative bg-cream p-3 pb-12 shadow-hard hover:-translate-y-1 hover:rotate-0 transition-transform duration-300">
                <span className={`tape ${w.tape}`} />
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-auto block aspect-[4/5] md:aspect-auto object-cover"
                />
                <figcaption className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-ink">
                  <span className="font-hand text-xl">{w.title}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">{w.tag}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
