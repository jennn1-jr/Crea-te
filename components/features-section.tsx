import { Leaf, Palette, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  tag: string
}

const FEATURES: Feature[] = [
  {
    icon: Palette,
    title: "Custom Art Hand-Painted",
    description:
      "Setiap karakter dilukis manual dengan tinta tekstil tahan lama di atas kain. Tidak ada dua produk yang benar-benar sama—tiap karya adalah unik dan personal untuk kamu.",
    tag: "01",
  },
  {
    icon: Leaf,
    title: "100% Limbah Kain Daur Ulang",
    description:
      "Material dari sisa kain perca yang dikumpulkan dari pengrajin lokal & konveksi. Setiap pembelian membantu mengurangi limbah tekstil dan mendukung ekonomi sirkular.",
    tag: "02",
  },
  {
    icon: ShieldCheck,
    title: "Detail Artistik 3D & Teknik Sasak",
    description:
      "Benang hitam tebal berlapis menciptakan efek rambut tiga dimensi yang menonjol, sementara teknik sasak di pinggiran menghasilkan efek serabut artistik yang jadi identitas visual Crea'Te.",
    tag: "03",
  },
]

export function FeaturesSection() {
  return (
    <section
      id="product"
      className="relative border-y border-border bg-card/30 py-24 sm:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">— Keunggulan Produk</p>
          <h2 id="features-heading" className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Kenapa memilih <span className="text-primary">Crea&apos;Te?</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Aksesori yang dibuat dengan hati, tangan, dan kepedulian terhadap lingkungan. Setiap produk punya cerita unik milikmu.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_32px_-12px] hover:shadow-primary/50"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{feature.tag}</span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
