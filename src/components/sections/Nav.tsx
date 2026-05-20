import { EyeDoodle } from "@/components/Doodles";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between bg-cream/85 backdrop-blur-sm ink-border-thick px-4 md:px-6 py-3 shadow-hard-sm">
        <a href="#top" className="flex items-center gap-2 group">
          <EyeDoodle className="h-8 w-12 shrink-0 transition-transform group-hover:rotate-6" size={48} />
          <span className="font-display text-xl font-black tracking-tight">VEWS</span>
          <span className="font-hand text-xl -ml-1 text-blush hidden sm:inline">studio</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#work" className="hover:underline-scribble">Work</a>
          <a href="#services" className="hover:underline-scribble">Services</a>
          <a href="#about" className="hover:underline-scribble">About</a>
          <a href="#process" className="hover:underline-scribble">Process</a>
        </div>
        <a
          href="#contact"
          className="bg-ink text-cream px-4 py-2 text-sm font-bold ink-border hover:bg-acid hover:text-ink transition-colors"
        >
          Start a project →
        </a>
      </div>
    </nav>
  );
}
