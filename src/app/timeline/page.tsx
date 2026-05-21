import Waveform from "@/components/Waveform";
import RansomNote from "@/components/RansomNote";

export const metadata = { title: "Timeline — Women of Punk" };

type Era = {
  year: string;
  headline: string;
  body: string;
  red?: boolean;
  /** Decade marker — if set, render a waveform + ransom heading BEFORE this entry */
  decadeBreak?: string;
};

const eras: Era[] = [
  {
    year: "1974",
    headline: "BEFORE THE WORD",
    body:
      "Patti Smith fronts a band downtown. Suzi Quatro is already in leather. The Runaways form in California — the wedge starts going in before anyone agrees on the name for what&rsquo;s coming.",
    red: true,
    decadeBreak: "1970s."
  },
  {
    year: "1976",
    headline: "LONDON OPENS",
    body:
      "The Slits form. Siouxsie shows up at the 100 Club. Vivienne Westwood is already cutting up uniforms in a shop on the King&rsquo;s Road. Punk becomes a word people use."
  },
  {
    year: "1977",
    headline: "THE YEAR ZERO",
    body:
      "X-Ray Spex release Oh Bondage Up Yours!. Patti puts out Horses' second pressing. The Slits tour with the Clash. The boys get the singles chart — the women get the manifestos."
  },
  {
    year: "1978-79",
    headline: "POST-PUNK BREAKS WIDE",
    body:
      "The Raincoats, Bush Tetras, Au Pairs, Delta 5, Lydia Lunch. The sound stops being three chords and starts being whatever you want — which was, of course, always the point.",
    red: true
  },
  {
    year: "1980s",
    headline: "HARDCORE AND AFTER",
    body:
      "Hardcore tries to lock the door again. Women kick it back open: Penelope Houston, Exene, Kira Roessler, Wendy O. Williams, Poly Styrene returning. The next wave keeps writing.",
    decadeBreak: "1980s."
  },
  {
    year: "1991",
    headline: "REVOLUTION GIRL STYLE NOW",
    body:
      "Bikini Kill, Bratmobile, Heavens to Betsy, Huggy Bear. Olympia, DC, Leeds. The zine network goes nuclear. &ldquo;Riot grrrl&rdquo; is suddenly a beat at every major paper.",
    red: true,
    decadeBreak: "1990s."
  },
  {
    year: "1993-96",
    headline: "PRETTY ON THE INSIDE",
    body:
      "Hole, L7, Babes in Toyland, Sleater-Kinney&rsquo;s debut. The mainstream finally has to deal with what was always there. Some of it gets co-opted; the records remain undefeated."
  },
  {
    year: "2000s",
    headline: "QUIET FRONT, LOUD BACK",
    body:
      "The press declares it over a dozen times. Meanwhile: Le Tigre, the Gossip, Erase Errata, Mika Miko. The networks built in 1991 keep paying out.",
    decadeBreak: "2000s."
  },
  {
    year: "2010s",
    headline: "RECEIPTS, AT VOLUME",
    body:
      "Savages, Priests, Big Joanie, Downtown Boys, G.L.O.S.S. Documentaries finally arrive. Memoirs land at Knopf. The canon is forced to update itself, slowly, with great complaint.",
    red: true,
    decadeBreak: "2010s."
  },
  {
    year: "NOW",
    headline: "STILL UNFINISHED",
    body:
      "This page is also unfinished. That is the point. Hand it to the next person who needs it."
  }
];

export default function TimelinePage() {
  return (
    <div className="page-static-in">
      <section className="ink-bg text-paper torn-bottom pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="sticker mb-4">05 — Timeline</div>
          <h1
            className="shout-tight text-[14vw] md:text-[10rem] leading-[0.82] tracking-razor"
            style={{ transform: "rotate(-0.9deg)" }}
          >
            FORTY<br />
            <span className="text-blood">PLUS</span> YEARS<br />
            OF NO.
          </h1>
          <div className="censor-bar mt-6 max-w-md" />
          <p className="type text-lg md:text-xl max-w-2xl mt-3">
            A working chronology. Not a canon, not a syllabus. Argue with it.
            That&rsquo;s the spirit.
          </p>
        </div>
      </section>

      <section className="paper-bg py-16">
        <div className="max-w-4xl mx-auto px-4">
          <ol className="relative border-l-4 border-ink pl-8 space-y-12">
            {eras.map((e, i) => (
              <li key={e.year} className="relative">
                {e.decadeBreak && (
                  <div className="-ml-10 mb-10">
                    <div
                      className="mb-4"
                      style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
                    >
                      <RansomNote text={e.decadeBreak} letterBreakBelow={5} />
                    </div>
                    <div className="waveform-block">
                      <Waveform lines={60} height={180} />
                    </div>
                  </div>
                )}
                <span
                  className={`absolute -left-[2.55rem] top-1 w-6 h-6 rotate-45 ${e.red ? "bg-blood" : "bg-ink"}`}
                  aria-hidden
                />
                <div
                  className={`zine-card ${i % 2 === 0 ? "tilt-l" : "tilt-r"} ${e.red ? "inverted" : ""}`}
                >
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="shout text-4xl tracking-razor">{e.year}</span>
                    <span className={`shout text-xl tracking-wide ${e.red ? "text-blood" : ""}`}>
                      {e.headline}
                    </span>
                  </div>
                  <div className={`mt-2 censor-bar thin ${e.red ? "ink" : ""}`} />
                  <p
                    className="type text-base leading-relaxed mt-3"
                    dangerouslySetInnerHTML={{ __html: e.body }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
