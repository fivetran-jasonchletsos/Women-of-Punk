import Link from "next/link";
import RansomNote from "@/components/RansomNote";
import Waveform from "@/components/Waveform";
import Typewriter from "@/components/Typewriter";
import { bands } from "@/lib/data/bands";
import { albums as albumsBase } from "@/lib/data/albums";
import { albumsExtras } from "@/lib/data/albums-extras";
import { quotes } from "@/lib/data/quotes";
import { quotesExtras } from "@/lib/data/quotes-extras";
import { films } from "@/lib/data/films";
import { docs } from "@/lib/data/docs";
import { books } from "@/lib/data/books";
import { stories } from "@/lib/data/stories";
import { photos } from "@/lib/data/photos";

const totalAlbums = albumsBase.length + albumsExtras.length;
const totalQuotes = quotes.length + quotesExtras.length;
const totalScreen = films.length + docs.length;

export default function HomePage() {
  return (
    <div className="page-static-in">
      {/* HERO */}
      <section className="ink-bg text-paper relative overflow-hidden torn-bottom pb-24">
        <div className="max-w-6xl mx-auto px-4 pt-14 pb-20 relative">
          <span className="tape right absolute -top-2 left-12" aria-hidden />
          <span className="tape yellow absolute -top-2 right-16" aria-hidden />

          <div className="sticker mb-6 inline-block">Issue No. 01 — A History in Noise</div>

          {/* Ransom-note headline: WOMEN. OF. PUNK. */}
          <h1
            className="block leading-[0.8]"
            style={{ fontSize: "clamp(3.5rem, 13vw, 10rem)" }}
          >
            <span className="block">
              <RansomNote text="WOMEN." letterBreakBelow={6} />
            </span>
            <span className="block mt-2">
              <RansomNote text="OF." letterBreakBelow={6} />
            </span>
            <span className="block mt-2">
              <RansomNote text="PUNK." letterBreakBelow={6} />
            </span>
          </h1>

          <div className="censor-bar mt-8 max-w-xl" />

          {/* Typewriter sub-headline */}
          <p className="type text-lg md:text-2xl max-w-3xl mt-4">
            <Typewriter text="A HISTORY IN NOISE. A LOVE LETTER IN BLOOD RED." />
          </p>

          <p className="font-body text-base md:text-lg max-w-2xl mt-6 opacity-90 leading-relaxed">
            The bands they refused to canonize. The records that got buried by
            boys with bigger labels. The films, the books, the zines, the
            spoken-out-loud-on-stage receipts. Forty-plus years of women who
            didn&rsquo;t ask permission and don&rsquo;t need yours either.
          </p>

          {/* Receipts strip */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 type text-sm opacity-80 uppercase tracking-[0.25em]">
            <span><span className="text-blood font-bold">{bands.length}</span> bands</span>
            <span><span className="text-blood font-bold">{totalAlbums}</span> records</span>
            <span><span className="text-blood font-bold">{totalScreen}</span> films &amp; docs</span>
            <span><span className="text-blood font-bold">{books.length}</span> books</span>
            <span><span className="text-blood font-bold">{photos.length}</span> photos</span>
            <span><span className="text-blood font-bold">{stories.length}</span> stories</span>
            <span><span className="text-blood font-bold">{totalQuotes}</span> voices</span>
          </div>

          {/* Joy Division waveform between hero text and CTAs */}
          <div className="mt-12 waveform-block">
            <Waveform lines={70} height={260} />
          </div>

          {/* Censor-bar CTA row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/sound" className="cta-bar">SOUND</Link>
            <Link href="/screen" className="cta-bar alt">SCREEN</Link>
            <Link href="/page" className="cta-bar outline">PAGE</Link>
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
        <span className="inline-block px-4">PATTI</span>
        <span className="inline-block px-4 text-blood">SIOUXSIE</span>
        <span className="inline-block px-4">DEBBIE</span>
        <span className="inline-block px-4 text-blood">JOAN</span>
        <span className="inline-block px-4">POLY</span>
        <span className="inline-block px-4 text-blood">VIV</span>
        <span className="inline-block px-4">ARI</span>
        <span className="inline-block px-4 text-blood">EXENE</span>
        <span className="inline-block px-4">ALICE</span>
        <span className="inline-block px-4 text-blood">PENELOPE</span>
        <span className="inline-block px-4">WENDY O</span>
        <span className="inline-block px-4 text-blood">LYDIA</span>
        <span className="inline-block px-4">KIM D</span>
        <span className="inline-block px-4 text-blood">KIM G</span>
        <span className="inline-block px-4">CHRISSIE</span>
        <span className="inline-block px-4 text-blood">COURTNEY</span>
        <span className="inline-block px-4">KATHLEEN</span>
        <span className="inline-block px-4 text-blood">CORIN</span>
        <span className="inline-block px-4">CARRIE</span>
        <span className="inline-block px-4 text-blood">PJ</span>
        <span className="inline-block px-4">JUSTINE</span>
        <span className="inline-block px-4 text-blood">KAREN O</span>
        <span className="inline-block px-4">BRODY</span>
        <span className="inline-block px-4 text-blood">LAURA JANE</span>
        <span className="inline-block px-4">AMY T</span>
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

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondary.map((s, i) => (
              <Link href={s.href} key={s.href} className="block">
                <article className={`zine-card inverted ${i % 3 === 0 ? "tilt-r" : i % 3 === 2 ? "tilt-l" : ""}`}>
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
    </div>
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
    href: "/gallery",
    title: "GALLERY",
    blurb:
      "The frames that made the myth. Mapplethorpe. Leibovitz. Gruen. Stein. Beckman. Lavine. Credit, context, links to the museums that hold them."
  },
  {
    href: "/posters",
    title: "POSTERS",
    blurb:
      "Flyers, marquees, bills. The nights that mattered, captured in ink on cheap paper."
  },
  {
    href: "/stories",
    title: "STORIES",
    blurb:
      "Patti and Robert in a Brooklyn doorway. Joan rejected by twenty-three labels. Siouxsie&rsquo;s twenty-minute Lord&rsquo;s Prayer. The campfire stories of the genre."
  },
  {
    href: "/timeline",
    title: "TIMELINE",
    blurb:
      "Forty-plus years of refusal, on a single scrolling page. With red ink where it matters."
  },
  {
    href: "/gift",
    title: "FOR HER",
    blurb:
      "Why this exists. A note from the friend who built it. Take and remix; no rights reserved."
  }
];
