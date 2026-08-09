export type GalleryCategory = "VENUE" | "CELEBRATIONS" | "DECOR" | "PEOPLE" | "DETAILS"

export type GalleryImage = {
  id: string
  category: GalleryCategory
  caption: string
  alt: string
  size: "landscape" | "portrait" | "wide" | "square"
  tone: "ivory" | "maroon" | "brass" | "charcoal"
  /** Key into src/assets/stock — omit to render the branded placeholder panel. */
  stockKey?: string
}

// VENUE entries now use real Sri Arumugam Party Hall photography, sourced
// from the client's own Google Maps listing (photos.pdf) — see DETAILS.md.
// The rest use real, on-brand photography sourced as an interim measure
// until the client shares people/celebration photos of their own.
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "VENUE", caption: "The decorated stage", alt: "Decorated stage at Sri Arumugam Party Hall with marble panel backdrop", size: "wide", tone: "ivory", stockKey: "venue-stage" },
  { id: "g2", category: "CELEBRATIONS", caption: "A family celebration", alt: "A family gathered together for a celebration", size: "portrait", tone: "maroon", stockKey: "celebration-family" },
  { id: "g3", category: "DECOR", caption: "Marigold decoration", alt: "Marigold flowers used in South Indian celebration decor", size: "square", tone: "brass", stockKey: "decor-engagement-flowers" },
  { id: "g4", category: "DETAILS", caption: "Traditional oil lamps", alt: "Traditional oil lamps lit for a celebration", size: "square", tone: "brass", stockKey: "detail-brass-lamp" },
  { id: "g5", category: "VENUE", caption: "The grand entrance", alt: "Entrance hallway of Sri Arumugam Party Hall with twin elephant mural", size: "portrait", tone: "charcoal", stockKey: "venue-elephant-hallway" },
  { id: "g6", category: "PEOPLE", caption: "Guests in celebration attire", alt: "Guests dressed for a South Indian celebration", size: "square", tone: "maroon", stockKey: "people-family-gathering" },
  { id: "g7", category: "DECOR", caption: "Warm evening lighting", alt: "Warm string lighting used for evening celebrations", size: "wide", tone: "brass", stockKey: "decor-evening-lighting" },
  { id: "g8", category: "DETAILS", caption: "Kolam pattern", alt: "A traditional kolam floor pattern", size: "square", tone: "ivory", stockKey: "detail-kolam" },
  { id: "g9", category: "DETAILS", caption: "Marigold close-up", alt: "Close-up of marigold flowers", size: "square", tone: "ivory", stockKey: "detail-floral" },
  { id: "g10", category: "VENUE", caption: "The building", alt: "Exterior of the building housing Sri Arumugam Party Hall, Ponniammanmedu", size: "landscape", tone: "charcoal", stockKey: "venue-exterior" },
  { id: "g11", category: "VENUE", caption: "The elephant mural", alt: "Twin elephant mural at the entrance of Sri Arumugam Party Hall", size: "square", tone: "charcoal", stockKey: "venue-elephant-arch" },
]

export const galleryFilters: Array<"ALL" | GalleryCategory> = [
  "ALL",
  "VENUE",
  "CELEBRATIONS",
  "DECOR",
  "PEOPLE",
  "DETAILS",
]
