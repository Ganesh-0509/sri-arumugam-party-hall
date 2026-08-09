import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { timelineSteps } from "../data/experience"

export default function CelebrationTimeline() {
  return (
    <section className="bg-warm-texture bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="The Journey" lines={["From planning", "to celebration."]} />

        {/* Mobile: vertical timeline */}
        <div className="mt-14 flex flex-col gap-8 lg:hidden">
          {timelineSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl text-brass-deep">{s.step}</span>
                {i < timelineSteps.length - 1 && <span className="mt-2 w-px flex-1 bg-charcoal/20" />}
              </div>
              <div className="pb-2">
                <h3 className="font-serif text-2xl text-charcoal">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/70">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-6 gap-4 relative">
          <div className="absolute left-0 right-0 top-[15px] h-px bg-charcoal/20" />
          {timelineSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative pr-2"
            >
              <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brass text-sm font-bold text-charcoal">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl text-charcoal">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
