export const metadata = { title: "Gift — Women of Punk" };

export default function GiftPage() {
  return (
    <>
      <section className="paper-bg py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="sticker mb-6 inline-block">A Note, Stapled In</div>

          <article className="zine-card tilt-l relative">
            <span className="tape absolute -top-3 left-10" aria-hidden />
            <span className="tape yellow right absolute -top-3 right-10" aria-hidden />

            <h1
              className="shout text-6xl md:text-7xl tracking-razor leading-[0.85]"
              style={{ transform: "rotate(-1deg)" }}
            >
              FOR <span className="text-blood">SOMEONE</span>
              <br />WHO DESERVES
              <br />A MONUMENT.
            </h1>

            <div className="censor-bar mt-6 max-w-sm" />

            <div className="type text-lg leading-relaxed mt-6 space-y-4">
              <p>
                This was built as a gift for someone who&rsquo;s awesome. You
                know who you are. The internet doesn&rsquo;t need to.
              </p>
              <p>
                Punk has always belonged to the people who needed it most, and
                history has been bad at remembering which people those were.
                This site is one small correction. It will never be done. That
                also is the point.
              </p>
              <p>
                Everything here is rough on purpose. Crooked on purpose. Loud on
                purpose. If something&rsquo;s missing — and a lot is missing —
                that&rsquo;s an invitation, not an oversight. Hand it to the
                next person who needs it.
              </p>
              <p className="shout text-2xl tracking-wide mt-6">
                With love, and a slight rotation.
              </p>
            </div>

            <div className="rule-red mt-8" />
            <p className="type text-xs opacity-70 mt-3">
              Filed under: things that should have been said earlier.
            </p>
          </article>

          <div className="mt-10 text-center">
            <p className="shout text-3xl tracking-razor">
              <span className="text-blood">P.S.</span> Turn It Up.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
