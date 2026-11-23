import type { DrinkArt } from "./menu";

export type Mood = {
  id: string;
  label: string;
  drink: string;
  description: string;
  notes: string[];
  image: string;
  imageAlt: string;
  art: DrinkArt;
};

export const moods: Mood[] = [
  {
    id: "half-asleep",
    label: "Half asleep",
    drink: "Cold Brew",
    description: "Steeped for 18 hours, so you don't have to try today.",
    notes: ["Black cherry", "Cocoa"],
    image: "mood-coldbrew.png",
    imageAlt: "Cold brew over ice in a glass",
    art: "glass-iced",
  },
  {
    id: "main-character",
    label: "Main character",
    drink: "Pistachio Cloud",
    description: "Pistachio cream, espresso and a foam cloud. Made for the spotlight.",
    notes: ["Pistachio", "White chocolate"],
    image: "lineup-pistachio.png",
    imageAlt: "Pistachio latte topped with cold foam",
    art: "cup-pistachio",
  },
  {
    id: "deep-focus",
    label: "Deep focus",
    drink: "Double Ristretto",
    description: "Two short, sweet shots. Inbox, meet your match.",
    notes: ["Dark chocolate", "Orange peel"],
    image: "lineup-mocha.png",
    imageAlt: "Short espresso in a glass",
    art: "glass-mocha",
  },
  {
    id: "need-a-hug",
    label: "Need a hug",
    drink: "The Ravo Latte",
    description: "Velvety milk, Brasil house roast and a whisper of cane sugar. Basically a hug.",
    notes: ["Cocoa", "Caramel"],
    image: "lineup-latte.png",
    imageAlt: "Latte with heart latte art",
    art: "latte-saucer",
  },
  {
    id: "feeling-fancy",
    label: "Feeling fancy",
    drink: "Flat White",
    description: "Ristretto under silky microfoam, served in our green cup. Pinky out.",
    notes: ["Hazelnut", "Milk chocolate"],
    image: "lineup-flatwhite.png",
    imageAlt: "Flat white in a green cup",
    art: "cup-green",
  },
  {
    id: "hangry",
    label: "Hangry",
    drink: "Nata & Flat White",
    description: "A warm pastel de nata and a flat white. Crisis averted.",
    notes: ["Custard", "Cinnamon"],
    image: "pastel-nata.png",
    imageAlt: "Pastel de nata",
    art: "nata",
  },
];
