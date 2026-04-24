"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg shadow-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="#home"
          className="group flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          aria-label="Crea'Te home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
            <Palette className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Crea<span className="text-primary">&apos;Te</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-lg transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:shadow-lg"
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
