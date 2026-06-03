import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevRef = useRef(pathname);
  const [lineKey, setLineKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (pathname === prevRef.current) return;
    prevRef.current = pathname;
    clearTimeout(timerRef.current);
    setLineKey((k) => k + 1);
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 560);
    return () => clearTimeout(timerRef.current);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden flex items-center"
      style={{ zIndex: 150 }}
    >
      <svg
        key={lineKey}
        width="100%"
        height="28"
        viewBox="0 0 1440 28"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="animate-transition-line"
          d="M-20,14 Q90,5 200,14 T400,14 T600,14 T800,14 T1000,14 T1200,14 T1440,14"
          stroke="var(--acid)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
