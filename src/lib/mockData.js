export const authors = {
  caroline: {
    name: "Caroline Casey",
    avatar: "images/author-caroline.jpg",
    bio: "Caroline Casey is an award-winning social activist and founder of The Valuable 500, a global movement aimed at getting 500 companies to commit to disability inclusion.",
    twitter: "@carolinecasey",
    followers: "12.4K",
  },
  lucy: {
    name: "Lucy Hiddleston",
    avatar: "",
    bio: "Lucy Hiddleston covers culture, technology and viral trends for NBC News.",
    twitter: "@lucyhiddleston",
    followers: "8.1K",
  },
  staff: {
    name: "NBC News Staff",
    avatar: "",
    bio: "The NBC News team brings you the stories that matter most, every day.",
    twitter: "@nbcnews",
    followers: "40.2K",
  },
};

const relatedIds = ["10", "11", "12", "13"];
const recommendedIds = ["9", "4", "6"];
const sharedLinks = { relatedIds, recommendedIds, basedOnLikeId: "14" };

export const navLinks = [
  { id: 1, title: "Corona Updates", isLive: true },
  { id: 2, title: "Politics" },
  { id: 3, title: "Business" },
  { id: 4, title: "Sports" },
  { id: 5, title: "World" },
  { id: 6, title: "Travel" },
  { id: 7, title: "Podcasts" },
];

export const breakingNews = {
  label: "Breaking News",
  text: "Kanye West says he’s running for president in 2020.",
};

export const heroStory = {
  id: "1",
  image: "images/hero.jpg",
  label: "Trending",
  title:
    "Cake meme reflects coronavirus absurdity in a world where nothing is what it seems",
  description:
    'Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme: "Is this real or is this cake?"',
  time: "2 hours ago",
  author: "Lucy Hiddleston",
  readTime: "4min read",
  likes: 28,
  shares: 72,
  comments: 9,
  tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
  authorProfile: authors.lucy,
  ...sharedLinks,
  content: [
    {
      type: "paragraph",
      text: "Earlier this month, a viral video showed cakes that look almost exactly like everyday objects, from lemons to sandwiches. Social media users were quick to share it.",
    },
    {
      type: "paragraph",
      text: "Soon people started asking whether the posts they saw were real or whether they were cakes. The joke spread faster than anyone expected.",
    },
    { type: "heading", text: "Why it resonated" },
    {
      type: "paragraph",
      text: "Many readers said the meme captured how hard it has become to know what is real during a difficult year, and that a little humor felt like a welcome break.",
    },
  ],
};

export const latestStories = [
  {
    id: "3",
    image: "images/john-lewis.jpg",
    title:
      "John Lewis to make final journey across Edmund Pettus Bridge in procession",
    description:
      "The body of the late US Rep. John Lewis will make the final journey across the famous bridge in Selma, Alabama, where he helped lead a march for voting rights in 1965.",
    time: "2 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    comments: 14,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.lucy,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Officials announced the route for the final procession, which will cross the same bridge where John Lewis once led a march for voting rights.",
      },
      {
        type: "paragraph",
        text: "Residents were invited to line the streets, and many planned to attend in person to pay their respects.",
      },
    ],
  },
  {
    id: "2",
    image: "images/caisson.jpg",
    heroImage: "images/detail-hero.jpg",
    title:
      "John Lewis, civil rights giant, crosses infamous Selma bridge one final time",
    description:
      "Solemn crowds watch as Lewis, who died earlier this month at the age of 80, is borne by caisson over Edmund Pettus Bridge.",
    time: "4 hours ago",
    author: "Caroline Casey",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    comments: 21,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.caroline,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Crowds gathered quietly near the Edmund Pettus Bridge in Selma, Alabama, to watch the casket of Rep. John Lewis cross the span that became a symbol of the voting rights movement.",
      },
      {
        type: "image",
        src: "images/detail-crowd.jpg",
        caption:
          "Mourners gather outside a historic church as the procession begins.",
        source: "Foto: NBC News (mock)",
      },
      {
        type: "paragraph",
        text: "A horse-drawn caisson, a traditional carriage used to honor public figures, carried the casket along the route. People on the sidewalks stood with their hands over their hearts.",
      },
      {
        type: "paragraph",
        text: "Lewis, who died earlier this month at the age of 80, spent decades fighting for equal rights. His final crossing of the bridge, where he was beaten during a march in 1965, was one of the most emotional moments of the day.",
      },
      { type: "heading", text: "A final march across the bridge" },
      {
        type: "paragraph",
        text: "Family members walked behind the carriage, along with fellow activists wearing shirts that read “Good Trouble,” a phrase Lewis often used to describe peaceful protest.",
      },
      {
        type: "image",
        src: "images/detail-horse.jpg",
        caption:
          "The casket moves across the bridge during a memorial service in Selma, Alabama.",
        source: "Foto: NBC News (mock)",
      },
      {
        type: "paragraph",
        text: "Lewis suffered a fractured skull during the 1965 march, known as Bloody Sunday. News coverage of the violence helped push Congress to pass the Voting Rights Act later that same year.",
      },
      {
        type: "paragraph",
        text: "Long before Selma, Lewis was already a leading voice in the struggle for equal rights, and he had been arrested several times for his activism.",
      },
      {
        type: "quote",
        text: "His courage changed the country, and his legacy will keep guiding people who fight for fairness.",
        author: "A longtime colleague (mock quote)",
      },
    ],
  },
  {
    id: "4",
    image: "images/storm.jpg",
    tag: "WEATHER",
    title: "Tornado and tide warnings as Storm Hanna lashes Texas",
    description:
      "Forecasters warn of tornadoes and coastal flooding as the storm moves across southern Texas this week.",
    time: "5 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    comments: 5,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.lucy,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Forecasters warned of tornadoes and coastal flooding as Storm Hanna moved across southern Texas this week.",
      },
      {
        type: "paragraph",
        text: "Emergency managers opened shelters and urged residents to avoid driving through flooded roads. Power crews were placed on standby in case of outages.",
      },
    ],
  },
  {
    id: "5",
    image: "images/apple.jpg",
    title:
      "20 Years Ago, Steve Jobs Built the ‘Coolest Computer Ever.’ It Bombed",
    description:
      "This month marks the 20th anniversary of the Power Mac G4 Cube, which debuted July 19, 2000. It also marks the 19th anniversary of Apple’s announcement that it was putting the Cube on ice.",
    time: "12 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    comments: 7,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.lucy,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "This month marks the 20th anniversary of the Power Mac G4 Cube, a bold design that debuted in July 2000.",
      },
      {
        type: "paragraph",
        text: "Despite strong reviews for its look, the machine was expensive and sold poorly, and Apple soon moved on to new designs.",
      },
    ],
  },
];

