import { quotes } from "@/lib/data/quotes";

export const metadata = { title: "Voices — Women of Punk" };

export default function VoicesPage() {
  return (
    <>
      <section className="ink-bg text-paper torn-bottom pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="sticker mb-4">04 — Voices</div>
          <h1
            className="shout-tight text-[14vw] md:text-[10rem] leading-[0.82] tracking-razor"
            style={{ transform: "rotate(1.2deg)" }}
          >
            WHAT<br />
            THEY <span className="text-blood">SAID</span>.
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
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <ExampleQuote
                  text="I&rsquo;m a poet, not a punk poet. I&rsquo;m a poet. The work is the work."
                  speaker="(example layout)"
                  source="placeholder until quotes.ts ships"
                  tilt="-1.5deg"
                />
                <ExampleQuote
                  text="We had to make our own world because the old one wasn&rsquo;t going to let us in."
                  speaker="(example layout)"
                  source="placeholder until quotes.ts ships"
                  tilt="1deg"
                />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {quotes.map((q, i) => (
                <figure
                  key={q.id}
                  className="zine-card"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + (i % 3) * 0.4)}deg)` }}
                >
                  <div className="quote-mark leading-none">&ldquo;</div>
                  <blockquote className="type text-xl md:text-2xl leading-snug -mt-6">
                    {q.quote}
                  </blockquote>
                  <div className="rule-red mt-4 max-w-[60%]" />
                  <figcaption className="mt-2">
                    <div className="shout text-xl tracking-wide">{q.speaker}</div>
                    {(q.source || q.year) && (
                      <div className="type text-xs opacity-70">
                        {q.source}
                        {q.source && q.year ? " — " : ""}
                        {q.year}
                      </div>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ExampleQuote({
  text,
  speaker,
  source,
  tilt
}: {
  text: string;
  speaker: string;
  source: string;
  tilt: string;
}) {
  return (
    <figure className="zine-card" style={{ transform: `rotate(${tilt})` }}>
      <div className="quote-mark leading-none">&ldquo;</div>
      <blockquote
        className="type text-lg leading-snug -mt-6"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="rule-red mt-4 max-w-[60%]" />
      <figcaption className="mt-2">
        <div className="shout text-lg tracking-wide">{speaker}</div>
        <div className="type text-xs opacity-70">{source}</div>
      </figcaption>
    </figure>
  );
}
