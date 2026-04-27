import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { GallerySection } from "@/components/gallery-section"
import { PreorderSection } from "@/components/preorder-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatsSection } from "@/components/stats-section"
import { FaqSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section"
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
        <AboutSection />
        <StatsSection />
        <VisionMissionSection />
        <FeaturesSection />
        <ProductsSection />
        <GallerySection />
        <PreorderSection />
        <TestimonialSection />
        <FaqSection />
        <TeamSection />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
