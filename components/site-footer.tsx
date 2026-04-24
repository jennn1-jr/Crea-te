import Link from "next/link"
import { Palette, Instagram, Linkedin, Github, MapPin } from "lucide-react"

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

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
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <Palette className="h-5 w-5" aria-hidden="true" />
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
                Jalan Mahameru, RT 04/RW 03,
                <br />
                Ds. Ringinanom, Kec. Karangjati, Ngawi
              </span>
            </address>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.instagram.com/create.arts"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/6281230594669"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:25051204344@mhs.unesa.ac.id"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
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
            <span className="text-primary">&hearts;</span> oleh Tim PMW
            Crea&apos;Te | Universitas Negeri Surabaya.
          </p>
        </div>
      </div>
    </footer>
  )
}
