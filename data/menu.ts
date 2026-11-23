export type CardTheme = "forest" | "mustard" | "sage";

export type DrinkArt = "latte-saucer" | "cup-green" | "glass-mocha" | "glass-iced" | "glass-latte" | "cup-pistachio" | "nata" | "pao" | "croissant";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  notes: string[];
  image: string;
  imageAlt: string;
  /** Illustration rendered while the photo is missing from /public/images */
  art: DrinkArt;
  theme: CardTheme;
  sticker?: string;
};

export type MenuCategory = {
  id: "hot" | "iced" | "bakes";
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "hot",
    label: "Hot",
    items: [
      {
        id: "ravo-latte",
        name: "The Ravo Latte",
        description: "A double shot of our Brasil house roast, velvety milk and a whisper of raw cane sugar.",
        notes: ["Cocoa", "Caramel"],
        image: "lineup-latte.png",
        imageAlt: "Latte with heart latte art in a cream cup and saucer",
        art: "latte-saucer",
        theme: "forest",
        sticker: "house fave",
      },
      {
        id: "flat-white",
        name: "Flat White",
        description: "Two ristretto shots under silky microfoam, served in our green cup.",
        notes: ["Hazelnut", "Milk chocolate"],
        image: "lineup-flatwhite.png",
        imageAlt: "Flat white with a heart in a green ceramic cup",
        art: "cup-green",
        theme: "mustard",
      },
      {
        id: "dark-mocha",
        name: "Dark Mocha",
        description: "Espresso, 70% dark chocolate and steamed milk with a dusting of cocoa.",
        notes: ["Dark chocolate", "Toffee"],
        image: "lineup-mocha.png",
        imageAlt: "Layered dark mocha in a double-walled glass dusted with cocoa",
        art: "glass-mocha",
        theme: "sage",
      },
    ],
  },
  {
    id: "iced",
    label: "Iced",
    items: [
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Steeped for 18 hours and poured over big, slow-melting ice.",
        notes: ["Black cherry", "Cocoa"],
        image: "mood-coldbrew.png",
        imageAlt: "Cold brew over ice in a tall glass",
        art: "glass-iced",
        theme: "forest",
        sticker: "house fave",
      },
      {
        id: "iced-latte",
        name: "Iced Latte",
        description: "Double shot of Brasil over ice with cold milk. Oat on the house.",
        notes: ["Caramel", "Hazelnut"],
        image: "lineup-iced-latte.png",
        imageAlt: "Iced latte with milk swirling through espresso",
        art: "glass-latte",
        theme: "mustard",
      },
      {
        id: "pistachio-cloud",
        name: "Pistachio Cloud",
        description: "Pistachio cream, espresso and a cold foam cloud with crushed nuts.",
        notes: ["Pistachio", "White chocolate"],
        image: "lineup-pistachio.png",
        imageAlt: "Iced pistachio latte topped with cold foam",
        art: "cup-pistachio",
        theme: "sage",
      },
    ],
  },
  {
    id: "bakes",
    label: "Bakes",
    items: [
      {
        id: "pastel-de-nata",
        name: "Pastel de Nata",
        description: "Flaky, blistered and warm from our oven at 7am. Gone by 9.",
        notes: ["Custard", "Cinnamon"],
        image: "pastel-nata.png",
        imageAlt: "Golden pastel de nata with caramelised top",
        art: "nata",
        theme: "forest",
        sticker: "house fave",
      },
      {
        id: "pao-de-queijo",
        name: "Pão de Queijo",
        description: "Little Brazilian cheese breads, crisp outside and chewy inside.",
        notes: ["Cheese", "Gluten free"],
        image: "lineup-paodequeijo.png",
        imageAlt: "Basket of warm pão de queijo",
        art: "pao",
        theme: "mustard",
      },
      {
        id: "almond-croissant",
        name: "Almond Croissant",
        description: "Twice-baked butter croissant with frangipane and toasted almonds.",
        notes: ["Almond", "Butter"],
        image: "lineup-croissant.png",
        imageAlt: "Almond croissant dusted with icing sugar",
        art: "croissant",
        theme: "sage",
      },
    ],
  },
];
