export type Origin = {
  id: string;
  country: string;
  region: string;
  /** 1–5 */
  intensity: number;
  tastes: string;
  roast: string;
  bestFor: string;
  bagLine: string;
};

export const origins: Origin[] = [
  {
    id: "brasil",
    country: "Brasil",
    region: "Minas Gerais",
    intensity: 4,
    tastes: "Chocolate, hazelnut, brown sugar",
    roast: "Medium dark",
    bestFor: "Espresso and milk drinks",
    bagLine: "BRASIL · MINAS GERAIS · 250 G",
  },
  {
    id: "colombia",
    country: "Colombia",
    region: "Huila",
    intensity: 3,
    tastes: "Red apple, caramel, panela",
    roast: "Medium",
    bestFor: "Filter and flat whites",
    bagLine: "COLOMBIA · HUILA · 250 G",
  },
  {
    id: "ethiopia",
    country: "Ethiopia",
    region: "Yirgacheffe",
    intensity: 2,
    tastes: "Jasmine, bergamot, lemon",
    roast: "Light",
    bestFor: "Pour-over and cold brew",
    bagLine: "ETHIOPIA · YIRGACHEFFE · 250 G",
  },
];

export const grinds = ["Whole bean", "Espresso", "Filter", "Cafetière"] as const;
export const defaultGrind: (typeof grinds)[number] = "Espresso";
