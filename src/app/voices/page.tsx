import { quotes as quotesBase } from "@/lib/data/quotes";
import { quotesExtras } from "@/lib/data/quotes-extras";
import RansomNote from "@/components/RansomNote";

const quotes = [...quotesBase, ...quotesExtras];

export const metadata = { title: "Voices — Women of Punk" };

export default function VoicesPage() {
  return (
    <div className="page-static-in">
      <section className="ink-bg text-paper torn-bottom pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="sticker mb-4">04 — Voices</div>
          <h1
            className="block leading-[0.85]"
            style={{ fontSize: "clamp(3rem, 11vw, 8rem)" }}
          >
            <span className="block">
              <RansomNote text="WHAT" letterBreakBelow={5} />
            </span>
            <span className="block mt-2">
              <RansomNote text="THEY SAID." letterBreakBelow={4} />
            </span>
          </h1>
          <div className="censor-bar mt-6 max-w-md" />
          <p className="type text-lg md:text-xl max-w-2xl mt-3">
            On record. On stage. In interviews they almost weren&rsquo;t asked
            to give. The quote book.
          </p>
        </div>
      </section>

      <section className="paper-bg py-16">
        <div className="max-w-5xl mx-auto px-4">
          {quotes.length === 0 ? (
            <div className="zine-card inverted max-w-3xl mx-auto">
              <div className="sticker absolute -top-3 -left-2 ink">DRAFT</div>
              <h3 className="shout text-3xl tracking-razor">QUOTES — COMING</h3>
              <div className="censor-bar thin mt-2" />
              <p className="type text-sm mt-3 leading-relaxed">
                Curated content lives in src/lib/data/quotes.ts. A separate
                agent is sourcing them from interviews, oral histories, liner
                notes, and the on-stage announcements. Receipts incoming.
              </p>

              {/* example treatment so the layout is visible */}
              <div className="mt-10 grid md:grid-cols-2 gap-10">
                <ExampleQuote
                  text="I&rsquo;m a poet, not a punk poet. I&rsquo;m a poet. The work is the work."
                  speaker="(example layout)"
                  source="placeholder until quotes.ts ships"
                  year=""
                  i={0}
                />
                <ExampleQuote
                  text="We had to make our own world because the old one wasn&rsquo;t going to let us in."
                  speaker="(example layout)"
                  source="placeholder until quotes.ts ships"
                  year=""
                  i={1}
                />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 pt-6">
              {quotes.map((q, i) => (
                <QuoteCard
                  key={q.id}
                  text={q.quote}
                  speaker={q.speaker}
                  source={q.source}
                  year={q.year ? String(q.year) : ""}
                  i={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function tiltFor(i: number) {
  // alternate left/right, mild
  const base = i % 2 === 0 ? -1 : 1;
  const mag = 0.8 + (i % 3) * 0.4;
  return base * mag;
}

function QuoteCard({
  text,
  speaker,
  source,
  year,
  i
}: {
  text: string;
  speaker: string;
  source?: string;
  year?: string;
  i: number;
}) {
  const rot = tiltFor(i);
  return (
    <figure
      className="quote-card"
      style={{ transform: `rotate(${rot.toFixed(2)}deg)` }}
    >
      <span aria-hidden className="qc-glyph">&ldquo;</span>
      <blockquote className="qc-body">{text}</blockquote>
      <div className="qc-rule" />
      <figcaption>
        <div className="qc-speaker">{speaker}</div>
        {(source || year) && (
          <div className="qc-source">
            {source}
            {source && year ? " — " : ""}
            {year}
          </div>
        )}
      </figcaption>
    </figure>
  );
}

function ExampleQuote({
  text,
  speaker,
  source,
  year,
  i
}: {
  text: string;
  speaker: string;
  source: string;
  year: string;
  i: number;
}) {
  const rot = tiltFor(i);
  return (
    <figure
      className="quote-card"
      style={{ transform: `rotate(${rot.toFixed(2)}deg)` }}
    >
      <span aria-hidden className="qc-glyph">&ldquo;</span>
      <blockquote
        className="qc-body"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="qc-rule" />
      <figcaption>
        <div className="qc-speaker">{speaker}</div>
        <div className="qc-source">
          {source}
          {source && year ? " — " : ""}
          {year}
        </div>
      </figcaption>
    </figure>
  );
}
