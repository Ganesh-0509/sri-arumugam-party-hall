import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { eventTypes, plannerNotes } from "../data/events"
import { openWhatsApp, eventEnquiryMessage } from "../lib/whatsapp"

export default function EventPlanner() {
  const [selected, setSelected] = useState<string | null>(null)
  const active = eventTypes.find((e) => e.key === selected)
  const notes = selected ? plannerNotes[selected] : null

  return (
    <section className="relative overflow-hidden bg-maroon py-20 sm:py-24">
      <svg
        className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 text-ivory/[0.06]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Start Planning"
          lines={["What are you", "celebrating?"]}
        />
        <p className="mt-6 text-center text-lg text-ivory/90 max-w-lg mx-auto">
          Tell us a little about your occasion and we&apos;ll help you start planning.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {eventTypes.map((e) => (
            <button
              key={e.key}
              onClick={() => setSelected(e.key === selected ? null : e.key)}
              className={`rounded-full border-2 px-6 py-3 text-base font-semibold tracking-wide transition-colors ${
                selected === e.key
                  ? "border-brass bg-brass text-charcoal"
                  : "border-ivory/40 text-ivory hover:border-brass-soft hover:text-brass-soft"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active && notes && (
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mt-10 bg-ivory p-7 sm:p-10"
            >
              <p className="text-sm font-bold tracking-[0.16em] uppercase text-maroon">
                {active.label}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-charcoal/55">
                    Suggested setup
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/85">{notes.setup}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-charcoal/55">
                    Guest considerations
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/85">{notes.guests}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-charcoal/55">
                    Decoration direction
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/85">{notes.decor}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-charcoal/55">
                    Worth thinking about
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/85">{notes.question}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquire"
                  className="inline-flex items-center rounded-sm bg-maroon px-7 py-3.5 text-base font-bold tracking-wide text-ivory transition-colors hover:bg-maroon-deep"
                >
                  Check Your Date
                </a>
                <button
                  onClick={() => openWhatsApp(eventEnquiryMessage(active.label.toLowerCase()))}
                  className="inline-flex items-center rounded-sm border-2 border-charcoal/25 px-7 py-3.5 text-base font-bold tracking-wide text-charcoal transition-colors hover:border-maroon hover:text-maroon"
                >
                  Ask on WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
