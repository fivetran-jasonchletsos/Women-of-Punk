import { books } from "@/lib/data/books";
import { articles } from "@/lib/data/articles";

export const metadata = { title: "Page — Women of Punk" };

export default function PagePage() {
  return (
    <>
      <section className="ink-bg text-paper torn-bottom pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="sticker mb-4">03 — Page</div>
          <h1
            className="shout-tight text-[14vw] md:text-[10rem] leading-[0.82] tracking-razor"
            style={{ transform: "rotate(-0.7deg)" }}
          >
            BOOKS<span className="text-blood">.</span>
            <br />ZINES<span className="text-blood">.</span>
            <br />RECEIPTS<span className="text-blood">.</span>
          </h1>
          <div className="censor-bar mt-6 max-w-md" />
          <p className="type text-lg md:text-xl max-w-2xl mt-3">
            Memoirs, oral histories, criticism, and the zine cuttings that
            actually told the truth at the time.
          </p>
        </div>
      </section>

      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="shout text-6xl tracking-razor">BOOKS</h2>
          <div className="censor-bar thin mt-2 max-w-sm" />

          {books.length === 0 ? (
            <Placeholder
              title="BOOKS — COMING"
              note="Curated content lives in src/lib/data/books.ts. Clothes Music Boys, Girls to the Front, Rip It Up and Start Again, Lipstick Traces, Just Kids, Hunger Makes Me a Modern Girl, and more. The bibliography is being typed."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {books.map((b, i) => (
                <article
                  key={b.slug}
                  className={`zine-card ${i % 3 === 0 ? "tilt-l" : i % 3 === 2 ? "tilt-r" : ""}`}
                >
                  <div className="sticker absolute -top-3 -left-2">{b.year}</div>
                  <h3 className="shout text-2xl tracking-razor mt-2">{b.title}</h3>
                  <p className="type text-xs uppercase opacity-70">by {b.author}</p>
                  <div className="censor-bar thin mt-2" />
                  <p className="type text-sm mt-2 leading-relaxed">{b.about}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="ticker">ARTICLES, ESSAYS, PIECES THAT GOT IT RIGHT &mdash;&mdash;&mdash;</div>

      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="shout text-6xl tracking-razor">ARTICLES</h2>
          <div className="censor-bar thin mt-2 max-w-sm" />

          {articles.length === 0 ? (
            <Placeholder
              title="ARTICLES — COMING"
              note="Curated content lives in src/lib/data/articles.ts. Long-form, short-form, NYRB, Pitchfork retrospectives, the angry blog posts that aged better than the magazines."
            />
          ) : (
            <ul className="mt-8 space-y-4">
              {articles.map((a) => (
                <li key={a.slug} className="zine-card">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shout text-2xl tracking-razor zine-link"
                    >
                      {a.title}
                    </a>
                    <span className="type text-xs opacity-70">{a.year}</span>
                  </div>
                  <p className="type text-xs uppercase opacity-70 mt-1">
                    {a.author} &mdash; {a.publication}
                  </p>
                  <p className="type text-sm mt-2 leading-relaxed">{a.blurb}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

function Placeholder({ title, note }: { title: string; note: string }) {
  return (
    <div className="mt-8 zine-card inverted max-w-3xl">
      <div className="sticker absolute -top-3 -left-2 ink">DRAFT</div>
      <h3 className="shout text-3xl tracking-razor">{title}</h3>
      <div className="censor-bar thin mt-2" />
      <p className="type text-sm mt-3 leading-relaxed">{note}</p>
    </div>
  );
}
