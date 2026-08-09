export type EventType = {
  key: string
  label: string
  line: string
  photo: string
}

export const eventTypes: EventType[] = [
  {
    key: "wedding",
    label: "Weddings",
    line: "Celebrate the beginning of something beautiful.",
    photo: "venue-elephant-hallway",
  },
  {
    key: "reception",
    label: "Receptions",
    line: "Bring everyone together for an evening worth remembering.",
    photo: "venue-stage",
  },
  {
    key: "birthday",
    label: "Birthdays",
    line: "Make another year feel like a milestone.",
    photo: "",
  },
  {
    key: "family",
    label: "Family Celebrations",
    line: "Because the best memories are made together.",
    photo: "celebration-family",
  },
  {
    key: "engagement",
    label: "Engagements",
    line: "A beautiful beginning deserves a beautiful gathering.",
    photo: "decor-engagement-flowers",
  },
  {
    key: "other",
    label: "Special Occasions",
    line: "For the moments that don't need a reason.",
    photo: "decor-evening-lighting",
  },
]

// Editable planner guidance — safe, general suggestions only. Nothing here
// depends on unconfirmed venue facts (capacity, AC, catering, etc).
export const plannerNotes: Record<
  string,
  { setup: string; guests: string; decor: string; question: string }
> = {
  wedding: {
    setup: "Stage-forward layout with a clear centre aisle for the couple.",
    guests: "Best suited to close family and an intimate guest list.",
    decor: "Warm floral and drape work around the stage.",
    question: "Will you need a separate area for rituals before the main event?",
  },
  reception: {
    setup: "Open floor with a welcome point near the entrance.",
    guests: "Works well for a steady flow of guests through the evening.",
    decor: "Ambient lighting with a photo-friendly backdrop.",
    question: "Would you like the seating arranged for a sit-down dinner or standing service?",
  },
  birthday: {
    setup: "Open, flexible floor with a cake and photo corner.",
    guests: "Comfortable for a close circle of family and friends.",
    decor: "Themed balloon or floral setup, kept light and playful.",
    question: "Is this milestone birthday for a child or an adult celebration?",
  },
  family: {
    setup: "Relaxed seating with room to move between conversations.",
    guests: "Ideal for multi-generational family gatherings.",
    decor: "Simple, warm styling that doesn't compete with the occasion.",
    question: "Is there a specific ritual or tradition the setup should support?",
  },
  engagement: {
    setup: "A focal stage point for the ring exchange, facing the guests.",
    guests: "Intimate gatherings of close family from both sides.",
    decor: "Floral accents in soft, celebratory tones.",
    question: "Would you like a small separate area for photographs?",
  },
  other: {
    setup: "Tell us about the occasion and we'll help you plan the layout.",
    guests: "We'll work with your expected guest count.",
    decor: "Decoration direction based on the nature of the event.",
    question: "What kind of occasion are you celebrating?",
  },
}
