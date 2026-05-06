"use client"

import { ScrollReveal } from "./scroll-reveal"

const expertiseCards = [
  {
    number: "01",
    emoji: "⚙️",
    title: "Automation Architecture",
    description: "End-to-end workflow design using n8n, Make, and custom APIs. From diagnosis to deployment.",
    link: "Learn more",
  },
  {
    number: "02",
    emoji: "🤖",
    title: "AI Product Strategy",
    description: "Integrating LLMs and AI agents into your product stack. Practical, not hype-driven.",
    link: "Learn more",
  },
  {
    number: "03",
    emoji: "📣",
    title: "LinkedIn Brand Systems",
    description: "Automated content pipelines that keep your founder brand active without the daily grind.",
    link: "Learn more",
  },
  {
    number: "04",
    emoji: "🧭",
    title: "Startup Ops Advisory",
    description: "Fractional operations leadership for early-stage teams. Process design, tool selection, team enablement.",
    link: "Learn more",
  },
  {
    number: "05",
    emoji: "🎤",
    title: "Keynotes & Workshops",
    description: "Speaking engagements on automation, AI in operations, and the future of work. Remote or on-site.",
    link: "Book a talk",
  },
  {
    number: "06",
    emoji: "🔧",
    title: "Custom Builds",
    description: "Bespoke automation projects for unique challenges. If it can be automated, I can build it.",
    link: "Start a project",
  },
]

export function ExpertiseSection() {
  return (
    <section id="work" className="bg-off-white py-[120px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <p className="section-label mb-4">02 — Expertise</p>
            <h2 className="heading-display text-charcoal text-[clamp(2.4rem,4vw,3.6rem)] font-bold">
              What I <em>actually</em> do for you.
            </h2>
          </div>
        </ScrollReveal>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {expertiseCards.map((card, index) => (
            <ScrollReveal key={card.number} delay={index * 0.05}>
              <div className="group relative bg-charcoal text-cream p-[52px_44px] hover:-translate-y-1.5 transition-transform duration-300 overflow-hidden">
                {/* Top border animation */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-coral scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                
                <p className="font-serif italic text-coral text-lg mb-4">{card.number}.</p>
                <span className="text-2xl mb-4 block">{card.emoji}</span>
                <h3 className="font-serif text-2xl font-bold mb-4">{card.title}</h3>
                <p className="font-sans font-light text-cream/70 mb-6">{card.description}</p>
                <a href="#contact" className="text-coral font-mono text-[0.75rem] uppercase tracking-[0.1em] hover:underline">
                  {card.link} →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
