// Fixed-position SVG film-grain overlay. Sits above content, below interaction.
export default function Grain() {
  return (
    <div
      aria-hidden
      className="grain-overlay"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        opacity: 0.08,
        mixBlendMode: "multiply"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%" }}
      >
        <filter id="wop-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.65 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#wop-grain)" />
      </svg>
    </div>
  );
}
