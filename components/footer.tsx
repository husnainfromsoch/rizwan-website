"use client"

import Link from "next/link"

const footerLinks = [
  { href: "https://withsoch.com", label: "Soch" },
  { href: "https://linkedin.com/in/riz", label: "LinkedIn" },
  { href: "https://x.com/riz", label: "X" },
]

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-10 px-8 md:px-[60px]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.68rem] text-cream/25">
          © 2026 Riz · Tallinn, Estonia
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.68rem] text-cream/25 hover:text-coral transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
