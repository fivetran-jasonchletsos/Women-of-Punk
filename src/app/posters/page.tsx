import { posters } from "@/lib/data/posters";
import RansomNote from "@/components/RansomNote";

export const metadata = {
  title: "Posters — Women of Punk",
  description: "Concert posters and flyers from the women who built the scene.",
};

export default function PostersPage() {
  return (
    <main className="ink-bg text-paper min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="type text-sm tracking-[0.3em] uppercase mb-3 text-paper/60">
          The Bill
        </p>
        <RansomNote
          text="POSTERS."
          className="text-6xl md:text-8xl mb-4"
        />
        <p className="type text-lg max-w-2xl mb-10 text-paper/80">
          The flyers, the marquees, the nights that mattered. A bill is a snapshot of who got the slot
          and who got the room.
        </p>

        <div className="rule-red mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posters.map((p, i) => {
            const tilt = i % 2 === 0 ? "tilt-l" : "tilt-r";
            return (
              <article
                key={p.slug}
                className={`zine-card inverted ${tilt} p-6`}
              >
                <p className="type text-xs uppercase tracking-[0.3em] text-blood mb-2">
                  {p.date}
                </p>
                <h2 className="shout text-3xl md:text-4xl leading-[0.95] mb-2">
                  {p.headliner}
                </h2>
                {p.supportActs && p.supportActs.length > 0 && (
                  <p className="type text-sm text-paper/70 mb-2">
                    with {p.supportActs.join(", ")}
                  </p>
                )}
                <p className="shout text-lg tracking-wide text-paper/90 mb-1">
                  {p.venue}
                </p>
                {p.designer && (
                  <p className="type text-xs text-paper/50 mb-3">
                    poster: {p.designer}
                  </p>
                )}
                <div className="censor-bar thin mb-3" />
                <p className="type text-base text-paper/85">{p.context}</p>
                {p.viewUrl && (
                  <a
                    href={p.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blood font-bold tracking-wide uppercase text-sm hover:underline"
                  >
                    Archive &rarr;
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
