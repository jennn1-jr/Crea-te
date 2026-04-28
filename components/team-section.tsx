"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Github, Instagram, Loader2, AlertCircle } from "lucide-react"

type Member = {
  id: number
  name: string
  role: string
  photo_url: string
  bio: string
  github_url?: string
  instagram_url?: string
}

const SOCIAL_FALLBACK: Record<string, { github_url: string; instagram_url: string }> = {
  "Mia Audina Ika Aprilani": { github_url: "#", instagram_url: "#" },
  "Jenar Aditiya Bagaskara": { github_url: "https://github.com/jennn1-jr", instagram_url: "https://www.instagram.com/jenar_aditiya?igsh=MWxzdjVwbjN4Mm5heA==" },
  "Muhammad Noor Abizar": { github_url: "#", instagram_url: "#" },
}

const FALLBACK_TEAM: Member[] = [
  {
    id: 1,
    name: "Mia Audina Ika Aprilani",
    role: "Lead Designer",
    photo_url: "/team/mia.jpg",
    bio: "Pemimpin kreatif yang menggambar custom art karakter pada kain",
    github_url: "#",
    instagram_url: "#",
  },
  {
    id: 2,
    name: "Jenar Aditiya Bagaskara",
    role: "Manajer Pemasaran & Keuangan",
    photo_url: "/team/jenar.jpg",
    bio: "Mengelola strategi digital dan operasional keuangan",
    github_url: "https://github.com/jennn1-jr",
    instagram_url: "https://www.instagram.com/jenar_aditiya?igsh=MWxzdjVwbjN4Mm5heA==",
  },
  {
    id: 3,
    name: "Muhammad Noor Abizar",
    role: "Manajer Produksi",
    photo_url: "/team/noor.jpg",
    bio: "Bertanggung jawab atas kelancaran proses produksi",
    github_url: " https://github.com/mnabizar",
    instagram_url: "https://www.instagram.com/mnabizar",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

export function TeamSection() {
  const [team, setTeam] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTeam = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const res = await fetch("/api/team", { signal: controller.signal })
      clearTimeout(timeoutId)

      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`)
      }

      const data = await res.json()

      let members: Member[] = []
      if (Array.isArray(data) && data.length > 0) {
        if (
          data.length === 2 &&
          Array.isArray(data[0]) &&
          typeof data[0][0] === "object" &&
          data[0][0] !== null
        ) {
          members = data[0]
        } else {
          members = data
        }
      }

      const validMembers = members
        .filter((m) => m && typeof m.name === "string" && m.name.length > 0)
        .map((m) => {
          const fallback = SOCIAL_FALLBACK[m.name]
          if (fallback) {
            return {
              ...m,
              github_url: m.github_url || fallback.github_url,
              instagram_url: m.instagram_url || fallback.instagram_url,
            }
          }
          return m
        })

      if (validMembers.length > 0) {
        setTeam(validMembers)
      } else {
        setTeam(FALLBACK_TEAM)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
      setTeam(FALLBACK_TEAM)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTeam()
  }, [fetchTeam])

  return (
    <section id="team" className="relative py-20 sm:py-28" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            — Tentang Kami
          </p>
          <h2
            id="team-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Wajah di balik{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Crea&apos;Te
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tiga mahasiswa kreatif bersatu menghadirkan merchandise handmade
            eksklusif dengan sentuhan seni dan kepedulian lingkungan.
          </p>
        </motion.div>

        {loading ? (
          <div className="mt-12 flex flex-col items-center gap-3">
            <Loader2 className="h-7 w-7 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Memuat data tim...</p>
          </div>
        ) : error ? (
          <div className="mt-12 flex flex-col items-center gap-3">
            <AlertCircle className="h-7 w-7 text-[oklch(0.58_0.15_40)]" />
            <p className="text-sm text-muted-foreground">
              Gagal memuat data dari database. Menampilkan data default.
            </p>
            <button
              onClick={fetchTeam}
              className="mt-1 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Coba Lagi
            </button>
          </div>
        ) : team.length === 0 ? (
          <div className="mt-12 text-center text-sm text-muted-foreground">
            Belum ada data tim
          </div>
        ) : (
          <ul
            role="list"
            className="mx-auto mt-12 flex flex-wrap justify-center gap-6"
          >
            {team.map((member, i) => (
              <motion.li
                key={member.id}
                className="flex w-60 flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
              >
                {/* Small circular photo */}
                <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full ring-2 ring-primary/15">
                  {member.photo_url && member.photo_url !== "/placeholder.svg" ? (
                    <img
                      src={member.photo_url}
                      alt={`Foto ${member.name}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none"
                      }}
                    />
                  ) : null}
                </div>

                {/* Info */}
                <h3 className="mt-4 text-sm font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={member.github_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub ${member.name}`}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={member.instagram_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Instagram ${member.name}`}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
                  >
                    <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

