"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Mail, MapPin, MessageCircle, Loader2 } from "lucide-react"

const FOOTER_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#product", label: "Product" },
  { href: "/#gallery", label: "Galeri" },
  { href: "/#preorder", label: "Cara Pesan" },
  { href: "/#faq", label: "FAQ" },
  { href: "/team", label: "Tentang Kami" },
  { href: "/#contact", label: "Contact" },
]

const FALLBACK_CONTACT = {
  email: "createartsh@gmail.com",
  phone: "081230594669",
  address: "Jalan Wide Raya, RT 02/RW 01, Ds. Sidowayah, Kec. Panekan, Magetan",
  city: "Magetan",
  tiktok_url: "https://www.tiktok.com/@createartss",
  whatsapp_url: "https://wa.me/6281230594669",
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.88c.2 0 .39.03.58.07V9.23a6.37 6.37 0 00-.58-.03A6.34 6.34 0 003 15.54a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.56a8.15 8.15 0 004.8 1.55V6.69h-1.89z" />
    </svg>
  )
}

type ContactData = {
  email?: string
  phone?: string
  address?: string
  city?: string
  tiktok_url?: string
  whatsapp_url?: string
}

export function SiteFooter() {
  const year = new Date().getFullYear()
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
      console.log("[Footer] Fetched contact data:", data)

      if (data && typeof data === "object" && !data.error) {
        setContact({
          ...FALLBACK_CONTACT,
          ...data,
        })
      }
    } catch (err) {
      console.error("[Footer] Failed to fetch contact:", err)
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
    <footer className="border-t border-border bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-2"
              aria-label="Crea'Te home"
            >
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-primary/30 bg-primary/10">
                <img
                  src="/team/logo.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                  aria-hidden="true"
                />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Crea<span className="text-primary">&apos;Te</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Aksesori handmade eksklusif dari limbah kain perca dengan custom
              art. Upcycling dengan sentuhan tangan dan kreativitas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigasi</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontak</h3>
            <address className="mt-4 flex items-start gap-2 text-sm not-italic leading-relaxed text-muted-foreground">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                Jalan Wide Raya, RT 02/RW 01,
                <br />
                Ds. Sidowayah, Kec. Panekan, Magetan
              </span>
            </address>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.tiktok.com/@createartss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/6281230594669"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
<a
                href={`mailto:${emailAddr}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>


          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {year} Crea&apos;Te. Semua hak dilindungi.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibuat dengan{" "}
            <span className="text-primary">&hearts;</span> oleh Tim 
            Crea&apos;Te | Universitas Negeri Surabaya.
          </p>
        </div>
      </div>
    </footer>
  )
}

