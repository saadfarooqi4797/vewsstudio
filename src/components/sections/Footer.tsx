import { EyeDoodle } from "@/components/Doodles";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-cream px-4 md:px-8 py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <EyeDoodle className="h-8 w-12 shrink-0 brightness-0 invert" size={48} />
          <span className="font-display text-xl font-black">VEWS STUDIO</span>
          <span className="font-hand text-acid text-xl">— keep looking.</span>
        </div>
        <div className="text-xs uppercase tracking-[0.3em] opacity-70">
          © {new Date().getFullYear()} — All eyes reserved.
        </div>
      </div>
    </footer>
  );
}
