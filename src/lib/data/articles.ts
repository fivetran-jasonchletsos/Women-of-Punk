export type Article = {
  slug: string;
  title: string;
  author: string;
  publication: string;
  year: number;
  url: string;
  blurb: string;
};

export const articles: Article[] = [
  {
    slug: 'pitchfork-feminist-punk-33-songs',
    title: 'The Story of Feminist Punk in 33 Songs',
    author: 'Pitchfork staff, with essay by Vivien Goldman',
    publication: 'Pitchfork',
    year: 2016,
    url: '',
    blurb: 'Pitchfork\'s 33-song playlist and accompanying Vivien Goldman essay tracing feminist punk from Patti Smith to Sleater-Kinney. The canon-setter for the 2010s.',
  },
  {
    slug: 'npr-150-greatest-albums-by-women',
    title: 'Turning the Tables: The 150 Greatest Albums Made By Women',
    author: 'NPR Music staff',
    publication: 'NPR',
    year: 2017,
    url: 'https://www.npr.org/2017/07/24/538387823/turning-the-tables-150-greatest-albums-made-by-women',
    blurb: 'NPR\'s 2017 list, the launch of the multi-year Turning the Tables project that put women at the center of the popular-music canon. Patti Smith\'s Horses, Sleater-Kinney, and Hole all charted.',
  },
  {
    slug: 'npr-punk-singer-rebel-girl',
    title: 'Bikini Kill frontwoman Kathleen Hanna looks back in the memoir "Rebel Girl"',
    author: 'NPR staff',
    publication: 'NPR',
    year: 2024,
    url: 'https://www.npr.org/2024/05/13/1250507900/bikini-kill-kathleen-hanna-rebel-girl',
    blurb: 'NPR\'s interview with Kathleen Hanna on the release of her 2024 memoir. The clearest on-record version of the Bikini Kill origin story.',
  },
  {
    slug: 'ms-magazine-kathleen-hanna-rebel-girl',
    title: '"My Life as a Feminist Punk": An Interview With Kathleen Hanna',
    author: 'Ms. Magazine staff',
    publication: 'Ms. Magazine',
    year: 2024,
    url: 'https://msmagazine.com/2024/05/13/my-life-as-a-feminist-punk-kathleen-hanna-interview/',
    blurb: 'Ms. Magazine — the publication that named the third wave — interviewing the woman who fronted it about her book. The frame matters.',
  },
  {
    slug: 'creem-kathleen-hanna-interview',
    title: 'Kathleen Hanna Won\'t Save You, So Stop Asking Her To',
    author: 'CREEM staff',
    publication: 'CREEM',
    year: 2024,
    url: 'https://www.creem.com/fresh-creem/kathleen-hanna-creem-interview',
    blurb: 'The relaunched CREEM doing the long Hanna interview the original CREEM never got around to. On parasocial fandom and the limits of icon-making.',
  },
  {
    slug: 'rolling-stone-kim-gordon-godmother-grunge',
    title: 'Kim Gordon: The Godmother of Grunge on Feminism in Rock',
    author: 'Rolling Stone staff',
    publication: 'Rolling Stone',
    year: 2014,
    url: 'https://www.rollingstone.com/music/music-news/kim-gordon-the-godmother-of-grunge-on-feminism-in-rock-184535/',
    blurb: 'Kim Gordon\'s post-Sonic Youth, post-divorce sit-down on feminism, ideology, and being uncomfortable with the labels people stick on her.',
  },
  {
    slug: 'nme-debbie-harry-face-it',
    title: 'Debbie Harry on a life like no other: "I have a stubborn will to survive"',
    author: 'NME staff',
    publication: 'NME',
    year: 2019,
    url: 'https://www.nme.com/features/debbie-harry-face-it-autobiography-70s-bowie-feminism-2552924',
    blurb: 'NME\'s interview around the Face It memoir, the one where Harry talks about being a feminist without ever using the word as branding.',
  },
  {
    slug: 'guardian-viv-albertine-clothes-music-boys',
    title: 'Viv Albertine of the Slits: a life in clothes, music and boys',
    author: 'The Guardian staff',
    publication: 'The Guardian',
    year: 2014,
    url: '',
    blurb: 'Guardian feature around the publication of Albertine\'s memoir. The clearest in-print summary of why the Slits matter from someone who was there.',
  },
  {
    slug: 'npr-punk-singer-film-review',
    title: 'Silent For Years, A Riot Grrrl Steps Back To The Mic',
    author: 'NPR staff',
    publication: 'NPR',
    year: 2013,
    url: 'https://www.npr.org/2013/11/28/247182304/silent-for-years-a-riot-grrrl-steps-back-to-the-mic',
    blurb: 'NPR\'s review of The Punk Singer at release. Sets up Hanna\'s Lyme disease silence and the documentary\'s aftermath.',
  },
  {
    slug: 'quietus-vivien-goldman-she-punks',
    title: 'Dis-Content Farm: An Interview With Vivien Goldman',
    author: 'The Quietus staff',
    publication: 'The Quietus',
    year: 2019,
    url: 'https://thequietus.com/culture/books/vivien-goldman-revenge-of-the-she-punks-interview/',
    blurb: 'Vivien Goldman — Slits chronicler turned NYU professor — interviewed about Revenge of the She-Punks. The long-view perspective.',
  },
  {
    slug: 'npr-big-joanie-back-home',
    title: 'Punk rock band Big Joanie on their album "Back Home"',
    author: 'NPR staff',
    publication: 'NPR',
    year: 2022,
    url: 'https://www.npr.org/2022/11/06/1134608209/punk-rock-band-big-joanie-on-their-album-back-home',
    blurb: 'NPR sitting down with Stephanie Phillips of Big Joanie about the Black feminist lineage from the Raincoats to now.',
  },
  {
    slug: 'afropunk-big-joanie',
    title: 'Big Joanie Rewrite the Rules of Punk, Blending Joy and Resistance On The Defining "Back Home"',
    author: 'AFROPUNK staff',
    publication: 'AFROPUNK',
    year: 2022,
    url: 'https://afropunk.com/2022/11/big-joanie-rewrite-the-rules-of-punk-blending-joy-and-resistance-on-the-defining-back-home/',
    blurb: 'AFROPUNK\'s feature on Back Home, framing Big Joanie inside the broader Black punk lineage from Bad Brains and Poly Styrene forward.',
  },
  {
    slug: 'big-issue-kathleen-hanna',
    title: 'Bikini Kill star and riot grrrl legend Kathleen Hanna: in her own words',
    author: 'The Big Issue staff',
    publication: 'The Big Issue',
    year: 2024,
    url: 'https://www.bigissue.com/culture/music/kathleen-hanna-rebel-girl-feminist-punk-drugs-life/',
    blurb: 'Hanna interviewed by the UK street paper around Rebel Girl. The conversation about class, poverty, and punk that the US press tends to skip.',
  },
];

export default articles;
