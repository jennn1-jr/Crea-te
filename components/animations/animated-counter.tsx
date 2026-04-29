"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number | string
  duration?: number
  label: string
  className?: string
}

export function AnimatedCounter({ value, duration = 2, label, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState<string>("0")
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    if (value === "∞" || value === "Infinity") {
      const steps = ["0", "∞"]
      let step = 0
      const interval = setInterval(() => {
        step++
        setDisplayValue(steps[step] || "∞")
        if (step >= steps.length - 1) clearInterval(interval)
      }, duration * 500)
      return () => clearInterval(interval)
    }

    const numericValue = Number(value)
    if (isNaN(numericValue)) {
      setDisplayValue(String(value))
      return
    }

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numericValue)
      setDisplayValue(String(current))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={`flex flex-col items-center text-center ${className || ""}`}>
      <motion.dd
        className="order-1 font-mono text-3xl font-bold text-foreground sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {displayValue}
      </motion.dd>
      <dt className="order-2 mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
        {label}
      </dt>
    </div>
  )
}