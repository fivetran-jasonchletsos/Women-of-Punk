import { stories } from "@/lib/data/stories";
import RansomNote from "@/components/RansomNote";
import Waveform from "@/components/Waveform";

export const metadata = {
  title: "Stories — Women of Punk",
  description: "The campfire stories of the women who built punk.",
};

export default function StoriesPage() {
  return (
    <main className="paper-bg min-h-screen">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <p className="type text-sm tracking-[0.3em] uppercase mb-3 text-ink/70">
          The Folklore
        </p>
        <RansomNote text="STORIES." className="text-6xl md:text-8xl mb-4" />
        <p className="type text-lg mb-10">
          Origin myths, blown amps, all-night drives, the moments that became myth before the dust settled.
        </p>

        <div className="rule mb-8" />

        <div className="space-y-16">
          {stories.map((s, i) => (
            <article key={s.slug} className="relative">
              <p className="shout text-blood text-sm tracking-[0.3em] uppercase mb-2">
                {s.year} &middot; {s.subject.join(" / ")}
              </p>
              <h2 className="shout text-3xl md:text-5xl leading-[0.95] mb-5 -ml-0.5">
                {s.title}
              </h2>
              <div className="censor-bar thin mb-5" />
              <div className="type space-y-4 text-[1.02rem] leading-relaxed text-ink/90">
                {s.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              {i < stories.length - 1 && (
                <>
                  {(i + 1) % 4 === 0 && (
                    <div className="my-12">
                      <Waveform />
                    </div>
                  )}
                  <div className="rule mt-10" />
                </>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
