import { useState, type FormEvent, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"
import SectionHeading from "./SectionHeading"
import { eventTypes } from "../data/events"
import { venue } from "../data/venue"
import { buildWhatsAppUrl, buildTelUrl } from "../lib/whatsapp"

type FormState = {
  eventType: string
  date: string
  guests: string
  name: string
  phone: string
  message: string
}

const EMPTY: FormState = { eventType: "", date: "", guests: "", name: "", phone: "", message: "" }

export default function DateEnquiry() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = "Please share your name."
    if (!form.phone.trim()) next.phone = "A phone number helps us reach you."
    if (!form.eventType) next.eventType = "Let us know what you're celebrating."
    if (!form.date) next.date = "Please pick a date."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    const eventLabel = eventTypes.find((ev) => ev.key === form.eventType)?.label ?? form.eventType
    const lines = [
      `Hi ${venue.name}, I'd like to enquire about a ${eventLabel} on ${form.date}${
        form.guests ? ` for approximately ${form.guests} guests` : ""
      }.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.message ? `Message: ${form.message}` : "",
    ].filter(Boolean)

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="enquire" className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-5 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="font-serif text-5xl text-charcoal">We&apos;ve got your request.</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
              Thank you, {form.name.split(" ")[0]}. The {venue.name} team will get back to you shortly to
              confirm your date.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={buildTelUrl()}
                className="inline-flex items-center gap-2 rounded-sm bg-maroon px-7 py-3.5 text-base font-bold text-ivory"
              >
                <Phone size={16} /> Call the Hall
              </a>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm(EMPTY)
                }}
                className="inline-flex items-center rounded-sm border-2 border-charcoal/25 px-7 py-3.5 text-base font-bold text-charcoal hover:border-maroon hover:text-maroon"
              >
                Send another enquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="enquire" className="bg-warm-texture bg-ivory py-20 sm:py-24">
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="Enquire" lines={["Planning something", "special?"]} />

        <form onSubmit={handleSubmit} noValidate className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Event type" error={errors.eventType} full>
            <select
              value={form.eventType}
              onChange={(e) => update("eventType", e.target.value)}
              className={inputClass(!!errors.eventType)}
            >
              <option value="">Select an occasion</option>
              {eventTypes.map((e) => (
                <option key={e.key} value={e.key}>
                  {e.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Preferred date" error={errors.date}>
            <input
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={inputClass(!!errors.date)}
            />
          </Field>

          <Field label="Expected guests">
            <input
              type="number"
              min={1}
              placeholder="e.g. 40"
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              className={inputClass(false)}
            />
          </Field>

          <Field label="Your name" error={errors.name}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass(!!errors.name)}
            />
          </Field>

          <Field label="Phone number" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass(!!errors.phone)}
            />
          </Field>

          <Field label="Message (optional)" full>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={inputClass(false)}
            />
          </Field>

          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full rounded-sm bg-maroon py-4 text-base font-bold tracking-wide text-ivory transition-colors hover:bg-maroon-deep"
            >
              Check Availability
            </button>
            <p className="mt-3 text-center text-sm text-charcoal/55">
              We&apos;ll confirm your date with the venue and reach out shortly.
            </p>
          </div>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 text-base text-charcoal/70">
          <MessageCircle size={16} />
          Prefer to talk directly? Call or WhatsApp{" "}
          <a href={buildTelUrl()} className="font-semibold text-maroon underline underline-offset-4">
            {venue.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

function inputClass(hasError: boolean) {
  return `w-full border-b-2 bg-transparent px-0.5 py-3 text-base text-charcoal outline-none transition-colors focus:border-maroon ${
    hasError ? "border-terracotta" : "border-charcoal/25"
  }`
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string
  error?: string
  full?: boolean
  children: ReactNode
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-bold tracking-[0.12em] uppercase text-charcoal/60">{label}</span>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 block text-sm font-medium text-terracotta"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  )
}
