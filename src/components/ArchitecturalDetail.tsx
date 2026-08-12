import { motion } from "framer-motion"
import Photo from "./Photo"
import SectionHeading from "./SectionHeading"

const details = [
  { tone: "brass", stockKey: "decor-peacock-lamp-a", alt: "A peacock brass lamp decorated with jasmine and roses at Sri Arumugam Mini Party Hall" },
  // Stock photo — illustrative only, not photographed at this venue.
  { tone: "maroon", stockKey: "decor-marigold-garland", alt: "A marigold garland decoration for a celebration" },
  { tone: "charcoal", stockKey: "decor-ganesha", alt: "A decorated Ganesha idol with flowers and incense at Sri Arumugam Mini Party Hall" },
] as const

export default function ArchitecturalDetail() {
  return (
    <section className="bg-warm-texture-dark relative bg-charcoal py-20 sm:py-24 overflow-hidden">
      <svg
        className="animate-slow-spin pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-brass/10"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="light" eyebrow="A Little Detail" lines={["A little Chennai", "in every detail."]} />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {details.map((d, i) => (
            <motion.div
              key={d.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group aspect-square overflow-hidden rounded-sm ring-1 ring-brass/0 transition-all duration-500 ease-out hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] hover:ring-brass/40"
            >
              <Photo
                stockKey={d.stockKey}
                tone={d.tone}
                alt={d.alt}
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
