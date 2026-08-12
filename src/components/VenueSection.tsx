import { motion } from "framer-motion"
import Photo from "./Photo"
import SectionHeading from "./SectionHeading"
import { venueClaims } from "../data/venue"
import { openWhatsApp } from "../lib/whatsapp"

const infoGrid = [
  { label: "Guest Capacity", value: venueClaims.guestCapacity },
  { label: "Hall Style", value: venueClaims.hallStyle },
  { label: "Flooring", value: venueClaims.flooring },
  { label: "Facilities", value: null },
]

export default function VenueSection() {
  return (
    <section id="venue" className="bg-warm-texture bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
          className="group aspect-[4/5] overflow-hidden rounded-sm shadow-none transition-shadow duration-500 ease-out hover:shadow-[0_35px_70px_-25px_rgba(89,18,30,0.5)] lg:aspect-[3/4]"
        >
          <Photo
            stockKey="venue-entrance-wide"
            tone="ivory"
            alt="Entrance hallway of Sri Arumugam Mini Party Hall with its twin elephant mural"
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </motion.div>

        <div>
          <SectionHeading eyebrow="The Venue" lines={["A space made", "for togetherness."]} />
          <p className="mt-7 text-lg sm:text-xl leading-relaxed text-charcoal/85 max-w-lg">
            A compact, elegant hall in the heart of Ponniammanmedu — set up for the kind of
            celebration where everyone can gather close, without the space feeling like an
            afterthought. Whether it's a birthday, an engagement, or a family function, the
            hall is arranged around your occasion, not the other way round.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px bg-charcoal/15 max-w-lg border border-charcoal/15">
            {infoGrid.map((item) => (
              <div key={item.label} className="bg-ivory p-6">
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-charcoal/55">
                  {item.label}
                </p>
                {item.value ? (
                  <p className="mt-2 font-serif text-2xl text-maroon">{item.value}</p>
                ) : (
                  <button
                    onClick={() =>
                      openWhatsApp("Hi Sri Arumugam Mini Party Hall, could you share the venue facilities available?")
                    }
                    className="mt-2 text-base font-semibold text-maroon underline underline-offset-4 decoration-maroon/40 hover:decoration-maroon"
                  >
                    Ask us
                  </button>
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-charcoal/55 max-w-lg">
            Guest capacity and hall details are as shared by the venue — do confirm exact
            numbers for your event when you enquire.
          </p>
        </div>
      </div>
    </section>
  )
}
