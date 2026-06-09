import { useEffect, useRef, useState } from "react";
import logoVideo from "@/assets/Vews_Logo_Video.mp4";

const BG = "#D2D2D2";

export function Intro({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [fading, setFading] = useState(false);
  const doneRef = useRef(false);
  const safetyRef = useRef<number>(0);

  // Lock scroll while intro is showing
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      if (videoRef.current) videoRef.current.style.opacity = "0";
      setFading(true);
      window.setTimeout(onDone, 350);
    };

    // Safety timeout in case the video stalls
    safetyRef.current = window.setTimeout(finish, 30000);

    v.addEventListener("ended", finish);
    v.addEventListener("error", finish);

    return () => {
      v.removeEventListener("ended", finish);
      v.removeEventListener("error", finish);
      window.clearTimeout(safetyRef.current);
    };
  }, [onDone]);

  const skip = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    if (videoRef.current) videoRef.current.style.opacity = "0";
    setFading(true);
    window.setTimeout(onDone, 350);
  };

  return (
    <div
      aria-hidden={fading}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: BG,
        opacity: fading ? 0 : 1,
        transition: "opacity 350ms ease-out",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.1  0 0 0 0 0.1  0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ transition: "opacity 80ms" }}
      >
        <source src={logoVideo} type="video/mp4" />
      </video>

      <button
        onClick={skip}
        className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.3em] text-ink/50 hover:text-ink font-medium transition-colors"
      >
        skip ↦
      </button>
    </div>
  );
}
