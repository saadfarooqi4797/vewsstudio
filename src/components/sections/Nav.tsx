import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import logoWordmark from "@/assets/brand-details/logo-wordmark.png";
import mascotWink from "@/assets/brand-details/Mascot-wink.png";
import threeLines from "@/assets/doodles/three-lines.png";
import starRed from "@/assets/doodles/star-red.png";
import crownImg from "@/assets/doodles/crown.png";
import arrowDoodle from "@/assets/doodles/arrow.png";
import { useEasterEgg } from "@/components/EasterEggProvider";

const links = [
  { to: "/",         label: "Home" },
  { to: "/work",     label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about",    label: "About" },
  { to: "/contact",  label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { trigger } = useEasterEgg();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Floating header — no box, no background ── */}
      <header className="fixed top-0 left-0 right-0 z-[90] px-6 md:px-10 pt-5 md:pt-7 flex items-start justify-between pointer-events-none">

        <Link to="/" className="pointer-events-auto" onClick={() => setOpen(false)}>
          <img
            src={logoWordmark}
            alt="VEWS Studio"
            className="h-28 md:h-32 w-auto object-contain"
            style={{ filter: "drop-shadow(0 1px 10px rgba(255,255,255,0.55))" }}
          />
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="pointer-events-auto mt-2 transition-all duration-300 hover:scale-110 hover:rotate-6 origin-top-right"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <img
            src={threeLines}
            alt="" aria-hidden="true"
            className="h-9 md:h-11 w-auto object-contain"
            style={{ filter: "drop-shadow(0 1px 5px rgba(255,255,255,0.35))" }}
          />
        </button>
      </header>

      {/* ── Fullscreen overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(1.03)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >

        {/* star-red — floats in the dividing space between left and right */}
        <img
          src={starRed}
          alt="" aria-hidden="true"
          className="absolute top-[30%] left-[54%] w-8 md:w-11 pointer-events-none select-none"
          style={{
            transform: "rotate(20deg)",
            opacity: open ? 0.85 : 0,
            transition: "opacity 0.5s ease 0.3s",
          }}
        />

        {/* ── Overlay header row ── */}
        <div className="flex items-center justify-between px-6 md:px-12 pt-6 pb-2 shrink-0">
          <img
            src={logoWordmark}
            alt="VEWS Studio"
            className="h-20 md:h-28 w-auto object-contain"
          />

          {/* Doodle X — hand-drawn close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
            className="group text-ink hover:text-blush transition-colors duration-200"
            style={{ background: "none", border: "none", padding: "4px" }}
          >
            <svg
              width="36" height="36" viewBox="0 0 36 36" fill="none"
              className="transition-transform duration-300 group-hover:rotate-90"
              style={{ transform: "rotate(-4deg)" }}
            >
              <path
                d="M5,5.5 C9,9 14,13.5 18,18.5 C22,23 27.5,28 31,31.5"
                stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"
              />
              <path
                d="M31,5 C27.5,9 22.5,13.5 18,18.5 C13.5,23 9,28 5.5,31.5"
                stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ── Main body — left nav + right mascot ── */}
        <div className="flex-1 flex min-h-0">

          {/* Left column: nav links + CTA */}
          <div className="flex flex-col justify-between flex-1 px-6 md:px-12 py-4 md:py-6 overflow-y-auto">

            <nav className="flex flex-col gap-0 my-auto">
              {links.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHoveredLink(link.to)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-center gap-4 py-2 md:py-3 border-b border-ink/10 w-full"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 0.45s ease ${0.1 + i * 0.07}s, transform 0.45s ease ${0.1 + i * 0.07}s`,
                  }}
                >
                  <span
                    className="font-hand text-sm text-ink/25 w-6 shrink-0 transition-colors duration-200"
                    style={{ color: hoveredLink === link.to ? "var(--blush)" : undefined }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="font-display font-black uppercase leading-none tracking-tight select-none"
                    style={{
                      fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
                      color: hoveredLink === link.to ? "var(--blush)" : "var(--ink)",
                      fontStyle: hoveredLink === link.to ? "italic" : "normal",
                      transition: "color 0.2s ease, font-style 0.15s ease",
                    }}
                  >
                    {link.label}
                  </span>
                  <img
                    src={arrowDoodle}
                    alt="" aria-hidden="true"
                    className="w-8 md:w-10 shrink-0 object-contain"
                    style={{
                      opacity: hoveredLink === link.to ? 1 : 0,
                      transform: hoveredLink === link.to
                        ? "translateX(0) rotate(0deg)"
                        : "translateX(-10px) rotate(-15deg)",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA area with static arrow for layout balance */}
            <div
              className="flex items-end gap-5 pt-4 md:pt-6"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.45s ease 0.42s, transform 0.45s ease 0.42s",
              }}
            >
              <img
                src={arrowDoodle}
                alt="" aria-hidden="true"
                className="w-10 md:w-12 object-contain shrink-0 pointer-events-none mb-1"
                style={{ transform: "rotate(-20deg) scaleX(-1)" }}
              />
              <div>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 font-bold text-sm uppercase tracking-widest ink-border shadow-hard hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                >
                  Talk To Us
                </Link>
                <p className="mt-2 font-hand text-base text-ink/35">creative@vewsstudio.com</p>
              </div>
            </div>
          </div>

          {/* Right column: mascot + crown — desktop only */}
          <div
            className="hidden md:flex w-[40%] shrink-0 items-end justify-center pb-0 pr-6 lg:pr-10 relative"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.22s, transform 0.5s ease 0.22s",
            }}
          >
            {/* Crown — tucked in the top-right, low opacity until you look */}
            <button
              onClick={() => trigger("crown")}
              className="egg-trigger absolute top-8 right-4 lg:right-8"
              aria-label="a hidden detail"
            >
              <img
                src={crownImg}
                alt="" aria-hidden="true"
                className="w-10 lg:w-12 opacity-30 hover:opacity-80 transition-opacity duration-400"
                style={{ transform: "rotate(-10deg)" }}
              />
              <span className="egg-hint">look closer.</span>
            </button>

            <img
              src={mascotWink}
              alt="" aria-hidden="true"
              className="w-56 lg:w-72 xl:w-80 object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Mobile: mascot + crown — compact, bottom-right strip */}
        <div
          className="md:hidden flex justify-end items-end px-6 pb-5 pt-1 shrink-0"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity 0.5s ease 0.38s",
          }}
        >
          <img
            src={mascotWink}
            alt="" aria-hidden="true"
            className="w-24 object-contain"
          />
        </div>

      </div>
    </>
  );
}
