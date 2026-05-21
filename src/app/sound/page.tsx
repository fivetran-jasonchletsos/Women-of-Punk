import { bands } from "@/lib/data/bands";
import { albums as albumsBase, type Album } from "@/lib/data/albums";
import { albumsExtras } from "@/lib/data/albums-extras";

export const metadata = { title: "Sound — Women of Punk" };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const albums: Album[] = [...albumsBase, ...albumsExtras].sort((a, b) => a.year - b.year);
const bandsSorted = [...bands].sort((a, b) => a.formed - b.formed);

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
          <p className="type text-sm md:text-base max-w-2xl mt-2 opacity-80">
            {bandsSorted.length} bands. {albums.length} records. Half a century of receipts.
          </p>
        </div>
      </section>

      {/* BANDS */}
      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="shout text-6xl tracking-razor">THE BANDS</h2>
            <span className="type text-sm opacity-70">
              ({bandsSorted.length} entries)
            </span>
          </div>
          <div className="censor-bar thin mt-2 max-w-sm" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {bandsSorted.map((b, i) => (
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
        </div>
      </section>

      <div className="ticker">RECORDS THAT MADE THE BOYS NERVOUS &mdash;&mdash;&mdash;</div>

      {/* ALBUMS */}
      <section className="paper-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-baseline gap-4 flex-wrap">
            <h2 className="shout text-6xl tracking-razor">THE RECORDS</h2>
            <span className="type text-sm opacity-70">
              ({albums.length} entries, chronological)
            </span>
          </div>
          <div className="censor-bar thin mt-2 max-w-sm" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {albums.map((a, i) => {
              const cover = a.cover ? `${basePath}${a.cover}` : null;
              return (
                <article
                  key={a.slug}
                  className={`zine-card ${i % 2 === 0 ? "tilt-r" : "tilt-l"}`}
                >
                  <div className="sticker absolute -top-3 -right-2">{a.year}</div>
                  {cover ? (
                    <div className="relative -mt-2 mb-3 overflow-hidden border-[3px] border-ink">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cover}
                        alt={`${a.title} cover`}
                        className="w-full aspect-square object-cover block"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="ink-bg text-paper aspect-square mb-3 grid place-items-center border-[3px] border-ink">
                      <span className="shout text-4xl text-blood">{a.year}</span>
                    </div>
                  )}
                  <h3 className="shout text-2xl tracking-razor leading-tight">{a.title}</h3>
                  <p className="type text-sm opacity-80">{a.artist}</p>
                  {a.label && (
                    <p className="type text-xs opacity-60 mt-0.5">{a.label}</p>
                  )}
                  <div className="censor-bar thin mt-2" />
                  <p className="type text-sm mt-2 leading-relaxed">{a.why}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
