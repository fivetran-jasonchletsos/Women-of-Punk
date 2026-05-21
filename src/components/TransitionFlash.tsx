"use client";
// Page-transition flash. Fires on mount AND on pathname change.
// 120ms black-to-red flash + a brief static dissolve.

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TransitionFlash() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    // Trigger on every route change (incl. first mount).
    setActive(true);
    const t = window.setTimeout(() => setActive(false), 480);
    first.current = false;
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      aria-hidden
      className={`transition-flash ${active ? "is-active" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 60
      }}
    />
  );
}
