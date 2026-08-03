import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import { Asterisk, Burst, Dots, HandNumber, Scribble, Star } from "@/components/Doodles";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VEWS Studio — We Turn Vision Into Visibility" },
      { name: "description", content: "VEWS Studio helps businesses transform ideas into brands people remember through strategy, design, content, AI-powered creativity, and digital storytelling." },
      { property: "og:title", content: "VEWS Studio — We Turn Vision Into Visibility" },
      { property: "og:description", content: "A creative partner that turns your vision into visibility — brand identity, graphic design, video production, AI content, social media, and strategy." },
    ],
  }),
});

// ─── HOMEPAGE USER JOURNEY ───────────────────────────────────────────────────
//  1. Hero                    — instant brand impression, headline + mascot
//  2. Story Behind Vews       — who we are and why the name means visibility
//  3. What We Do              — six disciplines at a glance
//  4. Why Choose Vews Studio  — the case for working with us
//  5. Our Process             — four-step engagement framework
//  6. More Than Creative      — the long-term-partner promise
//  7. Final CTA               — conversion, route to /contact
// ─────────────────────────────────────────────────────────────────────────────

const WHAT_WE_DO = [
  { n: "01", title: "Branding", blurb: "Build an identity that reflects your vision, tells your story, and creates lasting recognition." },
  { n: "02", title: "Graphic Design", blurb: "Purpose-driven visuals that capture attention and communicate with clarity." },
  { n: "03", title: "Video Editing & Production", blurb: "Videos crafted to engage audiences, strengthen your message, and drive results." },
  { n: "04", title: "AI Content & Creative Production", blurb: "Faster workflows, smarter content, and creative execution powered by the latest AI technologies." },
  { n: "05", title: "Social Media Management", blurb: "Content strategies that keep your audience engaged and your brand consistently visible." },
  { n: "06", title: "Strategy & Consultation", blurb: "Creative guidance that helps businesses make smarter branding and marketing decisions." },
];

const WHY_CHOOSE = [
  "Strategy-first thinking",
  "Creative solutions tailored to your brand",
  "AI-powered efficiency without losing the human touch",
  "Consistent communication throughout every project",
  "Quality that reflects your business",
  "A creative partner invested in your long-term growth",
];

const HOME_PROCESS_STEPS = [
  { n: 1, title: "Discover", body: "Every successful project starts with understanding. We take the time to learn about your business, audience, goals, and challenges.", rot: "rotate-1n" },
  { n: 2, title: "Create", body: "Our team develops concepts that combine creativity with strategy, ensuring every design, video, or campaign has a clear purpose.", rot: "rotate-1p" },
  { n: 3, title: "Refine", body: "We collaborate, gather feedback, and fine-tune every detail until everything feels right.", rot: "rotate-1n" },
  { n: 4, title: "Launch", body: "Once everything is ready, we deliver work that's built to perform and designed to leave a lasting impression.", rot: "rotate-1p" },
];

