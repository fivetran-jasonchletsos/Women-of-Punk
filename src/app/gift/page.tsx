import RansomNote from "@/components/RansomNote";

export const metadata = { title: "Gift — Women of Punk" };

export default function GiftPage() {
  return (
    <div className="page-static-in">
      <section className="paper-bg py-20">
        <div
          className="mx-auto px-4"
          style={{ maxWidth: "560px" }}
        >
          <div className="sticker mb-6 inline-block">A Note, Stapled In</div>

          <article className="letter-paper">
            <h1
              className="block"
              style={{ fontSize: "clamp(2.75rem, 8vw, 4.5rem)", lineHeight: 0.9 }}
            >
              <RansomNote text="FOR HER." letterBreakBelow={5} />
            </h1>

            <div className="censor-bar mt-6 max-w-[180px]" />

            <div
              className="type text-[1.05rem] md:text-[1.15rem] leading-[1.65] mt-6 space-y-5"
              style={{ transform: "rotate(-0.6deg) translateX(-2px)", transformOrigin: "top left" }}
            >
              <p>
                Built for someone who deserves a monument and got a website.
              </p>
              <p>
                The list is incomplete. The history is bigger than this. You
                already know that.
              </p>
              <p>
                Everything here is rough on purpose. Crooked on purpose. Loud on
                purpose. If something&rsquo;s missing — and a lot is missing —
                that&rsquo;s an invitation, not an oversight.
              </p>
              <p>
                Hand it to the next person who needs it.
              </p>
              <p className="text-right pt-2">
                <span className="opacity-80">— your friend</span>
              </p>
            </div>

            <div className="rule-red mt-8" />
            <p className="font-body text-[0.7rem] uppercase tracking-[0.12em] opacity-60 mt-3">
              Filed under: things that should have been said earlier.
            </p>
          </article>

          <div className="mt-10 text-center">
            <p className="font-body text-xs uppercase tracking-[0.18em] opacity-60">
              no rights reserved. take and remix.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
