export const EyeDoodle = ({ className = "", size = 60 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
    <path d="M5 30 Q 50 -5 95 30 Q 50 65 5 30 Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" fill="none" />
    <g className="animate-blink" style={{ transformOrigin: "50px 30px" }}>
      <circle cx="50" cy="30" r="12" fill="currentColor" />
      <circle cx="54" cy="26" r="3" fill="var(--cream)" />
    </g>
  </svg>
);

export const Arrow = ({ className = "", size = 80 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none">
    <path d="M5 25 Q 30 15, 55 25 T 90 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M78 14 L 92 25 L 78 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const Star = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 50 50" fill="none">
    <path
      d="M25 4 L 29 19 L 45 22 L 32 32 L 37 47 L 25 38 L 13 47 L 18 32 L 5 22 L 21 19 Z"
      stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"
    />
  </svg>
);

export const Scribble = ({ className = "", size = 100 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size * 0.4} viewBox="0 0 120 50" fill="none">
    <path
      d="M5 25 Q 15 5, 25 25 T 45 25 T 65 25 T 85 25 T 105 25 T 118 25"
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"
    />
  </svg>
);

export const Burst = ({ className = "", size = 60 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 60 60" fill="none">
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      const x1 = 30 + Math.cos(a) * 12;
      const y1 = 30 + Math.sin(a) * 12;
      const x2 = 30 + Math.cos(a) * 26;
      const y2 = 30 + Math.sin(a) * 26;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />;
    })}
  </svg>
);

export const Squiggle = ({ className = "", width = 200 }: { className?: string; width?: number }) => (
  <svg className={className} width={width} height="20" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
    <path d="M2 10 Q 25 2, 50 10 T 100 10 T 150 10 T 198 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const HandNumber = ({ n, className = "" }: { n: number; className?: string }) => (
  <span className={`font-hand text-7xl md:text-8xl leading-none ${className}`} style={{ fontWeight: 700 }}>
    {String(n).padStart(2, "0")}
  </span>
);
