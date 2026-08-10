import { motion } from "framer-motion"
import logo from "../assets/real/instagram-profile-pic.jpg"
import { venue } from "../data/venue"

const LINKS = [
  { href: "#celebrations", label: "Celebrations" },
  { href: "#venue", label: "The Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#enquire", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between"
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="Sri Arumugam Party Hall logo" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-serif text-xl text-ivory">{venue.name}</p>
            <p className="text-sm text-ivory/60">
              {venue.area}, {venue.city}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-base text-ivory/70 hover:text-ivory">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-base text-ivory/70">
          <a href={`tel:${venue.phoneDial}`} className="hover:text-ivory">
            {venue.phone}
          </a>
          <a
            href={venue.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1 hover:text-ivory"
          >
            Instagram
          </a>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 mt-10 pt-6 border-t border-ivory/10">
        <p className="text-xs text-ivory/40">© {new Date().getFullYear()} {venue.name}</p>
      </div>
    </footer>
  )
}
