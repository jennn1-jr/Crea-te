"use client"

import { motion } from "framer-motion"
import { Star, Crown, Sparkles } from "lucide-react"

const PRODUCTS = [
  {
    tier: "Basic",
    price: "Rp 25.000",
    icon: Sparkles,
    color: "from-[oklch(0.66_0.07_140)] to-[oklch(0.60_0.09_135)]",
    textColor: "text-[oklch(0.40_0.06_140)]",
    bgLight: "bg-[oklch(0.66_0.07_140/0.08)]",
    borderHover: "hover:border-[oklch(0.66_0.07_140/0.5)]",
    shadowColor: "hover:shadow-[oklch(0.66_0.07_140/0.15)]",
    features: [
      "Gantungan kunci mini",
      "Desain karakter standar",
      "Kain perca polos",
      "1 warna tinta tekstil",
      "Packaging sederhana",
    ],
    popular: false,
  },
  {
    tier: "Medium",
    price: "Rp 40.000",
    icon: Star,
    color: "from-[oklch(0.68_0.13_55)] to-[oklch(0.62_0.15_48)]",
    textColor: "text-[oklch(0.45_0.10_50)]",
    bgLight: "bg-[oklch(0.68_0.13_55/0.08)]",
    borderHover: "hover:border-[oklch(0.68_0.13_55/0.5)]",
    shadowColor: "hover:shadow-[oklch(0.68_0.13_55/0.15)]",
    features: [
      "Boneka gantungan kuci 2-in-1",
      "Custom karakter pilihan",
      "Kain perca bermotif",
      "2-3 warna tinta tekstil",
      "Detail benang 3D rambut",
      "Teknik sasak pinggiran",
      "Packaging premium",
    ],
    popular: true,
  },
  {
    tier: "Premium",
    price: "Rp 60.000",
    icon: Crown,
    color: "from-[oklch(0.58_0.15_40)] to-[oklch(0.50_0.17_35)]",
    textColor: "text-[oklch(0.35_0.10_38)]",
    bgLight: "bg-[oklch(0.58_0.15_40/0.08)]",
    borderHover: "hover:border-[oklch(0.58_0.15_40/0.5)]",
    shadowColor: "hover:shadow-[oklch(0.58_0.15_40/0.15)]",
    features: [
      "Boneka gantungan kunci 2-in-1 full custom",
      "Desain eksklusif + nama personal",
      "Kain premium pilihan konveksi",
      "Multi-warna tinta tekstil",
      "Detail benang 3D rambut premium",
      "Teknik sasak + hiasan tambahan",
      "Gantungan logam premium",
      "Packaging gift box eksklusif",
      "Kartu ucapan handmade",
    ],
    popular: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

export function ProductsSection() {
  return (
    <section
      id="product"
      className="relative py-24 sm:py-32"
      aria-labelledby="products-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, oklch(0.90 0.03 80 / 0.4), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            — Produk Kami
          </p>
          <h2
            id="products-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Pilih Tier{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              Kreasimu
            </span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Setiap tier memberikan pengalaman custom art yang berbeda. Mulai dari
            basic hingga premium — semuanya handmade dengan penuh cinta.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.article
                key={product.tier}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-2 ${product.borderHover} ${product.shadowColor} hover:shadow-xl ${
                  product.popular ? "ring-2 ring-primary/40" : ""
                }`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
              >
                {/* Popular badge */}
                {product.popular && (
                  <div className="absolute -right-8 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-bold text-primary-foreground shadow-md">
                    POPULER
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white shadow-md`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3
                  className={`mt-6 text-2xl font-bold ${product.textColor}`}
                >
                  {product.tier}
                </h3>

                {/* Price */}
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {product.price}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${product.textColor}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`mt-8 w-full rounded-xl bg-gradient-to-r ${product.color} px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0`}
                >
                  Pesan Sekarang
                </button>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}