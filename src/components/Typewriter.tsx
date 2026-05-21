"use client";
// Small client-side typewriter for sub-hero text. Server-renders the full
// string for SEO/no-JS, then re-types on mount.

import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
  speedMs?: number;
};

export default function Typewriter({ text, className = "", speedMs = 28 }: Props) {
  const [shown, setShown] = useState(text);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setShown("");
    setAnimating(true);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        setAnimating(false);
      }
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, speedMs]);

  return (
    <span className={className}>
      {shown}
      <span
        aria-hidden
        className="tw-caret"
        style={{
          display: "inline-block",
          width: "0.6ch",
          marginLeft: "0.1ch",
          background: "var(--blood)",
          color: "transparent",
          opacity: animating ? 1 : 0.65
        }}
      >
        .
      </span>
    </span>
  );
}
