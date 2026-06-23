import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";

import hammadImg from "@/assets/animated team/hammad_ceo_animated.jpeg";
import amnaImg from "@/assets/animated team/amna_teamlead_animated.png";
import raahimImg from "@/assets/animated team/raahim_graphic_designer_animated.png";
import ayeshaImg from "@/assets/animated team/ayesha_client_success_animated.png";
import khadijaImg from "@/assets/animated team/khadija_social_media_animated.png";
import shumailImg from "@/assets/animated team/shumail_video_editor_animated.png";
import ahmedImg from "@/assets/animated team/ahmed_video_editor_animated.png";

import hammadReal from "@/assets/normal team/hammad_ceo.png";
import amnaReal from "@/assets/normal team/amna_team_lead.png";
import raahimReal from "@/assets/normal team/raahim_graphic_designer.png";
import ayeshaReal from "@/assets/normal team/ayesha_client_success.png";
import khadijaReal from "@/assets/normal team/khadija_social_media.png";
import shumailReal from "@/assets/normal team/shumail_video_editor.png";
import ahmedReal from "@/assets/normal team/ahmed_video_editor.png";

import saadImg from "@/assets/Saad/saad_animated.png";
import { useEasterEgg } from "@/components/EasterEggProvider";

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

type Member = {
  name: string; role: string; img: string; realImg: string;
  rot: string; tape: string; bio: string;
};

const TEAM: Member[] = [
  {
    name: "Hammad", role: "CEO", img: hammadImg, realImg: hammadReal,
    rot: "-rotate-2", tape: "left-1/2 -top-3 -translate-x-1/2 rotate-2",
    bio: "Officially the boss. Unofficially the guy who replies to client emails at 2am and still shows up first to every meeting. Has never once said \"that's not my job\" — mostly because he hasn't figured out what his job actually is yet.",
  },
  {
    name: "Amna", role: "Team Lead", img: amnaImg, realImg: amnaReal,
    rot: "rotate-1", tape: "left-8 -top-3 -rotate-12",
    bio: "The reason projects actually ship on time. Keeps seven timelines straight in her head at once and somehow still remembers everyone's coffee order.",
  },
  {
    name: "Raahim", role: "Graphic Designer", img: raahimImg, realImg: raahimReal,
    rot: "-rotate-1", tape: "right-8 -top-3 rotate-6",
    bio: "Once stared at a single button for forty-five minutes because the shadow felt \"a little dishonest.\" Owns more font pairings than friends. If a design looks effortless, assume he suffered for it.",
  },
  {
    name: "Ayesha", role: "Client Success", img: ayeshaImg, realImg: ayeshaReal,
    rot: "rotate-2", tape: "left-1/2 -top-3 -translate-x-1/2 -rotate-3",
    bio: "The calm in every client call. Could talk a deadline extension out of a brick wall, and genuinely remembers what every client's brand stands for without being told twice.",
  },
  {
    name: "Khadija", role: "Social Media Manager", img: khadijaImg, realImg: khadijaReal,
    rot: "-rotate-2", tape: "right-6 -top-3 -rotate-6",
    bio: "Knows what the algorithm wants before the algorithm does. Has strong feelings about posting at exactly 7:43pm and probably already knows what's trending tomorrow.",
  },
  {
    name: "Shumail", role: "Video Editor", img: shumailImg, realImg: shumailReal,
    rot: "rotate-1", tape: "left-10 -top-3 rotate-12",
    bio: "Lives somewhere between frame one and the final export. Has cut more jump cuts than he's had hot meals this year. Allergic to a bad transition.",
  },
  {
    name: "Ahmed", role: "Video Editor", img: ahmedImg, realImg: ahmedReal,
    rot: "-rotate-1", tape: "left-1/2 -top-3 -translate-x-1/2 rotate-3",
    bio: "The other half of the edit bay. If Shumail handles the cuts, Ahmed handles the feel — pacing, sound, the stuff you only notice when it's missing.",
  },
];

const SAAD: Member = {
  name: "Saad", role: "Website Architect", img: saadImg, realImg: saadImg,
  rot: "rotate-1", tape: "left-1/2 -top-3 -translate-x-1/2 rotate-2",
  bio: "Built this entire site, then hid himself behind a polaroid instead of just adding his name to a footer like a normal person. Wrote the code, wired the secrets, and is mildly delighted you found this one.",
};

// Taunt sequence shown on the back of Saad's card — escalates with each click, then locks
const SAAD_TAUNTS = [
  "please don't flip me.",
  "i'm warning you.",
  "okay this is just rude now.",
  "FINE. you absolute menace.",
];

