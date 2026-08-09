import { motion } from "framer-motion"
import { ChevronDown, MapPin, Phone, PartyPopper, Users } from "lucide-react"
import Photo from "./Photo"
import { venue, venueClaims } from "../data/venue"
import { buildTelUrl } from "../lib/whatsapp"

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100vh] items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-slow-drift absolute inset-0">
          {/* Source photo is low-resolution (a compressed Google Maps listing
              photo, confirmed by re-extracting at ~3x the resolution and still
              seeing block artifacts) — a soft blur reads as an intentional
              cinematic depth-of-field treatment instead of visible pixelation
              when stretched across a full-viewport hero. Swap for a real
              high-res client photo and drop this blur once one exists. */}
          <Photo
            stockKey="hero-elephant"
            tone="charcoal"
            alt="The twin-elephant mural at the entrance of Sri Arumugam Party Hall, Ponniammanmedu, Chennai"
            className="h-full w-full blur-[3px] scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-24 pb-14 sm:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-brass-soft mb-6"
        >
          Sri Arumugam Party Hall · Chennai
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-7xl sm:text-8xl lg:text-9xl leading-[0.98] text-ivory max-w-4xl"
        >
          Where Chennai
          <br />
          Celebrates Together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-7 max-w-2xl text-lg sm:text-xl text-ivory/90 leading-relaxed"
        >
          From intimate family gatherings to joyful milestones, a warm space for the moments
          that bring everyone together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#enquire"
            className="inline-flex items-center rounded-sm bg-brass px-8 py-4 text-base font-bold tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-brass-soft"
          >
            Plan Your Celebration
          </a>
          <a
            href="#venue"
            className="inline-flex items-center rounded-sm border-2 border-ivory/60 px-8 py-4 text-base font-bold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            Explore the Venue
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ivory/15 pt-6 text-sm sm:text-base text-ivory/85"
        >
          <span className="flex items-center gap-2">
            <MapPin size={17} className="text-brass-soft shrink-0" />
            {venue.area}, {venue.city}
          </span>
          <span className="flex items-center gap-2">
            <Users size={17} className="text-brass-soft shrink-0" />
            {venueClaims.guestCapacity}
          </span>
          <span className="flex items-center gap-2">
            <PartyPopper size={17} className="text-brass-soft shrink-0" />
            Birthdays · Engagements · Family Functions
          </span>
          <a href={buildTelUrl()} className="flex items-center gap-2 font-semibold text-ivory hover:text-brass-soft">
            <Phone size={17} className="text-brass-soft shrink-0" />
            {venue.phone}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute bottom-6 right-6 sm:right-10 hidden sm:flex flex-col items-center gap-2 text-ivory/70"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase [writing-mode:vertical-rl]">
          Scroll to explore
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
