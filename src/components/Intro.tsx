import { useEffect, useRef, useState } from "react";

/**
 * Fullscreen cinematic intro that plays the VEWS logo video and seamlessly
 * zooms into the pupil before handing off to the homepage.
 */
export function Intro({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [phase, setPhase] = useState<"playing" | "zooming" | "gone">("playing");
  const triggeredRef = useRef(false);

  // Lock scroll while intro is up
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Drive the pupil-zoom transition near the end of the clip
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay blocked — skip straight to site
        finish();
      });
    };

    const onTime = () => {
      if (triggeredRef.current) return;
      const d = v.duration || 3.7;
      // Start zoom transition in the final ~0.9s — the camera is already pushing
      // into the pupil, we just extend that motion into the page.
      if (v.currentTime >= d - 0.9) {
        triggeredRef.current = true;
        setPhase("zooming");
        // Fully hand off shortly after the zoom completes
        window.setTimeout(finish, 1100);
      }
    };

    const finish = () => {
      setPhase("gone");
      window.setTimeout(onDone, 250);
    };

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", finish);
    v.addEventListener("error", finish);

    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });

    // Safety net — never strand the user
    const safety = window.setTimeout(finish, 7000);

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", finish);
      v.removeEventListener("error", finish);
      window.clearTimeout(safety);
    };
  }, [onDone]);

  const skip = () => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    setPhase("zooming");
    window.setTimeout(() => {
      setPhase("gone");
      window.setTimeout(onDone, 200);
    }, 600);
  };

  return (
    <div
      aria-hidden={phase === "gone"}
      className="fixed inset-0 z-[200] bg-cream flex items-center justify-center overflow-hidden"
      style={{
        opacity: phase === "gone" ? 0 : 1,
        transition: "opacity 250ms ease-out",
        pointerEvents: phase === "gone" ? "none" : "auto",
      }}
    >
      {/* Grain matches the site */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.1  0 0 0 0 0.1  0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <video
        ref={videoRef}
        playsInline
        muted
        autoPlay
        preload="auto"
        className="max-w-[min(92vw,92vh)] max-h-[92vh] w-auto h-auto object-contain"
        style={{
          transform: phase === "zooming" ? "scale(14)" : "scale(1)",
          transition: "transform 1100ms cubic-bezier(0.7, 0, 0.84, 0)",
          willChange: "transform",
        }}
      >
        <source src="/intro.webm" type="video/webm" />
      </video>

      {/* Cream wash that intensifies as we punch through the pupil */}
      <div
        className="absolute inset-0 bg-cream pointer-events-none"
        style={{
          opacity: phase === "zooming" ? 1 : 0,
          transition: "opacity 900ms ease-in 250ms",
        }}
      />

      <button
        onClick={skip}
        className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.3em] text-ink/60 hover:text-ink font-medium"
      >
        skip ↦
      </button>
    </div>
  );
}