// A single hidden key (see EasterEggProvider, id "key") lives on /all-eyes. Entering
// the combo without it first only triggers a one-time preview that reverts afterward;
// finding the key first makes the combo's reveal permanent, no revert.
const SAAD_LOCKED_MESSAGE = "↑ ↓ ← → ↑ ↑ ↓ ↓ ← ← → →\n\ntype it (or swipe it). see what happens.";

// Shown on the card after the first preview has reverted — replaces the combo
// instructions, since by then the visitor already knows them.
const SAAD_POST_PREVIEW_MESSAGE = "that was a preview.\n\nthe real one's hiding somewhere you've already been.";

// Konami-style combo — entering this on the keyboard (while the card is locked)
// triggers the full chaos sequence instead of the quiet flip.
const SAAD_COMBO = [
  "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowLeft", "ArrowRight", "ArrowRight",
];

// Evenly spaces `total` points around a circle (percent-based, relative to a
// square container) — no leftover gaps, unlike a fixed grid with empty cells.
const RING_RADIUS_PCT = 38;
function ringPosition(slot: number, total: number) {
  const angle = (slot / total) * 2 * Math.PI - Math.PI / 2; // start at 12 o'clock, clockwise
  return {
    left: 50 + RING_RADIUS_PCT * Math.cos(angle),
    top: 50 + RING_RADIUS_PCT * Math.sin(angle),
  };
}

