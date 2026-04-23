import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.26 0.01 240) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.26 0.01 240) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Program Mahasiswa Wirausaha 2026</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Your Personality, <span className="text-primary">Hand-Painted on Fabric</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Crea&apos;Te menghadirkan aksesori handmade eksklusif dari limbah kain perca dengan teknik lukis tangan custom. Setiap boneka gantungan kunci adalah wearable art yang unik, personal, dan ramah lingkungan.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#product"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_32px_-4px] hover:shadow-primary/60"
            >
              Lihat Produk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-secondary"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          {/* Stats strip */}
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8">
            {[
              { value: "3", label: "Anggota Tim" },
              { value: "3", label: "Tier Produk" },
              { value: "∞", label: "Customisasi" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <dt className="order-2 mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{stat.label}</dt>
                <dd className="order-1 font-mono text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
