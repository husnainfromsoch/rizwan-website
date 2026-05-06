"use client"

import { ScrollReveal } from "./scroll-reveal"
import { useState } from "react"

export function ContactSection() {
  const [showCalendar] = useState(true) // calendar always visible

  return (
    <section id="contact" className="bg-charcoal py-[140px] px-8 md:px-[60px] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="ghost-text-coral font-serif italic text-[clamp(5rem,15vw,16rem)] font-black whitespace-nowrap">
          LET&apos;S BUILD
        </span>
      </div>
      
      {/* Content */}
      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="section-label mb-4">06 — Let&apos;s Talk</p>
          <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-6">
            Ready to <em>automate</em> your edge?
          </h2>
          <p className="font-sans font-light text-cream/70 text-lg mb-10">
            Whether you need a full automation overhaul, a single workflow built, or a keynote that shifts perspectives—I&apos;m here to help.
          </p>
          <a
            href="mailto:riz@withsoch.com"
            className="inline-block font-serif italic text-coral text-[clamp(1.5rem,3vw,2.5rem)] underline underline-offset-8 decoration-coral hover:text-coral-light transition-colors"
          >
            riz@withsoch.com
          </a>

          {showCalendar && (
            <div style={{ width: "100%", maxWidth: "100%", overflow: "hidden", marginTop: "2.5rem" }}>
              <iframe
                src="https://cal.com/consult-with-riz"
                style={{
                  width: "100%",
                  height: "900px",
                  border: "3px solid transparent",
                  borderRadius: "20px",
                  background: "#000"
                }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
