// Ransom-note headline. Splits string per word (or per letter for short words),
// renders each chunk with rotated/font-mixed/color-mixed treatment.
// Deterministic per-index so SSR and CSR don't disagree.

import React from "react";

type Props = {
  text: string;
  /** when a "word" is shorter than this, split per letter for more chunks */
  letterBreakBelow?: number;
  /** base font-size class (override per usage) */
  className?: string;
  /** style applied to the wrapper */
  style?: React.CSSProperties;
};

const FONT_CLASSES = [
  "font-shout", // Anton
  "font-type", // Special Elite
  "font-serif-clip" // DM Serif Display via CSS var
];

const TREATMENTS = [
  { bg: "paper", fg: "ink" },
  { bg: "ink", fg: "paper" },
  { bg: "paper", fg: "ink" },
  { bg: "paper", fg: "ink" },
  { bg: "blood", fg: "paper" }, // red sparingly
  { bg: "paper", fg: "ink" },
  { bg: "ink", fg: "paper" }
];

// stable hash -> int
function h(s: string, salt: number) {
  let n = salt;
  for (let i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) >>> 0;
  return n;
}

function splitToChunks(text: string, letterBreakBelow: number): string[] {
  const words = text.split(/(\s+)/); // keep whitespace tokens
  const out: string[] = [];
  for (const w of words) {
    if (/^\s+$/.test(w)) {
      out.push(w);
      continue;
    }
    if (w.length === 0) continue;
    if (w.length <= letterBreakBelow) {
      // split per letter (but punctuation stays attached to preceding letter)
      const letters = w.match(/[\p{L}\p{N}]|[^\p{L}\p{N}]/gu) ?? [w];
      for (const l of letters) out.push(l);
    } else {
      out.push(w);
    }
  }
  return out;
}

export default function RansomNote({
  text,
  letterBreakBelow = 4,
  className = "",
  style
}: Props) {
  const chunks = splitToChunks(text, letterBreakBelow);

  return (
    <span
      className={`ransom-note inline-block leading-[0.95] ${className}`}
      style={style}
    >
      {chunks.map((c, i) => {
        if (/^\s+$/.test(c)) {
          return (
            <span key={i} style={{ display: "inline-block", width: "0.35em" }}>
              {" "}
            </span>
          );
        }
        const hh = h(c, i + 1);
        const fontClass = FONT_CLASSES[hh % FONT_CLASSES.length];
        const treat = TREATMENTS[hh % TREATMENTS.length];
        const rot = (((hh >> 3) % 60) - 30) / 10; // -3.0 .. +2.9 deg
        const ty = (((hh >> 5) % 12) - 6) / 4; // -1.5 .. +1.25 px shift
        const padX = 0.08 + ((hh >> 7) % 7) * 0.012; // em
        const skew = (((hh >> 11) % 40) - 20) / 20; // -1..+1 deg

        const bg =
          treat.bg === "paper"
            ? "var(--paper)"
            : treat.bg === "ink"
            ? "var(--ink)"
            : "var(--blood)";
        const fg =
          treat.fg === "paper"
            ? "var(--paper)"
            : treat.fg === "ink"
            ? "var(--ink)"
            : "var(--blood)";

        return (
          <span
            key={i}
            className={`ransom-chunk ${fontClass}`}
            style={{
              display: "inline-block",
              background: bg,
              color: fg,
              padding: `0.04em ${padX}em`,
              margin: "0 0.04em",
              transform: `rotate(${rot.toFixed(2)}deg) translateY(${ty.toFixed(
                2
              )}px) skewX(${skew.toFixed(2)}deg)`,
              boxShadow:
                "1px 1px 0 rgba(0,0,0,0.18), 0 4px 8px -2px rgba(0,0,0,0.35)",
              textTransform: "uppercase",
              lineHeight: 0.95
            }}
          >
            {c}
          </span>
        );
      })}
    </span>
  );
}
