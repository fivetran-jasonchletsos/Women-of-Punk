import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="ink-bg text-paper relative overflow-hidden torn-bottom pb-24">
        <div className="max-w-6xl mx-auto px-4 pt-14 pb-20 relative">
          <span className="tape right absolute -top-2 left-12" aria-hidden />
          <span className="tape yellow absolute -top-2 right-16" aria-hidden />

          <div className="sticker mb-6 inline-block">Issue No. 01 — A History in Noise</div>

          <h1
            className="shout-tight text-[18vw] md:text-[12rem] leading-[0.78] tracking-razor"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            <span className="block">WOMEN</span>
            <span className="block">
              OF <span className="text-blood">PUNK</span>
            </span>
          </h1>

          <div className="censor-bar mt-8 max-w-xl" />

          <p className="type text-lg md:text-2xl max-w-2xl mt-4">
            They didn&rsquo;t ask for a seat. They built the room, set it on
            fire, and stayed to watch it burn.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/sound" className="shout text-2xl bg-paper text-ink px-4 py-2 hover:bg-blood hover:text-paper transition-colors">
              Hear It
            </Link>
            <Link href="/screen" className="shout text-2xl bg-blood text-paper px-4 py-2 hover:bg-paper hover:text-ink transition-colors">
              See It
            </Link>
            <Link href="/page" className="shout text-2xl border-2 border-paper px-4 py-2 hover:bg-paper hover:text-ink transition-colors">
              Read It
            </Link>
          </div>

          {/* Ransom-note callout */}
          <div className="mt-16 ransom shout-tight text-5xl md:text-7xl tracking-razor">
            <span>NO</span> <span>FUTURE</span> <span>WAS</span>{" "}
            <span>NEVER</span> <span>THE</span> <span>POINT</span>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker overflow-hidden whitespace-nowrap">
        <span className="inline-block px-4">SLITS</span>
        <span className="inline-block px-4 text-blood">X-RAY SPEX</span>
        <span className="inline-block px-4">BIKINI KILL</span>
        <span className="inline-block px-4 text-blood">SIOUXSIE</span>
        <span className="inline-block px-4">L7</span>
        <span className="inline-block px-4 text-blood">BUSH TETRAS</span>
        <span className="inline-block px-4">RAINCOATS</span>
        <span className="inline-block px-4 text-blood">PATTI</span>
        <span className="inline-block px-4">EXENE</span>
        <span className="inline-block px-4 text-blood">POLY</span>
        <span className="inline-block px-4">VIV</span>
        <span className="inline-block px-4 text-blood">KATHLEEN</span>
        <span className="inline-block px-4">PRETTY ON THE INSIDE</span>
      </div>

      {/* THESIS */}
      <section className="paper-bg py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="quote-mark">&ldquo;</div>
            <div>
              <p className="type text-xl md:text-3xl leading-snug max-w-3xl">
                The story of punk usually starts with four boys in leather and
                ends with the same four boys, slightly older, in slightly worse
                leather. This is the other half. The half that didn&rsquo;t get
                the documentary.
              </p>
              <div className="rule-red mt-6 max-w-md" />
              <p className="shout text-xl mt-2 tracking-wide">A WORKING CORRECTION.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION GRID */}
      <section className="paper-bg pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="ticker inline-block mb-8" style={{ transform: "rotate(-1deg)" }}>
            START ANYWHERE / THIS IS NOT A CANON
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <Link href={s.href} key={s.href} className="block">
                <article className={`zine-card ${i % 3 === 0 ? "tilt-l" : i % 3 === 1 ? "" : "tilt-r"}`}>
                  <div className="sticker absolute -top-3 -left-3">{s.tag}</div>
                  <h2 className="shout text-5xl tracking-razor mt-2">{s.title}</h2>
                  <div className="censor-bar thin mt-1" />
                  <p className="type mt-2 text-sm leading-relaxed">{s.blurb}</p>
                  <div className="mt-4 shout text-base text-blood">ENTER &rarr;</div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {secondary.map((s, i) => (
              <Link href={s.href} key={s.href} className="block">
                <article className={`zine-card inverted ${i % 2 === 0 ? "tilt-r" : "tilt-l"}`}>
                  <h2 className="shout text-4xl tracking-razor">{s.title}</h2>
                  <p className="type mt-2 text-sm opacity-90">{s.blurb}</p>
                  <div className="mt-3 shout text-base text-blood">ENTER &rarr;</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BIG BOTTOM CALLOUT */}
      <section className="ink-bg text-paper py-20 torn-top">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="shout-tight text-6xl md:text-9xl tracking-razor leading-[0.85]">
            <span className="block">LOUD.</span>
            <span className="block text-blood outline-text red">UNFINISHED.</span>
            <span className="block">OURS.</span>
          </p>
          <div className="rule-red mt-10 max-w-xs mx-auto" />
          <p className="type mt-6 text-base opacity-80 max-w-md mx-auto">
            A monument that doesn&rsquo;t apologize for being a monument.
          </p>
        </div>
      </section>
    </>
  );
}

const sections = [
  {
    href: "/sound",
    title: "SOUND",
    tag: "01 — Bands & Records",
    blurb:
      "The bands who put it on tape. The records that made the boys nervous. Start with the noise."
  },
  {
    href: "/screen",
    title: "SCREEN",
    tag: "02 — Films & Docs",
    blurb:
      "The films that got the scene right and the documentaries that finally caught up."
  },
  {
    href: "/page",
    title: "PAGE",
    tag: "03 — Books & Words",
    blurb:
      "Memoirs, zines, oral histories, critical essays. The receipts, in writing."
  }
];

const secondary = [
  {
    href: "/voices",
    title: "VOICES",
    blurb:
      "Quotes. Sneers. Manifestos. What they said when somebody finally pointed a microphone at them."
  },
  {
    href: "/timeline",
    title: "TIMELINE",
    blurb:
      "Forty-plus years of refusal, on a single scrolling page. With red ink where it matters."
  }
];
