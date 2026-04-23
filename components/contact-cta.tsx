import Link from "next/link"
import { Mail, ArrowUpRight } from "lucide-react"

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Mari Berkolaborasi</span>
            </div>

            <h2 id="contact-heading" className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Pre-Order Sekarang <span className="text-primary">Boneka Karaktermu</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Hubungi tim Crea&apos;Te untuk custom order, konsultasi desain, atau bergabung dengan komunitas pecinta merchandise handmade.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://wa.me/6281230594669"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_32px_-4px] hover:shadow-primary/60"
              >
                Chat WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="mailto:25051204344@mhs.unesa.ac.id"
                className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-secondary"
              >
                Email Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
