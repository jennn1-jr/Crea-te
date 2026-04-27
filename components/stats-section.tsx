"use client"

import { motion } from "framer-motion"

const STATS = [
  {
    value: "100%",
    label: "Bahan Daur Ulang",
    description: "Semua bahan dari limbah kain perca berkualitas tinggi",
  },
  {
    value: "3+",
    label: "Pilihan Tier",
    description: "Dari Basic hingga Premium sesuai budget dan preferensi",
  },
  {
    value: "∞",
    label: "Customisasi",
    description: "Unlimited design possibilities untuk karya unikmu",
  },
  {
    value: "1-2 minggu",
    label: "Waktu Pengerjaan",
    description: "Cepat namun tetap detail dan berkualitas tinggi",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
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

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-20 sm:py-24"
      aria-labelledby="stats-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.68 0.13 55 / 0.05), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="stats-heading"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Kenapa Memilih{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              Crea&apos;Te
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              variants={itemVariants}
            >
              {/* Gradient overlay on hover */}
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.68 0.13 55 / 0.2), transparent)",
                }}
              />

              {/* Content */}
              <div className="relative">
                {/* Value */}
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Highlight section */}
        <motion.div
          className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Bergabunglah dengan gerakan sustainable fashion Gen Z
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Setiap pembelian Crea&apos;Te adalah voting untuk upcycling limbah kain
                dan supporting local artisans. Mari bersama ciptakan fashion yang lebih
                conscious!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
