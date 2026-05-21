export type Photo = {
  slug: string;
  /** Who or what is in the photograph */
  subject: string;
  photographer: string;
  year: number;
  /** The session, album, event, or context the image came from */
  where: string;
  /** One sentence on why this photograph matters */
  context: string;
  /** A legal URL to view the image. Empty string when no verified URL exists. */
  viewUrl: string;
};

export const photos: Photo[] = [
  {
    slug: 'patti-smith-horses-cover',
    subject: 'Patti Smith',
    photographer: 'Robert Mapplethorpe',
    year: 1975,
    where: 'Cover of Horses, shot in Sam Wagstaff\'s Manhattan apartment',
    context:
      'Twelve frames, natural light, a borrowed white shirt with an "RV" monogram, and a jacket slung Sinatra-style — the image that taught a generation what a rock star could look like without performing femininity.',
    viewUrl: 'https://www.moma.org/collection/works/185442',
  },
  {
    slug: 'patti-smith-horses-poster',
    subject: 'Patti Smith',
    photographer: 'Robert Mapplethorpe',
    year: 1975,
    where: 'Arista promo poster for Horses',
    context:
      'The poster pressing of the Mapplethorpe portrait spread the Horses cover across record stores and dorm walls before MTV existed.',
    viewUrl: 'https://www.moma.org/collection/works/156106',
  },
  {
    slug: 'patti-smith-leibovitz-fire',
    subject: 'Patti Smith',
    photographer: 'Annie Leibovitz',
    year: 1978,
    where: 'Rolling Stone cover shoot, a warehouse in New Orleans',
    context:
      'Leibovitz set fire to barrels of kerosene in a 100-degree warehouse to literalize the line "desire is hunger is the fire I breathe" from "Because the Night."',
    viewUrl: '',
  },
  {
    slug: 'debbie-harry-mick-rock-red',
    subject: 'Debbie Harry',
    photographer: 'Mick Rock',
    year: 1978,
    where: 'East 21st Street loft, NYC — Picture This sessions, autumn 1978',
    context:
      'Their first sitting, scheduled around the Parallel Lines promo push. Rock said he saw "very little punk and lots of Marilyn"; the red and pink backgrounds became the defining Blondie portraits.',
    viewUrl: 'https://www.rockarchive.com/prints/b/blondie-bl002mr',
  },
  {
    slug: 'debbie-harry-mick-rock-smiling',
    subject: 'Debbie Harry',
    photographer: 'Mick Rock',
    year: 1978,
    where: 'Picture This sessions, NYC',
    context:
      'The grin frame from the same afternoon — Stephen Sprouse wardrobe, Polaroids on the floor — that ran in the eventual Penthouse cover and a hundred reissues.',
    viewUrl: 'https://sfae.com/Artists/Mick-Rock/Debbie-Harry-Portrait-Smiling-Red-1978',
  },
  {
    slug: 'joan-jett-bob-gruen-nj-1977',
    subject: 'Joan Jett with The Runaways',
    photographer: 'Bob Gruen',
    year: 1977,
    where: 'The Place, Dover, New Jersey, March 1977',
    context:
      'Eighteen years old, Gibson Melody Maker slung low, the photograph that started the visual lineage every guitar-slinging woman after her would borrow from.',
    viewUrl: 'https://www.bobgruen.com/joan-jett-2/runaways-jett-joan-2/',
  },
  {
    slug: 'runaways-my-fathers-place-1976',
    subject: 'The Runaways — Lita Ford, Joan Jett, Cherie Currie, Jackie Fox, Sandy West',
    photographer: 'Bob Gruen',
    year: 1976,
    where: 'My Father\'s Place, Roslyn, New York, August 1, 1976',
    context:
      'The full Cherry Bomb lineup caught on a Long Island stage at the precise moment the band stopped being a Kim Fowley pitch and started being The Runaways.',
    viewUrl: 'https://www.bobgruen.com/runaways/',
  },
  {
    slug: 'the-slits-cut-cover',
    subject: 'Ari Up, Viv Albertine, Tessa Pollitt',
    photographer: 'Pennie Smith',
    year: 1979,
    where: 'Cover of Cut, Ridge Farm Studio, Surrey',
    context:
      'Three women, loincloths, mud — released September 7, 1979 on Island. The image record shops refused to display; the answer the Slits gave the male gaze before anyone asked.',
    viewUrl: 'https://en.wikipedia.org/wiki/Cut_(The_Slits_album)',
  },
  {
    slug: 'the-slits-typical-girls-sleeve',
    subject: 'The Slits',
    photographer: 'Pennie Smith',
    year: 1979,
    where: 'Cover of the "Typical Girls" 7-inch single, Island Records',
    context:
      'The single from Cut that sounded like nothing else on UK radio in 1979 — designed by Bloomfield/Travis with Pennie Smith\'s photograph.',
    viewUrl: 'https://www.moma.org/collection/works/156202',
  },
  {
    slug: 'siouxsie-100-club-1976',
    subject: 'Siouxsie Sioux',
    photographer: 'Steve Severin',
    year: 1976,
    where: '100 Club Punk Special, London, September 20, 1976',
    context:
      'Photographed by her bandmate the day she walked onstage with no songs and no rehearsal and improvised twenty minutes of the Lord\'s Prayer in front of London punk in its entirety.',
    viewUrl: '',
  },
  {
    slug: 'poly-styrene-falcon-stuart-archive',
    subject: 'Poly Styrene',
    photographer: 'Falcon Stuart',
    year: 1977,
    where: 'X-Ray Spex management archive, London',
    context:
      'Stuart was Poly\'s partner, manager, and constant documentarian; his frames are the only continuous record of Marion Elliott\'s transformation from teenager to the woman in the dental braces who screamed "Oh Bondage Up Yours!"',
    viewUrl: '',
  },
  {
    slug: 'kathleen-hanna-90s-bikini-kill',
    subject: 'Kathleen Hanna fronting Bikini Kill',
    photographer: 'Pat Graham',
    year: 1993,
    where: 'D.C. and Olympia tour photographs, early 1990s',
    context:
      'Graham\'s documentation of the early Bikini Kill shows — "Slut" written on Hanna\'s stomach in lipstick, girls pulled to the front — is the closest the riot grrrl movement has to a Mapplethorpe portfolio.',
    viewUrl: '',
  },
  {
    slug: 'kim-gordon-michael-lavine-nyc',
    subject: 'Kim Gordon',
    photographer: 'Michael Lavine',
    year: 1990,
    where: 'New York studio sessions, Sonic Youth Goo era',
    context:
      'Lavine\'s color portraits of Gordon defined what the downtown art-rock woman looked like to anyone reading SPIN in 1990.',
    viewUrl: '',
  },
  {
    slug: 'patti-smith-easter-cover',
    subject: 'Patti Smith',
    photographer: 'Lynn Goldsmith',
    year: 1978,
    where: 'Cover of Easter, Arista Records',
    context:
      'Bare armpits, slip dress, a stare — the album that contained "Because the Night" wrapped in an image as confrontational as the songs.',
    viewUrl: 'https://en.wikipedia.org/wiki/Easter_(Patti_Smith_Group_album)',
  },
  {
    slug: 'patti-smith-mapplethorpe-just-kids',
    subject: 'Patti Smith and Robert Mapplethorpe',
    photographer: 'Robert Mapplethorpe (self-timer)',
    year: 1969,
    where: 'Their Brooklyn apartment, the year they were both broke',
    context:
      'The diptych Smith later printed in Just Kids — two kids who had not yet become Patti Smith and Robert Mapplethorpe, photographed by one of them.',
    viewUrl: '',
  },
  {
    slug: 'patti-smith-mapplethorpe-chelsea',
    subject: 'Patti Smith',
    photographer: 'Robert Mapplethorpe',
    year: 1971,
    where: 'Chelsea Hotel, room 1017',
    context:
      'The Polaroid-era portraits Mapplethorpe made of Smith during their Chelsea years — the photographic warmup for what Horses would crystallize four years later.',
    viewUrl: '',
  },
  {
    slug: 'debbie-harry-chris-stein-punk-mag',
    subject: 'Debbie Harry',
    photographer: 'Chris Stein',
    year: 1976,
    where: 'New York, the year Blondie was still playing CBGB',
    context:
      'Stein was Blondie\'s guitarist and Harry\'s partner; his photographs from 1976 to 1979 are the unguarded counter-image to the magazine covers.',
    viewUrl: '',
  },
  {
    slug: 'siouxsie-janette-beckman',
    subject: 'Siouxsie Sioux',
    photographer: 'Janette Beckman',
    year: 1981,
    where: 'London portrait session for Melody Maker / The Face',
    context:
      'Beckman\'s portrait of Siouxsie in full Banshees-era makeup became the reference image for goth visual language in every magazine that followed.',
    viewUrl: '',
  },
  {
    slug: 'patti-smith-frank-stefanko',
    subject: 'Patti Smith',
    photographer: 'Frank Stefanko',
    year: 1977,
    where: 'Haddonfield, New Jersey — early sittings',
    context:
      'Stefanko (better known for Springsteen\'s Darkness on the Edge of Town) shot Smith in domestic New Jersey light a year before Easter, a counterweight to the Mapplethorpe mythology.',
    viewUrl: '',
  },
  {
    slug: 'karen-o-yyy-fever-to-tell',
    subject: 'Karen O',
    photographer: 'Patrick O\'Dell',
    year: 2003,
    where: 'Fever to Tell era live photography, NYC and tour',
    context:
      'The torn dresses, gold fringe, beer spit, and microphone-in-mouth frames that turned Karen O into the first new rock star of the 2000s.',
    viewUrl: '',
  },
];

export default photos;
