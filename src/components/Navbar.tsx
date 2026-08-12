import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
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

// How far (in px of scroll) the header takes to go from full-width bar to
// a floating, translucent pill.
const MORPH_RANGE = [0, 110]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string | null>(null)

  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Continuous scroll-linked morph: full-bleed bar at the top of the page,
  // shrinking into a rounded, glassy floating capsule as you scroll down.
  const radius = useTransform(scrollY, MORPH_RANGE, [0, 26])
  const insetTop = useTransform(scrollY, MORPH_RANGE, [0, 12])
  const maxWidth = useTransform(scrollY, MORPH_RANGE, [2000, 1180])
  const paddingY = useTransform(scrollY, MORPH_RANGE, [18, 11])
  const background = useTransform(
    scrollY,
    MORPH_RANGE,
    ["rgba(247,239,224,0)", "rgba(247,239,224,0.68)"]
  )
  // marginInline stays a plain "auto" (not scroll-interpolated) so the
  // browser splits the leftover space evenly on both sides as maxWidth
  // shrinks — a fixed px inset here fights with inset-x-0 (left:0;right:0)
  // and the box ends up glued to the left edge instead of centered.
  const shellStyle = open
    ? {}
    : { borderRadius: radius, marginInline: "auto", marginTop: insetTop, maxWidth, backgroundColor: background }

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brass via-brass-soft to-maroon"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        style={shellStyle}
        className={`fixed inset-x-0 top-0 z-50 mx-auto backdrop-blur-md transition-shadow duration-300 ${
          scrolled && !open ? "shadow-[0_10px_30px_rgba(41,37,34,0.14)] ring-1 ring-charcoal/10" : ""
        }`}
      >
        <motion.nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
          style={{ paddingTop: paddingY, paddingBottom: paddingY }}
        >
          <a href="#top" className="flex shrink-0 items-center gap-2.5">
            <motion.img
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              src={logo}
              alt="Sri Arumugam Mini Party Hall logo"
              className="h-9 w-9 shrink-0 rounded-full object-cover"
            />
            <span
              className={`whitespace-nowrap font-serif text-xl tracking-wide transition-colors ${
                scrolled ? "text-charcoal" : "text-ivory"
              }`}
            >
              Sri Arumugam
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-6 shrink-0 whitespace-nowrap">
            {LINKS.map((l) => {
              const isActive = activeHref === l.href
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`group relative text-base font-semibold tracking-wide transition-colors ${
                      scrolled
                        ? isActive
                          ? "text-charcoal"
                          : "text-charcoal/70 hover:text-charcoal"
                        : isActive
                          ? "text-ivory"
                          : "text-ivory/75 hover:text-ivory"
                    }`}
                  >
                    {l.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className={`absolute -bottom-1 left-0 h-px w-full ${
                          scrolled ? "bg-maroon" : "bg-brass-soft"
                        }`}
                      />
                    ) : (
                      <span
                        className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                          scrolled ? "bg-maroon" : "bg-brass-soft"
                        }`}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <motion.a
            href="#enquire"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`hidden lg:inline-flex shrink-0 items-center whitespace-nowrap rounded-sm border-2 px-5 py-2.5 text-base font-bold tracking-wide transition-colors ${
              scrolled
                ? "border-maroon text-maroon hover:bg-maroon hover:text-ivory"
                : "border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
            }`}
          >
            Check Your Date
          </motion.a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className={`lg:hidden p-2 ${scrolled ? "text-charcoal" : "text-ivory"}`}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.nav>

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
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-medium text-charcoal border-b border-charcoal/10"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: LINKS.length * 0.04 }}
                >
                  <a
                    href="#enquire"
                    onClick={() => setOpen(false)}
                    className="mt-4 block rounded-sm bg-maroon px-5 py-3 text-center text-sm font-medium text-ivory"
                  >
                    Check Your Date
                  </a>
                </motion.li>
                <li className="pt-2 text-center text-xs text-charcoal/50">{venue.phone}</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
