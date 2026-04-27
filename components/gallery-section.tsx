"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageIcon } from "lucide-react"

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/placeholder.jpg",
    alt: "Custom Boneka Gantungan Kunci - Basic Tier",
    caption: "Custom Boneka Gantungan Kunci",
    category: "Basic",
  },
  {
    id: 2,
    src: "/placeholder.jpg",
    alt: "Boneka Gantungan Kunci Medium - Custom Art",
    caption: "Medium Tier - Custom Art",
    category: "Medium",
  },
  {
    id: 3,
    src: "/placeholder.jpg",
    alt: "Premium Boneka Full Custom",
    caption: "Premium Tier - Full Custom",
    category: "Premium",
  },
  {
    id: 4,
    src: "/placeholder.jpg",
    alt: "Detail Lukisan Tangan pada Kain",
    caption: "Detail Lukisan Tangan",
    category: "Proses",
  },
  {
    id: 5,
    src: "/placeholder.jpg",
    alt: "Teknik Sasak Pinggiran Kain",
    caption: "Teknik Sasak Artistik",
    category: "Proses",
  },
  {
    id: 6,
    src: "/placeholder.jpg",
    alt: "Packaging Gift Box Eksklusif",
    caption: "Packaging Gift Box",
    category: "Premium",
  },
  {
    id: 7,
    src: "/placeholder.jpg",
    alt: "Detail Benang 3D Rambut",
    caption: "Detail Benang 3D",
    category: "Proses",
  },
  {
    id: 8,
    src: "/placeholder.jpg",
    alt: "Koleksi Warna dan Desain",
    caption: "Koleksi Warna",
    category: "Basic",
  },
]

const CATEGORIES = [
  { label: "Semua", value: "all" },
  { label: "Basic", value: "Basic" },
  { label: "Medium", value: "Medium" },
  { label: "Premium", value: "Premium" },
  { label: "Proses", value: "Proses" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: {
      duration: 0.4,
    },
  },
}

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

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

        {/* Filter buttons */}
        <motion.div
          className="mx-auto mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "border border-border bg-white text-foreground hover:border-primary/40 hover:bg-primary/5"
              }`}
              aria-pressed={activeFilter === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, i) => (
              <motion.figure
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/40 to-secondary/20">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/30">
                    <ImageIcon className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="mt-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Placeholder
                    </p>
                  </div>
                </div>
                <figcaption className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                    {item.caption}
                  </h3>
                  <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Counter and note */}
        <motion.div
          className="mx-auto mt-12 flex flex-col items-center justify-center gap-2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm font-medium text-foreground">
            Menampilkan{" "}
            <span className="font-bold text-primary">{filteredItems.length}</span> dari{" "}
            <span className="font-bold text-primary">{GALLERY_ITEMS.length}</span> produk
          </p>
          <p className="text-xs text-muted-foreground">
            Foto produk asli akan segera ditampilkan setelah produksi dimulai.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