export const editorPicks = [
  {
    id: "6",
    tag: "CORONA",
    image: "images/vaccine.jpg",
    title:
      "Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?",
    description:
      "The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus – and so is immune.",
    time: "1 day ago",
    author: "NBC News Staff",
    readTime: "5min read",
    likes: 28,
    shares: 72,
    comments: 6,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.staff,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Health authorities are testing blood samples to find out how many people have already been infected with the coronavirus.",
      },
      {
        type: "paragraph",
        text: "Experts say the results could help shape future decisions, but antibody tests are not always fully reliable and need careful interpretation.",
      },
    ],
  },
  {
    id: "7",
    image: "images/eastbengal.jpg",
    title:
      "Making a mark in Asia: East Bengal’s 2003 Asean Cup win – a defining moment for Indian club football",
    description:
      "Beating some of the finest teams from South Asia, East Bengal became the first Indian club to win an officially recognised Asian football tournament.",
    time: "1 day ago",
    author: "NBC News Staff",
    readTime: "5min read",
    likes: 28,
    shares: 72,
    comments: 3,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.staff,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "East Bengal became the first Indian club to win an officially recognised Asian football tournament in 2003.",
      },
      {
        type: "paragraph",
        text: "Their victory was celebrated across the city, and fans still remember the team’s run through some of the strongest sides in South Asia.",
      },
    ],
  },
];

export const liveStory = {
  id: "8",
  image: "images/coach.jpg",
  title: "Beloved Arizona coach loses battle with coronavirus",
  description:
    "Friends and former players remember a coach who taught generations of students the value of hard work and kindness.",
  time: "3 hours ago",
  author: "NBC News Staff",
  readTime: "3min read",
  likes: 19,
  shares: 40,
  comments: 4,
  tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
  authorProfile: authors.staff,
  ...sharedLinks,
  content: [
    {
      type: "paragraph",
      text: "Friends and former players remember a coach who taught generations of students the value of hard work and kindness.",
    },
    {
      type: "paragraph",
      text: "Known for his patience on and off the field, he often reminded young athletes that teamwork matters more than trophies.",
    },
  ],
};

