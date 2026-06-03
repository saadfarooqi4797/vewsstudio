import mascot from "@/assets/brand-details/mascot.png";
import starRed from "@/assets/doodles/star-red.png";
import { useEasterEgg } from "@/components/EasterEggProvider";
import doodleLines from "@/assets/doodles/doodle-lines.png";
import arrowDoodle from "@/assets/doodles/arrow.png";

export function Hero() {
  const { trigger } = useEasterEgg();
  return (
    <section
      id="top"
      className="relative bg-white pt-40 md:pt-52 pb-12 md:pb-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ── Two-column: text left, mascot right ── */}
        {/* equal-ish split at lg so mascot has real weight */}
        <div className="grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_1fr] gap-10 md:gap-0 items-center relative">

          {/* star-red bridges both columns — sits at the seam */}
          <button
            onClick={() => trigger("star")}
            className="egg-trigger hidden md:block absolute z-10"
            style={{ right: "49%", top: "18%", background: "none", border: "none", padding: "6px" }}
            aria-label="a detail worth noticing"
          >
            <img
              src={starRed}
              alt="" aria-hidden="true"
              className="animate-wobble block"
              style={{ width: "clamp(28px, 2.2vw, 44px)", transform: "rotate(15deg)" }}
            />
            <span className="egg-hint" style={{ marginTop: "6px" }}>look closer.</span>
          </button>

          {/* ── Left: headline + copy + CTA ── */}
          <div className="md:pr-8 lg:pr-12">

            {/* Meta line */}
            <div className="flex items-center gap-3 mb-10 md:mb-12">
              <span className="w-8 h-px bg-ink/40" />
              <span
                className="font-hand text-xl text-blush"
                style={{ display: "inline-block", transform: "rotate(-0.6deg)" }}
              >
                est. a creative studio
              </span>
              <span className="text-lg opacity-30">✺</span>
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-ink/50 hidden sm:inline">
                Earth / Internet
              </span>
            </div>

            {/* ── Headline ── */}
            <h1 className="text-[13vw] md:text-[9.5vw] lg:text-[8vw] leading-[0.88] mb-10 md:mb-12">

              {/* Line 1 */}
              <span className="block">Visuals that</span>

              {/* Line 2 — "stop" italic only, doodle-lines beneath */}
              <span className="block">
                <span className="relative inline-block">
                  <span className="italic font-display">stop</span>
                  <img
                    src={doodleLines}
                    alt="" aria-hidden="true"
                    className="absolute left-0 w-[118%] pointer-events-none select-none"
                    style={{ top: "88%", height: "auto", opacity: 0.5 }}
                  />
                </span>
                {" "}the
              </span>

              {/* Line 3 */}
              <span className="block">scroll.</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-ink/70 mb-7 max-w-[400px]">
              We're{" "}
              <span className="font-display italic font-black text-ink">VEWS Studio</span>
              {" "}— a creative collective making video, design, and AI-driven
              content for brands that refuse to look like everybody else.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap pb-12 md:pb-20">
              <img
                src={arrowDoodle}
                alt="" aria-hidden="true"
                className="w-9 pointer-events-none select-none shrink-0"
                style={{ transform: "rotate(-22deg)" }}
              />
              <a
                href="#contact"
                className="bg-ink text-cream px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                Talk To Us
              </a>
              <a
                href="#work"
                className="px-4 py-3 font-bold underline underline-offset-4 decoration-2 hover:text-blush transition-colors"
              >
                View work ↓
              </a>
            </div>
          </div>

          {/* ── Right: mascot as a composed character ── */}
          <div className="hidden md:flex flex-col items-center justify-end self-end relative">

            {/* Mascot — large, grounded */}
            <img
              src={mascot}
              alt="" aria-hidden="true"
              className="w-auto object-contain select-none pointer-events-none relative z-[1]"
              style={{ height: "clamp(400px, 58vh, 560px)" }}
            />
          </div>
        </div>

        {/* Scroll hint — quiet close, no marquee between hero and next section */}
        <div className="hidden md:flex items-center justify-between mt-8">
          <div className="flex items-center gap-2 text-ink/30">
            <span className="font-hand text-base">scroll</span>
            <img
              src={arrowDoodle}
              alt="" aria-hidden="true"
              className="w-5 opacity-30"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
          <span className="egg-hint" style={{ transform: "rotate(0.8deg)" }}>
            some things are worth staring at longer.
          </span>
        </div>

      </div>
    </section>
  );
}
