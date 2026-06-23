import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Packages — VEWS Studio" },
      { name: "description", content: "Two ways to work with VEWS Studio — Content Engine and Growth Machine. Pick the package that fits where your brand is right now." },
    ],
  }),
});

const PACKAGES = [
  {
    name: "Content Engine",
    price: "$800",
    cadence: "/mo",
    tagline: "Keep your brand consistently in front of people",
    href: "https://sites.leadconnectorhq.com/preview/Rc1CFmCkB6f4Am54ERzg",
    features: [
      "Social Media Management",
      "1 Lead Magnet",
      "Monthly Social Calendar",
      "9 Reels, 2 Statics, 4 Stories, 2 Carousel posts across Social Platforms",
      "Brandkit and Brand Strategy",
    ],
    highlight: false,
  },
  {
    name: "Growth Machine",
    price: "$1,500",
    cadence: "/mo",
    tagline: "Full content engine plus the funnel to convert it",
    href: "https://sites.leadconnectorhq.com/preview/Oo0mPr8BJmZjL0cdSCvg",
    features: [
      "Full Social Media, Content Production and Funnels",
      "Brandkit and Brand Strategy",
      "Monthly Social Calendar",
      "17 Reels, 2 Statics, 4 Stories, 3 Carousel posts across Social Platforms",
      "2 Long-form videos",
      "Blogs and content repurposing",
    ],
    highlight: true,
  },
];

function PackagesPage() {
  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
              pick your engine
            </p>
            <h1 className="font-display font-black text-7xl md:text-9xl leading-[0.9]">Packages</h1>
          </div>
          <p className="text-base text-ink/50 max-w-xs md:pb-3 leading-relaxed">
            Two ways to keep your brand fed with content that actually looks like it means it.
          </p>
        </div>
      </header>

      {/* ── Package Cards ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 md:p-10 ink-border-thick shadow-hard ${
                pkg.highlight ? "bg-ink text-cream" : "bg-cream text-ink"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-8 bg-acid text-ink text-xs uppercase tracking-widest font-bold px-3 py-1 ink-border">
                  Most popular
                </span>
              )}

              <h2 className="font-display font-black text-3xl md:text-4xl mb-2">{pkg.name}</h2>
              <p className={`text-sm mb-8 ${pkg.highlight ? "text-cream/60" : "text-ink/55"}`}>
                {pkg.tagline}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display font-black text-5xl md:text-6xl">{pkg.price}</span>
                <span className={`text-base ${pkg.highlight ? "text-cream/50" : "text-ink/45"}`}>{pkg.cadence}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className={`mt-1 shrink-0 ${pkg.highlight ? "text-acid" : "text-blush"}`}>✺</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={pkg.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-7 py-4 font-bold ink-border shadow-hard-sm transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${
                  pkg.highlight ? "bg-acid text-ink" : "bg-ink text-cream"
                }`}
              >
                Get {pkg.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Not sure which one ───────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-14 md:py-20 border-t-[3px] border-ink bg-ink text-cream">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-hand text-xl text-blush mb-1" style={{ transform: "rotate(-0.4deg)" }}>
              not sure which fits?
            </p>
            <p className="text-cream/70 text-base max-w-md">
              Tell us about your brand and we'll point you to the right one — no pressure, no upsell.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-cream text-ink px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all shrink-0"
          >
            Talk to us →
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
