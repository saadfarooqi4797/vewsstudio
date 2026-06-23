import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const EGGS: Record<string, { title: string; subtitle: string }> = {
  crown:  { title: "👑 Royal Observer",  subtitle: "You have a keen eye for detail."          },
  star:   { title: "⭐ Star Gazer",       subtitle: "Some things are worth staring at longer." },
  mascot: { title: "👀 All Eyes On You", subtitle: "The mascot noticed you noticing."          },
  showoff: { title: "🏆 Showing Off",    subtitle: "Okay, now you're just showing off."        },
  architect: { title: "🕵️ Caught You Looking", subtitle: "Someone built this thing. Now you know who." },
  key: { title: "🔑 Found It", subtitle: "Now go see what it opens." },
  preview: { title: "🎭 Just a Preview", subtitle: "This one doesn't stick. Find the key for the real thing." },
};

// The egg ids that count toward the visible "secrets found" tally — "preview" is
// excluded since it's a repeatable echo of "architect", not a distinct discovery.
const COUNTED_EGGS = ["crown", "star", "mascot", "showoff", "key", "architect"];
export const TOTAL_SECRETS = COUNTED_EGGS.length;

interface EasterEggCtx {
  trigger: (id: string) => void;
  found: Set<string>;
  countedFound: number;
  total: number;
}

const EasterEggContext = createContext<EasterEggCtx>({ trigger: () => {}, found: new Set(), countedFound: 0, total: TOTAL_SECRETS });

export function useEasterEgg() {
  return useContext(EasterEggContext);
}

interface ToastState {
  title: string;
  subtitle: string;
  key: number;
  leaving: boolean;
}

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const [found, setFound] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<ToastState | null>(null);
  const foundRef = useRef<Set<string>>(found);
  const exitTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const removeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Keep ref in sync for stable trigger callback
  useEffect(() => { foundRef.current = found; }, [found]);

  // Load persisted finds client-side (avoids SSR mismatch)
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("vews-eggs");
      if (raw) setFound(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  const trigger = useCallback((id: string) => {
    const egg = EGGS[id];
    if (!egg || foundRef.current.has(id)) return;

    setFound(prev => {
      const next = new Set(prev);
      next.add(id);
      try { sessionStorage.setItem("vews-eggs", JSON.stringify([...next])); } catch {}
      return next;
    });

    clearTimeout(exitTimer.current);
    clearTimeout(removeTimer.current);

    setToast(t => ({ ...egg, key: (t?.key ?? 0) + 1, leaving: false }));

    exitTimer.current   = setTimeout(() => setToast(t => t ? { ...t, leaving: true } : null), 3000);
    removeTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  const countedFound = COUNTED_EGGS.filter((id) => found.has(id)).length;

  return (
    <EasterEggContext.Provider value={{ trigger, found, countedFound, total: TOTAL_SECRETS }}>
      {children}
      {toast && (
        <div
          key={toast.key}
          className={`egg-toast${toast.leaving ? " egg-toast--leaving" : ""}`}
          aria-live="polite"
          role="status"
          aria-atomic="true"
        >
          <p className="egg-toast__title">{toast.title}</p>
          <p className="egg-toast__sub">{toast.subtitle}</p>
          <p className="egg-toast__count">{countedFound} / {TOTAL_SECRETS} secrets found</p>
        </div>
      )}
    </EasterEggContext.Provider>
  );
}
