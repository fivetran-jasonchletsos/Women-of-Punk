import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ink-bg text-paper mt-20 torn-top">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="shout text-3xl tracking-razor leading-none">
              WOMEN<span className="text-blood">/</span>PUNK
            </div>
            <p className="type mt-3 text-sm opacity-80">
              A history in noise. Loud, unfinished, ours.
            </p>
          </div>

          <div>
            <div className="shout text-xl mb-2">PAGES</div>
            <ul className="space-y-1 text-sm">
              <li><Link href="/sound" className="hover:text-blood">Sound</Link></li>
              <li><Link href="/screen" className="hover:text-blood">Screen</Link></li>
              <li><Link href="/page" className="hover:text-blood">Page</Link></li>
              <li><Link href="/voices" className="hover:text-blood">Voices</Link></li>
              <li><Link href="/timeline" className="hover:text-blood">Timeline</Link></li>
              <li><Link href="/gift" className="hover:text-blood">Gift</Link></li>
            </ul>
          </div>

          <div>
            <div className="shout text-xl mb-2">COLOPHON</div>
            <p className="type text-sm opacity-80 leading-relaxed">
              Built as a gift for a friend who&rsquo;s awesome. No labels were
              consulted. No copy was approved. All errors are mine.
            </p>
          </div>
        </div>

        <div className="rule-red mt-10" />
        <div className="flex flex-wrap justify-between gap-3 text-xs opacity-70 mt-3">
          <span className="type">&copy; {new Date().getFullYear()} — A homemade monument.</span>
          <span className="type">No gods. No masters. No spotify embeds.</span>
        </div>
      </div>
    </footer>
  );
}
