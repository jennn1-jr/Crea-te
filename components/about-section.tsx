"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-labelledby="about-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 30% 50%, oklch(0.58 0.15 40 / 0.05), transparent 60%)",
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
            — Mengapa Kami Ada
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Limbah Kain,{" "}
            <br className="hidden sm:block" />
            Menjadi Karya{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Seni Tangan
            </span>
            .
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Masalah card */}
          <motion.article
            className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-80"
              style={{ background: "oklch(0.58 0.15 40 / 0.12)" }}
            />
            <div className="relative">
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.58_0.15_40/0.1)] text-[oklch(0.45_0.10_38)]"
              >
                <AlertTriangle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Masalah</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Limbah tekstil terus meningkat dan sering terbuang sia-sia, sementara Generasi Z justru mencari produk yang unik, personal, dan bermakna. Sayangnya, pasar masih didominasi aksesoris massal yang minim nilai cerita dan keberlanjutan.{" "}
              </p>
            </div>
          </motion.article>

          {/* Solusi card */}
          <motion.article
            className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "oklch(0.66 0.07 140 / 0.15)" }}
            />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.66_0.07_140/0.12)] text-[oklch(0.40_0.06_140)]">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Solusi Kami</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Crea'Te mengubah limbah kain perca menjadi aksesori handmade 2-in-1 yang unik dengan custom art di setiap detailnya. Berkolaborasi dengan pengrajin lokal, kami menghadirkan produk eksklusif melalui sistem pre-order yang lebih berkelanjutan.{" "}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
