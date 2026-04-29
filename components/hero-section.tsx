"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedCounter } from "@/components/animations/animated-counter"

/* ═══════════════════════════════════════════
   Seeded PRNG — ensures server/client match
   ═══════════════════════════════════════════ */
function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const COLORS = [
  "#c45d3e", "#d97a3b", "#6b9e7a", "#8e6bb0",
  "#c4a63a", "#a0522d", "#5a9e9e", "#9e7a5a",
]

const FABRIC_SHAPES = [
  "3px 14px 5px 16px", "10px 4px 12px 6px", "6px 16px 3px 10px",
  "14px 6px 16px 4px", "5px 10px 8px 14px", "12px 3px 6px 15px",
]

const BRUSH_COLORS = ["#c45d3e", "#6b9e7a", "#d97a3b", "#8e6bb0", "#7a4a2a"]

/* ── Generate deterministic element configs ── */
function generateElements() {
  const rand = seededRandom(42)
  const types = [
    "fabric", "fabric", "fabric", "fabric", "fabric", "fabric", "fabric",
    "paintbrush", "paintbrush", "paintbrush",
    "keyring", "keyring",
    "yarn", "yarn", "yarn",
    "paintdrop", "paintdrop", "paintdrop",
  ]
  return types.map((type, i) => {
    const colorIdx = Math.floor(rand() * COLORS.length)
    return {
      id: i,
      type,
      x: rand() * 85 + 5,            // 5-90% horizontal
      size: 50 + rand() * 40,          // 50-90px (bigger!)
      delay: rand() * 8,               // 0-8s stagger
      duration: 12 + rand() * 8,       // 12-20s cycle
      swayAmount: 20 + rand() * 40,    // 20-60px horizontal sway
      color: COLORS[colorIdx],
      shape: FABRIC_SHAPES[Math.floor(rand() * FABRIC_SHAPES.length)],
      brushColor: type === "paintbrush"
        ? BRUSH_COLORS[Math.floor(rand() * BRUSH_COLORS.length)]
        : undefined,
    }
  })
}

const FALLING_ELEMENTS = generateElements()

/* ═══════════════════════════════════════════
   Visual element components
   ═══════════════════════════════════════════ */

/* ── Fabric scrap with sasak/frayed edge ── */
function FabricScrap({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  return (
    <div
      className="relative"
      style={{
        width: el.size * 1.5,
        height: el.size,
        background: `linear-gradient(135deg, ${el.color}, ${el.color}cc)`,
        borderRadius: el.shape || "4px 12px 6px 14px",
        boxShadow: `0 3px 12px ${el.color}55, 0 0 0 1px ${el.color}44`,
      }}
    >
      {/* Weave texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          borderRadius: "inherit",
          opacity: 0.18,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)
          `,
        }}
      />
      {/* Sasak right fringe */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          right: -5,
          width: 8,
          opacity: 0.9,
          background: `repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, ${el.color}99 2px, ${el.color}99 7px, transparent 7px, transparent 9px)`,
        }}
      />
      {/* Sasak bottom fringe */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: -6,
          height: 7,
          opacity: 0.9,
          background: `repeating-linear-gradient(to right, transparent 0px, transparent 3px, ${el.color}99 3px, ${el.color}99 8px, transparent 8px, transparent 10px)`,
        }}
      />
    </div>
  )
}