function shuffledSlots(n: number) {
  const slots = Array.from({ length: n }, (_, i) => i);
  for (let i = slots.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[j]] = [slots[j], slots[i]];
  }
  return slots;
}

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
  const [selected, setSelected] = useState<Member | null>(null);
  const [saadFlipped, setSaadFlipped] = useState(false);
  const [saadStage, setSaadStage] = useState(0);
  const [saadLocked, setSaadLocked] = useState(false);
  const [hasSeenPreview, setHasSeenPreview] = useState(false);
  const { trigger, found } = useEasterEgg();

  const hasKey = found.has("key");

  // ── Chaos mode (Konami-style combo) ─────────────────────────────────────
  // Shake, then the grid rearranges into a ring with Saad centered, and every
  // card flips. The rearrange is animated with the FLIP technique (capture
  // positions before the layout change, then transition from old to new) —
  // a plain CSS `order`/grid-area change can't be smoothly animated on its own.
  const [chaosShaking, setChaosShaking] = useState(false);
  const [chaosRevealed, setChaosRevealed] = useState(false);
  const [ringSlots, setRingSlots] = useState<number[]>([]);
  const chaosActive = chaosShaking || chaosRevealed;

  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());
  const prevRectsRef = useRef<Map<string, DOMRect> | null>(null);

  const captureRects = () => {
    const rects = new Map<string, DOMRect>();
    cardRefs.current.forEach((el, key) => rects.set(key, el.getBoundingClientRect()));
    prevRectsRef.current = rects;
  };

  // Runs after every layout-affecting change (entering or leaving the ring
  // arrangement) and animates each card from where it WAS to where it now is.
  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current;
    if (!prevRects) return;
    cardRefs.current.forEach((el, key) => {
      const prev = prevRects.get(key);
      if (!prev) return;
      const next = el.getBoundingClientRect();
      const dx = prev.left - next.left;
      const dy = prev.top - next.top;
      const scaleX = prev.width / next.width;
      const scaleY = prev.height / next.height;
      el.style.transition = "none";
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
      requestAnimationFrame(() => {
        el.style.transition = "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.transform = "";
      });
    });
    prevRectsRef.current = null;
  }, [ringSlots, chaosRevealed]);

  const triggerChaos = () => {
    if (chaosActive || saadFlipped) return;
    setChaosShaking(true);

    window.setTimeout(() => {
      setChaosShaking(false);
      captureRects();
      setRingSlots(shuffledSlots(TEAM.length));
      setChaosRevealed(true);
      setSaadFlipped(true);
      // Found the key first? Full permanent reveal, no revert. Otherwise it's
      // just a one-time preview — the card locks back up afterward.
      trigger(hasKey ? "architect" : "preview");
    }, 650);

    window.setTimeout(() => {
      captureRects();
      setChaosRevealed(false);
      if (!hasKey) {
        setSaadFlipped(false);
        setHasSeenPreview(true);
      }
    }, 5200);
  };

  // Listens for the secret combo once the card is locked — ignored otherwise.
  // Accepts both arrow-key presses and swipe gestures (no keyboard on phones),
  // feeding the same direction buffer either way.
  useEffect(() => {
    if (!saadLocked || saadFlipped) return;
    const buffer: string[] = [];

    const pushAndCheck = (direction: string) => {
      buffer.push(direction);
      if (buffer.length > SAAD_COMBO.length) buffer.shift();
      if (buffer.length === SAAD_COMBO.length && buffer.every((k, i) => k === SAAD_COMBO[i])) {
        triggerChaos();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (!e.key.startsWith("Arrow")) return;
      e.preventDefault();
      pushAndCheck(e.key);
    };

    let touchStart: { x: number; y: number } | null = null;
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      touchStart = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStart.x;
      const dy = t.clientY - touchStart.y;
      touchStart = null;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      if (Math.max(absX, absY) < 30) return; // ignore taps / tiny jitters
      const direction = absX > absY
        ? (dx > 0 ? "ArrowRight" : "ArrowLeft")
        : (dy > 0 ? "ArrowDown" : "ArrowUp");
      pushAndCheck(direction);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [saadLocked, saadFlipped]);

  const handleSaadClick = () => {
    if (saadFlipped) {
      setSelected(SAAD);
      return;
    }
    if (hasKey) {
      trigger("architect");
      setSaadFlipped(true);
      return;
    }
    if (saadLocked) return;
    if (saadStage < SAAD_TAUNTS.length - 1) {
      setSaadStage((s) => s + 1);
    } else {
      setSaadLocked(true);
    }
  };

  const saadText = hasKey
    ? "you found the key. go ahead."
    : saadLocked
    ? (hasSeenPreview ? SAAD_POST_PREVIEW_MESSAGE : SAAD_LOCKED_MESSAGE)
    : SAAD_TAUNTS[saadStage];

  // Close on Escape, lock scroll while open
  useEffect(() => {
    if (!selected) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

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
              <p className="text-lg font-medium">Islamabad, Pakistan</p>
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
            <div className="border-t border-ink/10 pt-6">
              <Link
                to="/all-eyes"
                className="group flex flex-col gap-1"
              >
                <p className="text-xs uppercase tracking-widest text-ink/30 mb-1 group-hover:text-blush transition-colors">Behind the scenes</p>
                <p className="font-hand text-lg text-ink/40 group-hover:text-ink transition-colors">
                  not everything made the cut. ↗
                </p>
              </Link>
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

      {/* ── 6. TEAM NOTE ─────────────────────────────────────────────────── */}
      {/* Goal: human faces behind the studio — builds personal connection */}
      {/* Polaroid-style cards, matching the Work page's scattered photo treatment */}
      <section
        data-section="team-note"
        className="px-6 md:px-10 py-16 md:py-24 border-t-[3px] border-ink"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="font-hand text-xl text-blush mb-2" style={{ transform: "rotate(-0.4deg)" }}>
            the people
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[0.9] mb-12">
            Made by a few,<br />
            <span className="italic">not a factory.</span>
          </h2>
          <div
            className={chaosRevealed
              ? "relative w-full max-w-[340px] sm:max-w-[460px] md:max-w-[600px] aspect-square mx-auto"
              : "relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10"}
          >
            {TEAM.map((member, i) => {
              const pos = chaosRevealed ? ringPosition(ringSlots[i] ?? i, TEAM.length) : null;
              return (
              <button
                key={member.name}
                ref={(el) => { if (el) cardRefs.current.set(member.name, el); else cardRefs.current.delete(member.name); }}
                type="button"
                onClick={() => { if (!chaosRevealed) setSelected(member); }}
                className={["group text-left", chaosRevealed ? "" : `relative ${member.rot}`, chaosShaking ? "card-shaking" : ""].join(" ")}
                style={pos ? {
                  perspective: "1000px",
                  position: "absolute",
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: "26%",
                  animationDelay: chaosShaking ? `${i * 40}ms` : undefined,
                } : {
                  perspective: "1000px",
                  animationDelay: chaosShaking ? `${i * 40}ms` : undefined,
                }}
                aria-label={`${member.name} — ${member.role}`}
              >
                {/* Centers the card on its ring anchor point — kept on its own element
                    so the FLIP animation (which mutates the button's transform directly)
                    never overwrites this */}
                <div style={pos ? { transform: "translate(-50%, -50%)" } : undefined}>
                <div
                  className="relative w-full transition-transform duration-500"
                  style={{ transformStyle: "preserve-3d", transform: chaosRevealed ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  {/* Front face — the real photo */}
                  <div
                    className="relative bg-cream p-3 pb-5 ink-border-thick shadow-hard group-hover:-translate-y-2 group-hover:shadow-[6px_10px_0_0_var(--ink)]"
                    style={{ backfaceVisibility: "hidden", transition: "transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 250ms ease-out" }}
                  >
                    <span className={`tape ${member.tape}`} />
                    <div className="aspect-[4/5] overflow-hidden bg-ink/5">
                      <img
                        src={member.img}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="pt-3 text-center">
                      <p className="font-hand text-xl leading-tight">{member.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-ink/40 mt-1">{member.role}</p>
                    </div>
                  </div>

                  {/* Back face — blank, shown only during chaos mode */}
                  <div
                    className="absolute inset-0 bg-cream p-3 pb-5 ink-border-thick shadow-hard [transform:rotateY(180deg)]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <span className={`tape ${member.tape}`} />
                    <div className="aspect-[4/5] flex items-center justify-center bg-[#F1ECE1]">
                      <p className="font-hand text-sm text-ink/15">·</p>
                    </div>
                    <div className="pt-3 text-center">
                      <p className="font-hand text-xl leading-tight text-ink/15">·</p>
                      <p className="text-[10px] uppercase tracking-widest text-transparent mt-1">·</p>
                    </div>
                  </div>
                </div>
                </div>
              </button>
              );
            })}

            {/* ── Secret 8th card — a polaroid shown face-down ─────────────── */}
            <button
              ref={(el) => { if (el) cardRefs.current.set("saad", el); else cardRefs.current.delete("saad"); }}
              type="button"
              onClick={handleSaadClick}
              className={["group", chaosRevealed ? "" : `relative ${SAAD.rot}`, chaosShaking ? "card-shaking" : ""].join(" ")}
              style={chaosRevealed ? {
                perspective: "1000px",
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "38%",
                zIndex: 10,
              } : {
                perspective: "1000px",
              }}
              aria-label={saadFlipped ? `${SAAD.name} — ${SAAD.role}` : "a polaroid, face down"}
            >
              {/* Centers the card on its anchor point — kept separate from the button's
                  own transform, which the FLIP animation mutates directly */}
              <div style={chaosRevealed ? { transform: "translate(-50%, -50%)" } : undefined}>
              <div
                className="relative w-full transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: saadFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Back face — visible by default */}
                <div
                  className="relative bg-cream p-3 pb-5 ink-border-thick shadow-hard group-hover:-translate-y-2 group-hover:shadow-[6px_10px_0_0_var(--ink)]"
                  style={{ backfaceVisibility: "hidden", transition: "transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 250ms ease-out" }}
                >
                  <span className={`tape ${SAAD.tape}`} />
                  <div className="aspect-[4/5] flex items-center justify-center bg-[#F1ECE1]">
                    <p
                      className="font-hand text-sm text-ink/30 text-center px-4 whitespace-pre-line"
                      style={{ transform: "rotate(-2deg)" }}
                    >
                      {saadText}
                    </p>
                  </div>
                  <div className="pt-3 text-center">
                    <p className="font-hand text-xl leading-tight text-ink/15">·</p>
                    <p className="text-[10px] uppercase tracking-widest text-transparent mt-1">·</p>
                  </div>
                </div>

                {/* Front face — revealed after flip */}
                {/* Hover lift combined into the same transform via Tailwind arbitrary values —
                    a separate inline `transform` style would override group-hover entirely */}
                <div
                  className="absolute inset-0 bg-cream p-3 pb-5 ink-border-thick shadow-hard [transform:rotateY(180deg)] group-hover:[transform:rotateY(180deg)_translateY(-8px)] group-hover:shadow-[6px_10px_0_0_var(--ink)] transition-[transform,box-shadow] duration-300"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className={`tape ${SAAD.tape}`} />
                  <div className="aspect-[4/5] overflow-hidden bg-ink/5">
                    <img
                      src={SAAD.img}
                      alt={SAAD.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="pt-3 text-center">
                    <p className="font-hand text-xl leading-tight">{SAAD.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-ink/40 mt-1">{SAAD.role}</p>
                  </div>
                </div>
              </div>
              </div>
            </button>
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

      {/* ── Team Member Modal ────────────────────────────────────────────── */}
      {/* Rendered via portal directly into <body> — .page-enter's transform animation
          on an ancestor would otherwise trap position:fixed to that element's box
          instead of the viewport, making the modal center on the page, not the screen. */}
      {selected && createPortal(
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} — ${selected.role}`}
        >
          <div
            className="absolute inset-0 bg-ink/70"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />
          <div className="relative bg-cream ink-border-thick shadow-hard max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-cream ink-border shadow-hard-sm hover:bg-acid transition-colors font-bold"
            >
              ✕
            </button>
            <div className="aspect-[4/5] overflow-hidden bg-ink/5">
              <img
                src={selected.realImg}
                alt={selected.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-ink/40 mb-1">{selected.role}</p>
              <h3 className="font-display font-black text-3xl mb-4">{selected.name}</h3>
              <p className="text-base leading-relaxed text-ink/70">{selected.bio}</p>
            </div>
          </div>
        </div>,
        document.body
      )}

    </PageLayout>
  );
}
