import { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { FloatingDecorations } from "@/components/floating-decorations"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { TeamSection } from "@/components/team-section"

export const metadata: Metadata = {
  title: "Tentang Kami — Crea'Te",
  description:
    "Kenali visi, misi, dan tim di balik Crea'Te dalam mengubah limbah kain perca menjadi karya seni tangan bernilai tinggi.",
}

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FloatingDecorations />
      <SiteNavbar />
      <main>
        <VisionMissionSection />
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  )
}