/* ── Paint brush ── */
function PaintBrush({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  return (
    <div className="flex flex-col items-center" style={{ transform: "rotate(-15deg)" }}>
      {/* Wood handle */}
      <div
        style={{
          width: 8,
          height: el.size * 0.8,
          background: "linear-gradient(to right, #A07828, #D4A843, #A07828)",
          borderRadius: "3px 3px 0 0",
          boxShadow: "1px 0 3px rgba(0,0,0,0.2)",
        }}
      />
      {/* Metal ferrule */}
      <div
        style={{
          width: 13,
          height: 9,
          background: "linear-gradient(to bottom, #D0D0D0, #909090, #D0D0D0)",
          borderRadius: 1,
        }}
      />
      {/* Colored bristles */}
      <div
        style={{
          width: 17,
          height: el.size * 0.4,
          background: `linear-gradient(to bottom, ${el.brushColor || el.color}, ${el.brushColor || el.color}bb)`,
          borderRadius: "0 0 5px 5px",
          clipPath: "polygon(0% 0%, 100% 0%, 82% 100%, 18% 100%)",
        }}
      />
    </div>
  )
}

/* ── Key ring ── */
function KeyRing({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  return (
    <div className="flex flex-col items-center">
      {/* Ring circle */}
      <div
        style={{
          width: el.size * 0.75,
          height: el.size * 0.75,
          borderRadius: "50%",
          border: `4px solid ${el.color}`,
          boxShadow: `0 0 10px ${el.color}55, inset 0 0 6px ${el.color}33`,
          background: `${el.color}12`,
        }}
      />
      {/* Key stem */}
      <div
        style={{
          width: 9,
          height: 14,
          background: `linear-gradient(to bottom, ${el.color}, ${el.color}bb)`,
          borderRadius: "2px 2px 3px 3px",
          marginTop: -5,
        }}
      />
    </div>
  )
}

/* ── Yarn spool ── */
function YarnSpool({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  return (
    <div className="relative">
      <div
        className="rounded-full"
        style={{
          width: el.size * 0.65,
          height: el.size * 0.65,
          background: `radial-gradient(circle at 35% 35%, ${el.color}dd, ${el.color})`,
          boxShadow: `inset -3px -3px 8px ${el.color}88, inset 3px 3px 8px rgba(255,255,255,0.25), 0 3px 10px ${el.color}55`,
        }}
      >
        {/* Thread ring */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 3,
            border: `1.5px dashed ${el.color}55`,
          }}
        />
        {/* Loose thread */}
        <div
          className="absolute"
          style={{
            width: el.size * 1.1,
            height: 3,
            background: el.color,
            borderRadius: 1.5,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-20deg)",
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  )
}

/* ── Paint drop with splatter ── */
function PaintDrop({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  return (
    <div className="relative">
      {/* Main drop */}
      <div
        style={{
          width: el.size * 0.6,
          height: el.size * 0.7,
          background: el.color,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          boxShadow: `0 3px 10px ${el.color}55`,
        }}
      />
      {/* Splatter dots */}
      <div
        className="absolute rounded-full"
        style={{ width: 7, height: 7, background: el.color, top: -3, right: -6, opacity: 0.7 }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 5, height: 5, background: el.color, top: 4, right: -8, opacity: 0.5 }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 5, height: 5, background: el.color, bottom: -3, left: -6, opacity: 0.4 }}
      />
    </div>
  )
}

/* ── Dispatcher ── */
function VisualElement({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  switch (el.type) {
    case "fabric": return <FabricScrap el={el} />
    case "paintbrush": return <PaintBrush el={el} />
    case "keyring": return <KeyRing el={el} />
    case "yarn": return <YarnSpool el={el} />
    case "paintdrop": return <PaintDrop el={el} />
    default: return null
  }
}

/* ═══════════════════════════════════════════
   Falling element wrapper — Framer Motion
   ═══════════════════════════════════════════ */
function FallingElement({ el }: { el: (typeof FALLING_ELEMENTS)[0] }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${el.x}%`,
        top: -el.size - 20,               // start above viewport
        pointerEvents: "none",
        zIndex: 2,
        opacity: 0.75,
      }}
      animate={{
        y: [0, `calc(100vh + ${el.size + 40}px)`],   // fall to below viewport
        rotate: [-30, 30, -20, 40, -30],               // gentle wobble
        opacity: [0, 0.75, 0.75, 0.75, 0],
      }}
      transition={{
        y: {
          duration: el.duration,
          repeat: Infinity,
          ease: "linear",
          delay: el.delay,
        },
        rotate: {
          duration: el.duration * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: el.delay,
        },
        opacity: {
          duration: el.duration,
          repeat: Infinity,
          ease: "linear",
          delay: el.delay,
          times: [0, 0.08, 0.85, 0.92, 1],
        },
      }}
    >
      <VisualElement el={el} />
    </motion.div>
  )
}

/* ═══════════════════════════════════════════
   Hero Section
   ═══════════════════════════════════════════ */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-x-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, oklch(0.90 0.04 85 / 0.6), transparent 70%)",
        }}
      />

      {/* ✨ Falling elements — Framer Motion driven */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-visible"
        style={{ zIndex: 2 }}
      >
        {FALLING_ELEMENTS.map((el) => (
          <FallingElement key={el.id} el={el} />
        ))}
      </div>

      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-[100px]"
        style={{ zIndex: 0, background: "oklch(0.66 0.07 140 / 0.25)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full blur-[120px]"
        style={{ zIndex: 0, background: "oklch(0.68 0.13 55 / 0.2)" }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Program Mahasiswa Wirausaha 2026
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Your Personality,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-[oklch(0.66_0.07_140)] bg-clip-text text-transparent">
              Hand-Painted on Fabric
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            Crea&apos;Te menghadirkan aksesori handmade eksklusif dari limbah kain
            perca dengan teknik lukis tangan custom. Setiap boneka gantungan kunci
            adalah wearable art yang unik, personal, dan ramah lingkungan.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            <Link
              href="#product"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Lihat Produk
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-white/80 hover:-translate-y-0.5"
            >
              Pelajari Lebih Lanjut
            </Link>
          </motion.div>

          <motion.dl
            className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedCounter value={3} label="Anggota Tim" duration={4} />
            <AnimatedCounter value={3} label="Tier Produk" duration={4} />
            <AnimatedCounter value="∞" label="Customisasi" duration={4} />
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
