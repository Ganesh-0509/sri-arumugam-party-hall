export type GalleryImage = {
  id: string
  caption: string
  alt: string
  tone: "ivory" | "maroon" | "brass" | "charcoal"
  /** Key into src/assets/stock — omit to render the branded placeholder panel. */
  stockKey?: string
}

// Mostly real Sri Arumugam Mini Party Hall photography, sourced from the client's own
// Google Drive album of their opening ceremony — see DETAILS.md. A couple of entries
// (marked below) are illustrative stock photos, not photographed at this venue —
// their captions/alt text deliberately avoid claiming the venue's name.
export const galleryImages: GalleryImage[] = [
  { id: "g1", caption: "The grand entrance", alt: "Entrance hallway of Sri Arumugam Mini Party Hall with its twin elephant mural", tone: "charcoal", stockKey: "venue-entrance-wide" },
  { id: "g2", caption: "Three generations", alt: "A grandmother with her grandchildren celebrating at Sri Arumugam Mini Party Hall", tone: "maroon", stockKey: "people-grandma-girls" },
  { id: "g3", caption: "Peacock brass lamp", alt: "A peacock brass lamp decorated with flowers at Sri Arumugam Mini Party Hall", tone: "brass", stockKey: "decor-peacock-lamp-a" },
  { id: "g4", caption: "A decorated Ganesha idol", alt: "A Ganesha idol decorated with flowers and incense at Sri Arumugam Mini Party Hall", tone: "brass", stockKey: "decor-ganesha" },
  { id: "g5", caption: "The decorated stage", alt: "Decorated stage at Sri Arumugam Mini Party Hall with marble panel backdrop", tone: "ivory", stockKey: "venue-stage" },
  { id: "g6", caption: "Dressed for the occasion", alt: "Two young guests dressed up for a celebration at Sri Arumugam Mini Party Hall", tone: "maroon", stockKey: "people-girls-duo-b" },
  { id: "g7", caption: "Balloon decoration", alt: "Balloon decoration at Sri Arumugam Mini Party Hall", tone: "brass", stockKey: "decor-balloons" },
  // Stock photo — illustrative only, not photographed at this venue.
  { id: "g8", caption: "Floral welcome", alt: "A fresh flower arrangement set on banana leaves for a celebration", tone: "ivory", stockKey: "decor-flower-banana-leaves" },
  // Stock photo — illustrative only, not photographed at this venue.
  { id: "g9", caption: "A floral flourish", alt: "An elegant floral arrangement styled for a wedding celebration", tone: "ivory", stockKey: "decor-floral-hearts" },
  { id: "g10", caption: "The building", alt: "Exterior of Sri Arumugam Mini Party Hall, Ponniammanmedu, with the hall's own signage", tone: "charcoal", stockKey: "venue-signboard" },
  { id: "g11", caption: "Ready for guests", alt: "The entrance of Sri Arumugam Mini Party Hall decorated with a balloon arch", tone: "charcoal", stockKey: "venue-balloon-arch" },
  { id: "g12", caption: "All smiles", alt: "Two young guests posing together at Sri Arumugam Mini Party Hall", tone: "maroon", stockKey: "people-girls-duo-a" },
  { id: "g13", caption: "Grandmother and grandchildren", alt: "A grandmother with her grandchildren at a family celebration at Sri Arumugam Mini Party Hall", tone: "maroon", stockKey: "people-grandma-girls-b" },
]
