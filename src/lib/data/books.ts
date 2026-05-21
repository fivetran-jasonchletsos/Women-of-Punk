export type Book = {
  slug: string;
  title: string;
  author: string;
  year: number;
  about: string;
};

export const books: Book[] = [
  {
    slug: 'just-kids',
    title: 'Just Kids',
    author: 'Patti Smith',
    year: 2010,
    about: 'Patti Smith and Robert Mapplethorpe, broke and in love in pre-yuppie New York, becoming the artists they became. Won the National Book Award. The starting point.',
  },
  {
    slug: 'm-train',
    title: 'M Train',
    author: 'Patti Smith',
    year: 2015,
    about: 'A book about cafés, dreams, dead writers\' graves, and Patti Smith\'s rented Detroit bungalow. The opposite of Just Kids — a quieter, weirder masterpiece.',
  },
  {
    slug: 'devotion',
    title: 'Devotion',
    author: 'Patti Smith',
    year: 2017,
    about: 'Slim Why I Write lecture turned into a book about writing, with a short story embedded in it. The most useful thing Smith has written on the act of making art.',
  },
  {
    slug: 'year-of-the-monkey',
    title: 'Year of the Monkey',
    author: 'Patti Smith',
    year: 2019,
    about: 'A grief memoir in dream form. Smith on tour, watching Sam Shepard die, and writing through the first year of the Trump administration.',
  },
  {
    slug: 'rebel-girl-kathleen-hanna',
    title: 'Rebel Girl: My Life as a Feminist Punk',
    author: 'Kathleen Hanna',
    year: 2024,
    about: 'Kathleen Hanna\'s memoir, published by Ecco. Bikini Kill, Le Tigre, the Julie Ruin, Lyme disease, and the inside story of "girls to the front" — finally on the record.',
  },
  {
    slug: 'girls-to-the-front',
    title: 'Girls to the Front: The True Story of the Riot Grrrl Revolution',
    author: 'Sara Marcus',
    year: 2010,
    about: 'The definitive narrative history of riot grrrl. Marcus interviewed everyone and built a chronology nobody had bothered to assemble. Read this before anything else on the scene.',
  },
  {
    slug: 'the-riot-grrrl-collection',
    title: 'The Riot Grrrl Collection',
    author: 'Lisa Darms (editor)',
    year: 2013,
    about: 'A scanned, edited primary-source archive of riot-grrrl zines, drawn from NYU\'s Fales Library collection. The fanzines themselves, reproduced.',
  },
  {
    slug: 'hunger-makes-me-a-modern-girl',
    title: 'Hunger Makes Me a Modern Girl',
    author: 'Carrie Brownstein',
    year: 2015,
    about: 'Sleater-Kinney\'s Carrie Brownstein on growing up in Redmond, finding the Olympia scene, and what it cost to be in one of the best American rock bands.',
  },
  {
    slug: 'girl-in-a-band',
    title: 'Girl in a Band',
    author: 'Kim Gordon',
    year: 2015,
    about: 'Kim Gordon\'s memoir, written in the aftermath of her divorce from Thurston Moore and the end of Sonic Youth. Cold, precise, and unforgiving.',
  },
  {
    slug: 'kim-gordon-no-icon',
    title: 'No Icon',
    author: 'Kim Gordon',
    year: 2020,
    about: 'Rizzoli photo-and-essay book covering Gordon\'s art, music, and fashion work. The visual companion to Girl in a Band.',
  },
  {
    slug: 'this-womans-work',
    title: 'This Woman\'s Work: Essays on Music',
    author: 'Kim Gordon and Sinead Gleeson (editors)',
    year: 2022,
    about: 'Essays from Anne Enright, Margo Jefferson, Megan Jasper, and others on women in music, edited by Gordon and Sinead Gleeson. A corrective to every "women in rock" anthology.',
  },
  {
    slug: 'face-it-debbie-harry',
    title: 'Face It',
    author: 'Debbie Harry',
    year: 2019,
    about: 'Debbie Harry\'s memoir with Sylvie Simmons. Pre-Blondie waitressing, Bowery survival, heroin, Andy Warhol, and Blondie\'s second act. Illustrated by fan art.',
  },
  {
    slug: 'clothes-music-boys',
    title: 'Clothes, Clothes, Clothes. Music, Music, Music. Boys, Boys, Boys.',
    author: 'Viv Albertine',
    year: 2014,
    about: 'The Slits\' guitarist on London punk, single motherhood, illness, and starting over. Possibly the best-written memoir to come out of UK punk.',
  },
  {
    slug: 'to-throw-away-unopened',
    title: 'To Throw Away Unopened',
    author: 'Viv Albertine',
    year: 2018,
    about: 'Albertine\'s second memoir, mostly about her mother\'s death and her own rage. Sharper and angrier than the first book.',
  },
  {
    slug: 'cinderellas-big-score',
    title: 'Cinderella\'s Big Score: Women of the Punk and Indie Underground',
    author: 'Maria Raha',
    year: 2004,
    about: 'Survey covering the Runaways, the Slits, the Raincoats, L7, Sleater-Kinney, Le Tigre, and the women left out of "women in rock" lists. Published by Seal Press.',
  },
  {
    slug: 'pretty-in-punk',
    title: 'Pretty in Punk: Girls\' Gender Resistance in a Boys\' Subculture',
    author: 'Lauraine Leblanc',
    year: 1999,
    about: 'Rutgers University Press ethnography on girls in 90s punk subcultures. The academic foundation for almost every later book on gender and punk.',
  },
  {
    slug: 'love-from-the-pixies-to-pelle-almqvist',
    title: 'Revenge of the She-Punks: A Feminist Music History',
    author: 'Vivien Goldman',
    year: 2019,
    about: 'Vivien Goldman, who wrote about the Slits in real time in the 70s, on women in punk from Poly Styrene to Pussy Riot. The journalist\'s long view.',
  },
  {
    slug: 'chronicles-of-a-radical-hag',
    title: 'Punk Women: 40 Years of Musicians Who Built Punk Rock',
    author: 'David A. Ensminger',
    year: 2018,
    about: 'Oral-history interview collection with women across four decades of US punk, including Alice Bag, Penelope Houston, and Cinder Block.',
  },
  {
    slug: 'cherry-bomb-cherie-currie',
    title: 'Neon Angel: A Memoir of a Runaway',
    author: 'Cherie Currie',
    year: 2010,
    about: 'Cherie Currie of the Runaways on Kim Fowley, statutory abuse, and surviving the band. Source material for the 2010 Runaways film.',
  },
  {
    slug: 'violence-girl-alice-bag',
    title: 'Violence Girl: East L.A. Rage to Hollywood Stage, A Chicana Punk Story',
    author: 'Alice Bag',
    year: 2011,
    about: 'Alicia Armendariz of The Bags on growing up in East LA and fronting one of the first-wave LA punk bands. Essential context for Decline of Western Civilization.',
  },
];

export default books;
