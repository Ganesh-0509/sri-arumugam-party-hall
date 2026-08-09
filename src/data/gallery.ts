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

// All real Sri Arumugam Party Hall photography, sourced from the client's own
// Google Drive album of their opening ceremony — see DETAILS.md.
export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "VENUE", caption: "The decorated stage", alt: "Decorated stage at Sri Arumugam Party Hall with marble panel backdrop", size: "wide", tone: "ivory", stockKey: "venue-stage" },
  { id: "g2", category: "CELEBRATIONS", caption: "Three generations", alt: "A grandmother with her grandchildren celebrating at Sri Arumugam Party Hall", size: "portrait", tone: "maroon", stockKey: "people-grandma-girls" },
  { id: "g3", category: "DECOR", caption: "Peacock brass lamp", alt: "A peacock brass lamp decorated with flowers at Sri Arumugam Party Hall", size: "square", tone: "brass", stockKey: "decor-peacock-lamp-a" },
  { id: "g4", category: "DETAILS", caption: "A decorated Ganesha idol", alt: "A Ganesha idol decorated with flowers and incense at Sri Arumugam Party Hall", size: "square", tone: "brass", stockKey: "decor-ganesha" },
  { id: "g5", category: "VENUE", caption: "The grand entrance", alt: "Entrance hallway of Sri Arumugam Party Hall with its twin elephant mural", size: "portrait", tone: "charcoal", stockKey: "venue-entrance-wide" },
  { id: "g6", category: "PEOPLE", caption: "Dressed for the occasion", alt: "Two young guests dressed up for a celebration at Sri Arumugam Party Hall", size: "square", tone: "maroon", stockKey: "people-girls-duo-b" },
  { id: "g7", category: "DECOR", caption: "Balloon decoration", alt: "Balloon decoration at Sri Arumugam Party Hall", size: "wide", tone: "brass", stockKey: "decor-balloons" },
  { id: "g8", category: "DETAILS", caption: "Kolam at the entrance", alt: "A kolam laid at the entrance of Sri Arumugam Party Hall", size: "square", tone: "ivory", stockKey: "decor-kolam" },
  { id: "g9", category: "DETAILS", caption: "A welcoming kolam", alt: "An elaborate kolam with fresh flowers at Sri Arumugam Party Hall", size: "square", tone: "ivory", stockKey: "venue-kolam-welcome" },
  { id: "g10", category: "VENUE", caption: "The building", alt: "Exterior of Sri Arumugam Party Hall, Ponniammanmedu, with the hall's own signage", size: "landscape", tone: "charcoal", stockKey: "venue-signboard" },
  { id: "g11", category: "VENUE", caption: "Ready for guests", alt: "The entrance of Sri Arumugam Party Hall decorated with a balloon arch", size: "portrait", tone: "charcoal", stockKey: "venue-balloon-arch" },
  { id: "g12", category: "DECOR", caption: "Peacock lamp detail", alt: "Close-up of a peacock brass lamp at Sri Arumugam Party Hall", size: "square", tone: "brass", stockKey: "decor-peacock-lamp-b" },
  { id: "g13", category: "PEOPLE", caption: "All smiles", alt: "Two young guests posing together at Sri Arumugam Party Hall", size: "portrait", tone: "maroon", stockKey: "people-girls-duo-a" },
  { id: "g14", category: "CELEBRATIONS", caption: "Grandmother and grandchildren", alt: "A grandmother with her grandchildren at a family celebration at Sri Arumugam Party Hall", size: "square", tone: "maroon", stockKey: "people-grandma-girls-b" },
]

export const galleryFilters: Array<"ALL" | GalleryCategory> = [
  "ALL",
  "VENUE",
  "CELEBRATIONS",
  "DECOR",
  "PEOPLE",
  "DETAILS",
]
