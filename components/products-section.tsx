"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Crown, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const iconMap: Record<string, any> = {
  Sparkles,
  Star,
  Crown,
}

// Fallback data jika API gagal & Template Warna UI
const FALLBACK_PRODUCTS = [
  {
    tier: "Basic",
    price: "Rp 30.000",
    icon: Sparkles,
    color: "from-[oklch(0.66_0.07_140)] to-[oklch(0.60_0.09_135)]",
    textColor: "text-[oklch(0.40_0.06_140)]",
    bgLight: "bg-[oklch(0.66_0.07_140/0.08)]",
    borderHover: "hover:border-[oklch(0.66_0.07_140/0.5)]",
    shadowColor: "hover:shadow-[oklch(0.66_0.07_140/0.15)]",
    features: [
      "Head only",
      "Simple bentuk & karakter",
      "Bisa karakter hewan",
      "Perca polos",
      "2-3 warna",
      "Simple sasak",
      "Packaging premium",
      "Free stiker",
    ],
    popular: false,
  },
  {
    tier: "Medium",
    price: "Rp 35.000-40.000",
    icon: Sparkles,
    color: "from-[oklch(0.68_0.13_55)] to-[oklch(0.62_0.15_48)]",
    textColor: "text-[oklch(0.45_0.10_50)]",
    bgLight: "bg-[oklch(0.68_0.13_55/0.08)]",
    borderHover: "hover:border-[oklch(0.68_0.13_55/0.5)]",
    shadowColor: "hover:shadow-[oklch(0.68_0.13_55/0.15)]",
    features: [
      "Half body",
      "Simple full body",
      "Perca polos",
      "Detail rambut",
      "Free 1 manik-manik",
      "2-5 warna",
      "Full Sasak",
      "Packaging premium",
      "Free stiker",
    ],
    popular: false,
  },
  {
    tier: "Premium",
    price: "Rp 45.000",
    icon: Crown,
    color: "from-[oklch(0.58_0.15_40)] to-[oklch(0.50_0.17_35)]",
    textColor: "text-[oklch(0.35_0.10_38)]",
    bgLight: "bg-[oklch(0.58_0.15_40/0.08)]",
    borderHover: "hover:border-[oklch(0.58_0.15_40/0.5)]",
    shadowColor: "hover:shadow-[oklch(0.58_0.15_40/0.15)]",
    features: [
      "Full body",
      "Front & back design",
      "High detail",
      "Perca polos",
      "Perca request",
      "Detail rambut",
      "Free 2 Manik-manik",
      "Multi warna",
      "Full sasak",
      "Packaging premium",
      "Free Stiker",
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
  const [products, setProducts] = useState<any[]>(FALLBACK_PRODUCTS)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (!response.ok) throw new Error('Failed to fetch products')
        
        const data = await response.json()
        
        const formattedProducts = data.map((product: any) => {
          
          const styleTemplate = FALLBACK_PRODUCTS.find(
            (fallback) => fallback.tier.toLowerCase() === product.tier?.toLowerCase()
          ) || FALLBACK_PRODUCTS[0];

          // 1. PAKSA JADI STRING (Teks Murni)
          // Entah API ngasih Array atau String, kita sikat jadi Teks
          let rawFeatures = Array.isArray(product.features) 
            ? product.features.join('\n') 
            : String(product.features || '');

          // 2. POTONG BERDASARKAN ENTER & BERSIHKAN TANDA STRIP MANUAL
          let parsedFeatures = rawFeatures
            .split(/\r?\n/) // Potong setiap baris baru
            .map((f: string) => f.replace(/^-\s*/, '').trim()) // Hilangkan tanda strip (-) di depan kata biar rapi karena udah pakai centang
            .filter((f: string) => f.length > 0); // Buang baris yang isinya kosong

          const formatRupiah = (angka: number) => new Intl.NumberFormat('id-ID').format(angka);
          let displayPrice = product.price 
            ? `Rp ${formatRupiah(product.price)}` 
            : `Rp ${formatRupiah(product.price_min || product.priceMin)}${(product.price_max || product.priceMax) && (product.price_min || product.priceMin) !== (product.price_max || product.priceMax) ? ` - ${formatRupiah(product.price_max || product.priceMax)}` : ''}`;

          return {
            ...styleTemplate, 
            ...product,       
            icon: iconMap[product.icon] || styleTemplate.icon,
            price: displayPrice,
            features: parsedFeatures || styleTemplate.features, 
            popular: styleTemplate.popular, 
          }
        })
        
        setProducts(formattedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
        setProducts(FALLBACK_PRODUCTS)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section
      id="product"
      className="relative py-24 sm:py-32"
      aria-labelledby="products-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, oklch(0.90 0.03 80 / 0.4), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {products.map((product, i) => {
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
                {product.popular && (
                  <div className="absolute -right-8 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-bold text-primary-foreground shadow-md">
                    POPULER
                  </div>
                )}

                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white shadow-md`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <h3
                  className={`mt-6 text-2xl font-bold ${product.textColor}`}
                >
                  {product.tier}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {product.price}
                  </span>
                </div>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <ul className="flex-1 space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li
                      key={index}
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

                <Link
                  href="#contact"
                  className={`mt-8 block w-full rounded-xl bg-gradient-to-r ${product.color} px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0`}
                >
                  Pre-Order Sekarang
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}