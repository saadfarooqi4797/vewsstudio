import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — VEWS Studio" },
      { name: "description", content: "Got a brief? Got a hunch? Tell us what you're making. We reply within 48 hours." },
    ],
  }),
});

// ─── CONTACT PAGE USER JOURNEY ───────────────────────────────────────────────
//  User arrives having already decided they want to reach out.
//  Friction is the enemy. Every section should reduce it.
//
//  1. Page Intro         — warm, low-pressure welcome. "Any size idea is fine."
//  2. Contact Form       — the main event (existing component)
//  3. What Happens Next  — manage expectations, reduce post-submit anxiety
//  4. Direct Contact     — email + social for people who prefer not to use forms
// ─────────────────────────────────────────────────────────────────────────────

const NEXT_STEPS = [
  {
    step: "01",
    title: "We read your message",
    description: "Every inquiry is read by the people who would actually work on your project — not a sales team.",
  },
  {
    step: "02",
    title: "We reply within 48 hours",
    description: "Usually faster. We'll either ask a follow-up question or propose a quick call to go deeper.",
  },
  {
    step: "03",
    title: "We talk properly",
    description: "A 30-minute call to understand the brief, the timeline, and whether we're the right fit for each other.",
  },
  {
    step: "04",
    title: "We send a proposal",
    description: "Scope, timeline, and cost. No hidden fees. No vague 'starting from' pricing.",
  },
];

function ContactPage() {
  return (
    <PageLayout>

      {/* ── 1. PAGE INTRO ────────────────────────────────────────────────── */}
      {/* Goal: immediately reduce friction — "any stage of idea is welcome" */}
      {/* Half-formed briefs are OK. This removes a common hesitation. */}
      <header
        data-section="page-intro"
        className="pt-36 md:pt-48 pb-12 px-6 md:px-10 border-b-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-end">
          <div>
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.5deg)" }}>
              (this is the part where you say hi)
            </p>
            <h1 className="font-display font-black text-6xl md:text-9xl leading-[0.9]">
              Let's<br />talk.
            </h1>
          </div>
          <div className="pb-2 space-y-4">
            <p className="text-lg md:text-xl leading-relaxed text-ink/70">
              Got a brief? Got a hunch? Even half-formed ideas are welcome —
              tell us what you're thinking about and we'll help shape the rest.
            </p>
            <p className="text-base text-ink/50">
              We reply within 48 hours. Usually sooner.
            </p>
          </div>
        </div>
      </header>

      {/* ── 2. CONTACT FORM ──────────────────────────────────────────────── */}
      {/* Goal: the primary conversion — fill in the form */}
      {/* Existing Contact component contains the form */}
      {/* Note: the existing component also has its own header — consider */}
      {/* consolidating with the page header above in the design phase */}
      <Contact />

      {/* ── 3. WHAT HAPPENS NEXT ─────────────────────────────────────────── */}
      {/* Goal: manage post-submit expectations, reduce uncertainty */}
      {/* Many visitors abandon forms because they don't know what comes after */}
      <section
        data-section="what-happens-next"
        className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
              after you hit send
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9]">
              Here's what<br />
              <span className="italic">happens next</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px border border-ink">
            {NEXT_STEPS.map((s) => (
              <div key={s.step} className="p-8 border border-ink">
                <span className="font-display text-5xl font-black text-ink/10 block mb-4">{s.step}</span>
                <h3 className="font-display font-black text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DIRECT CONTACT ────────────────────────────────────────────── */}
      {/* Goal: give an alternative for people who prefer not to use forms */}
      {/* Some clients (especially senior/founder types) just want an email address */}
      <section
        data-section="direct-contact"
        className="px-6 md:px-10 py-14 md:py-20 border-t-[3px] border-ink bg-ink text-cream"
      >
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr_1fr] gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/30 mb-3">Email us directly</p>
            <a
              href="mailto:creative@vewsstudio.com"
              className="font-hand text-2xl text-acid hover:underline block"
            >
              creative@vewsstudio.com
            </a>
            <p className="text-sm text-cream/40 mt-2">General enquiries + new projects</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/30 mb-3">Find us online</p>
            <a
              href="#"
              className="font-hand text-2xl text-acid hover:underline block"
            >
              @vews.studio
            </a>
            <p className="text-sm text-cream/40 mt-2">Instagram — work in progress + archive</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/30 mb-3">Where we are</p>
            <p className="font-hand text-2xl text-cream/80">Islamabad, Pakistan</p>
            <p className="text-sm text-cream/40 mt-2">
              Working globally — timezone flexible for async clients.
            </p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-12 pt-12 border-t border-cream/10 flex items-center justify-between flex-wrap gap-4">
          <p className="font-hand text-lg text-cream/40">Not sure if we're right for you?</p>
          <Link
            to="/services"
            className="text-sm font-bold text-cream/60 underline underline-offset-4 hover:text-cream transition-colors"
          >
            Read about our services first →
          </Link>
        </div>
      </section>

    </PageLayout>
  );
}
