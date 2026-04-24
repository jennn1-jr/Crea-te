"use client"

import { motion } from "framer-motion"

/* Floating patchwork / kain tembelan decorative elements */
type PatchConfig = {
  id: number
  shape: "circle" | "rounded" | "diamond"
  color: string
  size: number
  x: string
  y: string
  rotate: number
  duration: number
  delay: number
  yDrift: number
}

const PATCHES: PatchConfig[] = [
  { id: 1, shape: "circle", color: "oklch(0.66 0.07 140 / 0.12)", size: 60, x: "5%", y: "15%", rotate: 12, duration: 8, delay: 0, yDrift: 18 },
  { id: 2, shape: "rounded", color: "oklch(0.68 0.13 55 / 0.1)", size: 45, x: "92%", y: "25%", rotate: -8, duration: 10, delay: 1.5, yDrift: 22 },
  { id: 3, shape: "diamond", color: "oklch(0.58 0.15 40 / 0.08)", size: 35, x: "15%", y: "55%", rotate: 45, duration: 7, delay: 0.8, yDrift: 15 },
  { id: 4, shape: "circle", color: "oklch(0.72 0.10 300 / 0.08)", size: 50, x: "88%", y: "60%", rotate: 20, duration: 9, delay: 2, yDrift: 20 },
  { id: 5, shape: "rounded", color: "oklch(0.66 0.07 140 / 0.06)", size: 70, x: "8%", y: "80%", rotate: -15, duration: 11, delay: 0.5, yDrift: 16 },
  { id: 6, shape: "diamond", color: "oklch(0.68 0.13 55 / 0.07)", size: 30, x: "85%", y: "85%", rotate: 30, duration: 8.5, delay: 3, yDrift: 14 },
  { id: 7, shape: "circle", color: "oklch(0.58 0.15 40 / 0.06)", size: 40, x: "50%", y: "5%", rotate: 0, duration: 12, delay: 1, yDrift: 25 },
  { id: 8, shape: "rounded", color: "oklch(0.72 0.10 300 / 0.05)", size: 55, x: "40%", y: "92%", rotate: -22, duration: 9.5, delay: 2.5, yDrift: 18 },
]

function Patch({ patch }: { patch: PatchConfig }) {
  const shapeClass =
    patch.shape === "circle"
      ? "rounded-full"
      : patch.shape === "diamond"
        ? "rotate-45 rounded-md"
        : "rounded-2xl"

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute ${shapeClass}`}
      style={{
        left: patch.x,
        top: patch.y,
        width: patch.size,
        height: patch.size,
        background: patch.color,
      }}
      initial={{ opacity: 0, rotate: 0, y: 0 }}
      animate={{
        opacity: 1,
        y: [0, -patch.yDrift, 0],
        rotate: [0, patch.rotate, patch.rotate - 5, patch.rotate],
      }}
      transition={{
        duration: patch.duration,
        delay: patch.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function FloatingDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {PATCHES.map((p) => (
        <Patch key={p.id} patch={p} />
      ))}
    </div>
  )
}
