import { Link } from "@tanstack/react-router";
import { useEasterEgg } from "@/components/EasterEggProvider";
import logoWordmark from "@/assets/brand-details/logo-wordmark.png";
import mascotImg from "@/assets/brand-details/mascot.png";
import starRed from "@/assets/doodles/star-red.png";
import arrowDoodle from "@/assets/doodles/arrow.png";


const NAV_LINKS = [
  { to: "/work",     label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about",    label: "About" },
  { to: "/contact",  label: "Contact" },
];

const YEAR = new Date().getFullYear();

export function Footer() {
  const { trigger } = useEasterEgg();
  return (
    <footer
      className="relative border-t-[3px] border-ink text-ink"
      style={{ backgroundColor: "#F8F6F2" }}
    >

      {/* ── Zone 1: CTA ──────────────────────────────────────────────────── */}
      {/* Generous top space — feels like opening a new page */}
      <div className="relative px-6 md:px-10 pt-20 md:pt-28 pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-0 items-end">

          {/* Left: headline + CTA */}
          <div className="pb-16 md:pb-20 relative">

            {/* star-red — floats near headline, personal touch */}
            <img
              src={starRed}
              alt="" aria-hidden="true"
              className="absolute -top-6 -left-2 md:left-0 w-8 md:w-10 pointer-events-none select-none"
              style={{ transform: "rotate(20deg)" }}
            />

            <p
              className="font-hand text-xl text-blush mb-5"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              ready when you are
            </p>

            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-10 md:mb-12">
              Let's make something<br />
              <span className="italic">worth staring at.</span>
            </h2>

            {/* Arrow + CTA button — arrow guides eye into the button */}
            <div className="flex items-center gap-5 flex-wrap">
              <img
                src={arrowDoodle}
                alt="" aria-hidden="true"
                className="w-10 md:w-12 pointer-events-none select-none shrink-0"
                style={{ transform: "rotate(-18deg)" }}
              />
              <Link
                to="/contact"
                className="bg-acid text-ink px-8 py-4 font-bold text-base md:text-lg ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                Talk To Us →
              </Link>
            </div>
          </div>

          {/* Right: mascot — stands at the bottom edge of the CTA zone */}
          <div className="hidden md:flex flex-col items-center justify-end relative self-end">
            <button
              onClick={() => trigger("mascot")}
              className="egg-trigger relative z-[1]"
              aria-label="the mascot"
            >
              <img
                src={mascotImg}
                alt="" aria-hidden="true"
                className="w-auto object-contain select-none transition-transform duration-500 hover:scale-[1.03]"
                style={{ height: "clamp(200px, 26vh, 300px)" }}
              />
              <span className="egg-hint" style={{ marginTop: "4px" }}>still looking?</span>
            </button>
          </div>
        </div>

        {/* Divider between CTA zone and links zone */}
        <div className="max-w-[1400px] mx-auto border-t border-ink/15" />
      </div>

      {/* ── Zone 2: Links ────────────────────────────────────────────────── */}
      {/* Three columns: brand identity | navigation | contact */}
      <div className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 md:gap-16">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <img
              src={logoWordmark}
              alt="VEWS Studio"
              className="h-12 md:h-14 w-auto object-contain object-left"
            />
            <p className="font-hand text-lg text-blush" style={{ transform: "rotate(-0.4deg)" }}>
              — keep looking.
            </p>
            <p className="text-sm text-ink/40 leading-relaxed max-w-[220px] mt-1">
              A creative studio for brands that refuse to look like everybody else.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink/30 mb-5">Navigate</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-display font-black text-xl hover:italic hover:text-blush transition-all duration-150"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink/30 mb-5">Find us</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:creative@vewsstudio.com"
                className="font-hand text-lg hover:text-blush transition-colors"
              >
                creative@vewsstudio.com
              </a>
              <a
                href="#"
                className="font-hand text-lg hover:text-blush transition-colors"
              >
                @vews.studio
              </a>
              <p className="font-hand text-lg text-ink/40 mt-1">
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Zone 3: Colophon ─────────────────────────────────────────────── */}
      {/* Quiet bottom strip — feels like the back cover of a sketchbook */}
      <div
        className="border-t border-ink/12 px-6 md:px-10 py-5"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-3">
          <Link
            to="/all-eyes"
            className="group font-hand text-base text-ink/40 italic tracking-wide hover:text-ink transition-colors flex flex-col"
            title="look closer."
          >
            All eyes reserved.
            <span className="text-[0.65rem] not-italic font-sans tracking-[0.2em] uppercase text-ink/0 group-hover:text-blush transition-colors duration-300">
              ↳ look closer
            </span>
          </Link>
          <div className="flex items-center gap-5 flex-wrap">
            <Link to="/terms" className="text-[10px] uppercase tracking-[0.2em] text-ink/25 hover:text-ink/50 transition-colors">Terms</Link>
            <Link to="/privacy-policy" className="text-[10px] uppercase tracking-[0.2em] text-ink/25 hover:text-ink/50 transition-colors">Privacy</Link>
            <Link to="/refund-policy" className="text-[10px] uppercase tracking-[0.2em] text-ink/25 hover:text-ink/50 transition-colors">Refunds</Link>
            <p className="text-[10px] uppercase tracking-[0.25em] text-ink/25">
              © {YEAR} VEWS Studio
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
