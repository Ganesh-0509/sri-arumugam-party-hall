import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { experienceFeatures } from "../data/experience"

export default function ExperienceGrid() {
  return (
    <section id="experience" className="bg-warm-texture-dark relative bg-charcoal py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Designed Around the Celebration"
          lines={["What you can", "expect from us."]}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/15">
          {experienceFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-charcoal p-8"
              >
                <Icon className="text-brass-soft" size={30} strokeWidth={1.4} />
                <h3 className="mt-5 font-serif text-2xl text-ivory">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ivory/75">{f.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
