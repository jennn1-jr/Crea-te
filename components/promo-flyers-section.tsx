"use client"

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const TIERS = [
  { id: 0, label: 'THE BASIC', subtitle: 'Basic Tier - Full Custom', image: '/assets/basic1.jpg' },
  { id: 1, label: 'THE MEDIUM', subtitle: 'Medium Tier - Half Body', image: '/assets/medium1.jpg' },
  { id: 2, label: 'THE PREMIUM', subtitle: 'Premium Tier - Full Custom', image: '/assets/premium1.jpg' },
  { id: 3, label: 'THE PRICE', subtitle: 'Price Tier List', image: '/assets/price.jpg' }
]

// Create infinite loop: clone last 2 items di awal, clone first 2 items di akhir
const INFINITE_TIERS = [...TIERS.slice(-2), ...TIERS, ...TIERS.slice(0, 2)]

function PromoFlyersSection() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start at first real item
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const cardWidth = 320 // lg width
  const gap = 32 // lg gap-8

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 4000) // Rotate setiap 4 detik

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = currentIndex * (cardWidth + gap)
      
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: isTransitioning ? 'smooth' : 'auto'
      })

      // Check if we need to jump (infinite loop effect)
      if (currentIndex >= TIERS.length + 2) {
        // Reached the cloned items at end, jump back to real first item
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(2)
        }, 400)
      } else if (currentIndex <= 0) {
        // Reached the cloned items at start, jump to real last item
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentIndex(TIERS.length + 1)
        }, 400)
      } else {
        setIsTransitioning(true)
      }
    }
  }, [currentIndex])

  return (
    <section className='w-full h-screen min-h-screen bg-[#F4F0EB] overflow-hidden flex items-center justify-center'>
      <div className='w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-12'>
        <div
          ref={scrollContainerRef}
          className='h-full flex gap-6 lg:gap-8 overflow-hidden items-center py-8'
          style={{
            width: '100%',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {INFINITE_TIERS.map((tier, index) => (
            <div
              key={`${tier.id}-${index}`}
              className='flex-shrink-0 group'
              style={{
                minWidth: 'calc(27% - 1rem)'
              }}
            >
              <div className='relative w-full aspect-[3/4] transition-all duration-500'>
                {/* Tilted Card Container */}
                <div className={`w-full h-full -rotate-4 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105`}>
                  <div className='w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden relative'>
                    <Image
                      src={tier.image}
                      alt={tier.label}
                      fill
                      className='object-cover w-full h-full'
                      sizes='(max-width: 768px) 50vw, 50vw'
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PromoFlyersSection }

