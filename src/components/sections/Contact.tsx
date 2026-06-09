import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Asterisk, Burst, Scribble, Star } from "@/components/Doodles";
import mascotSittingCrossed from "@/assets/mascot-sitting-crossed.png";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID  = import.meta.env["VITE_EMAILJS_SERVICE_ID"]  as string;
const TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string;
const PUBLIC_KEY  = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"]  as string;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

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
            Tell us what you're making. Even half-formed ideas welcome — we'll bring the doodles.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative bg-cream text-ink ink-border-thick shadow-hard p-6 md:p-10 max-w-2xl mx-auto rotate-1n"
        >
          <img src={mascotSittingCrossed} alt="" className="absolute bottom-full left-0 right-0 mx-auto w-24 hidden md:block mix-blend-multiply" />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" placeholder="Studio Anonymous" />
            <Field label="Email" name="email" type="email" placeholder="hi@you.com" />
          </div>
          <Field label="Brand / project" name="project" placeholder="Working title" className="mt-5" />
          <div className="mt-5">
            <label className="font-hand text-xl mb-1 block">Tell us the vibe</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are we making, for whom, and by when?"
              className="w-full bg-transparent ink-border p-3 text-base focus:outline-none focus:bg-acid/20 resize-none font-sans"
            />
          </div>
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <span className="font-hand text-lg text-ink/70">
              {status === "error" ? "Something went wrong — try emailing us directly." : "we reply within 48h ✷"}
            </span>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="bg-ink text-cream px-7 py-3 font-bold ink-border shadow-hard-sm hover:bg-acid hover:text-ink transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent — talk soon ✌" : "Send it →"}
            </button>
          </div>
        </form>

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

function Field({
  label, name, type = "text", placeholder, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="font-hand text-xl mb-1 block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-transparent ink-border p-3 text-base focus:outline-none focus:bg-acid/20"
      />
    </div>
  );
}
