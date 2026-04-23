import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TeamSection } from "@/components/team-section"
import { ContactCTA } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TeamSection />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
