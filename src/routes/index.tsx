import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VEWS Studio — Visuals that stop the scroll" },
      { name: "description", content: "VEWS Studio is a creative content studio for video editing, graphic design, AI videos and social media." },
      { property: "og:title", content: "VEWS Studio — Creative content that gets remembered" },
      { property: "og:description", content: "A creative studio for bold stories and visual chaos." },
    ],
  }),
});

// ─── HOMEPAGE USER JOURNEY ───────────────────────────────────────────────────
//  1. Hero          — instant brand impression, headline + mascot
//  2. Studio Intro  — who we are, single-paragraph trust signal
//  3. Selected Work — proof of quality, 3 featured projects
//  4. Services      — what we offer, 4 categories at a glance
//  5. Final CTA     — conversion, route to /contact
// ─────────────────────────────────────────────────────────────────────────────

const FEATURED_WORK = [
  { title: "Eye Index",     category: "Identity / Print",    tag: "Brand Identity" },
  { title: "Tear Sheet 01", category: "Editorial / AI",      tag: "Editorial" },
  { title: "Stage Frame",   category: "Music Video",          tag: "Video" },
];

const SERVICE_TEASERS = [
  { n: "01", title: "Brand Identity",     blurb: "Marks, systems, and visual language that last." },
  { n: "02", title: "AI Film Production", blurb: "Generative storytelling with a directorial eye." },
  { n: "03", title: "Motion Design",      blurb: "Animated logos, brand films, social motion." },
  { n: "04", title: "Social Content",     blurb: "Consistent creative built for real engagement." },
];

function Index() {
  return (
    <main className="min-h-screen bg-white text-ink">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero />

        {/* ── 2. STUDIO INTRO ──────────────────────────────────────────────── */}
        {/* Goal: single confident paragraph that answers "who is this?" */}
        {/* Pairs with two navigation paths: work and services */}
        <section
          data-section="studio-intro"
          className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
        >
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-center">
            <div>
              <p className="font-hand text-xl text-blush mb-4" style={{ transform: "rotate(-0.5deg)" }}>
                who we are
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                <span className="font-display italic font-black">VEWS Studio</span> is a modern
                visual studio creating brand identities, social content, motion design,
                AI films, and creative campaigns — for brands that want to be remembered,
                not just noticed. No templates. No autopilot. Just work that looks like something.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <Link
                to="/work"
                className="bg-ink text-cream px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                See our work →
              </Link>
              <Link
                to="/services"
                className="px-4 py-3 font-bold underline underline-offset-4 decoration-2 hover:text-blush transition-colors"
              >
                What we offer
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 font-bold underline underline-offset-4 decoration-2 hover:text-blush transition-colors"
              >
                About the studio
              </Link>
            </div>
          </div>
        </section>

        {/* ── 3. SELECTED WORK ─────────────────────────────────────────────── */}
        {/* Goal: 3 strong projects that demonstrate range */}
        {/* Each project card links to the full /work page */}
        {/* Not a full portfolio — a curated taster */}
        <section
          data-section="selected-work"
          className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink bg-ink text-cream"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <p className="font-hand text-xl text-acid mb-2" style={{ transform: "rotate(0.5deg)" }}>
                  selected projects
                </p>
                <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9]">
                  Recent work
                </h2>
              </div>
              <Link
                to="/work"
                className="font-hand text-xl text-acid hover:underline transition-all"
              >
                View all work →
              </Link>
            </div>

            {/* Featured project list — 3 items, horizontal rule separated */}
            {/* Will become image cards in design phase */}
            <ol className="divide-y divide-cream/10">
              {FEATURED_WORK.map((project, i) => (
                <li key={project.title} className="py-8 flex items-center justify-between gap-6 group cursor-pointer">
                  <div className="flex items-center gap-6">
                    <span className="font-hand text-cream/30 text-sm w-6">0{i + 1}</span>
                    {/* Thumbnail placeholder — will be replaced with actual project image */}
                    <div className="w-20 h-14 bg-cream/10 border border-cream/20 shrink-0" aria-label="Project thumbnail" />
                    <div>
                      <h3 className="font-display font-black text-2xl md:text-3xl group-hover:italic transition-all duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cream/50 uppercase tracking-widest mt-1">{project.category}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-cream/30 hidden md:block">{project.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 4. SERVICES TEASER ───────────────────────────────────────────── */}
        {/* Goal: show all 4 service categories at a glance */}
        {/* Not a full services page — a quick scan to orient the visitor */}
        <section
          data-section="services-teaser"
          className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
                  what we do
                </p>
                <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9]">
                  Six disciplines.<br />
                  <span className="italic">One studio.</span>
                </h2>
              </div>
              <Link
                to="/services"
                className="font-hand text-xl text-blush hover:underline"
              >
                See full services →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px border border-ink">
              {SERVICE_TEASERS.map((s) => (
                <div key={s.n} className="p-8 border border-ink">
                  <span className="font-display text-5xl font-black text-ink/10">{s.n}</span>
                  <h3 className="font-display font-black text-2xl mt-4 mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{s.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ─────────────────────────────────────────────────── */}
        {/* Goal: single conversion moment — contact page */}
        {/* Keep it direct and confident, not salesy */}
        <section
          data-section="final-cta"
          className="px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink bg-ink text-cream"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
                got a project?
              </p>
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9]">
                Let's make something<br />
                <span className="italic">worth staring at.</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-acid text-ink px-8 py-4 font-bold text-lg ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Talk To Us →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
  );
}
