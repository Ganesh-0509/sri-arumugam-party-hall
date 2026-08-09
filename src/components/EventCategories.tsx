import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Photo from "./Photo"
import SectionHeading from "./SectionHeading"
import { eventTypes } from "../data/events"

const TONES = ["ivory", "maroon", "brass", "charcoal"] as const

export default function EventCategories() {
  return (
    <section id="celebrations" className="bg-warm-texture bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Celebrate Your Way" lines={["Every occasion has", "its own story."]} />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, i) => (
            <motion.a
              href="#enquire"
              key={event.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Photo
                  stockKey={event.photo || undefined}
                  tone={TONES[i % TONES.length]}
                  alt={event.photo ? `${event.label} celebration styling` : `${event.label} at Sri Arumugam Party Hall`}
                  className="h-full w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="block h-px w-10 bg-brass-soft mb-3 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-serif text-3xl text-ivory">{event.label}</h3>
                <p className="mt-2 text-base text-ivory/85 leading-snug max-w-[90%]">{event.line}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-brass-soft opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Enquire
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
