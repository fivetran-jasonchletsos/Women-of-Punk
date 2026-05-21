import { bands } from "@/lib/data/bands";
import { albums } from "@/lib/data/albums";

export const metadata = { title: "Sound — Women of Punk" };

export default function SoundPage() {
  return (
    <>
      <section className="ink-bg text-paper torn-bottom pb-16">
        <div className="max-w-6xl mx-auto px-4 pt-12">
          <div className="sticker mb-4">01 — Sound</div>
          <h1
            className="shout-tight text-[14vw] md:text-[10rem] leading-[0.82] tracking-razor"
            style={{ transform: "rotate(-1deg)" }}
          >
            BANDS<span className="text-blood">.</span>
            <br />RECORDS<span className="text-blood">.</span>
            <br />NOISE<span className="text-blood">.</span>
          </h1>
          <div className="censor-bar mt-6 max-w-md" />
          <p className="type text-lg md:text-xl max-w-2xl mt-3">
            What it sounded like when the women stopped waiting to be asked.
          </p>
        </div>
      </section>

      {/* BANDS */}
      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="shout text-6xl tracking-razor">THE BANDS</h2>
            <span className="type text-sm opacity-70">
              ({bands.length} entered, more coming)
            </span>
          </div>
          <div className="censor-bar thin mt-2 max-w-sm" />

          {bands.length === 0 ? (
            <Placeholder
              title="BANDS — COMING"
              note="Curated content lives in src/lib/data/bands.ts. A separate agent is filling this in. Slits, X-Ray Spex, The Raincoats, Bush Tetras, Au Pairs, Delta 5, Bikini Kill, Sleater-Kinney, L7, Hole, Babes in Toyland, and many more — they&rsquo;re queued up."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {bands.map((b, i) => (
                <article
                  key={b.slug}
                  className={`zine-card ${i % 3 === 0 ? "tilt-l" : i % 3 === 2 ? "tilt-r" : ""}`}
                >
                  <div className="sticker absolute -top-3 -left-2">{b.formed}</div>
                  <h3 className="shout text-3xl tracking-razor mt-2">{b.name}</h3>
                  <p className="type text-xs uppercase opacity-70">{b.location}</p>
                  <div className="censor-bar thin mt-2" />
                  <p className="text-sm mt-2 font-semibold">{b.sound}</p>
                  <p className="type text-sm mt-3 leading-relaxed">{b.legacy}</p>
                  {b.members && b.members.length > 0 && (
                    <p className="type text-xs mt-3 opacity-70">
                      {b.members.join(" / ")}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="ticker">RECORDS THAT MADE THE BOYS NERVOUS &mdash;&mdash;&mdash;</div>

      {/* ALBUMS */}
      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="shout text-6xl tracking-razor">THE RECORDS</h2>
          <div className="censor-bar thin mt-2 max-w-sm" />

          {albums.length === 0 ? (
            <Placeholder
              title="RECORDS — COMING"
              note="Curated content lives in src/lib/data/albums.ts. Cut, Germfree Adolescents, Dry, Live Through This, Pretty on the Inside, The Raincoats, All Hail Me — receipts in vinyl."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {albums.map((a, i) => (
                <article
                  key={a.slug}
                  className={`zine-card ${i % 2 === 0 ? "tilt-r" : "tilt-l"}`}
                >
                  <div className="sticker absolute -top-3 -right-2">{a.year}</div>
                  <h3 className="shout text-2xl tracking-razor">{a.title}</h3>
                  <p className="type text-sm opacity-80">{a.artist}</p>
                  {a.label && (
                    <p className="type text-xs opacity-60 mt-0.5">{a.label}</p>
                  )}
                  <div className="censor-bar thin mt-2" />
                  <p className="type text-sm mt-2 leading-relaxed">{a.why}</p>
                </article>
              ))}
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
