"use client"

import { ScrollReveal } from "./scroll-reveal"

const testimonials = [
  {
    name: "Sarah K.",
    company: "TechStart Labs",
    quote:
      "Riz mapped our entire ops workflow in a single call and had the first automation running by end of week. We cut 12 hours of manual work from our team's schedule. I didn't expect it to happen that fast.",
  },
  {
    name: "Marcus D.",
    company: "Growpath",
    quote:
      "We were using five tools and nothing talked to each other. Riz built us a single flow in n8n that replaced two of those tools entirely. Six months later and it's never broken.",
  },
  {
    name: "Priya N.",
    company: "Founderflow",
    quote:
      "I booked Riz for a workshop and the team walked out with actual automations drafted, not just ideas. That's rare. Most workshops are theory with a slide deck.",
  },
]

export function SpeakingSection() {
  return (
    <section id="testimonials" className="bg-charcoal py-[120px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="section-label mb-4">03 — Testimonials</p>
            <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-4">
              What clients <em>say</em>
            </h2>
            <p className="font-sans font-light text-cream/50 text-lg">
              Real results from real founders
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.1} className="h-full">
              <div className="group flex flex-col gap-6 h-full bg-[#303030] border border-cream/10 rounded-sm p-10 shadow-lg shadow-black/20 hover:border-coral/30 transition-colors duration-300">
                {/* Decorative opening quote */}
                <span
                  className="font-serif text-[3.5rem] text-coral/20 leading-none select-none -mb-2"
                  aria-hidden
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="font-sans font-light text-cream/75 text-[1.05rem] leading-relaxed flex-1">
                  {t.quote}
                </p>

                {/* Client info */}
                <div className="border-t border-cream/10 pt-6">
                  <p className="font-serif font-bold text-cream text-lg leading-tight">{t.name}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-cream/40 mt-1">
                    {t.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
