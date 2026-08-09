import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  eyebrow: string
  lines: string[]
  align?: "left" | "center"
  tone?: "dark" | "light"
  children?: ReactNode
}

export default function SectionHeading({ eyebrow, lines, align = "left", tone = "dark", children }: Props) {
  const isCenter = align === "center"
  const isLight = tone === "light"
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={`text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-5 ${
          isLight ? "text-brass-soft" : "text-maroon"
        }`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className={`font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] ${
          isLight ? "text-ivory" : "text-charcoal"
        }`}
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </motion.h2>
      {children}
    </div>
  )
}
