import type { LucideIcon } from "lucide-react"
import { Camera, HeartHandshake, MapPin, Users } from "lucide-react"

export type ExperienceFeature = {
  icon: LucideIcon
  title: string
  text: string
}

// Only confirmed, general truths — nothing here depends on unconfirmed
// facilities (AC, parking, catering) until the client verifies them.
export const experienceFeatures: ExperienceFeature[] = [
  {
    icon: Camera,
    title: "Photo-friendly ambience",
    text: "A warm, elegant setting that photographs beautifully through every part of the celebration.",
  },
  {
    icon: Users,
    title: "Built for togetherness",
    text: "A compact, versatile hall suited to close, intimate gatherings where everyone feels included.",
  },
  {
    icon: HeartHandshake,
    title: "Personal attention",
    text: "A team that works with you directly, from your first enquiry to the day of your event.",
  },
  {
    icon: MapPin,
    title: "Easy to reach",
    text: "Centrally located in Ponniammanmedu, simple for guests coming from across Chennai.",
  },
]
