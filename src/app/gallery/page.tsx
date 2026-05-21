import { photos } from "@/lib/data/photos";
import RansomNote from "@/components/RansomNote";

export const metadata = {
  title: "Gallery — Women of Punk",
  description: "Iconic photographs of the women who shaped punk.",
};

export default function GalleryPage() {
  return (
    <main className="paper-bg min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="type text-sm tracking-[0.3em] uppercase mb-3 text-ink/70">
          The Eye
        </p>
        <RansomNote text="GALLERY." className="text-6xl md:text-8xl mb-4" />
        <p className="type text-lg max-w-2xl mb-2">
          The frames that made the myth. Photographers who saw them first, captured them whole,
          and got out of the way.
        </p>
        <p className="type text-sm text-ink/60 max-w-2xl mb-10">
          We don&rsquo;t reprint the images here — credit and context only. Links go to the museums,
          archives, and photographers who hold them.
        </p>

        <div className="rule mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => {
            const tilt = ["tilt-l", "tilt-r", ""][i % 3];
            return (
              <article
                key={p.slug}
                className={`zine-card ${tilt} p-5 flex flex-col gap-2`}
              >
                <div className="censor-bar thin mb-1" />
                <h2 className="shout text-2xl leading-none">{p.subject}</h2>
                <p className="type text-sm text-ink/80">
                  {p.photographer} &middot; {p.year}
                </p>
                <p className="type text-sm italic text-ink/70">{p.where}</p>
                <p className="type text-base mt-2">{p.context}</p>
                {p.viewUrl ? (
                  <a
                    href={p.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-3 text-blood font-bold tracking-wide uppercase text-sm hover:underline"
                  >
                    View &rarr;
                  </a>
                ) : (
                  <span className="mt-auto pt-3 type text-xs text-ink/40 uppercase tracking-widest">
                    archived offline
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
