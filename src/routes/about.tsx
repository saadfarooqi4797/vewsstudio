import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — VEWS Studio" },
      { name: "description", content: "A small studio with a big eye. VEWS Studio makes work that lives between a magazine spread, a music video, and a sticker on a laptop." },
    ],
  }),
});

// ─── ABOUT PAGE USER JOURNEY ─────────────────────────────────────────────────
//  User arrives asking: "Who ARE these people? Can I trust them with my brand?"
//
//  1. Page Header    — tone-set immediately (personality before credentials)
//  2. Studio Story   — who we are in our own words, honest and specific
//  3. POV + Values   — what we believe, what makes us different (existing About)
//  4. Our Values     — 4 short principles that guide how we work
//  5. How We Work    — the three-step process (existing Process component)
//  6. Team Note      — human faces behind the work [future — photos]
//  7. About CTA      — invite into a conversation
// ─────────────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    title: "Craft over comfort",
    description: "We don't default to the safe option. Every project gets a point of view, even if that makes the conversation harder.",
  },
  {
    title: "Small team, full attention",
    description: "You're not handed off to a junior. The people you brief are the people who make the work.",
  },
  {
    title: "Honest timelines",
    description: "We'd rather tell you it takes three weeks than overpromise and underdeliver. We say what we mean.",
  },
  {
    title: "Work that ages well",
    description: "Trends are fine. We just don't build our whole identity on them. We aim for work that still holds up in two years.",
  },
];

function AboutPage() {
  return (
    <PageLayout>

      {/* ── 1. PAGE HEADER ───────────────────────────────────────────────── */}
      {/* Goal: set personality before credentials */}
      {/* The subtitle "a small studio with a big eye" captures the brand voice */}
      <header
        data-section="page-header"
        className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_auto] items-end gap-6">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
              the studio
            </p>
            <h1 className="font-display font-black text-7xl md:text-9xl leading-[0.9]">About</h1>
          </div>
          <p className="text-base text-ink/50 max-w-xs pb-3 font-hand text-lg">
            A small studio with a big eye.
          </p>
        </div>
      </header>

      {/* ── 2. STUDIO STORY ──────────────────────────────────────────────── */}
      {/* Goal: honest, specific origin story — not corporate boilerplate */}
      {/* Should sound like a person talking, not a brand document */}
      <section
        data-section="studio-story"
        className="px-6 md:px-10 py-16 md:py-24 border-b-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-start">
          <div>
            <p className="font-hand text-xl text-blush mb-6" style={{ transform: "rotate(-0.4deg)" }}>
              where we come from
            </p>
            <div className="space-y-5 text-lg md:text-xl leading-relaxed">
              <p>
                VEWS started because we kept watching good brands get stuck with boring content.
                Not for lack of budget — for lack of opinion. Someone has to have a point of view.
                We decided that someone should be us.
              </p>
              <p>
                We're a small collective — a handful of people who care obsessively about how
                a frame is cut, why one font reads as urgent and another as lazy, and what makes
                a reel stop someone mid-scroll. We work across video, design, AI, and social —
                and we treat all of it as craft, not production.
              </p>
              <p className="font-hand text-2xl text-blush">
                — made by humans, with a healthy obsession.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {/* Studio facts — quick scannable credentials */}
            {/* Not case studies — just grounding context */}
            <div className="border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-ink/30 mb-1">Based in</p>
              <p className="text-lg font-medium">Lisbon / Internet</p>
            </div>
            <div className="border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-ink/30 mb-1">Working since</p>
              <p className="text-lg font-medium">2022</p>
            </div>
            <div className="border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-ink/30 mb-1">Disciplines</p>
              <p className="text-lg font-medium">Video · Design · AI · Social</p>
            </div>
            <div className="border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-ink/30 mb-1">Team size</p>
              <p className="text-lg font-medium">Small by design</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. POV + STUDIO PERSONALITY ──────────────────────────────────── */}
      {/* Goal: articulate what makes VEWS different from other studios */}
      {/* The existing About component contains the POV quote block */}
      <About />

      {/* ── 4. VALUES ────────────────────────────────────────────────────── */}
      {/* Goal: 4 principles that explain HOW they work, not what they make */}
      {/* Short titles + one-line descriptions — scannable, not a manifesto */}
      <section
        data-section="values"
        className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
              how we operate
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9]">
              Things we actually<br />
              <span className="italic">believe in</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px border border-ink">
            {VALUES.map((v, i) => (
              <div key={v.title} className="p-8 border border-ink">
                <span className="font-hand text-sm text-ink/25 block mb-3">0{i + 1}</span>
                <h3 className="font-display font-black text-2xl mb-3">{v.title}</h3>
                <p className="text-base text-ink/65 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW WE WORK ───────────────────────────────────────────────── */}
      {/* Goal: make the engagement feel approachable and structured */}
      {/* Existing Process component: Discover → Create → Deliver */}
      <Process />

      {/* ── 6. TEAM NOTE [FUTURE] ────────────────────────────────────────── */}
      {/* Goal: human faces behind the studio — builds personal connection */}
      {/* Will become: photos, names, roles, short personal notes */}
      {/* Placeholder — not built yet */}
      <section
        data-section="team-note"
        className="px-6 md:px-10 py-16 md:py-20 border-t-[3px] border-ink"
        aria-label="Team section (coming soon)"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
            the people
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[0.9] mb-8">
            Made by a few,<br />
            <span className="italic">not a factory.</span>
          </h2>
          <div className="flex gap-6 flex-wrap">
            {/* Team member card placeholders — will become photos + names */}
            {["Director", "Designer", "Editor"].map((role) => (
              <div
                key={role}
                className="w-48 border border-ink/10"
                aria-label={`${role} — team member (coming soon)`}
              >
                <div className="aspect-square bg-ink/5 flex items-center justify-center">
                  <span className="text-ink/20 font-hand text-sm">Photo</span>
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-widest text-ink/30">{role}</p>
                  <p className="font-medium mt-1 text-ink/40 font-hand">Coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ABOUT CTA ─────────────────────────────────────────────────── */}
      {/* Goal: natural next step after learning about the studio */}
      {/* Warmer tone than the services CTA — relationship-forward */}
      <section
        data-section="about-cta"
        className="px-6 md:px-10 py-16 md:py-20 border-t-[3px] border-ink bg-ink text-cream"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
              let's make something
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9]">
              We'd love to hear<br />
              <span className="italic">what you're working on.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/contact"
              className="bg-acid text-ink px-6 py-3 font-bold ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Get in touch →
            </Link>
            <Link
              to="/work"
              className="px-6 py-3 font-bold text-cream/70 underline underline-offset-4 decoration-2 hover:text-cream transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
