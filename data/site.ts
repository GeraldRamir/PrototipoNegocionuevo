export type NavLink = { label: string; href: string };

export type HoursRow = {
  label: string;
  /** 0 = Sunday … 6 = Saturday */
  days: number[];
  open: string;
  close: string;
};

export const site = {
  name: "Ravo Kafe",
  timeZone: "Europe/London",
  logoLabel: "Ravo Kafe — home",

  nav: {
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Moods", href: "#moods" },
      { label: "Beans", href: "#beans" },
      { label: "The corner", href: "#corner" },
      { label: "Visit", href: "#visit" },
    ] satisfies NavLink[],
    openNow: "Open now",
    closedNow: "Closed now",
    orderCta: "Order ahead",
    orderHref: "#menu",
    menuOpenLabel: "Open menu",
    menuCloseLabel: "Close menu",
    cartCountLabel: "items in your order",
  },

  hours: [
    { label: "Mon–Fri", days: [1, 2, 3, 4, 5], open: "7:00", close: "18:00" },
    { label: "Saturday", days: [6], open: "8:00", close: "17:00" },
    { label: "Sunday", days: [0], open: "8:00", close: "15:00" },
  ] satisfies HoursRow[],

  contact: {
    phone: "020 7946 0182",
    phoneHref: "tel:+442079460182",
    email: "hello@ravokafe.com",
    addressLines: ["27 Larkspur Lane", "Hackney, London E8 2PL"],
    mapsHref: "https://www.google.com/maps/search/?api=1&query=27+Larkspur+Lane+Hackney+London+E8+2PL",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },

  hero: {
    badge: "Small-batch coffee and bakes",
    titleLines: ["Seriously", "good coffee"],
    script: "Not so serious about the rest.",
    body: "Small-batch roasts, flaky bakes and a window seat with your name on it. Pull up a chair, we'll take it from here.",
    primaryCta: { label: "Order ahead", href: "#menu" },
    secondaryCta: { label: "Find the cafe", href: "#visit" },
    features: ["Roasted every week", "Oat milk, no upcharge", "Dogs welcome"],
    note: ["fresh at 7am,", "gone by 9."],
    sticker: "FRESH ROASTED • EVERY WEEK • ",
    images: {
      cup: { src: "hero-cup.png", alt: "Ravo Kafe takeaway cup in forest green with a cream lid" },
      nata: { src: "pastel-nata.png", alt: "Two golden pastéis de nata" },
      beans: ["bean-1.png", "bean-2.png", "bean-3.png", "bean-4.png"],
    },
  },

  ticker: {
    label: "What we serve",
    back: ["SMALL BATCH", "BIG MOOD", "ROASTED WEEKLY", "DOGS WELCOME", "OAT FRIENDLY"],
    front: ["FLAT WHITE", "PISTACHIO CLOUD", "COLD BREW", "PASTEL DE NATA", "PÃO DE QUEIJO", "OAT FRIENDLY"],
  },

  lineup: {
    eyebrow: "fresh off the bar",
    title: "The line-up",
    tabsLabel: "Menu category",
    addToOrder: "Add to order",
    addedToOrder: "Added!",
    footnote: "Oat, almond or soy? Always welcome, never extra. Ask us about allergens any time.",
  },

  versus: {
    eyebrow: "let's be honest",
    title: "Ravo vs. the usual",
    body: "Same caffeine, very different morning. Here's what changes when you walk through the green door.",
    us: { label: "Ravo", image: "cup-ravo.png", alt: "Ravo Kafe green cup" },
    them: { label: "The usual", image: "cup-generic.png", cupName: "Rachle?", alt: "Generic white takeaway cup with a cardboard sleeve and a misspelled name" },
    vs: "vs",
    rows: [
      { us: "Roasted this week", them: "Roasted, um, sometime?" },
      { us: "Every bag carries a Selo de Origem", them: "Beans from who knows where" },
      { us: "Oat, soy or almond at no extra charge", them: "Oat milk costs extra" },
      { us: "Pastries out of our oven at 7am", them: "Muffins in plastic sleeves" },
      { us: "We remember your order", them: "Your name, spelled creatively" },
    ],
  },

  moods: {
    eyebrow: "can't decide?",
    title: "What's your coffee mood?",
    body: "Tap how you feel today and we'll pour your match.",
    groupLabel: "Pick your mood",
    surprise: "Surprise me",
    sticker: "your match",
    moodPrefix: "Your mood:",
    cta: "Order this mood",
  },

  beans: {
    eyebrow: "take the beans home",
    title: "Every bag has a passport.",
    body: "Our Selo de Origem seal tells you where the beans grew, who grew them and the day we roasted them. No mystery beans. Ever.",
    originEyebrow: "Origin",
    originsLabel: "Choose an origin",
    intensityLabel: "Intensity",
    infoLabels: { tastes: "Tastes like", roast: "Roast", bestFor: "Best for" },
    grindLabel: "Grind",
    cta: "Add a bag",
    subscription: "Or get a fresh bag every two weeks",
    note: ["roast date on", "every single bag"],
    sticker: "SELO DE ORIGEM • SINGLE ORIGIN • ",
    bag: { src: "coffee-bag.png", alt: "Ravo Kafe coffee bag with the Selo de Origem seal" },
    bagSeal: "SELO DE ORIGEM",
  },

  corner: {
    eyebrow: "come for the coffee",
    title: "Stay for the corner.",
    body: "Latte art, slow mornings and a window seat worth racing for.",
    shuffle: "Shuffle the photos",
    eventsTitle: "What's on this week",
    instagramCta: "See this week's specials on Instagram",
  },

  visit: {
    eyebrow: "pull up a chair",
    title: "Find the green door.",
    body: "Look for the green shopfront on Larkspur Lane and follow the smell of warm pastel de nata.",
    addressLabel: "Address",
    hoursLabel: "Hours",
    directions: "Get directions",
    openUntil: "Open until",
    opensAt: "Opens",
    closedToday: "Closed today",
    cta: { label: "Order ahead", href: "#menu" },
    sticker: "KETTLE'S ON • COME ON IN • ",
    image: { src: "storefront.jpg", alt: "The green Ravo Kafe shopfront on Larkspur Lane" },
  },

  beanClub: {
    eyebrow: "psst, members only",
    title: "Join the Bean Club.",
    body: "A birthday coffee on us, first dibs on new roasts and zero spam. Pinky promise.",
    emailLabel: "Email address",
    placeholder: "you@example.com",
    cta: "Join the club",
    success: "You're in! ☕",
    error: "That email doesn't look quite right.",
  },

  footer: {
    explore: "Explore",
    sayHello: "Say hello",
    open: "Open",
    social: [
      { label: "Instagram", key: "instagram" },
    ],
    copyright: "© 2026 Ravo Kafe",
    tagline: "Brewed with care, served with a grin.",
    backToTop: "Back to top",
  },
} as const;

export type Site = typeof site;
