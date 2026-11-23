export type WeeklyEvent = {
  day: string;
  title: string;
  description: string;
};

export type CornerPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export const events: WeeklyEvent[] = [
  { day: "Mon", title: "Slow Mondays", description: "Laptops off until 10. Conversation on." },
  { day: "Thu", title: "Latte Art Throwdown", description: "Pour, vote and win your coffee for the week." },
  { day: "Sat", title: "Cupping Club", description: "Taste three origins side by side with our roaster." },
];

export const cornerPhotos: CornerPhoto[] = [
  { id: "latte-art", src: "corner-1.jpg", alt: "Barista pouring latte art", caption: "latte art, every cup" },
  { id: "window-seat", src: "corner-2.jpg", alt: "Window seat with a small table", caption: "the window seat. it's taken." },
  { id: "dog", src: "corner-3.jpg", alt: "Golden retriever sitting outside the cafe", caption: "good dogs get pup cups" },
  { id: "oven", src: "corner-4.jpg", alt: "Tray of fresh pastries on the counter", caption: "out of the oven at 7am" },
  { id: "friends", src: "corner-5.jpg", alt: "Friends sharing coffees and cake", caption: "slow mornings, loud laughs" },
];
