import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Work } from "@/components/sections/Work";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — VEWS Studio" },
      { name: "description", content: "Selected projects from VEWS Studio — video, design, AI content, and social media." },
    ],
  }),
});

function WorkPage() {
  return (
    <PageLayout>

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="pt-36 md:pt-48 pb-0 px-6 md:px-10 bg-white border-b-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10">
            <div>
              <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
                selected work
              </p>
              <h1 className="font-display font-black text-7xl md:text-9xl leading-[0.9]">Work</h1>
            </div>
            <p className="text-base text-ink/50 max-w-xs md:pb-3 leading-relaxed">
              Branding. Motion. AI Films.<br />Built to stop the scroll.
            </p>
          </div>

          {/* Filter categories — scope what the studio actually produces */}
          <div className="flex gap-2 flex-wrap pb-0 -mb-px">
            {["All", "Branding", "Social Content", "AI Films", "Posters", "Motion"].map((cat, i) => (
              <span
                key={cat}
                className={`text-xs uppercase tracking-widest px-4 py-2.5 border-t border-x border-ink/20 font-medium transition-colors cursor-default ${
                  i === 0
                    ? "bg-ink text-cream border-ink"
                    : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── Project Grid ─────────────────────────────────────────────────── */}
      {/* Off-white paper surface — polaroid cards in cream on #F8F6F2 */}
      <Work />

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      {/* Single conversion moment before footer — softer ask than homepage */}
      <section
        className="px-6 md:px-10 py-16 md:py-24 bg-white border-t-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="font-hand text-xl text-blush mb-3" style={{ transform: "rotate(-0.5deg)" }}>
              like what you see?
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9]">
              Let's make your<br />
              <span className="italic">next one.</span>
            </h2>
          </div>
          <div className="flex gap-4 flex-wrap items-center pb-1">
            <Link
              to="/contact"
              className="bg-ink text-cream px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Start a project →
            </Link>
            <Link
              to="/services"
              className="px-4 py-3 font-bold underline underline-offset-4 decoration-2 hover:text-blush transition-colors"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
