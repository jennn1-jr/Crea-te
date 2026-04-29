"use client"

import { motion } from "framer-motion"
import { Play, Volume2 } from "lucide-react"

export function PromoVideoSection() {
  return (
    <section 
      id="promo-video"
      className="relative w-screen overflow-x-clip px-0 pb-24 pt-16 sm:pt-24 sm:pb-32"
      style={{
        background: 
          "radial-gradient(ellipse 70% 50% at 50% 40%, oklch(0.90 0.04 85 / 0.4), transparent 70%)",
      }}
      aria-labelledby="promo-video-heading"
    >
      {/* Full viewport container */}
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Minimal header - subtle */}

        {/* FULL SCREEN VIDEO - covers entire section dengan white frame shadow */}
        <motion.div
          className="aspect-video w-full max-w-7xl mx-auto relative group rounded-2xl lg:rounded-3xl p-4 lg:p-8 bg-background/80 shadow-2xl shadow-white/20 border border-white/10 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            boxShadow: `
              0 25px 50px -12px rgba(255, 255, 255, 0.25),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              0 10px 30px -8px rgba(0, 0, 0, 0.1)
            `
          }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover !m-0 cursor-pointer transition-all duration-700 group-hover:scale-[1.02] rounded-xl lg:rounded-2xl"
            style={{
              // Full coverage dengan transparent bg
              width: '100%',
              height: '100%',
              background: 'transparent',
            }}
            poster="/assets/premium.jpg"
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
          >
            {/* Ganti src dengan video KWU kamu */}
            <source src="/video/kwu-promo.mp4" type="video/mp4" />
            <source src="/video/kwu-promo.webm" type="video/webm" />
            Video tidak didukung.
          </video>

          {/* Custom play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/95 px-8 py-6 backdrop-blur-2xl shadow-2xl border-2 border-white/60">
              <Play className="h-12 w-12 text-primary drop-shadow-2xl" />
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/90">
                <Volume2 className="h-4 w-4" />
                <span>Mainkan Video</span>
              </div>
            </div>
          </div>

          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 opacity-50 blur-xl -z-10" />
        </motion.div>

      </div>

    </section>
  )
}

