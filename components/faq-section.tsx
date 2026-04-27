"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

const FAQS = [
  {
    question: "Berapa lama waktu pengerjaan untuk satu boneka custom?",
    answer:
      "Estimasi waktu pengerjaan adalah 3–7 hari kerja tergantung antrean dan kompleksitas desain. Untuk tier Premium dengan detail lebih banyak bisa memakan waktu hingga 10 hari kerja.",
  },
  {
    question: "Apakah bisa request desain karakter dari foto?",
    answer:
      "Tentu! Kamu bisa kirim referensi foto, ilustrasi, atau deskripsi karakter yang diinginkan. Tim desainer kami akan buatkan sketsa custom art-nya untuk persetujuan sebelum produksi.",
  },
  {
    question: "Bahan kain yang digunakan aman dan ramah lingkungan?",
    answer:
      "Ya, kami menggunakan limbah kain perca dari penjahit lokal dan konveksi yang tidak lagi dipakai. Dengan upcycling, kami mengurangi limbah tekstil dan memberinya nilai baru sebagai karya seni.",
  },
  {
    question: "Apakah boneka bisa dicuci?",
    answer:
      "Kami merekomendasikan pembersihan spot cleaning menggunakan kain lembab. Hindari mencuci mesin atau merendam karena tinta tekstil dan detail benang 3D bisa rusak.",
  },
  {
    question: "Bisa kirim ke luar kota atau luar pulau?",
    answer:
      "Bisa! Kami bekerja sama dengan jasa pengiriman lokal untuk pengiriman dalam kota, dan ekspedisi nasional untuk luar kota/pulau. Ongkir ditanggung pembeli sesuai lokasi.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative overflow-x-hidden border-y border-border bg-card/30 py-24 sm:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            — FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Pertanyaan{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              yang Sering Diajukan
            </span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Temukan jawaban atas pertanyaan umum seputar produk, pemesanan,
            dan pengiriman Crea&apos;Te.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-3xl gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FAQS.map((faq) => (
            <motion.details
              key={faq.question}
              variants={itemVariants}
              className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 open:border-primary/30 open:shadow-md hover:-translate-y-0.5 hover:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <HelpCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {faq.question}
                </span>
                <span className="shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

