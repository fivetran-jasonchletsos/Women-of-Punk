import { films } from "@/lib/data/films";
import { docs } from "@/lib/data/docs";

export const metadata = { title: "Screen — Women of Punk" };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ScreenPage() {
  return (
    <>
      <section className="ink-bg text-paper torn-bottom pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="sticker mb-4">02 — Screen</div>
          <h1
            className="shout-tight text-[14vw] md:text-[10rem] leading-[0.82] tracking-razor"
            style={{ transform: "rotate(0.8deg)" }}
          >
            FILMS<span className="text-blood">.</span>
            <br />DOCS<span className="text-blood">.</span>
            <br />FOOTAGE<span className="text-blood">.</span>
          </h1>
          <div className="censor-bar mt-6 max-w-md" />
          <p className="type text-lg md:text-xl max-w-2xl mt-3">
            The movies that caught it on tape. The documentaries that finally
            got around to saying her name.
          </p>
        </div>
      </section>

      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="shout text-6xl tracking-razor">FILMS</h2>
          <div className="censor-bar thin mt-2 max-w-sm" />

          {films.length === 0 ? (
            <Placeholder
              title="FILMS — COMING"
              note="Curated content lives in src/lib/data/films.ts. Ladies and Gentlemen, the Fabulous Stains. Times Square. We Are the Best!. Hard Core Logo and friends. Loaded and ready."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {films.map((f, i) => {
                const poster = f.poster ? `${basePath}${f.poster}` : null;
                return (
                  <article
                    key={f.slug}
                    className={`zine-card ${i % 3 === 0 ? "tilt-l" : i % 3 === 2 ? "tilt-r" : ""}`}
                  >
                    <div className="sticker absolute -top-3 -left-2">{f.year}</div>
                    {poster ? (
                      <div className="relative -mt-2 mb-3 overflow-hidden border-[3px] border-ink">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={poster}
                          alt={`${f.title} poster`}
                          className="w-full aspect-[2/3] object-cover block"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="ink-bg text-paper aspect-[2/3] mb-3 grid place-items-center border-[3px] border-ink">
                        <span className="shout text-5xl text-blood">{f.year}</span>
                      </div>
                    )}
                    <h3 className="shout text-2xl tracking-razor mt-2 leading-tight">{f.title}</h3>
                    <p className="type text-xs uppercase opacity-70">
                      dir. {f.director}
                    </p>
                    <div className="censor-bar thin mt-2" />
                    <p className="type text-sm mt-2 leading-relaxed">{f.why}</p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <div className="ticker">DOCUMENTARY EVIDENCE &mdash;&mdash;&mdash;</div>

      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="shout text-6xl tracking-razor">DOCUMENTARIES</h2>
          <div className="censor-bar thin mt-2 max-w-sm" />

          {docs.length === 0 ? (
            <Placeholder
              title="DOCS — COMING"
              note="Curated content lives in src/lib/data/docs.ts. The Punk Singer, Here to Be Heard: The Story of The Slits, Don&rsquo;t Need You: The Herstory of Riot Grrrl, and the rest of the receipts on film."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {docs.map((d, i) => {
                const poster = d.poster ? `${basePath}${d.poster}` : null;
                return (
                  <article
                    key={d.slug}
                    className={`zine-card ${i % 2 === 0 ? "tilt-r" : "tilt-l"}`}
                  >
                    <div className="sticker absolute -top-3 -right-2">{d.year}</div>
                    {poster ? (
                      <div className="relative -mt-2 mb-3 overflow-hidden border-[3px] border-ink">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={poster}
                          alt={`${d.title} poster`}
                          className="w-full aspect-[2/3] object-cover block"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="ink-bg text-paper aspect-[2/3] mb-3 grid place-items-center border-[3px] border-ink">
                        <span className="shout text-3xl text-blood text-center px-3">DOC</span>
                      </div>
                    )}
                    <h3 className="shout text-2xl tracking-razor leading-tight">{d.title}</h3>
                    <p className="type text-xs uppercase opacity-70">on {d.subject}</p>
                    {d.director && (
                      <p className="type text-xs opacity-60">dir. {d.director}</p>
                    )}
                    <div className="censor-bar thin mt-2" />
                    <p className="type text-sm mt-2 leading-relaxed">{d.why}</p>
                  </article>
                );
              })}
            </div>
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
