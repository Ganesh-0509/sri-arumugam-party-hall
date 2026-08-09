import { venue } from "../data/venue"

export function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${venue.whatsappNumber}?text=${encoded}`
}

export function eventEnquiryMessage(eventLabel: string, date?: string, guests?: string) {
  let msg = `Hi ${venue.name}, I would like to enquire about hosting a ${eventLabel}`
  if (date) msg += ` on ${date}`
  if (guests) msg += ` for approximately ${guests} guests`
  msg += "."
  return msg
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer")
}

export function buildMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapsQuery)}`
}

export function buildTelUrl() {
  return `tel:${venue.phoneDial}`
}
