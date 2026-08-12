import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Photo from "./Photo"
import SectionHeading from "./SectionHeading"
import { galleryImages, galleryFilters, type GalleryCategory } from "../data/gallery"

export default function Gallery() {
  const [filter, setFilter] = useState<"ALL" | GalleryCategory>("ALL")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const filtered = galleryImages.filter((img) => filter === "ALL" || img.category === filter)
  // The track renders the filtered list twice back to back — animating exactly
  // one set-width (-50%) loops seamlessly with no visible reset.
  const track = [...filtered, ...filtered]

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, filtered.length])

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <section id="gallery" className="bg-warm-texture bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="The Gallery" lines={["Moments at", "Sri Arumugam."]} />

        <div className="mt-10 flex flex-wrap gap-2.5">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold tracking-[0.08em] uppercase transition-colors ${
                filter === f
                  ? "border-maroon bg-maroon text-ivory"
                  : "border-charcoal/25 text-charcoal/75 hover:border-maroon hover:text-maroon"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Full-bleed filmstrip: scrolls continuously right-to-left, pauses on
          hover, and the hovered photo itself pops forward above its neighbours. */}
      <div
        className="relative mt-10 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-ivory to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-ivory to-transparent sm:w-28" />

        <div
          key={filter}
          className="animate-marquee flex w-max gap-4 py-6 sm:gap-5"
          style={{
            animationDuration: `${Math.max(filtered.length * 5, 20)}s`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {track.map((img, i) => (
            <button
              key={`${img.id}-${i}`}
              onClick={() => setLightboxIndex(i % filtered.length)}
              className="group relative z-0 h-[210px] w-[290px] shrink-0 overflow-hidden rounded-sm text-left shadow-md transition-[transform,box-shadow] duration-500 ease-out hover:z-20 hover:scale-[1.18] hover:shadow-[0_40px_80px_-25px_rgba(89,18,30,0.55)] sm:h-[300px] sm:w-[400px]"
            >
              <Photo stockKey={img.stockKey} tone={img.tone} alt={img.alt} className="h-full w-full" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charcoal/85 to-transparent px-4 py-3 text-sm font-medium text-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <button
              aria-label="Close"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-5 top-5 text-ivory/70 hover:text-ivory"
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous image"
              onClick={() => setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))}
              className="absolute left-3 sm:left-8 text-ivory/70 hover:text-ivory"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              aria-label="Next image"
              onClick={() => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))}
              className="absolute right-3 sm:right-8 text-ivory/70 hover:text-ivory"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl w-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length))
                else if (info.offset.x > 60) setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
              }}
            >
              <Photo stockKey={active.stockKey} tone={active.tone} alt={active.alt} className="aspect-[4/3] w-full" />
              <p className="mt-4 text-center text-sm text-ivory/70">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
