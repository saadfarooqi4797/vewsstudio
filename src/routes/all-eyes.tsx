import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

// ── Brand ─────────────────────────────────────────────────────────────────────
import logoWordmark  from "@/assets/brand-details/logo-wordmark.png";
import mascotFinal   from "@/assets/brand-details/mascot.png";
import mascotWink    from "@/assets/brand-details/Mascot-wink.png";
import paperTexture  from "@/assets/paper-texture.jpg";

// ── Logo concepts (Behind the scenes/Logo designs/) ───────────────────────────
import soBad       from "@/assets/Behind the scenes/Logo designs/SO_BAD.png";
import whyEven     from "@/assets/Behind the scenes/Logo designs/Why_even.png";
import lolWhyyy    from "@/assets/Behind the scenes/Logo designs/LOL_WHYYY.png";
import anotherIdea from "@/assets/Behind the scenes/Logo designs/another_idea.png";
import testLogo    from "@/assets/Behind the scenes/Logo designs/Test.png";
import logo0       from "@/assets/Behind the scenes/Logo designs/logo_0.png";

// ── Deleted scene videos ───────────────────────────────────────────────────────
import logoV1      from "@/assets/Behind the scenes/Logo designs/Version 1 Logo.mp4";
import logoIdea    from "@/assets/Behind the scenes/Logo designs/logo video idea.mp4";
import logoFinal   from "@/assets/Vews_Logo_Video.mp4";

// ── Mascot concepts (Behind the scenes/Mascot Designs/) ───────────────────────
import m2  from "@/assets/Behind the scenes/Mascot Designs/mascot_2.png";
import m3  from "@/assets/Behind the scenes/Mascot Designs/mascot_3.png";
import m4  from "@/assets/Behind the scenes/Mascot Designs/mascot_4.png";
import m5  from "@/assets/Behind the scenes/Mascot Designs/mascot_5.png";
import m6  from "@/assets/Behind the scenes/Mascot Designs/mascot_6.png";
import m7  from "@/assets/Behind the scenes/Mascot Designs/mascot_7.png";
import m8  from "@/assets/Behind the scenes/Mascot Designs/mascot_8.png";
import m9  from "@/assets/Behind the scenes/Mascot Designs/mascot_9.png";
import m10 from "@/assets/Behind the scenes/Mascot Designs/mascot_10.png";
import m11 from "@/assets/Behind the scenes/Mascot Designs/mascot_11.png";
import ryu            from "@/assets/Behind the scenes/Mascot Designs/RYU.png";
import whyEvenStupid  from "@/assets/Behind the scenes/Mascot Designs/why_even_so_stupid.png";

// ── SVG doodles ───────────────────────────────────────────────────────────────
import { Crown, Star, Asterisk, Burst, Scribble, EyeDoodle, Squiggle, Dots, Key } from "@/components/Doodles";
import { useEasterEgg } from "@/components/EasterEggProvider";

