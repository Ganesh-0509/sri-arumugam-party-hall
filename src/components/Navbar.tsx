import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "../assets/real/instagram-profile-pic.jpg"
import { venue } from "../data/venue"

const LINKS = [
  { href: "#celebrations", label: "Celebrations" },
  { href: "#venue", label: "The Venue" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(41,37,34,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="Sri Arumugam Party Hall logo" className="h-9 w-9 rounded-full object-cover" />
          <span
            className={`font-serif text-xl tracking-wide transition-colors ${
              scrolled ? "text-charcoal" : "text-ivory"
            }`}
          >
            Sri Arumugam
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-base font-semibold tracking-wide transition-colors ${
                  scrolled ? "text-charcoal/85 hover:text-charcoal" : "text-ivory/90 hover:text-ivory"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-maroon" : "bg-brass-soft"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#enquire"
          className={`hidden lg:inline-flex items-center rounded-sm border-2 px-5 py-2.5 text-base font-bold tracking-wide transition-colors ${
            scrolled
              ? "border-maroon text-maroon hover:bg-maroon hover:text-ivory"
              : "border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
          }`}
        >
          Check Your Date
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className={`lg:hidden p-2 ${scrolled ? "text-charcoal" : "text-ivory"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-ivory shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-charcoal border-b border-charcoal/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#enquire"
                  onClick={() => setOpen(false)}
                  className="mt-4 block rounded-sm bg-maroon px-5 py-3 text-center text-sm font-medium text-ivory"
                >
                  Check Your Date
                </a>
              </li>
              <li className="pt-2 text-center text-xs text-charcoal/50">{venue.phone}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
