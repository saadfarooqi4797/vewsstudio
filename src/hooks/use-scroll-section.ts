import { useState, useEffect } from 'react';

const SECTION_COLORS: Record<string, string> = {
  top:      '#ffffff',                  // white — Hero
  services: 'oklch(0.960 0.016 88)',   // warm cream shift — Services
  work:     'oklch(0.975 0.012 95)',   // Work has bg-ink; body bg irrelevant
  about:    'oklch(0.962 0.022 80)',   // warm yellow-cream — About
  process:  'oklch(0.975 0.012 95)',   // Process has bg-acid; body bg irrelevant
  contact:  '#111111',                  // deep black — Contact
};

const SECTION_IDS = ['top', 'services', 'work', 'about', 'process', 'contact'];

export function useScrollSection() {
  const [bg, setBg] = useState(SECTION_COLORS.top);

  useEffect(() => {
    const ratios = new Map<string, number>(SECTION_IDS.map(id => [id, 0]));

    const update = () => {
      let bestId = 'top';
      let bestRatio = -1;
      ratios.forEach((r, id) => {
        if (r > bestRatio) { bestRatio = r; bestId = id; }
      });
      const next = SECTION_COLORS[bestId] ?? SECTION_COLORS.top;
      setBg(prev => (prev === next ? prev : next));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => ratios.set(e.target.id, e.intersectionRatio));
        update();
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) },
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return bg;
}
