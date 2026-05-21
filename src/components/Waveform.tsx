// Joy Division Unknown Pleasures-style waveform.
// ~80 lines, sin-perturbed, tighter at the edges, wilder in the middle.
// Deterministic (seeded pseudo-random) so server and client renders match.

type Props = {
  lines?: number;
  width?: number;
  height?: number;
  className?: string;
};

// Deterministic hash -> [-1, 1]
function seeded(i: number, j: number) {
  const s = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
  return (s - Math.floor(s)) * 2 - 1;
}

export default function Waveform({
  lines = 80,
  width = 900,
  height = 300,
  className = ""
}: Props) {
  const points = 110;
  const rowGap = height / (lines + 8);
  const topPad = height * 0.05;

  const paths: string[] = [];

  for (let i = 0; i < lines; i++) {
    const y0 = topPad + i * rowGap;
    let d = "";

    for (let j = 0; j <= points; j++) {
      const x = (j / points) * width;
      // Edge dampening: 0 at edges, 1 in middle.
      const t = j / points;
      const edge = Math.sin(Math.PI * t); // 0..1..0
      const envelope = Math.pow(edge, 1.8);

      // Per-row amplitude with some rows tall (the pulsar spikes)
      const rowChaos = 0.45 + 0.55 * Math.abs(seeded(i + 7, 3));
      const amp = rowGap * 6 * envelope * rowChaos;

      // Composite wiggle: multiple sin layers + a deterministic jitter
      const wiggle =
        Math.sin(t * 18 + i * 0.7) * 0.5 +
        Math.sin(t * 7 + i * 1.3) * 0.35 +
        seeded(i, j) * 0.4;

      const y = y0 - wiggle * amp;
      d += j === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    // Close downward to fill underneath in black so back rows occlude front rows
    d += ` L ${width} ${height + 4} L 0 ${height + 4} Z`;
    paths.push(d);
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      style={{ display: "block", width: "100%", height: `${height}px`, background: "#000" }}
      aria-hidden
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="#000"
          stroke="#fff"
          strokeWidth={1.1}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
