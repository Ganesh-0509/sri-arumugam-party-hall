// Confirmed facts only. Anything not confirmed by the client directly is marked
// UNCONFIRMED and sourced from their public Instagram bio — verify before go-live.

export const venue = {
  name: "Sri Arumugam Party Hall",
  city: "Chennai",
  area: "Ponniammanmedu",
  addressLines: [
    "44, VPC Nagar 2nd St,",
    "V P Singh Nagar, Ponniammanmedu,",
    "Chennai, Tamil Nadu 600110",
  ],
  addressOneLine:
    "44, VPC Nagar 2nd St, V P Singh Nagar, Ponniammanmedu, Chennai, Tamil Nadu 600110",
  phone: "+91 98404 08447",
  phoneDial: "+919840408447",
  whatsappNumber: "919840408447",
  instagramHandle: "sriarumugampartyhall",
  instagramUrl: "https://www.instagram.com/sriarumugampartyhall/",
  mapsQuery:
    "Sri Arumugam Party Hall, 44 VPC Nagar 2nd St, V P Singh Nagar, Ponniammanmedu, Chennai, Tamil Nadu 600110",
} as const

// Sourced from the venue's own Instagram bio (self-reported, not yet
// client-confirmed in person). Shown softly on the site, not as a hard spec.
export const venueClaims = {
  guestCapacity: "50 guests",
  hallStyle: "Compact & photo-friendly",
  flooring: "Carpeted",
} as const

// Everything below is intentionally withheld until the client confirms it.
// Do not invent values — render an enquiry CTA in their place instead.
export const unconfirmedFacts = [
  "AC / non-AC",
  "Parking",
  "Kitchen / catering arrangement",
  "Rooms / changing areas",
  "Generator backup",
  "Exact pricing",
] as const
