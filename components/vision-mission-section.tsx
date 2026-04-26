"use client"

import { motion } from "framer-motion"
import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section id="vision-misi" className="relative py-24 sm:py-32" aria-labelledby="vision-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 50%, oklch(0.66 0.07 140 / 0.05), transparent 60%)",
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
            — Visi & Misi
          </p>
          <h2
            id="vision-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Arah & Tujuan{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Crea&apos;Te
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Visi card */}
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
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.58_0.15_40/0.1)] text-[oklch(0.45_0.10_38)]">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Visi Kami</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Menjadi pelopor{" "}
                <span className="font-semibold text-foreground">upcycling tekstil</span>{" "}
                di Indonesia yang mengubah limbah kain menjadi karya seni tangan bernilai
                tinggi, dicintai generasi Z, dan menginspirasi gaya hidup{" "}
                <span className="font-semibold text-foreground">berkelanjutan</span>{" "}
                bagi semua kalangan.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Menciptakan brand lokal yang diakui secara nasional untuk inovasi upcycling.",
                  "Menginspirasi generasi muda untuk peduli pada lingkungan melalui seni.",
                  "Membuktikan bahwa limbah bisa menjadi karya yang estetis dan bernilai ekonomis.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[oklch(0.58_0.15_40)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Misi card */}
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
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Misi Kami</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Kami berkomitmen untuk menjalankan setiap langkah dengan{" "}
                <span className="font-semibold text-foreground">keberlanjutan</span>{" "}
                dan <span className="font-semibold text-foreground">kolaborasi</span>{" "}
                sebagai nilai utama dalam setiap produk yang kami ciptakan.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {[
                  "Mengumpulkan limbah kain perca dari pengrajin lokal & konveksi sebagai bahan baku utama.",
                  "Memberdayakan pengrajin lokal melalui kolaborasi dan pelatihan keterampilan.",
                  "Menciptakan produk handmade unik dengan custom art dan teknik sasak artistik.",
                  "Mengedukasi generasi muda tentang pentingnya ekonomi sirkular dan fashion berkelanjutan.",
                  "Menerapkan sistem pre-order untuk mengurangi overproduksi dan limbah.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[oklch(0.66_0.07_140)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
