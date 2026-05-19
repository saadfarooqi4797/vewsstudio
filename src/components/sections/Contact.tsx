import { useState } from "react";
import { Burst, EyeDoodle, Star } from "@/components/Doodles";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-4 md:px-8 py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 relative">
          <Star className="absolute left-[15%] top-0 text-blush animate-wobble" size={32} />
          <Burst className="absolute right-[15%] top-2 text-ink animate-float" size={60} />
          <span className="font-hand text-2xl text-blush">(this is the part where you say hi)</span>
          <h2 className="text-6xl md:text-9xl mt-3 leading-[0.85]">
            Got a brief?<br />
            <span className="italic font-display highlight-acid">Got a hunch?</span>
          </h2>
          <p className="mt-6 text-lg max-w-xl mx-auto">
            Tell us what you're making. Even half-formed ideas welcome — we'll bring the doodles.
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative bg-cream ink-border-thick shadow-hard p-6 md:p-10 max-w-2xl mx-auto rotate-1n"
        >
          <EyeDoodle className="absolute -top-8 -right-6 text-ink rotate-2p" size={70} />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" placeholder="Studio Anonymous" />
            <Field label="Email" name="email" type="email" placeholder="hi@you.com" />
          </div>
          <Field label="Brand / project" name="project" placeholder="Working title" className="mt-5" />
          <div className="mt-5">
            <label className="font-hand text-xl mb-1 block">Tell us the vibe</label>
            <textarea
              required
              rows={5}
              placeholder="What are we making, for whom, and by when?"
              className="w-full bg-transparent ink-border p-3 text-base focus:outline-none focus:bg-acid/20 resize-none font-sans"
            />
          </div>
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <span className="font-hand text-lg text-ink/70">we reply within 48h ✷</span>
            <button
              type="submit"
              disabled={sent}
              className="bg-ink text-cream px-7 py-3 font-bold ink-border shadow-hard-sm hover:bg-acid hover:text-ink transition-colors disabled:opacity-60"
            >
              {sent ? "Sent — talk soon ✌" : "Send it →"}
            </button>
          </div>
        </form>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 font-hand text-xl text-ink/80">
          <a href="mailto:hello@vews.studio" className="hover:text-blush">hello@vews.studio</a>
          <span className="hidden md:inline">✺</span>
          <a href="#" className="hover:text-blush">@vews.studio</a>
          <span className="hidden md:inline">✺</span>
          <span>Lisbon / Internet</span>
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
