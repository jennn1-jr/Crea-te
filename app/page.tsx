import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { PromoVideoSection } from "@/components/promo-video-section"
import { AboutSection } from "@/components/about-section"

import { FeaturesSection } from "@/components/features-section"
import { PromoFlyersSection } from "@/components/promo-flyers-section"
import { ProductsSection } from "@/components/products-section"
import { GallerySection } from "@/components/gallery-section"
import { PreorderSection } from "@/components/preorder-section"
import { FaqSection } from "@/components/faq-section"
import { ContactCTA } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDecorations } from "@/components/floating-decorations"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FloatingDecorations />
      <SiteNavbar />
      <main>
        <HeroSection />
        <PromoVideoSection />
        <AboutSection />

        <FeaturesSection />
        <PromoFlyersSection />
        <ProductsSection />
        <GallerySection />
        <PreorderSection />
        <FaqSection />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
