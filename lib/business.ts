/** Centrale bedrijfsgegevens — ook voor privacy/cookies en schema */
export const BUSINESS = {
  name: "RB Schilderwerken",
  legalName: "RB Schilderwerken",
  vatNumber: "BE 0XXX.XXX.XXX",
  email: "rb.schilderwerkenn@gmail.com",
  phone: "+32 474 27 15 75",
  phoneTel: "+32474271575",
  address: {
    street: "Langepijpestraat 1",
    bus: "bus v009",
    postalCode: "8820",
    city: "Torhout",
    country: "België",
    full: "Langepijpestraat 1, bus v009, 8820 Torhout, België",
  },
  dpoEmail: "rb.schilderwerkenn@gmail.com",
  website: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rbschilderwerken.be",
} as const;
