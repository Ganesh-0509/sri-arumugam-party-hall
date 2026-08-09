import { ImageIcon } from "lucide-react"

const TONES = {
  ivory: "from-[#efe4cf] to-[#e2d4b6]",
  maroon: "from-[#7d3541] to-[#54202a]",
  brass: "from-[#e2b563] to-[#c3872c]",
  charcoal: "from-[#3a352f] to-[#211d1a]",
} as const

const ICON_ON_LIGHT = "text-charcoal/25"
const ICON_ON_DARK = "text-ivory/30"

type Props = {
  tone?: keyof typeof TONES
  alt: string
  className?: string
}

// TEMP IMAGE — REPLACE WITH CLIENT PHOTO.
// Renders a branded placeholder panel instead of a stock photo, per the
// no-fake-stock-photography rule. Swap for a real <img> once the client's
// photography is in hand.
export default function PlaceholderPhoto({ tone = "ivory", alt, className = "" }: Props) {
  const isDark = tone === "maroon" || tone === "charcoal"
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-gradient-to-br ${TONES[tone]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        aria-hidden="true"
      >
        <pattern id={`dots-${tone}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#dots-${tone})`} className={isDark ? "text-ivory" : "text-charcoal"} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <ImageIcon className={`h-8 w-8 ${isDark ? ICON_ON_DARK : ICON_ON_LIGHT}`} strokeWidth={1.25} />
      </div>
    </div>
  )
}
