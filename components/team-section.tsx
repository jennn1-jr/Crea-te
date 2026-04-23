"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

type Member = {
  id: number
  name: string
  role: string
  photo_url: string
  bio: string
}

// Dummy data fallback sesuai proposal Crea'Te
const FALLBACK_TEAM: Member[] = [
  {
    id: 1,
    name: "Mia Audina Ika Aprilani",
    role: "Lead Designer",
    photo_url: "/team/mia.jpg",
    bio: "Pemimpin kreatif yang menggambar custom art karakter pada kain",
  },
  {
    id: 2,
    name: "Jenar Aditiya Bagaskara",
    role: "Manajer Pemasaran & Keuangan",
    photo_url: "/team/jenar.jpg",
    bio: "Mengelola strategi digital dan operasional keuangan",
  },
  {
    id: 3,
    name: "Muhammad Noor Abizar",
    role: "Manajer Produksi",
    photo_url: "/team/noor.jpg",
    bio: "Bertanggung jawab atas kelancaran proses produksi",
  },
]

export function TeamSection() {
  const [team, setTeam] = useState<Member[]>(FALLBACK_TEAM)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => {
        console.log("[v0] Team data received:", data)
        // Ensure data is always an array
        if (Array.isArray(data) && data.length > 0) {
          setTeam(data)
        } else {
          console.warn("[v0] Team data is not an array or empty, using fallback")
          setTeam(FALLBACK_TEAM)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error("[v0] Error fetching team:", err)
        setTeam(FALLBACK_TEAM)
        setLoading(false)
      })
  }, [])

  return (
    <section id="team" className="relative py-24 sm:py-32" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">— Tim Kami</p>
          <h2 id="team-heading" className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Wajah di balik <span className="text-primary">Crea&apos;Te</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tiga mahasiswa kreatif bersatu menghadirkan merchandise handmade eksklusif dengan sentuhan seni dan kepedulian lingkungan.
          </p>
        </div>

        {loading ? (
          <div className="mt-16 text-center text-muted-foreground">Loading tim...</div>
        ) : team.length === 0 ? (
          <div className="mt-16 text-center text-muted-foreground">Belum ada data tim</div>
        ) : (
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member) => (
              <li
                key={member.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.photo_url || "/placeholder.svg"}
                    alt={`Foto ${member.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>

                <div className="relative flex flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                    <p className="mt-0.5 text-sm text-primary">{member.role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label={`LinkedIn ${member.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      aria-label={`Instagram ${member.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                    >
                      <Instagram className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
