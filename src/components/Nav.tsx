import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/sound", label: "Sound" },
  { href: "/screen", label: "Screen" },
  { href: "/page", label: "Page" },
  { href: "/voices", label: "Voices" },
  { href: "/timeline", label: "Timeline" }
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 ink-bg text-paper border-b-[3px] border-blood">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link href="/" className="shout text-2xl tracking-razor leading-none">
          WOMEN<span className="text-blood">/</span>PUNK
        </Link>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 ml-2">
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="shout text-lg tracking-wide hover:bg-blood hover:text-paper px-1"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/gift"
          className="ml-auto sticker hover:rotate-2 transition-transform"
        >
          For Her — Open
        </Link>
      </nav>
    </header>
  );
}
