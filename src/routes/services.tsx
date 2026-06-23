import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Services } from "@/components/sections/Services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — VEWS Studio" },
      { name: "description", content: "Branding, social content, motion design, AI films, poster design, and creative campaigns. Six disciplines. One studio." },
    ],
  }),
});

const ENGAGEMENT_TYPES = [
  {
    type: "One-off Project",
    description: "A defined deliverable with a clear brief. Right for launches, rebrands, campaigns, or any single-discipline output.",
    ideal: "Brand identity, AI film, poster series, campaign rollout.",
  },
  {
    type: "Ongoing Retainer",
    description: "We act as your in-house creative team on a monthly basis. Right for brands that need consistent, high-quality output without managing multiple freelancers.",
    ideal: "Social content, monthly motion, editorial design.",
  },
  {
    type: "Creative Consultation",
    description: "A focused session to review your current visual direction and build a roadmap. No production commitment required — just an honest outside eye.",
    ideal: "Rebrand strategy, content audit, visual direction.",
  },
];

const RIGHT_FIT = [
  "Brands building a visual identity from scratch — or rebuilding one that stopped working.",
  "Founders who want their content to look like a brand, not like a phone grabbed from a drawer.",
  "Teams that understand good creative takes trust, time, and a point of view.",
  "Anyone who's looked at their visual output and thought: this just doesn't feel like us.",
];

const NOT_RIGHT_FIT = [
  "Brands looking for the cheapest option. We're not a race to the bottom.",
  "Clients who need everything in 24 hours with unlimited revisions.",
  "Teams that design by committee. Great creative doesn't survive consensus.",
];

function ServicesPage() {
  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header
        className="pt-36 md:pt-48 pb-12 px-6 md:px-10 bg-white border-b-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
              what we create
            </p>
            <h1 className="font-display font-black text-7xl md:text-9xl leading-[0.9]">Services</h1>
          </div>
          <p className="text-base text-ink/50 max-w-xs md:pb-3 leading-relaxed">
            Six disciplines. One studio. Built to make brands look like they mean it.
          </p>
        </div>
      </header>

      {/* ── Studio Positioning ───────────────────────────────────────────── */}
      {/* Two honest paragraphs about what kind of studio this is */}
      <section className="px-6 md:px-10 py-14 md:py-20 border-b-[3px] border-ink bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-start">
          <p className="text-xl md:text-2xl leading-relaxed">
            VEWS is a modern visual studio. We create brand identities, social content,
            motion design, AI films, poster work, and full creative campaigns — for brands
            that want to be remembered, not just noticed.
          </p>
          <p className="text-base text-ink/60 leading-relaxed md:pt-2">
            We don't run a production line. Most projects touch two or three disciplines at once,
            and because it's one team working across all of them, the output is more coherent.
            The brand identity informs the social. The motion references the poster.
            Everything speaks the same language.
          </p>
        </div>
      </section>

      {/* ── Six Service Cards ────────────────────────────────────────────── */}
      <Services />

      {/* ── How We Engage ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
              how we work together
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9]">
              Three ways to<br />
              <span className="italic">get started</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px border border-ink">
            {ENGAGEMENT_TYPES.map((e) => (
              <div key={e.type} className="p-8 border border-ink">
                <h3 className="font-display font-black text-2xl mb-4">{e.type}</h3>
                <p className="text-base text-ink/70 leading-relaxed mb-6">{e.description}</p>
                <div>
                  <span className="font-hand text-base text-blush block mb-1">Right for:</span>
                  <p className="text-sm text-ink/45 leading-relaxed">{e.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Right-Fit Signal ─────────────────────────────────────────────── */}
      {/* Pre-qualifies leads. Repels mismatches. Builds trust with the right clients. */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
          <div>
            <h2 className="font-display font-black text-3xl md:text-5xl leading-[0.9] mb-8">
              We do our best<br />
              <span className="italic">work for brands that…</span>
            </h2>
            <ul className="space-y-5">
              {RIGHT_FIT.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-cream/80">
                  <span className="text-acid mt-1 shrink-0">✺</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-black text-3xl md:text-5xl leading-[0.9] mb-8">
              We're probably<br />
              <span className="italic">not the right fit if…</span>
            </h2>
            <ul className="space-y-5">
              {NOT_RIGHT_FIT.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-cream/45">
                  <span className="text-cream/25 mt-1 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Packages Teaser ──────────────────────────────────────────────── */}
      {/* Goal: bridge visitors who want fixed pricing to the dedicated packages page */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
              want a fixed price?
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9] mb-3">
              Two ready-made<br />
              <span className="italic">packages.</span>
            </h2>
            <p className="text-cream/60 text-base max-w-md">
              Content Engine and Growth Machine — set monthly pricing, no scoping call required.
            </p>
          </div>
          <Link
            to="/packages"
            className="bg-acid text-ink px-7 py-4 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all shrink-0"
          >
            See packages →
          </Link>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t-[3px] border-ink bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
              ready when you are
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9]">
              Tell us what<br />
              <span className="italic">you're building.</span>
            </h2>
          </div>
          <div className="flex gap-4 flex-wrap items-center pb-1">
            <Link
              to="/contact"
              className="bg-ink text-cream px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Talk To Us →
            </Link>
            <Link
              to="/work"
              className="px-4 py-3 font-bold underline underline-offset-4 decoration-2 hover:text-blush transition-colors"
            >
              See our work first
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
