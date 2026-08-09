import { motion } from "framer-motion"

// No real testimonials have been provided yet — per the no-fabricated-reviews
// rule, this replaces the testimonials section with an honest CTA instead.
export default function TestimonialCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-24">
      <div className="bg-warm-texture-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl text-ivory"
        >
          Your celebration could be next.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href="#enquire"
            className="mt-8 inline-flex items-center rounded-sm border-2 border-brass-soft px-8 py-3.5 text-base font-bold tracking-wide text-brass-soft transition-colors hover:bg-brass-soft hover:text-charcoal"
          >
            Enquire About Your Date
          </a>
        </motion.div>
      </div>
    </section>
  )
}
