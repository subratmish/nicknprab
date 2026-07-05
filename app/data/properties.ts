export const properties = [
  {
    slug: "12-oceanfront-terrace-vaucluse",
    images: [
      "/images/forsale-vaucluse-photo.jpg",
      "/images/forsale-rosepark-photo.jpg",
      "/images/forsale-northgate-photo.jpg",
    ],
    price: "$4,250,000",
    address: "12 Oceanfront Terrace, Vaucluse",
    specs: ["5", "4", "3", "820m2"],
    description:
      "A private coastal residence composed for generous family living, elegant entertaining, and uninterrupted connection to light. Expansive glazing frames the outlook while a restrained interior palette keeps the focus on volume, proportion, and natural texture.",
    features: [
      "5 bedrooms including a private principal suite",
      "4 bathrooms with refined stone finishes",
      "3 secure car spaces",
      "820m2 landholding with multiple outdoor zones",
      "Open-plan kitchen, dining, and living spaces",
      "Elevated outlook with premium entertaining flow",
    ],
  },
  {
    slug: "204-88-loft-chambers-surry-hills",
    images: [
      "/images/forsale-loft-photo.jpg",
      "/images/forsale-cbd-photo.jpg",
      "/images/forsale-vaucluse-photo.jpg",
    ],
    price: "Contact Agent",
    address: "204/88 Loft Chambers, Surry Hills",
    specs: ["2", "2", "1"],
    description:
      "A polished warehouse-style apartment balancing industrial scale with highly liveable detail. High ceilings, broad glazing, and a quiet material palette create a calm city retreat moments from dining, retail, and transport.",
    features: [
      "2 bedrooms with excellent natural light",
      "2 bathrooms",
      "1 secure car space",
      "Loft-inspired living with generous ceiling height",
      "Contemporary kitchen with integrated storage",
      "Walkable inner-city position",
    ],
  },
  {
    slug: "45-kensington-road-rose-park",
    images: [
      "/images/forsale-rosepark-photo.jpg",
      "/images/forsale-northgate-photo.jpg",
      "/images/forsale-loft-photo.jpg",
    ],
    price: "$2,890,000",
    address: "45 Kensington Road, Rose Park",
    specs: ["4", "3", "2"],
    description:
      "A character residence reworked with contemporary restraint, offering substantial accommodation and a graceful relationship to the garden. Formal and informal living areas give the home a rare sense of flexibility.",
    features: [
      "4 bedrooms across a flexible family plan",
      "3 bathrooms",
      "2 car spaces",
      "Period detailing with contemporary upgrades",
      "Established garden outlooks",
      "Multiple living and entertaining zones",
    ],
  },
  {
    slug: "88-12-skyscraper-way-cbd",
    images: [
      "/images/forsale-cbd-photo.jpg",
      "/images/forsale-loft-photo.jpg",
      "/images/forsale-rosepark-photo.jpg",
    ],
    price: "$1,650,000",
    address: "88/12 Skyscraper Way, CBD",
    specs: ["3", "2", "2"],
    description:
      "A sky-level residence designed for clarity, convenience, and city outlooks. The layout separates restful bedroom spaces from the main living zone, making the home equally suited to everyday living and lock-and-leave flexibility.",
    features: [
      "3 bedrooms",
      "2 bathrooms",
      "2 secure car spaces",
      "Open living zone with city outlook",
      "Resident amenities and secure access",
      "Central position close to business and lifestyle precincts",
    ],
  },
  {
    slug: "5-willow-avenue-northgate",
    images: [
      "/images/forsale-northgate-photo.jpg",
      "/images/forsale-vaucluse-photo.jpg",
      "/images/forsale-cbd-photo.jpg",
    ],
    price: "$985,000",
    address: "5 Willow Avenue, Northgate",
    specs: ["4", "2", "2"],
    description:
      "A calm, contemporary family home with a practical footprint and warm indoor-outdoor flow. Generous living spaces, balanced bedroom accommodation, and low-maintenance landscaping make this an easy long-term address.",
    features: [
      "4 bedrooms",
      "2 bathrooms",
      "2 car spaces",
      "Open-plan living and dining",
      "Low-maintenance outdoor entertaining area",
      "Quiet residential setting",
    ],
  },
];

export type Property = (typeof properties)[number];
