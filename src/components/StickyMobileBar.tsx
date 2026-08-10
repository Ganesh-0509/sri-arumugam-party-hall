import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Phone, MessageCircle, CalendarCheck } from "lucide-react"
import { venue } from "../data/venue"
import { buildTelUrl, buildWhatsAppUrl } from "../lib/whatsapp"

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-charcoal/10 bg-ivory/95 backdrop-blur-sm sm:hidden"
        >
          <a href={buildTelUrl()} className="flex flex-col items-center gap-1 py-3 text-charcoal">
            <Phone size={18} />
            <span className="text-[11px] font-medium">Call</span>
          </a>
          <a
            href={buildWhatsAppUrl(`Hi ${venue.name}, I'd like to enquire about hosting an event.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-charcoal/10 py-3 text-brass-deep"
          >
            <MessageCircle size={18} />
            <span className="text-[11px] font-medium">WhatsApp</span>
          </a>
          <a href="#enquire" className="flex flex-col items-center gap-1 py-3 text-maroon">
            <CalendarCheck size={18} />
            <span className="text-[11px] font-medium">Check Date</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
