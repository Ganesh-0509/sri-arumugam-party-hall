import { motion } from "framer-motion"
import { Navigation, Phone } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { venue } from "../data/venue"
import { buildMapsUrl, buildTelUrl } from "../lib/whatsapp"

export default function Location() {
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    venue.mapsQuery
  )}&z=15&output=embed`

  return (
    <section id="location" className="bg-warm-texture bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Find Us" lines={["Easy to find.", "Easy to celebrate."]} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="border-2 border-charcoal/15 p-8 sm:p-10 flex flex-col justify-center"
          >
            <h3 className="font-serif text-3xl text-charcoal">{venue.name}</h3>
            <address className="mt-4 not-italic text-base leading-relaxed text-charcoal/75">
              {venue.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="mt-4 text-base font-semibold text-charcoal">{venue.phone}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-maroon px-7 py-3.5 text-base font-bold text-ivory hover:bg-maroon-deep"
              >
                <Navigation size={16} /> Get Directions
              </a>
              <a
                href={buildTelUrl()}
                className="inline-flex items-center gap-2 rounded-sm border-2 border-charcoal/25 px-7 py-3.5 text-base font-bold text-charcoal hover:border-maroon hover:text-maroon"
              >
                <Phone size={16} /> Call
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/3] lg:aspect-auto min-h-[280px] overflow-hidden"
          >
            <iframe
              title={`Map to ${venue.name}`}
              src={mapEmbedSrc}
              className="h-full w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
