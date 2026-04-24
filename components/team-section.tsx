
"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Loader2, AlertCircle } from "lucide-react"

type Member = {
  id: number
  name: string
  role: string
  photo_url: string
  bio: string
}

const FALLBACK_TEAM: Member[] = [
  {
    id: 1,
    name: "Mia Audina Ika Aprilani",
    role: "Lead Designer",
    photo_url: "/placeholder.svg",
    bio: "Pemimpin kreatif yang menggambar custom art karakter pada kain",
  },
  {
    id: 2,
    name: "Jenar Aditiya Bagaskara",
    role: "Manajer Pemasaran & Keuangan",
    photo_url: "/placeholder.svg",
    bio: "Mengelola strategi digital dan operasional keuangan",
  },
  {
    id: 3,
    name: "Muhammad Noor Abizar",
    role: "Manajer Produksi",
    photo_url: "/placeholder.svg",
    bio: "Bertanggung jawab atas kelancaran proses produksi",
  },
]

const memberColors = [
  { bg: "from-[oklch(0.58_0.15_40/0.12)] to-[oklch(0.58_0.15_40/0.04)]", text: "text-[oklch(0.45_0.10_38)]" },
  { bg: "from-[oklch(0.66_0.07_140/0.12)] to-[oklch(0.66_0.07_140/0.04)]", text: "text-[oklch(0.40_0.06_140)]" },
  { bg: "from-[oklch(0.68_0.13_55/0.12)] to-[oklch(0.68_0.13_55/0.04)]", text: "text-[oklch(0.45_0.10_50)]" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      // Ditambahkan "as const" di sini agar error hilang
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

      const validMembers = members.filter(
        (m) => m && typeof m.name === "string" && m.name.length > 0,
      )

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
    <section id="team" className="relative py-24 sm:py-32" aria-labelledby="team-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, oklch(0.68 0.13 55 / 0.06), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            — Tim Kami
          </p>
          <h2
            id="team-heading"
            className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Wajah di balik{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Crea&apos;Te
            </span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tiga mahasiswa kreatif bersatu menghadirkan merchandise handmade
            eksklusif dengan sentuhan seni dan kepedulian lingkungan.
          </p>
        </motion.div>

        {loading ? (
          <div className="mt-16 flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Memuat data tim...</p>
          </div>
        ) : error ? (
          <div className="mt-16 flex flex-col items-center gap-3">
            <AlertCircle className="h-8 w-8 text-[oklch(0.58_0.15_40)]" />
            <p className="text-sm text-muted-foreground">
              Gagal memuat data dari database. Menampilkan data default.
            </p>
            <button
              onClick={fetchTeam}
              className="mt-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Coba Lagi
            </button>
          </div>
        ) : team.length === 0 ? (
          <div className="mt-16 text-center text-muted-foreground">
            Belum ada data tim
          </div>
        ) : (
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {team.map((member, i) => {
              const color = memberColors[i % memberColors.length]
              return (
                <motion.li
                  key={member.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={cardVariants}
                >
                  {/* Avatar */}
                  <div className="relative aspect-square overflow-hidden">
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${color.bg}`}
                    >
                      <span className={`text-5xl font-bold ${color.text}`}>
                        {member.name?.charAt(0) ?? "?"}
                      </span>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                    />
                  </div>

                  {/* Info */}
                  <div className="relative flex flex-col gap-3 p-5">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-primary">{member.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        aria-label={`LinkedIn ${member.name}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href="#"
                        aria-label={`Instagram ${member.name}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110"
                      >
                        <Instagram className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}