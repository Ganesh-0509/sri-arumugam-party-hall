import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

export default function OpeningStatement() {
  return (
    <section className="bg-warm-texture relative bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <SectionHeading
          align="center"
          eyebrow="The Reason We Gather"
          lines={["Some moments", "are meant to be shared."]}
        />
        <p className="mt-8 text-lg sm:text-xl leading-relaxed text-charcoal/85">
          Birthdays, engagements, family gatherings and all the little milestones in between.
          Sri Arumugam Mini Party Hall is designed around one simple idea — bringing people together.
        </p>

        <svg
          className="mx-auto mt-14 h-10 w-40 text-brass"
          viewBox="0 0 160 40"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M2 20c8-14 24-14 32 0s24 14 32 0 24-14 32 0 24 14 32 0 24-14 30 0"
            stroke="currentColor"
            strokeWidth="1.3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <motion.circle
            cx="80"
            cy="20"
            r="2.6"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 1.2 }}
          />
        </svg>
      </div>
    </section>
  )
}
