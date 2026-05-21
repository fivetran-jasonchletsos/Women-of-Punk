export type Film = {
  slug: string;
  title: string;
  year: number;
  director: string;
  /** Why this film matters */
  why: string;
  poster?: string;
};

export const films: Film[] = [
  {
    slug: 'times-square',
    title: 'Times Square',
    year: 1980,
    director: 'Allan Moyle',
    why: 'Two teenage girls run away to form a band called the Sleez Sisters in pre-Disneyfied Times Square. The first film to put a riot-girl friendship at the center.',
    poster: '/posters/times-square.jpg',
  },
  {
    slug: 'ladies-and-gentlemen-the-fabulous-stains',
    title: 'Ladies and Gentlemen, the Fabulous Stains',
    year: 1982,
    director: 'Lou Adler',
    why: 'Diane Lane at 15 fronting a fictional punk band, with actual Sex Pistols and Clash members in the supporting cast. Bootlegged on VHS for a decade and finally restored.',
    poster: '/posters/ladies-and-gentlemen-the-fabulous-stains.jpg',
  },
  {
    slug: 'smithereens',
    title: 'Smithereens',
    year: 1982,
    director: 'Susan Seidelman',
    why: 'First American independent film accepted into competition at Cannes. Susan Berman as a Jersey girl trying to scam her way into the East Village scene.',
    poster: '/posters/smithereens.jpg',
  },
  {
    slug: 'desperately-seeking-susan',
    title: 'Desperately Seeking Susan',
    year: 1985,
    director: 'Susan Seidelman',
    why: 'Madonna at the peak of her early punk-adjacent moment, in a film directed by Smithereens\' Susan Seidelman. The downtown-NY look in mainstream multiplexes.',
    poster: '/posters/desperately-seeking-susan.jpg',
  },
  {
    slug: 'border-radio',
    title: 'Border Radio',
    year: 1987,
    director: 'Allison Anders, Dean Lent, Kurt Voss',
    why: 'Black-and-white road movie starring Chris D., John Doe, Dave Alvin, and Iris Berry. Allison Anders\' debut, the bridge from LA punk to American indie film.',
    poster: '/posters/border-radio.jpg',
  },
  {
    slug: 'we-are-the-best',
    title: 'We Are the Best! (Vi är bäst!)',
    year: 2013,
    director: 'Lukas Moodysson',
    why: 'Three thirteen-year-old girls in 1982 Stockholm form a punk band because they hate gym class. The most accurate film ever made about being in a teenage band.',
    poster: '/posters/we-are-the-best.jpg',
  },
  {
    slug: 'itty-bitty-titty-committee',
    title: 'Itty Bitty Titty Committee',
    year: 2007,
    director: 'Jamie Babbit',
    why: 'Le Tigre soundtracked queer feminist comedy about a radical activist collective. Babbit (But I\'m a Cheerleader) directing actual riot grrrl politics into a rom-com.',
    poster: '/posters/itty-bitty-titty-committee.jpg',
  },
  {
    slug: 'the-runaways',
    title: 'The Runaways',
    year: 2010,
    director: 'Floria Sigismondi',
    why: 'Kristen Stewart as Joan Jett, Dakota Fanning as Cherie Currie, Michael Shannon as Kim Fowley. Cherie Currie consulted; Joan Jett executive-produced.',
    poster: '/posters/the-runaways.jpg',
  },
  {
    slug: 'cbgb',
    title: 'CBGB',
    year: 2013,
    director: 'Randall Miller',
    why: 'Mixed reviews, but Malin Akerman as Debbie Harry and Mickey Sumner as Patti Smith are the reasons to sit through it.',
    poster: '/posters/cbgb.jpg',
  },
  {
    slug: 'hedwig-and-the-angry-inch',
    title: 'Hedwig and the Angry Inch',
    year: 2001,
    director: 'John Cameron Mitchell',
    why: 'Stage musical adapted by its creator into a film about a genderqueer East German punk rocker. Stephen Trask\'s songs are the closest a movie has come to actual glam-punk.',
    poster: '/posters/hedwig-and-the-angry-inch.jpg',
  },
  {
    slug: 'green-room',
    title: 'Green Room',
    year: 2015,
    director: 'Jeremy Saulnier',
    why: 'A touring punk band — including Alia Shawkat\'s bassist — gets trapped in a neo-Nazi venue. The most clear-eyed film ever made about underground touring economics.',
    poster: '/posters/green-room.jpg',
  },
  {
    slug: 'turn-it-around-the-story-of-east-bay-punk',
    title: 'Turn It Around: The Story of East Bay Punk',
    year: 2017,
    director: 'Corbett Redford',
    why: 'Documentary in genre but narrative in feel, narrated by Iggy Pop. Spitboy, the Yeastie Girlz, and Frightwig get the credit Bay Area punk usually gives the boys.',
    poster: '/posters/turn-it-around-the-story-of-east-bay-punk.jpg',
  },
  {
    slug: 'foxfire',
    title: 'Foxfire',
    year: 1996,
    director: 'Annette Haywood-Carter',
    why: 'Angelina Jolie as a drifter who radicalizes four teenage girls into a gang. Adjacent to punk in soundtrack and stance, the kind of film We Are the Best! is in dialogue with.',
    poster: '/posters/foxfire.jpg',
  },
  {
    slug: 'mi-vida-loca',
    title: 'Mi Vida Loca',
    year: 1993,
    director: 'Allison Anders',
    why: 'Echo Park girl-gang film from the writer/director who came up through the LA punk scene. The female counterpoint to all the boys-in-the-hood films of the same year.',
    poster: '/posters/mi-vida-loca.jpg',
  },
  {
    slug: 'gas-food-lodging',
    title: 'Gas Food Lodging',
    year: 1992,
    director: 'Allison Anders',
    why: 'Fairuza Balk and Ione Skye as sisters in a New Mexico truck-stop town. J Mascis scored it; the film carries the same DIY weather as Anders\' punk-scene roots.',
    poster: '/posters/gas-food-lodging.jpg',
  },
];

export default films;
