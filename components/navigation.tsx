"use client"

import Link from "next/link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#speaking", label: "Speaking" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-[60px] py-6" style={{
      background: "linear-gradient(to bottom, rgba(42,42,42,0.9) 0%, transparent 100%)"
    }}>
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <Link href="/" className="font-serif text-2xl font-bold text-cream hover:text-coral transition-colors">
          Riz.
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-cream/60 hover:text-coral transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