function Index() {
  return (
    <main className="min-h-screen bg-white text-ink">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero />

        {/* ── 2. THE STORY BEHIND VEWS ─────────────────────────────────────── */}
        <section
          data-section="story-behind-vews"
          className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
        >
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24 items-start">
            <div>
              <p className="font-hand text-2xl text-blush mb-4" style={{ transform: "rotate(-0.5deg)" }}>
                The Story Behind Vews
              </p>
              <div className="space-y-5 text-lg md:text-xl leading-relaxed">
                <p>
                  The name <span className="font-display italic font-black">VEWS</span> is inspired
                  by one simple idea: visibility.
                </p>
                <p>
                  In today's world, great businesses aren't always the ones with the best products,
                  they're the ones people notice, trust, and remember.
                </p>
                <p className="font-hand text-2xl text-blush">
                  That's where we come in.
                </p>
                <p>
                  We don't chase vanity metrics or create work just to fill a portfolio. Everything
                  we design, produce, and build has one purpose: helping your brand stand out in a
                  crowded marketplace.
                </p>
                <p>
                  Because visibility isn't just about getting views. It's about creating a brand
                  worth seeing.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start md:pt-14">
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

        {/* ── 3. WHAT WE DO ────────────────────────────────────────────────── */}
        <section
          data-section="what-we-do"
          className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink bg-ink text-cream"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-end justify-between mb-6 flex-wrap gap-6">
              <div>
                <p className="font-hand text-2xl text-acid mb-2" style={{ transform: "rotate(0.5deg)" }}>
                  What We Do
                </p>
                <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9]">
                  Creative Solutions That<br />
                  <span className="italic">Move Brands Forward.</span>
                </h2>
              </div>
              <Link
                to="/services"
                className="font-hand text-xl text-acid hover:underline transition-all"
              >
                See full services →
              </Link>
            </div>

            <p className="max-w-2xl text-cream/70 text-base md:text-lg leading-relaxed mb-12">
              We bring together strategy, creativity, and technology to help businesses build a
              stronger presence across every touchpoint.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px border border-cream/20">
              {WHAT_WE_DO.map((s) => (
                <div key={s.n} className="p-8 border border-cream/20">
                  <span className="font-display text-5xl font-black text-cream/10">{s.n}</span>
                  <h3 className="font-display font-black text-2xl mt-4 mb-2">{s.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{s.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WHY CHOOSE VEWS STUDIO ────────────────────────────────────── */}
        <section
          data-section="why-choose-vews"
          className="relative px-4 md:px-8 py-24 md:py-36 border-t-[3px] border-ink overflow-hidden"
        >
          <Dots className="absolute top-10 right-10 text-acid hidden md:block" size={22} />
          <Asterisk className="absolute bottom-12 right-[38%] text-blush animate-wobble hidden md:block" size={14} />
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
            <div className="relative">
              <div className="sketch-border bg-cream p-8 rotate-1n shadow-hard">
                <span className="font-hand text-3xl text-blush block mb-2">Our POV</span>
                <p className="font-display text-3xl md:text-4xl leading-tight">
                  Anyone can create content. We create content <span className="italic highlight-acid">with direction.</span>
                </p>
              </div>
              <Burst className="absolute -bottom-6 -left-6 text-acid" size={70} />
            </div>

            <div>
              <span className="font-hand text-2xl text-blush flex items-center gap-2 mb-2" style={{ transform: "rotate(0.8deg)" }}>
                <Star size={22} /> Why Choose Vews Studio
              </span>
              <h2 className="text-5xl md:text-7xl mb-6">
                Creativity <span className="italic font-display highlight-acid">With Purpose.</span>
              </h2>
              <p className="text-lg leading-relaxed text-ink/70 mb-10 max-w-xl">
                Every project begins by understanding your business, your audience, and your goals.
                From there, we develop creative solutions that not only look great but also support
                measurable growth.
              </p>
              <p className="font-hand text-2xl text-blush mb-4">Why Businesses Choose Us</p>
              <ul className="space-y-3 max-w-lg">
                {WHY_CHOOSE.map((item) => (
                  <li key={item} className="flex gap-3 text-base md:text-lg leading-relaxed">
                    <span className="text-blush mt-1 shrink-0">✺</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. OUR PROCESS ───────────────────────────────────────────────── */}
        <section
          data-section="our-process"
          className="relative px-4 md:px-8 py-24 md:py-36 bg-acid border-y-[3px] border-ink overflow-hidden"
        >
          <Burst className="absolute top-10 left-[3%] text-ink/20 hidden md:block" size={55} />
          <Scribble className="absolute bottom-10 right-[3%] text-ink/25 hidden md:block" size={100} />
          <Dots className="absolute bottom-32 left-[42%] text-ink/25 hidden md:block" size={20} />
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16">
              <span className="font-hand text-2xl flex items-center justify-center gap-2" style={{ transform: "rotate(-0.9deg)" }}>
                <Star size={22} /> Our Process <Star size={22} />
              </span>
              <h2 className="text-6xl md:text-8xl mt-2">
                From Vision <span className="italic font-display">To Visibility.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {HOME_PROCESS_STEPS.map((s) => (
                <div key={s.n} className={`bg-cream ink-border-thick p-8 ${s.rot} shadow-hard h-full`}>
                  <HandNumber n={s.n} className="text-ink" />
                  <h3 className="text-3xl md:text-4xl mt-4 mb-3">{s.title}</h3>
                  <p className="text-base leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. MORE THAN CREATIVE SERVICES ───────────────────────────────── */}
        <section
          data-section="more-than-creative"
          className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
          style={{ backgroundColor: "#F8F6F2" }}
        >
          <div className="max-w-[900px] mx-auto text-center">
            <p className="font-hand text-2xl text-blush mb-4" style={{ transform: "rotate(-0.4deg)" }}>
              More Than Creative Services
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.95] mb-8">
              We Become An <span className="italic highlight-acid">Extension</span> Of Your Business.
            </h2>
            <p className="text-lg leading-relaxed text-ink/70 mb-6">
              Whether you need a complete brand identity, social media content, AI-powered
              production, engaging videos, or ongoing creative support, we're committed to helping
              you grow with confidence.
            </p>
            <p className="font-hand text-2xl text-blush">
              Our success is measured by the success of the brands we work with.
            </p>
          </div>
        </section>

        {/* ── 7. FINAL CTA ─────────────────────────────────────────────────── */}
        <section
          data-section="final-cta"
          className="px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink bg-ink text-cream"
        >
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="font-hand text-2xl text-blush mb-4" style={{ transform: "rotate(-0.5deg)" }}>
              Final Call
            </p>
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] mb-6">
              Ready to Be Seen?
            </h2>
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Let's create work that earns attention, builds trust, and keeps your brand ahead of
              the competition.
            </p>
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Because great businesses deserve great visibility.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-acid text-ink px-8 py-4 font-bold text-lg ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Let's Turn Your Vision Into Visibility. →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
  );
}
