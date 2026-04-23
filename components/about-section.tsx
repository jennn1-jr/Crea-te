import { AlertTriangle, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">— Tentang Kami</p>
          <h2 id="about-heading" className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Limbah Kain, <br className="hidden sm:block" />
            Menjadi Karya <span className="text-primary">Seni Tangan</span>.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Problem card */}
          <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-destructive/40">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-destructive/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-destructive/30 bg-destructive/10 text-destructive-foreground">
                <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Masalah</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Limbah tekstil dan busana terus meningkat dan seringkali berakhir di Tempat Pembuangan Akhir (TPA) tanpa dimanfaatkan kembali. Generasi Z mencari produk <span className="font-semibold text-foreground">unik, personal, dan ramah lingkungan</span>, namun produsen massal hanya menawarkan aksesoris plastik dengan eksklusivitas rendah.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-destructive" aria-hidden="true" />
                  <span>Sisa kain perca dari penjahit dan konveksi tidak termanfaatkan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-destructive" aria-hidden="true" />
                  <span>Gen Z ingin aksesoris yang tidak diproduksi massal dan punya cerita.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-destructive" aria-hidden="true" />
                  <span>Kurangnya brand lokal yang mengkombinasikan seni & keberlanjutan.</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Solution card */}
          <article className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/40">
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Solusi Kami</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Crea&apos;Te mengolah limbah kain perca melalui konsep <span className="font-semibold text-foreground">upcycling</span> menjadi aksesori handmade modular 2-in-1 (gantungan kunci + boneka mini) dengan <span className="font-semibold text-foreground">lukisan manual custom art</span> dan teknik sasak artistik pada pinggiran kain.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  <span>Kerjasama dengan pengrajin lokal & konveksi untuk bahan baku limbah kain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  <span>Custom art dengan tinta tekstil, benang 3D, dan detail unik di tiap produk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                  <span>Model pre-order untuk eksklusivitas dan mencegah stok berlebih.</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
