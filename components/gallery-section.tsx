"use client"

import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"

const GALLERY_ITEMS = [
  {
    src: "/placeholder.jpg",
    alt: "Custom Boneka Gantungan Kunci - Basic Tier",
    caption: "Custom Boneka Gantungan Kunci",
    category: "Basic",
  },
  {
    src: "/placeholder.jpg",
    alt: "Boneka Gantungan Kunci Medium - Custom Art",
    caption: "Medium Tier - Custom Art",
    category: "Medium",
  },
  {
    src: "/placeholder.jpg",
    alt: "Premium Boneka Full Custom",
    caption: "Premium Tier - Full Custom",
    category: "Premium",
  },
  {
    src: "/placeholder.jpg",
    alt: "Detail Lukisan Tangan pada Kain",
    caption: "Detail Lukisan Tangan",
    category: "Proses",
  },
  {
    src: "/placeholder.jpg",
    alt: "Teknik Sasak Pinggiran Kain",
    caption: "Teknik Sasak Artistik",
    category: "Proses",
  },
  {
    src: "/placeholder.jpg",
    alt: "Packaging Gift Box Eksklusif",
    caption: "Packaging Gift Box",
    category: "Premium",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32"
      aria-labelledby="gallery-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.68 0.13 55 / 0.06), transparent 70%)",
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
            — Galeri Produk
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Inspirasi{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              Kreasi Kami
            </span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Lihat berbagai hasil karya handmade Crea&apos;Te — dari desain karakter
            custom hingga detail teknik artistik pada setiap produk.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.figure
              key={i}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/20">
                  <ImageIcon className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
              <figcaption className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.caption}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Note about real photos */}
        <motion.p
          className="mt-10 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Foto produk asli akan segera ditampilkan setelah produksi dimulai.
        </motion.p>
      </div>
    </section>
  )
}

