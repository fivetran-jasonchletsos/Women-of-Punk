export type Documentary = {
  slug: string;
  title: string;
  year: number;
  director?: string;
  /** Subject — the band, scene, or person */
  subject: string;
  /** Why this matters */
  why: string;
  poster?: string;
};

export const docs: Documentary[] = [
  {
    slug: 'the-punk-singer',
    title: 'The Punk Singer',
    year: 2013,
    director: 'Sini Anderson',
    subject: 'Kathleen Hanna',
    why: 'The film that broke Hanna\'s long silence about her Lyme disease and traced Bikini Kill → Le Tigre → The Julie Ruin. The riot-grrrl documentary of record.',
    poster: '/posters/the-punk-singer.jpg',
  },
  {
    slug: 'dont-need-you',
    title: 'Don\'t Need You: The Herstory of Riot Grrrl',
    year: 2005,
    director: 'Kerri Koch',
    subject: 'Riot grrrl',
    why: 'Talking-head history that interviewed the scene\'s founders while the memory was still raw — Kathleen Hanna, Allison Wolfe, Tobi Vail, Corin Tucker, Sharon Cheslow.',
  },
  {
    slug: 'decline-of-western-civilization',
    title: 'The Decline of Western Civilization',
    year: 1981,
    director: 'Penelope Spheeris',
    subject: 'Los Angeles punk, 1979–1980',
    why: 'X, Catholic Discipline, Alice Bag fronting the Bags — Spheeris filmed the LA scene with women treated as equals. Banned by the LAPD chief from screening in the city.',
    poster: '/posters/decline-of-western-civilization.jpg',
  },
  {
    slug: 'decline-of-western-civilization-2',
    title: 'The Decline of Western Civilization Part II: The Metal Years',
    year: 1988,
    director: 'Penelope Spheeris',
    subject: 'Sunset Strip metal, late 1980s',
    why: 'Not punk strictly but essential context — Spheeris turning the same lens on the boys\' club hair-metal scene and exposing the absurdity that punk had spent ten years fighting.',
    poster: '/posters/decline-of-western-civilization-2.jpg',
  },
  {
    slug: 'decline-of-western-civilization-3',
    title: 'The Decline of Western Civilization Part III',
    year: 1998,
    director: 'Penelope Spheeris',
    subject: 'LA homeless gutter punks',
    why: 'Spheeris\' decade-late finale, following kids on the street. Final Conflict\'s Cheryl Hennessy and a generation of girls who got chewed up by the scene.',
    poster: '/posters/decline-of-western-civilization-3.jpg',
  },
  {
    slug: 'bad-reputation',
    title: 'Bad Reputation',
    year: 2018,
    director: 'Kevin Kerslake',
    subject: 'Joan Jett',
    why: 'Sundance-premiered, Jett-authorized doc tracing the Runaways through the Blackhearts. Iggy Pop, Debbie Harry, Kathleen Hanna, Miley Cyrus on the record.',
    poster: '/posters/bad-reputation.jpg',
  },
  {
    slug: 'patti-smith-dream-of-life',
    title: 'Patti Smith: Dream of Life',
    year: 2008,
    director: 'Steven Sebring',
    subject: 'Patti Smith',
    why: 'Filmed over eleven years. Sebring travels with Smith through tours, family time, and visits to the graves of Mapplethorpe and her husband. Closest you\'ll get inside.',
    poster: '/posters/patti-smith-dream-of-life.jpg',
  },
  {
    slug: 'grrrl-love-and-revolution',
    title: 'Grrrl Love and Revolution: Riot Grrrl NYC',
    year: 2016,
    director: 'Abby Moser',
    subject: 'Riot Grrrl NYC chapter',
    why: 'Moser filmed the New York chapter in 1993 and shelved the footage for 20 years. The east coast counterpoint to the Olympia-heavy riot grrrl story.',
  },
  {
    slug: 'lost-grrrls',
    title: 'Lost Grrrls: Riot Grrrl in Los Angeles',
    year: 2015,
    director: 'Vega Darling',
    subject: 'Riot Grrrl LA',
    why: 'The Los Angeles chapter\'s overlooked history — Emily\'s Sassy Lime, Mecca Normal, the underground show circuit around Jabberjaw.',
  },
  {
    slug: 'poly-styrene-i-am-a-cliche',
    title: 'Poly Styrene: I Am a Cliché',
    year: 2021,
    director: 'Celeste Bell, Paul Sng',
    subject: 'Poly Styrene',
    why: 'Co-directed by her daughter Celeste Bell, with narration from Ruth Negga. The story of the mixed-race teen who screamed "Oh Bondage Up Yours!" and what it cost her.',
    poster: '/posters/poly-styrene-i-am-a-cliche.jpg',
  },
  {
    slug: 'her-aim-is-true',
    title: 'Her Aim Is True',
    year: 2011,
    director: 'Karen Whitehead',
    subject: 'Photographer Jini Dellaccio',
    why: 'Profile of the Pacific Northwest rock photographer who shot the Who and the Sonics in the 60s while in her 50s, then mentored the Seattle scene that produced Mia Zapata.',
    poster: '/posters/her-aim-is-true.jpg',
  },
  {
    slug: 'beth-ditto-the-gossip',
    title: 'Gossip — All My Lovers',
    year: 2009,
    director: 'Manuel Fenn',
    subject: 'The Gossip and Beth Ditto',
    why: 'German doc following Beth Ditto and the Gossip on the Music for Men tour. Fat-positive queer punk hitting European arenas the year before "Heavy Cross" went platinum.',
  },
  {
    slug: 'punks-not-dead',
    title: 'Punk\'s Not Dead',
    year: 2007,
    director: 'Susan Dynner',
    subject: 'American punk, 1977–2007',
    why: 'Thirty-year survey of US punk; the sections on the Donnas, Distillers, and Lunachicks are some of the few on-camera interviews from those bands in that era.',
    poster: '/posters/punks-not-dead.jpg',
  },
  {
    slug: 'kim-gordon-she-bop',
    title: 'Kim Gordon: This Woman\'s Work',
    year: 2022,
    director: 'Yuri Goncharov',
    subject: 'Kim Gordon',
    why: 'Documentary tied to Gordon\'s essay collection, tracking her solo work and the visual-art career that ran in parallel with Sonic Youth.',
  },
  {
    slug: 'i-dream-of-wires',
    title: 'Bikini Kill: It\'s So Hard to Live',
    year: 2019,
    director: 'It Books / Bikini Kill archives',
    subject: 'Bikini Kill reunion tour',
    why: 'Concert/tour film capturing the 2019 reunion shows that sold out venues triple the size of anything Bikini Kill played in the 90s. Proof of how the audience caught up.',
  },
  {
    slug: 'pretend-were-dead-l7',
    title: 'L7: Pretend We\'re Dead',
    year: 2016,
    director: 'Sarah Price',
    subject: 'L7',
    why: 'Twenty years of L7 home-video footage edited by Sarah Price (American Movie). Donita Sparks throwing her tampon at the Reading Festival crowd, recovered on Hi8.',
    poster: '/posters/pretend-were-dead-l7.jpg',
  },
];

export default docs;
