"use client"

import { ScrollReveal } from "./scroll-reveal"

const expertiseCards = [
  {
    number: "01",
    title: "Automation Architecture",
    description: "I map broken workflows, pick the right tools, and build the fix. You get a working system, not a proposal.",
    link: "Learn more",
  },
  {
    number: "02",
    title: "AI Product Strategy",
    description: "I wire LLMs into existing stacks only when they replace actual work. No proofs of concept that go nowhere.",
    link: "Learn more",
  },
  {
    number: "03",
    title: "Marketing Automation",
    description: "Most marketing fails because it depends on someone remembering to do it. I build systems that run automatically.",
    link: "Learn more",
  },
  {
    number: "04",
    title: "Startup Ops Advisory",
    description: "You're moving fast and the ops layer hasn't kept up. I come in part-time, find what's slowing you down, and fix it. Process design, tool selection, the works.",
    link: "Learn more",
  },
  {
    number: "05",
    title: "Keynotes & Workshops",
    description: "I talk about automation and AI in plain terms, for teams that want to understand what's actually changing and what to do about it. Remote or on-site.",
    link: "Book a talk",
  },
  {
    number: "06",
    title: "Custom Builds",
    description: "Not everything fits a standard engagement. Tell me what you're dealing with and I'll tell you honestly if it's worth building.",
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
