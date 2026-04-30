"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowUpRight } from "lucide-react"

const FALLBACK_CONTACT = {
  whatsapp_url: "https://wa.me/6281230594669",
  email: "createartsh@gmail.com",
}

type ContactData = {
  whatsapp_url?: string
  email?: string
}

export function ContactCTA() {
  const [contact, setContact] = useState<ContactData>(FALLBACK_CONTACT)
  const [loading, setLoading] = useState(true)

  const fetchContact = useCallback(async () => {
    setLoading(true)
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const res = await fetch("/api/contact", { signal: controller.signal })
      clearTimeout(timeoutId)

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data = await res.json()
      console.log("[ContactCTA] Fetched contact data:", data)

      if (data && typeof data === "object" && !data.error) {
        setContact({
          ...FALLBACK_CONTACT,
          ...data,
        })
      }
    } catch (err) {
      console.error("[ContactCTA] Failed to fetch contact:", err)
      setContact(FALLBACK_CONTACT)
    } finally {
      setLoading(false)
    }
  }, [])

const emailAddr = "createartsh@gmail.com"

  useEffect(() => {
    fetchContact()
  }, [fetchContact])

  return (
    <section id="contact" className="relative overflow-x-hidden py-24 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-white p-10 text-center shadow-lg sm:p-16"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full blur-[100px]"
            style={{ background: "oklch(0.66 0.07 140 / 0.2)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full blur-[100px]"
            style={{ background: "oklch(0.68 0.13 55 / 0.2)" }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Mari Berkolaborasi</span>
            </span>

            <h2
              id="contact-heading"
              className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Pre-Order Sekarang{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
                Boneka Karaktermu
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Hubungi tim Crea&apos;Te untuk custom order, konsultasi desain, atau
              bergabung dengan komunitas pecinta merchandise handmade.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={contact.whatsapp_url || FALLBACK_CONTACT.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Chat WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
<a
                href={`mailto:${emailAddr}`}
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-white/80 hover:-translate-y-0.5"
              >
                Email Kami
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
