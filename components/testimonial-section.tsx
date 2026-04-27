"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sinta Rahman",
    role: "Mahasiswa, Universitas Indonesia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content:
      "Boneka gantungan kunci ini so cute! Designnya exactly sesuai yang saya request, dan kualitasnya premium banget. Suka banget sama detail benang 3D nya. Definitely bakal jadi favorite gift saya buat temen!",
    rating: 5,
  },
  {
    name: "Ahmad Rizky",
    role: "Profesional Muda, Jakarta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content:
      "Unique banget konsep upcycling kain perca jadi karya seni ini. Proses komunikasinya smooth, design revisi cepat. Hasilnya layak jadi merchandise brand pribadi saya. Worth every rupiah!",
    rating: 5,
  },
  {
    name: "Dewi Kusuma",
    role: "Content Creator, TikTok",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content:
      "As content creator, aku selalu nyari product unik untuk di-showcase. Crea'Te ini perfect! Followers suka banget, dan sustainability message nya juga resonates dengan audience. Highly recommended!",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
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

export function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32"
      aria-labelledby="testimonials-heading"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.66 0.07 140 / 0.06), transparent 70%)",
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
            — Suara Mereka
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              Pelanggan Kami
            </span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Lihat pengalaman pelanggan kami yang sudah mempercayai Crea&apos;Te untuk
            menciptakan aksesori handmade eksklusif mereka.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              variants={cardVariants}
            >
              {/* Rating stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Divider */}
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {/* Author info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            Jadilah bagian dari komunitas Crea&apos;Te yang terus berkembang.{" "}
            <a
              href="#contact"
              className="font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Pre-order sekarang
            </a>
            {" "}dan dapatkan kreasi handmade eksklusifmu!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
