import { useEffect, useRef, useState } from "react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import workVideo from "@/assets/New-video-work-section.mp4";

const CATEGORIES = ["All", "Branding", "Social Content", "AI Films", "Posters", "Motion"] as const;
type Category = (typeof CATEGORIES)[number];

const works: Array<{
  img: string; title: string; tag: string; category: Category;
  cls: string; tape: string;
}> = [
  { img: w1, title: "Midnight Coffee",  tag: "Brand Identity",     category: "Branding",       cls: "md:col-span-5 md:row-span-2 rotate-1n", tape: "left-6 -top-3 -rotate-12" },
  { img: w2, title: "AI Film 01",       tag: "AI Film Production", category: "AI Films",        cls: "md:col-span-4 rotate-1p",               tape: "right-8 -top-3 rotate-6" },
  { img: w5, title: "Neon Dreams",      tag: "Poster Series",      category: "Posters",         cls: "md:col-span-3 md:row-span-2 -mt-4 md:-mt-12 rotate-2p", tape: "left-1/2 -top-3 -translate-x-1/2" },
  { img: w3, title: "Nike Concept",     tag: "Creative Campaign",  category: "Social Content",  cls: "md:col-span-4 rotate-1n",               tape: "right-6 -top-3 -rotate-3" },
  { img: w4, title: "Stage Frame",      tag: "Motion Design",      category: "Motion",          cls: "md:col-span-5 rotate-1p -mt-6 md:-mt-10", tape: "left-10 -top-3 rotate-12" },
];

function VideoScrubCard() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const rafRef      = useRef<number>(0);
  const targetRef   = useRef(0);
  const smoothRef   = useRef(0);

  useEffect(() => {
    const video     = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const computeProgress = () => {
      const rect   = container.getBoundingClientRect();
      const vh     = window.innerHeight;
      const cardCenter        = rect.top + rect.height / 2;
      const distancePastCenter = vh / 2 - cardCenter;
      targetRef.current = Math.max(0, Math.min(1, distancePastCenter / vh));
    };

    const tick = () => {
      const v = videoRef.current;
      if (v && v.readyState >= 2 && v.duration) {
        smoothRef.current += (targetRef.current - smoothRef.current) * 0.06;
        const newTime = smoothRef.current * v.duration;
        if (Math.abs(v.currentTime - newTime) > 0.008) v.currentTime = newTime;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", computeProgress, { passive: true });
    window.addEventListener("resize", computeProgress, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    computeProgress();

    return () => {
      window.removeEventListener("scroll", computeProgress);
      window.removeEventListener("resize", computeProgress);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <figure
      ref={containerRef}
      className="relative group md:col-span-7 md:col-start-6 rotate-1n cursor-pointer"
    >
      <div
        className="relative bg-cream p-3 pb-12 ink-border-thick shadow-hard group-hover:-translate-y-3 group-hover:shadow-[8px_16px_0_0_var(--ink)]"
        style={{ transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms ease-out' }}
      >
        <span className="tape left-10 -top-3 rotate-12" />
        <video
          ref={videoRef}
          src={workVideo}
          muted
          playsInline
          preload="auto"
          className="w-full h-auto block object-cover"
        />
        <figcaption className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-ink">
          <span className="font-hand text-xl">Motion Reel</span>
          <span className="text-[10px] uppercase tracking-widest opacity-50">Motion Design</span>
        </figcaption>
      </div>
    </figure>
  );
}

export function Work() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);
  const showVideoCard = active === "All" || active === "Motion";

  return (
    <section
      id="work"
      className="px-6 md:px-10 py-16 md:py-24"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ── Filter pills ─────────────────────────────────────────────── */}
        <div className="flex gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`text-xs uppercase tracking-widest px-4 py-2.5 border border-ink/20 font-medium transition-colors ${
                active === cat
                  ? "bg-ink text-cream border-ink"
                  : "text-ink/40 hover:text-ink/70 hover:border-ink/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 && !showVideoCard ? (
          <p className="font-hand text-2xl text-ink/40 text-center py-20">
            Nothing here yet — check back soon.
          </p>
        ) : (
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          {filtered.map((w, i) => (
            <figure
              key={i}
              className={`relative group ${w.cls} cursor-pointer`}
            >
              <div
                className="relative bg-cream p-3 pb-12 ink-border-thick shadow-hard group-hover:-translate-y-3 group-hover:shadow-[8px_16px_0_0_var(--ink)]"
                style={{ transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms ease-out' }}
              >
                <span className={`tape ${w.tape}`} />
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-auto block aspect-[4/5] md:aspect-auto object-cover"
                />
                <figcaption className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-ink">
                  <span className="font-hand text-xl">{w.title}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">{w.tag}</span>
                </figcaption>
              </div>
            </figure>
          ))}
          {showVideoCard && <VideoScrubCard />}
        </div>
        )}
      </div>
    </section>
  );
}