export const extraArticles = [
  {
    id: "9",
    image: "images/recommend-millions.jpg",
    title:
      "Millions rely on emergency pandemic benefits for rent, food, and medicine. Now, that lifeline could disappear.",
    description:
      "Local groups warn that many families could lose support if the emergency benefits are not extended.",
    time: "5 hours ago",
    author: "Caroline Casey",
    readTime: "6min read",
    likes: 21,
    shares: 35,
    comments: 8,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.caroline,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Millions of households have relied on emergency pandemic benefits to pay for rent, food, and medicine.",
      },
      {
        type: "paragraph",
        text: "Without an extension, many families could lose that support, and local groups warn of a sharp rise in hardship.",
      },
    ],
  },
  {
    id: "10",
    image: "images/topic-india.jpg",
    title: "India & Its Magnetic Charm For Foreign Investments",
    description:
      "Investors are looking at India again, attracted by a large market and a growing technology sector.",
    time: "6 hours ago",
    author: "NBC News Staff",
    readTime: "5min read",
    likes: 28,
    shares: 72,
    comments: 2,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.staff,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Foreign investors are looking at India again, attracted by a large market and a growing technology sector.",
      },
      {
        type: "paragraph",
        text: "Analysts say the country still faces challenges, including regulation and infrastructure, but the long-term outlook remains strong.",
      },
    ],
  },
  {
    id: "11",
    image: "images/topic-hill.jpg",
    title:
      "Hill Republicans begin jockeying for power in a possible post-Trump world",
    description:
      "Some lawmakers are already positioning themselves as future leaders of the party.",
    time: "7 hours ago",
    author: "Lucy Hiddleston",
    readTime: "4min read",
    likes: 28,
    shares: 72,
    comments: 4,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.lucy,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Senior Republicans in Congress are already discussing their plans for the next election cycle.",
      },
      {
        type: "paragraph",
        text: "Some lawmakers are positioning themselves as future leaders, while others say the party must first agree on a clear message.",
      },
    ],
  },
  {
    id: "12",
    image: "images/topic-twitter.jpg",
    title: "Twitter 'walkout' planned after rapper's anti-Semitic tirade",
    description:
      "Employees and users are calling for a walkout after an offensive post spread widely online.",
    time: "8 hours ago",
    author: "NBC News Staff",
    readTime: "3min read",
    likes: 28,
    shares: 72,
    comments: 11,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.staff,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Employees and users have called for a walkout after a rapper posted an offensive message that spread widely online.",
      },
      {
        type: "paragraph",
        text: "The company said it was reviewing the posts and the platform’s rules on hate speech.",
      },
    ],
  },
  {
    id: "13",
    image: "images/topic-fleetwood.jpg",
    title: "Fleetwood Mac co-founder Peter Green dies at 73",
    description:
      "The guitarist helped shape the sound of British blues rock during his years with the band.",
    time: "9 hours ago",
    author: "Lucy Hiddleston",
    readTime: "3min read",
    likes: 28,
    shares: 72,
    comments: 2,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.lucy,
    ...sharedLinks,
    content: [
      {
        type: "paragraph",
        text: "Peter Green, the guitarist and co-founder of Fleetwood Mac, has died at the age of 73.",
      },
      {
        type: "paragraph",
        text: "His early work with the band helped shape the sound of British blues rock and influenced generations of musicians.",
      },
    ],
  },
  {
    id: "14",
    image: "images/topic-ada.jpg",
    title:
      "The ADA is turning 30. It's time that it included digital accessibility.",
    description:
      "Advocates say many websites and apps still leave out people with disabilities.",
    time: "10 hours ago",
    author: "Caroline Casey",
    readTime: "5min read",
    likes: 28,
    shares: 72,
    comments: 15,
    tags: ["WATCH", "TRENDING", "LIVE", "FREEBIE"],
    authorProfile: authors.caroline,
    ...sharedLinks,
    basedOnLikeId: "13", // özü ilə üst-üstə düşməsin
    content: [
      {
        type: "paragraph",
        text: "Thirty years after the Americans with Disabilities Act became law, advocates say the internet and mobile apps still exclude many people.",
      },
      {
        type: "paragraph",
        text: "They argue that digital accessibility should be a basic requirement for every new website and app.",
      },
    ],
  },
];

const allArticles = [
  heroStory,
  ...latestStories,
  ...editorPicks,
  liveStory,
  ...extraArticles,
];

export function getArticleById(id) {
  return allArticles.find((article) => article.id === String(id));
}

export function getArticlesByIds(ids = []) {
  return ids.map((id) => getArticleById(id)).filter(Boolean);
}

export const footerLogo = "images/footer-logo.png";

export const footerLegalLinks = [
  { id: 1, title: "Privacy Policy" },
  { id: 2, title: "Do not sell my personal info" },
  { id: 3, title: "Terms of Service" },
  { id: 4, title: "nbcnews.com Site Map" },
];

export const footerCompanyLinks = [
  { id: 1, title: "About" },
  { id: 2, title: "Contact" },
  { id: 3, title: "Careers" },
  { id: 4, title: "Coupons" },
];

export const socialLinks = [
  { id: 1, name: "RSS", icon: "icons/rss.svg" },
  { id: 2, name: "Twitter", icon: "icons/twitter.svg" },
  { id: 3, name: "Reddit", icon: "icons/reddit.svg" },
  { id: 4, name: "Facebook", icon: "icons/facebook.svg" },
];

export const copyrightText = "© 2026 | NBC NEWS";
