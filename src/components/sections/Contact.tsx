import { useEffect, useState } from "react";
import { Asterisk, Burst, Scribble, Star } from "@/components/Doodles";
import mascotSittingCrossed from "@/assets/mascot-sitting-crossed.png";

const BOOKING_WIDGET_ID = "MSdgzDD5pnOapDJZi4oc";
const BOOKING_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export function Contact() {
  const [height, setHeight] = useState(900);

  // Load GHL's embed script once (it's meant to handle the widget's auto-resize via postMessage)
  useEffect(() => {
    if (document.querySelector(`script[src="${BOOKING_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = BOOKING_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Belt-and-suspenders: also resize ourselves in case the embed script's
  // own resize logic doesn't fire for this widget/iframe id format.
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (typeof event.data !== "object" || event.data === null) return;
      const data = event.data as Record<string, unknown>;
      const raw = data["height"];
      const parsed = typeof raw === "number" ? raw : typeof raw === "string" ? parseInt(raw, 10) : NaN;
      if (!Number.isNaN(parsed) && parsed > 0) setHeight(parsed);
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="contact" className="relative px-4 md:px-8 py-24 md:py-36 overflow-hidden bg-[#111] text-cream">
      <Scribble className="absolute bottom-12 left-[6%] text-blush/50 hidden md:block" size={80} />
      <Asterisk className="absolute bottom-32 right-[8%] text-acid animate-float hidden md:block" size={16} />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-36 relative">
          <span className="absolute left-[15%] top-0 animate-wobble inline-block">
            <Star className="text-blush" size={32} />
          </span>
          <Burst className="absolute right-[15%] top-2 text-cream/30 animate-float" size={60} />
          <span className="font-hand text-2xl text-blush" style={{ display: 'inline-block', transform: 'rotate(0.5deg)' }}>(this is the part where you say hi)</span>
          <h2 className="text-6xl md:text-9xl mt-3 leading-[0.85]">
            Got a brief?<br />
            <span className="italic font-display highlight-acid">Got a hunch?</span>
          </h2>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            Tell us what you're making. Pick a time below and let's talk it through.
          </p>
        </div>

        {/* ── Booking widget — collects contact info and the time slot in one step ── */}
        <div className="relative bg-cream text-ink ink-border-thick shadow-hard p-6 md:p-10 max-w-2xl mx-auto rotate-1n">
          <img src={mascotSittingCrossed} alt="" className="absolute bottom-full left-0 right-0 mx-auto w-24 hidden md:block mix-blend-multiply" />
          <iframe
            src={`https://api.leadconnectorhq.com/widget/booking/${BOOKING_WIDGET_ID}`}
            style={{ width: "100%", border: "none", height: `${height}px` }}
            scrolling="auto"
            id={`${BOOKING_WIDGET_ID}_inline`}
            title="Book a call"
          />
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 font-hand text-xl text-cream/80">
          <a href="mailto:creative@vewsstudio.com" className="hover:text-blush">creative@vewsstudio.com</a>
          <span className="hidden md:inline">✺</span>
          <a href="#" className="hover:text-blush">@vews.studio</a>
          <span className="hidden md:inline">✺</span>
          <span>Islamabad, Pakistan</span>
        </div>
      </div>
    </section>
  );
}
