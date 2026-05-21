export type Poster = {
  slug: string;
  headliner: string;
  supportActs?: string[];
  venue: string;
  /** YYYY-MM-DD when known; YYYY-MM when the exact day isn't confirmed; YYYY when only the year is verified. */
  date: string;
  /** The artist or designer who made the poster, when known. */
  designer?: string;
  /** One sentence on why the gig mattered. */
  context: string;
  /** Legal URL to a public archive of the flyer/poster. Empty string when no verified URL exists. */
  viewUrl: string;
};

export const posters: Poster[] = [
  {
    slug: 'white-riot-tour-roxy-1977-05-01',
    headliner: 'The Clash',
    supportActs: ['The Jam', 'Buzzcocks', 'Subway Sect'],
    venue: 'The Roxy, London',
    date: '1977-05-01',
    context:
      'Opening night of the White Riot Tour — the tour that put The Slits on the road across the UK as the only all-woman band on a punk package bill.',
    viewUrl: '',
  },
  {
    slug: 'white-riot-tour-rainbow-1977-05-09',
    headliner: 'The Clash',
    supportActs: ['The Jam', 'Buzzcocks', 'Subway Sect', 'The Prefects'],
    venue: 'The Rainbow Theatre, Finsbury Park, London',
    date: '1977-05-09',
    context:
      'The Rainbow date became famous for ripped-out cinema seats; The Slits played most legs of the tour even when they weren\'t on the printed bill.',
    viewUrl: '',
  },
  {
    slug: 'white-riot-tour-edinburgh-1977-05-07',
    headliner: 'The Clash',
    supportActs: ['The Slits', 'Buzzcocks', 'Subway Sect'],
    venue: 'Edinburgh Playhouse',
    date: '1977-05-07',
    context:
      'The Slits supporting up the bill in Scotland — Ari Up was fifteen years old.',
    viewUrl: '',
  },
  {
    slug: 'white-riot-leicester-1977-05-28',
    headliner: 'The Clash',
    supportActs: ['Buzzcocks', 'The Slits', 'Subway Sect'],
    venue: 'De Montfort Hall, Leicester',
    date: '1977-05-28',
    context:
      'A late-tour date with The Slits printed on the bill; one of the few package gigs from the era where the all-woman band got equal billing on the flyer.',
    viewUrl: 'https://www.concertarchives.org/concerts/the-clash-buzzcocks-the-slits-subway-sect',
  },
  {
    slug: '100-club-punk-festival-1976-09-20',
    headliner: 'Sex Pistols',
    supportActs: ['Siouxsie and the Banshees', 'Subway Sect', 'Clash'],
    venue: '100 Club, Oxford Street, London',
    date: '1976-09-20',
    context:
      'Night one of the 100 Club Punk Special — Siouxsie\'s first ever performance, twenty improvised minutes of the Lord\'s Prayer with Sid Vicious on drums and Marco Pirroni on guitar.',
    viewUrl: 'https://en.wikipedia.org/wiki/100_Club_Punk_Special',
  },
  {
    slug: 'patti-smith-television-cbgb-1975',
    headliner: 'Patti Smith Group',
    supportActs: ['Television'],
    venue: 'CBGB, 315 Bowery, New York',
    date: '1975-03',
    context:
      'The seven-week residency, two sets a night, four nights a week, that put both bands — and CBGB itself — into the rock press for the first time.',
    viewUrl: '',
  },
  {
    slug: 'patti-smith-television-cbgb-1975-04-17',
    headliner: 'Patti Smith Group',
    supportActs: ['Television'],
    venue: 'CBGB, New York',
    date: '1975-04-17',
    context:
      'One specifically documented night of the residency, captured on tape, with "Redondo Beach," "Piss Factory," and an embryonic "Horses" in the set.',
    viewUrl: '',
  },
  {
    slug: 'runaways-whisky-go-go-1976',
    headliner: 'The Runaways',
    venue: 'Whisky a Go Go, West Hollywood',
    date: '1976',
    context:
      'The Runaways treated the Whisky as a home base in 1976 — the room where the Cherie Currie lineup became a Mercury Records band.',
    viewUrl: '',
  },
  {
    slug: 'yyy-mercury-lounge-2000-09-25',
    headliner: 'The White Stripes',
    supportActs: ['Yeah Yeah Yeahs', 'Candy Darlings', 'Kid Congo Powers'],
    venue: 'Mercury Lounge, Lower East Side, New York',
    date: '2000-09-25',
    context:
      'Yeah Yeah Yeahs\' first ever gig — Brian Chase had been in the band one day, the Strokes were on the rise, and the New York rock revival was three songs from starting.',
    viewUrl: '',
  },
  {
    slug: 'yyy-mercury-lounge-2001-11-21',
    headliner: 'Yeah Yeah Yeahs',
    venue: 'Mercury Lounge, New York',
    date: '2001-11-21',
    context:
      'A documented post-EP Mercury show — Karen O at the peak of the beer-spitting, fishnet-ripping early run before Fever to Tell.',
    viewUrl: 'https://www.setlist.fm/setlist/yeah-yeah-yeahs/2001/mercury-lounge-new-york-ny-4bdb6776.html',
  },
  {
    slug: 'lollapalooza-1995-gorge',
    headliner: 'Sonic Youth',
    supportActs: ['Hole', 'Cypress Hill', 'Pavement', 'Sinéad O\'Connor', 'Beck', 'The Jesus Lizard'],
    venue: 'The Gorge Amphitheatre, George, Washington',
    date: '1995-07-04',
    context:
      'The Lollapalooza lineup that put Courtney Love and Kim Gordon on the same main stage; Sinéad O\'Connor dropped out pregnant and Elastica filled in.',
    viewUrl: '',
  },
  {
    slug: 'lollapalooza-1995-bonner-springs',
    headliner: 'Sonic Youth',
    supportActs: ['Hole', 'Cypress Hill', 'Sinéad O\'Connor', 'Beck', 'The Mighty Mighty Bosstones', 'The Jesus Lizard'],
    venue: 'Sandstone Amphitheater, Bonner Springs, Kansas',
    date: '1995-07-10',
    context:
      'A documented mid-tour date — Patti Smith played the side stage that year, making it the only Lollapalooza on which she ever appeared.',
    viewUrl: 'https://www.concertarchives.org/concerts/sonic-youth-hole-cypress-hill-sinead-o-connor-beck-the-mighty-mighty-bosstones-the-jesus-lizard',
  },
  {
    slug: 'yoyo-a-go-go-1994',
    headliner: 'Yoyo A Go Go Festival',
    supportActs: ['Bikini Kill', 'Heavens to Betsy', 'Team Dresch', 'Mary Lou Lord', 'Lois', 'Mecca Normal', 'Tattle Tale'],
    venue: 'Capitol Theater, Olympia, Washington',
    date: '1994-07-12',
    context:
      'Five days, July 12 to 16, 1994 — the festival that mapped out the riot grrrl and queercore scene in one room and put it on tape.',
    viewUrl: 'https://en.wikipedia.org/wiki/Yoyo_A_Go_Go',
  },
  {
    slug: 'yoyo-a-go-go-1997',
    headliner: 'Yoyo A Go Go Festival',
    supportActs: ['Sleater-Kinney', 'Elliott Smith', 'Unwound', 'Mecca Normal', 'The Need'],
    venue: 'Capitol Theater, Olympia, Washington',
    date: '1997',
    context:
      'Sleater-Kinney returned to Olympia in 1997 to play the second Yoyo, six months after Dig Me Out came out and broke them out of K Records orbit.',
    viewUrl: 'https://en.wikipedia.org/wiki/Yoyo_A_Go_Go',
  },
  {
    slug: 'babes-in-toyland-reading-1991',
    headliner: 'Reading Festival',
    supportActs: ['Babes in Toyland', 'Sonic Youth', 'Nirvana', 'Dinosaur Jr.'],
    venue: 'Little John\'s Farm, Reading, England',
    date: '1991-08',
    context:
      'Kat Bjelland and Babes in Toyland on the Reading bill — the European booking that put Spanking Machine in front of the British press.',
    viewUrl: '',
  },
];

export default posters;
