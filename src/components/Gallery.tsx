import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Photo from "./Photo"
import SectionHeading from "./SectionHeading"
import { galleryImages, galleryFilters, type GalleryCategory } from "../data/gallery"

// True bento footprints — explicit row+col spans on a fixed row-height grid,
// not per-item aspect-ratio (which was producing uneven, misaligned rows).
// grid-flow-dense backfills gaps automatically so sequencing doesn't matter.
const CELL: Record<string, string> = {
  big: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  normal: "col-span-1 row-span-1",
}

export default function Gallery() {
  const [filter, setFilter] = useState<"ALL" | GalleryCategory>("ALL")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = galleryImages.filter((img) => filter === "ALL" || img.category === filter)

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

        <div className="mt-10 grid grid-flow-dense grid-cols-2 auto-rows-[150px] gap-3 sm:grid-cols-4 sm:auto-rows-[170px] sm:gap-4">
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden text-left ${CELL[img.cell]}`}
            >
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <Photo stockKey={img.stockKey} tone={img.tone} alt={img.alt} className="h-full w-full" />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-3 py-2.5 text-sm font-medium text-ivory opacity-0 transition-opacity group-hover:opacity-100">
                {img.caption}
              </span>
            </motion.button>
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
