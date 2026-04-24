import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Create — Ubah Limbah Jadi Karya",
  description:
    "Create adalah proyek kewirausahaan mahasiswa (PMW) yang mengubah limbah menjadi produk bernilai tinggi. Kreatif, berkelanjutan, dan berdampak.",
  generator: "v0.app",
  keywords: ["PMW", "Create", "Upcycling", "Fashion Berkelanjutan", "Limbah Tekstil", "Startup Mahasiswa"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
