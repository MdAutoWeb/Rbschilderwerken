/** Handmatig gecureerde Google-reviews */
export type Review = {
  name: string;
  /** Korte quote, 1–3 zinnen */
  text: string;
  stars: 5 | 4 | 3;
};

export const REVIEWS: Review[] = [
  {
    name: "Vic De Roo",
    text: "Rufino is een man van zijn woord. Correcte prijs, heldere communicatie. Denkt mee met de klant en is transparant. Tot op de puntjes afgewerkt! Aanrader.",
    stars: 5,
  },
];