export const Route = createFileRoute("/all-eyes")({
  component: AllEyesPage,
  head: () => ({
    meta: [
      { title: "All Eyes — VEWS Studio" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

// ── Static data ───────────────────────────────────────────────────────────────

const LOGO_CONCEPTS: Array<{
  id: string; img: string; filename: string;
  status: string; reason: string; rot: number; note: string;
}> = [
  { id: "so-bad",  img: soBad,       filename: "SO_BAD",       status: "Rejected Immediately", reason: "We have standards.",                    rot: -2,   note: "This happened. We move on."              },
  { id: "why",     img: whyEven,     filename: "WHY_EVEN",     status: "Unclear.",             reason: "Nobody remembers approving this.",       rot:  1.5, note: "The file exists. That's all we know."    },
  { id: "lol",     img: lolWhyyy,    filename: "LOL_WHYYY",    status: "Absolutely not.",      reason: "Next question.",                         rot: -1,   note: "We named it ourselves."                  },
  { id: "another", img: anotherIdea, filename: "another_idea", status: "Another one.",         reason: "Self-explanatory.",                      rot:  2,   note: "At least the filename is honest."        },
  { id: "test",    img: testLogo,    filename: "Test.png",     status: "Testing in production.",reason: "Classic.",                              rot: -0.5, note: "Should not have been a test."            },
  { id: "zero",    img: logo0,       filename: "logo_0.png",   status: "Ground zero.",         reason: "Where the nightmares began.",            rot:  1,   note: "Version zero. Aptly named."              },
];

const MASCOT_CONCEPTS: Array<{ img: string; title: string; mood: string; rot: number }> = [
  { img: m2,           title: "The Early One",          mood: "Before anyone knew what they were doing.",      rot: -1.5 },
  { img: m3,           title: "The Confused",           mood: "Too many directions at once.",                  rot:  1   },
  { img: m4,           title: "The Enthusiast",         mood: "Too much energy. Scaled back.",                 rot: -2   },
  { img: m5,           title: "The Philosopher",        mood: "Deep thoughts. Unhelpful.",                     rot:  1.5 },
  { img: m6,           title: "The Realist",            mood: "Knew this wouldn't ship.",                      rot: -0.5 },
  { img: m7,           title: "The Overachiever",       mood: "Tried too hard. Everyone felt it.",             rot:  2   },
  { img: m8,           title: "The Existential",        mood: "Existential crisis.",                           rot: -1   },
  { img: m9,           title: "The Dark One",           mood: "We don't talk about this one.",                 rot:  0.5 },
  { img: m10,          title: "The Schemer",            mood: "Definitely plotting something.",                rot: -2   },
  { img: m11,          title: "The Disruptor",          mood: "Would have overthrown management.",             rot:  1.5 },
  { img: ryu,          title: "RYU",                    mood: "A whole different direction. Hard no.",         rot: -1   },
  { img: whyEvenStupid, title: "The One We Don't Mention", mood: "Folder name says it all.",                   rot:  2   },
];

const DELETED_SCENES: Array<{ src: string; title: string; filename: string; note: string }> = [
  { src: logoIdea, title: "The Concept",  filename: "logo video idea.mp4", note: "An idea. Just an idea. It stayed that way." },
  { src: logoV1,   title: "First Draft",  filename: "Version 1 Logo.mp4",  note: "You can tell it was the first draft."        },
  { src: logoFinal, title: "The Survivor", filename: "Vews_Logo_Video.mp4", note: "After everything. This is the one."        },
];

const NOTES: Array<{ text: string; rot: number; font: "display" | "hand"; size: string; bg: string; offset?: string }> = [
  { text: "Good ideas usually look weird first.",    rot: -2,   font: "hand",    size: "text-2xl",              bg: "bg-acid",           offset: "md:mt-0"  },
  { text: "Delete more.",                            rot:  1.5, font: "display", size: "text-5xl",              bg: "bg-cream",          offset: "md:mt-16" },
  { text: "Make it worth staring at.",               rot: -1,   font: "hand",    size: "text-2xl",              bg: "bg-[#fff5e6]",      offset: "md:mt-6"  },
  { text: "If it feels safe, keep going.",           rot:  2,   font: "hand",    size: "text-xl",               bg: "bg-cream",          offset: "md:mt-24" },
  { text: "The first draft is supposed to be ugly.", rot: -0.5, font: "display", size: "text-xl italic",        bg: "bg-acid/30",        offset: "md:mt-10" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function Tape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`tape absolute left-1/2 -translate-x-1/2 -top-[11px] ${className}`}
      style={{ opacity: 0.75 }}
    />
  );
}

function SectionLabel({ n, text, color = "text-blush" }: { n: string; text: string; color?: string }) {
  return (
    <p className={`font-hand text-xl ${color} mb-3`} style={{ transform: "rotate(-0.5deg)" }}>
      {n} — {text}
    </p>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function AllEyesPage() {
  const { trigger, countedFound, total } = useEasterEgg();

  // Secret inside the secret — SO_BAD gets more unhinged with each click
  const [soBadClicks, setSoBadClicks] = useState(0);
  const [soBadShaking, setSoBadShaking] = useState(false);

  const handleSoBadClick = () => {
    const next = soBadClicks + 1;
    setSoBadClicks(next);
    setSoBadShaking(true);
    setTimeout(() => setSoBadShaking(false), 600);
    if (next >= 3) {
      trigger("showoff");
      setSoBadClicks(0);
    }
  };

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-36 pb-24 overflow-hidden"
        style={{
          backgroundColor: "#f5f0e6",
          backgroundImage: `url(${paperTexture})`,
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Scattered doodles */}
        <Crown    className="absolute top-28 left-8 md:left-14 text-ink/10 hidden md:block" size={44} />
        <Star     className="absolute top-32 right-[34%] text-blush/25 hidden md:block" size={26} />
        <Burst    className="absolute bottom-28 right-[6%] text-ink/8 hidden md:block" size={55} />
        <EyeDoodle className="absolute top-[44%] left-[2%] text-ink/6 hidden md:block" size={72} />
        <Asterisk className="absolute bottom-20 left-[22%] text-acid animate-float hidden md:block" size={14} />
        <Scribble className="absolute top-[58%] right-[4%] text-ink/8 hidden md:block" size={88} />
        <Dots     className="absolute top-[25%] right-[8%] text-ink/12 hidden md:block" size={20} />

        {/* Private watermark */}
        <span className="absolute top-28 right-6 md:right-10 font-hand text-[10px] text-ink/15 tracking-widest uppercase select-none"
              style={{ transform: "rotate(3deg)" }}>
          pg. 47 — private
        </span>

        <div className="max-w-[1100px] mx-auto">
          {/* Tape note */}
          <div className="inline-flex items-center justify-center bg-acid/70 mb-8 px-4 py-1"
               style={{ transform: "rotate(-1.5deg)", boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
            <span className="font-hand text-xs text-ink/60 uppercase tracking-widest">confidential</span>
          </div>

          <div className="text-6xl mb-6 select-none leading-none" aria-hidden>👀</div>

          <h1 className="font-display font-black italic leading-[0.88] text-ink mb-8"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}>
            You found<br />the sketchbook.
          </h1>

          <p className="font-hand text-2xl text-ink/65 mb-2" style={{ transform: "rotate(-0.5deg)" }}>
            Proceed at your own risk.
          </p>
          <p className="font-hand text-lg text-ink/40" style={{ transform: "rotate(0.3deg)" }}>
            Some of these ideas should have stayed hidden.
          </p>
        </div>

        {/* Mascot tucked in the corner */}
        <div className="absolute bottom-0 right-4 md:right-14 hidden md:block pointer-events-none select-none">
          <img
            src={mascotWink}
            alt="" aria-hidden
            className="w-36 lg:w-48 object-contain"
            style={{ transform: "scaleX(-1)", filter: "drop-shadow(0 -4px 16px rgba(0,0,0,0.08))" }}
          />
        </div>
      </section>

      {/* ── SECTION 1 — THE IDENTITY CRISIS ─────────────────────────────── */}
      <section
        className="px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink"
        style={{ backgroundColor: "#fdfaf5", backgroundImage: `url(${paperTexture})`, backgroundBlendMode: "multiply" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel n="01" text="The Identity Crisis" />
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9] mb-5">
            Every good logo starts<br />
            <span className="italic">with bad ideas.</span>
          </h2>
          <p className="font-hand text-lg text-ink/40 mb-16">
            The following are not good ideas. They are the other kind.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {LOGO_CONCEPTS.map((c) => {
              const isSoBad = c.id === "so-bad";
              return (
                <div
                  key={c.id}
                  className={`relative bg-white ink-border shadow-hard p-5 transition-transform duration-300 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${isSoBad ? (soBadShaking ? "card-shaking" : "") : ""}`}
                  style={{ transform: `rotate(${c.rot}deg)` }}
                  onClick={isSoBad ? handleSoBadClick : undefined}
                  role={isSoBad ? "button" : undefined}
                  tabIndex={isSoBad ? 0 : undefined}
                  onKeyDown={isSoBad ? (e) => { if (e.key === "Enter") handleSoBadClick(); } : undefined}
                >
                  <Tape />

                  {/* Filename */}
                  <p className="font-mono text-xs text-ink/40 mb-3 uppercase tracking-wider">{c.filename}</p>

                  {/* Image */}
                  <div className="aspect-video bg-ink/[0.03] flex items-center justify-center mb-4 overflow-hidden border border-ink/8">
                    <img
                      src={c.img}
                      alt={c.filename}
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  </div>

                  {/* Status / Reason */}
                  <div className="space-y-1 border-t border-ink/10 pt-3">
                    <div className="flex gap-2 items-baseline flex-wrap">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-ink/30">Status</span>
                      <span className="font-hand text-sm text-blush">{c.status}</span>
                    </div>
                    <div className="flex gap-2 items-baseline flex-wrap">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-ink/30">Reason</span>
                      <span className="font-hand text-sm text-ink/55">{c.reason}</span>
                    </div>
                  </div>

                  {/* Handwritten note */}
                  <p className="font-hand text-xs text-ink/25 mt-3 italic">{c.note}</p>

                  {/* Secret hint on SO_BAD */}
                  {isSoBad && soBadClicks > 0 && (
                    <p className="absolute -bottom-6 left-0 right-0 text-center font-hand text-xs text-ink/25">
                      {soBadClicks === 1 ? "…" : "keep going."}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — MASCOT MULTIVERSE ───────────────────────────────── */}
      <section className="bg-[#111] text-cream px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel n="02" text="Mascot Multiverse" color="text-acid" />
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9] mb-5">
            Things got<br /><span className="italic">weird.</span>
          </h2>
          <p className="font-hand text-lg text-cream/35 mb-16">
            Alternate-universe versions of the mascot. Most should stay in the alternate universe.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-4">
            {MASCOT_CONCEPTS.map((m, i) => (
              <div
                key={i}
                className="relative bg-[#1a1a1a] border border-cream/10 p-4 hover:border-acid/40 transition-colors duration-300 group"
                style={{ transform: `rotate(${m.rot}deg)` }}
              >
                <div className="aspect-square bg-black/30 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="max-h-full max-w-full object-contain p-1 group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <p className="font-display font-black italic text-sm leading-tight mb-1">{m.title}</p>
                <p className="font-hand text-xs text-cream/35 leading-snug">{m.mood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — THE SURVIVORS ───────────────────────────────────── */}
      <section
        className="px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink"
        style={{ backgroundColor: "#fdfaf5", backgroundImage: `url(${paperTexture})`, backgroundBlendMode: "multiply" }}
      >
        <div className="max-w-[1000px] mx-auto text-center">
          <SectionLabel n="03" text="The Survivors" />
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9] mb-4">
            After many questionable decisions,<br />
            <span className="italic">these two survived.</span>
          </h2>
          <p className="font-hand text-lg text-ink/40 mb-14">
            We're as surprised as you are.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Logo */}
            <div className="relative ink-border shadow-hard p-8 bg-white" style={{ transform: "rotate(-1deg)" }}>
              <Tape />
              <p className="font-hand text-xs text-ink/30 mb-4 uppercase tracking-widest text-center">Final Logo</p>
              <img src={logoWordmark} alt="VEWS Studio wordmark"
                   className="h-24 md:h-28 w-auto object-contain mx-auto" />
              <p className="font-hand text-xs text-acid mt-4 text-center">✓ Approved</p>
            </div>

            <p className="font-display font-black text-3xl italic text-ink/25 hidden md:block">&amp;</p>

            {/* Mascot */}
            <div className="relative ink-border shadow-hard p-6 bg-white" style={{ transform: "rotate(1.5deg)" }}>
              <Tape />
              <p className="font-hand text-xs text-ink/30 mb-3 uppercase tracking-widest text-center">Final Mascot</p>
              <img src={mascotFinal} alt="VEWS mascot"
                   className="h-36 md:h-44 w-auto object-contain mx-auto" />
              <p className="font-hand text-xs text-acid mt-3 text-center">✓ Approved (eventually)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — DELETED SCENES ──────────────────────────────────── */}
      <section className="bg-[#0e0e0e] text-cream px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel n="04" text="Deleted Scenes" color="text-blush" />
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[0.9] mb-5">
            Things that<br /><span className="italic">almost happened.</span>
          </h2>
          <p className="font-hand text-lg text-cream/30 mb-14">
            Every film has a cutting room floor. This is ours.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {DELETED_SCENES.map((scene, i) => (
              <div
                key={i}
                className={`relative border border-cream/10 overflow-hidden group ${i === 2 ? "border-acid/30" : ""}`}
                style={{ transform: `rotate(${i === 0 ? -0.5 : i === 1 ? 1 : 0}deg)` }}
              >
                {/* Video */}
                <video
                  src={scene.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLVideoElement).pause(); }}
                  className="w-full aspect-video object-cover bg-black cursor-pointer"
                />

                {/* Info strip */}
                <div className="p-4 border-t border-cream/10">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-display font-black italic text-lg leading-tight">{scene.title}</p>
                    <span className={`text-[9px] uppercase tracking-[0.2em] shrink-0 mt-1 ${i === 2 ? "text-acid" : "text-cream/20"}`}>
                      {i === 2 ? "Shipped ✓" : "Filed"}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-cream/20 mb-2">{scene.filename}</p>
                  <p className="font-hand text-sm text-cream/40">{scene.note}</p>
                </div>

                {/* Hover to play hint */}
                <p className="absolute top-2 right-2 font-hand text-[9px] text-cream/25 pointer-events-none
                               opacity-0 group-hover:opacity-100 transition-opacity">
                  hover to play
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — NOTES FROM THE STUDIO ──────────────────────────── */}
      <section
        className="px-6 md:px-10 py-20 md:py-28 border-t-[3px] border-ink"
        style={{ backgroundColor: "#fdfaf5", backgroundImage: `url(${paperTexture})`, backgroundBlendMode: "multiply" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel n="05" text="Notes from the Studio" />
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[0.9] mb-16">
            Things we wrote down.<br />
            <span className="italic text-ink/40">Some of them twice.</span>
          </h2>

          {/* Scattered notes grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {NOTES.map((note, i) => (
              <div
                key={i}
                className={`relative ink-border shadow-hard p-6 ${note.bg} ${note.offset ?? ""}`}
                style={{ transform: `rotate(${note.rot}deg)` }}
              >
                <Tape />
                <p className={`font-hand text-ink/20 text-[9px] uppercase tracking-widest mb-3`}>
                  studio note #{String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className={`${note.font === "display" ? "font-display font-black" : "font-hand"} ${note.size} text-ink leading-snug`}
                >
                  {note.text}
                </p>
                <Squiggle className="mt-4 text-ink/15" width={80} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVERY COUNTER ───────────────────────────────────────────── */}
      <section className="bg-[#111] text-cream px-6 md:px-10 py-16 md:py-20 border-t-[3px] border-ink">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div>
            <p className="font-hand text-xl text-cream/40 mb-3">Visitors who found this page:</p>
            <p className="font-display font-black italic leading-none text-acid"
               style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}>
              127
            </p>
            <p className="font-hand text-sm text-cream/20 mt-2">(probably)</p>
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={() => trigger("key")}
              className="egg-trigger ml-auto block"
              aria-label="something small, easy to miss"
            >
              <Key size={36} className="text-cream/20 mb-4 ml-auto" />
              <span className="egg-hint" style={{ marginLeft: "auto", textAlign: "right" }}>doesn't open any door here.</span>
            </button>
            <p className="font-hand text-base text-cream/30 italic">You're one of them now.</p>
            <p className="font-hand text-sm text-acid/70 mt-3">
              {countedFound} / {total} secrets found this visit
            </p>
          </div>
        </div>
      </section>

      {/* ── COLOPHON ────────────────────────────────────────────────────── */}
      <div
        className="px-6 md:px-10 py-8 border-t-[3px] border-ink"
        style={{ backgroundColor: "#f5f0e6", backgroundImage: `url(${paperTexture})`, backgroundBlendMode: "multiply" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <img src={logoWordmark} alt="VEWS Studio" className="h-8 w-auto object-contain opacity-30" />
          <div className="flex items-center gap-6">
            <p className="font-hand text-sm text-ink/25 italic">Now you've seen too much.</p>
            <Link to="/" className="font-hand text-sm text-ink/40 hover:text-ink transition-colors">
              ← Back to safety
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
