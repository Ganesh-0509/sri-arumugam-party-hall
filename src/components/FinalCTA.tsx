import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { venue } from "../data/venue"
import { buildTelUrl } from "../lib/whatsapp"

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
      <div className="bg-warm-texture-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <svg
        className="animate-slow-spin pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 text-brass/20"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path d="M50 4c6 20 20 34 40 40-20 6-34 20-40 40-6-20-20-34-40-40 20-6 34-20 40-40z" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.08] text-ivory"
        >
          Your moment.
          <br />
          Your people.
          <br />
          Your celebration.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 text-lg sm:text-xl text-ivory/80"
        >
          Let&apos;s make a place for everyone who matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#enquire"
            className="inline-flex items-center rounded-sm bg-brass px-9 py-4 text-base font-bold tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-brass-soft"
          >
            Plan Your Celebration
          </a>
          <a
            href={buildTelUrl()}
            className="inline-flex items-center gap-2 rounded-sm border-2 border-ivory/30 px-9 py-4 text-base font-bold tracking-wide text-ivory hover:border-brass-soft hover:text-brass-soft"
          >
            <Phone size={16} /> Call {venue.phone}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
