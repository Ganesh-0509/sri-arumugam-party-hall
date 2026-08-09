import PlaceholderPhoto from "./PlaceholderPhoto"
import { stockImage } from "../lib/stockImages"

type Props = {
  stockKey?: string
  tone?: "ivory" | "maroon" | "brass" | "charcoal"
  alt: string
  className?: string
}

// Renders a real photo when one exists at src/assets/stock/<stockKey>.jpg,
// otherwise falls back to the branded placeholder panel. This is the interim
// real-photo layer — swap stockKey usage for genuine client photography once
// it's in hand (see DETAILS.md).
export default function Photo({ stockKey, tone = "ivory", alt, className = "" }: Props) {
  const src = stockKey ? stockImage(stockKey) : undefined
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />
  }
  return <PlaceholderPhoto tone={tone} alt={alt} className={className} />
}
