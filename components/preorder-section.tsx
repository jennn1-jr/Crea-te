"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Palette, Scissors, Truck, HandHeart, ArrowRight } from "lucide-react"

const STEPS = [
  {
    icon: MessageCircle,
    title: "Hubungi Kami",
    description:
      "Chat via WhatsApp atau email untuk konsultasi desain karakter dan pilihan tier produk.",
    color: "from-[oklch(0.66_0.07_140)] to-[oklch(0.60_0.09_135)]",
    textColor: "text-[oklch(0.40_0.06_140)]",
    bgLight: "bg-[oklch(0.66_0.07_140/0.08)]",
  },
  {
    icon: Palette,
    title: "Konfirmasi Desain",
    description:
      "Tim kami akan mengirimkan sketsa custom art karaktermu. Revisi minor 1x gratis sebelum produksi.",
    color: "from-[oklch(0.68_0.13_55)] to-[oklch(0.62_0.15_48)]",
    textColor: "text-[oklch(0.45_0.10_50)]",
    bgLight: "bg-[oklch(0.68_0.13_55/0.08)]",
  },
  {
    icon: Scissors,
    title: "Produksi Handmade",
    description:
      "Proses jahit, lukis tangan, dan detail sasak artistik oleh tim produksi kami. Estimasi 3–7 hari kerja.",
    color: "from-[oklch(0.58_0.15_40)] to-[oklch(0.50_0.17_35)]",
    textColor: "text-[oklch(0.35_0.10_38)]",
    bgLight: "bg-[oklch(0.58_0.15_40/0.08)]",
  },
  {
    icon: Truck,
    title: "Packing & Pengiriman",
    description:
      "Produk dikemas dengan packaging sesuai tier (sederhana / premium / gift box) lalu dikirim ke alamatmu.",
    color: "from-[oklch(0.66_0.07_140)] to-[oklch(0.60_0.09_135)]",
    textColor: "text-[oklch(0.40_0.06_140)]",
    bgLight: "bg-[oklch(0.66_0.07_140/0.08)]",
  },
  {
    icon: HandHeart,
    title: "Terima & Review",
    description:
      "Unboxing boneka karaktermu dan bagikan pengalamanmu! Kami senang mendengar feedback darimu.",
    color: "from-[oklch(0.68_0.13_55)] to-[oklch(0.62_0.15_48)]",
    textColor: "text-[oklch(0.45_0.10_50)]",
    bgLight: "bg-[oklch(0.68_0.13_55/0.08)]",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function PreorderSection() {
  return (
    <section
      id="preorder"
      className="relative overflow-x-hidden py-24 sm:py-32"
      aria-labelledby="preorder-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 50%, oklch(0.66 0.07 140 / 0.06), transparent 60%)",
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
            — Cara Pesan
          </p>
          <h2
            id="preorder-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Pre-Order{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              Gampang Banget
            </span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Cukup 5 langkah sederhana untuk mendapatkan boneka karakter custom
            handmade eksklusif milikmu.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Step number */}
                <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-muted-foreground/10 transition-colors group-hover:text-primary/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Mulai Pre-Order Sekarang
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

