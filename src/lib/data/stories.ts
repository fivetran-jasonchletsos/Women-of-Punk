export type Story = {
  slug: string;
  /** Headline-style title, 5-9 words. */
  title: string;
  year: number;
  /** One to three principal subjects. */
  subject: string[];
  /** Three to five paragraphs. Punchy prose, specific detail. */
  body: string[];
};

export const stories: Story[] = [
  {
    slug: 'patti-meets-mapplethorpe',
    title: 'Two Kids Find Each Other in Brooklyn',
    year: 1967,
    subject: ['Patti Smith', 'Robert Mapplethorpe'],
    body: [
      'She is twenty years old and she has fifty dollars. She has just left Glassboro State and Janet Hamill\'s couch in South Jersey and a daughter she gave up for adoption, and she is in Manhattan on a Greyhound bus with no plan and nowhere to sleep.',
      'She walks to Pratt because she knows somebody there, or thinks she does. The boy who answers the door tells her the friend has moved out. Try the roommate, he says. In the next room a kid with dark curls is asleep on a small iron bed.',
      'The roommate is Robert Mapplethorpe. He gives her a place to crash. By the end of the year they are living together. He is making jewelry and shooting his first photographs; she is working at Scribner\'s bookstore for ninety dollars a week and writing poems on the train.',
      'They will move into the Chelsea Hotel. They will be broke for years. They will not be famous for nine more, and Mapplethorpe will not live to see fifty. But everything that ends with the cover of Horses starts in a Brooklyn doorway in the summer of 1967, with a girl who has no money and a boy who isn\'t even awake yet.',
    ],
  },
  {
    slug: 'gloria-st-marks-1971',
    title: 'Patti Reads Poems with a Guitar',
    year: 1971,
    subject: ['Patti Smith', 'Lenny Kaye'],
    body: [
      'February 10, 1971. The Poetry Project at St. Mark\'s Church-in-the-Bowery. Gerard Malanga is supposed to be the headliner. Patti Smith has been invited to open and she has decided, on Sam Shepard\'s advice, to bring a guitar player with her.',
      'She calls Lenny Kaye, a record clerk she has been talking to about doo-wop and the Shangri-Las. He says yes. She opens the set with a poem called "Oath" and the first line is "Christ died for somebody\'s sins but not mine."',
      'Five years later that same line will open Horses. The song "Gloria" will not exist yet for three more years, when Smith\'s poem and Van Morrison\'s garage chord progression collide somewhere in a rehearsal in 1974 and stay collided.',
      'But the church is where the deal gets made. Lenny Kaye stays in the band for the next half-century. The poetry reading is the night American rock and roll finds out it can be literature out loud, with feedback, in a room full of people who came to hear words.',
    ],
  },
  {
    slug: 'kim-fowley-finds-joan-jett',
    title: 'Five Girls Who Can Play',
    year: 1975,
    subject: ['Joan Jett', 'Kim Fowley', 'Sandy West'],
    body: [
      'Joan Larkin is fifteen years old, has just moved from Maryland to the Valley, and has a Gibson Melody Maker she does not really know how to play yet. Her mother lets her take the bus to Hollywood by herself.',
      'Kim Fowley is a Sunset Strip hustler with an idea he has been pitching to anyone who will listen: an all-girl rock band that plays like the Stooges. He has Kari Krome on lyrics. Krome knows Joan from a party. Joan auditions by playing along to a Suzi Quatro record on a ukulele.',
      'Sandy West shows up separately. Fowley puts the two of them in a room together. They are both teenagers, neither has been in a real band, and within ten minutes they have written the bones of "Cherry Bomb." That is the Runaways. The rest — Lita Ford, Jackie Fox, Cherie Currie — gets added on.',
      'Fowley liked to say later that he didn\'t put the Runaways together, he had an idea and out of five different versions of the group came the five girls people remembered. The five girls would say something very different about Kim Fowley. But the band was real. By August 1975 it had a name. By 1976 it had a record deal. Joan Jett would not turn eighteen until that September.',
    ],
  },
  {
    slug: 'joan-jett-twenty-three-rejections',
    title: 'Twenty-Three Labels Said No',
    year: 1980,
    subject: ['Joan Jett', 'Kenny Laguna'],
    body: [
      'The Runaways break up in 1979. Joan Jett is nineteen. She records a solo album in Los Angeles with help from Steve Jones and Paul Cook of the Sex Pistols, and she takes it to every major label in America.',
      'Twenty-three of them pass. Twenty-three. Bubblegum producer Kenny Laguna, who has agreed to manage her almost on a whim, decides they will just put it out themselves. He spends his daughter\'s college fund on the pressing.',
      'They name the label Blackheart Records after Laguna\'s habit of calling Jett his blackheart kid. They sell records out of the trunk of Laguna\'s Cadillac at gigs. Jett re-records a B-side by a forgotten British band called the Arrows.',
      '"I Love Rock \'n Roll" goes to number one in the United States for seven weeks in 1982. Billie Joe Armstrong, twenty years later, will say that Joan and Kenny taught a generation of bands they didn\'t need anybody in a suit. The college fund got paid back.',
    ],
  },
  {
    slug: 'siouxsie-lords-prayer-100-club',
    title: 'Twenty Minutes of the Lord\'s Prayer',
    year: 1976,
    subject: ['Siouxsie Sioux', 'Sid Vicious', 'Marco Pirroni'],
    body: [
      'Susan Ballion is nineteen, lives in Chislehurst, and is part of the Bromley Contingent — the suburban kids who follow the Sex Pistols around. Malcolm McLaren is organizing a punk festival at the 100 Club on Oxford Street in September 1976. He needs another band.',
      'She volunteers. There is no band. She finds Steven Bailey — who will rename himself Steven Severin that week — on bass. Marco Pirroni, later of Adam and the Ants, takes guitar. Sid Vicious, who has never played drums, takes drums. They rehearse once. They have no songs.',
      'September 20, 1976. The plan is to recite the Lord\'s Prayer over whatever the band can hold together. Siouxsie walks onstage in a swastika armband she will later regret and a fishnet bra, and improvises for twenty minutes while the band falls apart behind her.',
      'It is the worst gig and the best gig and the first gig. Siouxsie and the Banshees do not have a record deal for two more years. But the room watching her recite "Our Father, who art in heaven" over a collapsing rhythm section understood, that night, that the Banshees had begun.',
    ],
  },
  {
    slug: 'poly-styrene-day-glo',
    title: 'A Rainbow on the Hastings Sea',
    year: 1976,
    subject: ['Poly Styrene'],
    body: [
      'Marion Elliott is nineteen, of Anglo-Somali heritage, and has already been a hippie, a Hare Krishna, and a runaway. On July 3, 1976 — her nineteenth birthday — she takes the train down to Hastings to see a new band called the Sex Pistols play the pier.',
      'She walks out of the show and decides she is going to start her own band. She puts an ad in Melody Maker that reads "young punx who want to stick it together." She picks the name Poly Styrene because it is a synthetic and disposable and that is the joke.',
      'X-Ray Spex play their first show at the Roxy in 1977. Poly wears dental braces on the cover of Germfree Adolescents and people cannot tell if it is camp or art. It is both. The single "The Day the World Turned Day-Glo" hits the British Top 30 in 1978.',
      'She always said the song was not about acid. It was about everything brown turning fluorescent — the way her childhood went from paper bags to plastic in one decade. Punk is supposed to be nihilist. Poly Styrene refused to do nihilist. She did color instead.',
    ],
  },
  {
    slug: 'ari-up-the-slits-fourteen',
    title: 'Ari Up Was Fourteen',
    year: 1976,
    subject: ['Ari Up', 'Palmolive', 'Viv Albertine'],
    body: [
      'Ariane Forster, born in Munich, daughter of a German publishing heiress, moves to London with her mother. Her mother starts dating John Lydon. Ari is fourteen years old and absorbing London punk through the kitchen.',
      'In 1976 she meets Palmolive, the drummer of the Flowers of Romance, in a corner shop on Portobello Road. They start a band that afternoon. They call themselves the Slits. Within a year Viv Albertine and Tessa Pollitt have replaced the original lineup.',
      'They tour with the Clash on the White Riot Tour in May 1977. Ari is fifteen. She wears her underwear over her trousers onstage. She invents a way of singing that is dub and child and shriek at once. There is no precedent for it because there has never been an all-woman punk band before. They are first.',
      'It takes them three years to get the record made. Cut comes out in 1979 with a cover that puts the three of them naked and muddy in a back garden in Surrey. The Slits do not look like a band. They look like something that escaped.',
    ],
  },
  {
    slug: 'debbie-harry-playboy-bunny',
    title: 'Before Blondie, a Bunny Suit',
    year: 1968,
    subject: ['Debbie Harry'],
    body: [
      'Debbie Harry is in her early twenties, just moved to New York from suburban New Jersey, and the rent is the rent. A friend of her parents is a member of the Playboy Club and tells her the tip money is real.',
      'She takes the gig. She wears the ears and the corset at the Playboy Club for eight or nine months. She mingles with executives and rock and roll lawyers and the men who run the city. She watches them up close. She files it away.',
      'When she fronts Blondie a decade later — first at Max\'s Kansas City, then at CBGB, then on Top of the Pops — the bombshell pose she puts on for "Heart of Glass" and "Atomic" is a costume she already knows the dimensions of.',
      'She had been the joke and decided to be the punchline instead. Every photograph of Debbie Harry from 1977 onward is also, somewhere underneath, the photograph of a Playboy Bunny who learned the room.',
    ],
  },
  {
    slug: 'girls-to-the-front',
    title: 'Kathleen Hanna Clears the Front Row',
    year: 1991,
    subject: ['Kathleen Hanna', 'Bikini Kill'],
    body: [
      'Bikini Kill forms in Olympia, Washington in October 1990 — Kathleen Hanna on vocals, Tobi Vail on drums, Kathi Wilcox on bass, Billy Karren on guitar. They start touring in 1991. They are playing all-ages basements and VFW halls.',
      'At every show, the same thing happens. Boys mosh in front. The girls who came to see a girl band get shoved to the back wall. Hanna stops songs. She stops songs and asks the boys to step aside and she calls every girl in the room up to the stage.',
      'Girls to the front. That is the line. It is not a metaphor. It is a stage direction repeated at every show for years.',
      'By 1992 it is a phrase printed on flyers and in zines from D.C. to Portland. By 1993 it is a movement. The Riot Grrrl Manifesto runs in the second issue of the Bikini Kill zine: BECAUSE we are angry at a society that tells us Girl = Dumb. The Xerox machines in Olympia and Washington, D.C. do not stop.',
    ],
  },
  {
    slug: 'kurt-smells-like-teen-spirit',
    title: 'Kathleen Spray-Paints a Song Title',
    year: 1990,
    subject: ['Kathleen Hanna', 'Kurt Cobain', 'Tobi Vail'],
    body: [
      'Olympia. 1990. Kathleen Hanna and Kurt Cobain are friends. Cobain is dating Tobi Vail, Hanna\'s bandmate. The four of them spend nights drinking Canadian Club and arguing about anarchism and Reagan-era abortion law.',
      'One night Hanna and Cobain decide on what Hanna later called "a little public service." A teen pregnancy crisis center has opened in town. They go after hours and graffiti the walls. Hanna writes Fake abortion clinic, everyone. Cobain, in red, writes God is gay.',
      'They go back to Cobain\'s place. Earlier that day Hanna and Tobi had been laughing in a grocery store about a deodorant called Teen Spirit — a brand Tobi Vail wore. Hanna picks up the spray can again and writes on Cobain\'s wall: Kurt smells like Teen Spirit.',
      'Six months later Cobain calls her up. "Do you remember that thing you wrote on my wall?" he says. "It\'s actually quite cool, and I want to use it." He thought it meant revolution. Nirvana released Nevermind in September 1991. Hanna had named the biggest rock song of the decade and never seen a deodorant stick.',
    ],
  },
  {
    slug: 'courtney-love-throws-compact',
    title: 'Courtney Love Pelts Madonna',
    year: 1995,
    subject: ['Courtney Love', 'Madonna', 'Kurt Loder'],
    body: [
      'September 7, 1995. Radio City Music Hall. MTV Video Music Awards. Kurt Loder is on a small platform outside the venue interviewing Madonna live. Hole has played the show.',
      'Below the platform, on the sidewalk, Courtney Love is in a slip dress with a purse full of makeup compacts. She starts throwing them. Compact after compact, up at the platform, at Madonna and at Loder.',
      'Madonna leans into Loder\'s mic. "Courtney Love is in dire need of attention right now," she says, "please do not invite her up here." Loder invites her up anyway. For the next four excruciating minutes Love is on the platform and Madonna is trying to leave it, and they discuss shoes and Dennis Miller and Alanis Morissette while Loder declines to moderate.',
      'Madonna\'s publicist eventually arrives and removes her. Air kisses are exchanged. Twenty years later Rolling Stone will call it the cringe-iest moment in MTV history. Courtney Love had pelted the queen of pop with a purseful of mirrors and gotten away with it on live television.',
    ],
  },
  {
    slug: 'karen-o-mercury-lounge-first-show',
    title: 'Karen O Plays Her First Show',
    year: 2000,
    subject: ['Karen O', 'Nick Zinner', 'Brian Chase'],
    body: [
      'September 25, 2000. Mercury Lounge, the Lower East Side. The Yeah Yeah Yeahs have been invited to open for the White Stripes on twenty-four hours\' notice. They have no drummer.',
      'Karen Orzolek calls Brian Chase, a kid she knows from Oberlin. He says yes. He learns the songs in an afternoon. The band has existed in this configuration for one day when they walk onstage at the Mercury and play four songs in eighteen minutes.',
      'Karen O is in a torn dress. She is twenty-one. She spits beer. She hooks a microphone cable around her neck. By the third song the room understands that the New York rock revival the press has been threatening for two years has just arrived in a different person than they expected.',
      'Jack and Meg watch from the wings. A year later the Yeah Yeah Yeahs self-release their first EP. Two years later it is reissued by Wichita and Touch and Go. Three years later Fever to Tell is in every record store in the world. None of that happens if Brian Chase says no on September 24.',
    ],
  },
  {
    slug: 'sleater-kinney-dig-me-out',
    title: 'Eight Days in a Seattle Basement',
    year: 1996,
    subject: ['Corin Tucker', 'Carrie Brownstein', 'Janet Weiss'],
    body: [
      'December 1996. Sleater-Kinney has just kicked out their drummer. They have a new one — Janet Weiss, on loan from Quasi — who has been in the band for a month. They have ten days of studio time booked with John Goodmanson at a place in Seattle called John and Stu\'s Place.',
      'Call the Doctor, the album before this, took four days. This one is going to take eight. That is the riot grrrl equivalent of major-label luxury, and Kill Rock Stars is paying for it.',
      'They cut the record live. Corin Tucker\'s vibrato is doing things no rock vocalist has done since Buffy Sainte-Marie. Carrie Brownstein\'s second guitar is locked into Tucker\'s lead like a long argument neither of them is willing to lose. Weiss, brand new, plays as if she has been there for years.',
      'Dig Me Out comes out April 8, 1997. It is the album Greil Marcus and Rob Sheffield are going to spend the next twenty years writing about. Janet Weiss stays in the band for twenty-three years.',
    ],
  },
  {
    slug: 'raincoats-lola-cobain',
    title: 'Kurt Cobain Writes the Liner Notes',
    year: 1993,
    subject: ['The Raincoats', 'Kurt Cobain'],
    body: [
      'The Raincoats made one self-titled album in 1979 on Rough Trade. Ana da Silva and Gina Birch sang. Vicky Aspinall played a violin that sounded like a saw. They covered the Kinks\' "Lola" and made it sound like nothing the Kinks had ever imagined.',
      'The album went out of print. The Raincoats broke up. Most of the world forgot about them. Kurt Cobain did not.',
      'In 1993, when Rough Trade reissues the Raincoats on CD, Cobain writes the liner notes. He describes walking into a shop in London looking for da Silva. He describes finding her. He describes being given tea. He describes feeling, listening to the album, that he had finally found something that matched what he heard in his own head.',
      'The liner notes — and a similar passage Cobain had already written for the Nirvana compilation Incesticide — drag the Raincoats back into print and onto stages. Ana and Gina tour again. The band is still playing in 2026. A man who would die a year later gave them a second career by writing a paragraph.',
    ],
  },
  {
    slug: 'patti-smith-nobel-2016',
    title: 'Patti Smith Forgets a Line for Bob',
    year: 2016,
    subject: ['Patti Smith'],
    body: [
      'December 10, 2016. Stockholm. The Nobel Prize ceremony. Bob Dylan has won the Literature prize and refused to come. Patti Smith has agreed to sing in his place. She picks "A Hard Rain\'s A-Gonna Fall." She is sixty-nine years old. She has been singing in public for forty-five years.',
      'She gets to the second verse. "I saw a newborn baby with wild wolves all around it." She stops. She has forgotten the next line. The orchestra is still playing. The King of Sweden is in the front row.',
      '"I\'m sorry. I apologize, I\'m so nervous," she says. The room applauds. She picks the line back up and finishes the song.',
      'She wrote about it afterward in The New Yorker. She said she had not failed Bob Dylan, exactly. She had simply, for a second, in front of the world, become the small girl from South Jersey who used to listen to the song. That, she wrote, was what Dylan\'s lyrics had always been for. They made the small girl come back.',
    ],
  },
  {
    slug: 'brody-dalle-sourpuss',
    title: 'A Sixteen-Year-Old Meets Tim Armstrong',
    year: 1995,
    subject: ['Brody Dalle', 'Tim Armstrong'],
    body: [
      'Brody Mai Armstrong — born Bree Joanna Alice Robinson in Melbourne in 1979 — picks up a guitar at thirteen. By fifteen she is fronting a band called Sourpuss. They get on the bill at Summersault, a touring Australian festival, in early 1995.',
      'Tim Armstrong of Rancid is on that tour. He is thirty years old. They meet. They start writing letters across the Pacific. They get engaged in 1997, shortly after she turns eighteen, and she moves to California and changes her name.',
      'The Distillers form in Los Angeles in 1998. By Sing Sing Death House in 2002 and Coral Fang in 2003, Brody Dalle is the only woman fronting a hardcore band on a major-label rock station in America.',
      'The marriage ends in 2003. The voice does not. Dalle\'s scream — that nicotine, that distance — was the thing every guitar-band girl in 2003 was trying to figure out how to do.',
    ],
  },
  {
    slug: 'riot-grrrl-manifesto-xeroxed',
    title: 'The Manifesto Goes Through a Xerox Machine',
    year: 1991,
    subject: ['Kathleen Hanna', 'Tobi Vail', 'Kathi Wilcox'],
    body: [
      'Olympia, Washington. 1991. Kathleen Hanna is twenty-two. Tobi Vail is twenty-one. Kathi Wilcox is twenty. The three of them are in Bikini Kill together and they are all writing.',
      'They make a zine, also called Bikini Kill. The first issue collects essays, drawings, and the lyrics to the songs they have written. The second issue, that summer, contains a one-page manifesto that begins: BECAUSE we are angry at a society that tells us Girl = Dumb, Girl = Bad, Girl = Weak.',
      'It runs for thirteen "becauses." It ends with: BECAUSE we hate capitalism in all its forms and see our main goal as sharing information and staying alive.',
      'They Xerox it. They hand it out at shows. Other women take it home and Xerox it again. By 1992 there are riot grrrl chapters in Washington, D.C., Portland, New York. The manifesto is on bulletin boards in college towns Kathleen Hanna has never been to. A page of typed text, run through a copier, did what a record label could not.',
    ],
  },
];

export default stories;
