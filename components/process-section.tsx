"use client"

import { ScrollReveal } from "./scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    description: "We map your current workflows, identify bottlenecks, and prioritize opportunities based on impact and effort.",
  },
  {
    number: "02",
    title: "Map & Architect",
    description: "I design the automation architecture—selecting the right tools, defining data flows, and planning integrations.",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "Rapid iteration with you in the loop. I build, you test. We refine until it works flawlessly.",
  },
  {
    number: "04",
    title: "Hand Over & Scale",
    description: "Full documentation, team training, and ongoing support. You own it completely—no lock-in.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-cream py-[140px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <h2 className="heading-display text-charcoal text-[clamp(2.4rem,4vw,3.6rem)] font-bold">
              How we <em>work</em> together.
            </h2>
            <p className="font-sans font-light text-charcoal/70 text-lg lg:pt-4">
              A proven process refined over hundreds of engagements. Transparent, collaborative, and designed to deliver results fast.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {steps.map((step, index) => {
            const isOdd = index % 2 === 0
            return (
              <ScrollReveal key={step.number} delay={index * 0.1}>
                <div
                  className={`p-10 h-full ${
                    isOdd 
                      ? "bg-charcoal text-cream" 
                      : "bg-coral text-charcoal"
                  }`}
                >
                  <p className={`font-serif italic text-xl mb-4 ${isOdd ? "text-coral" : "text-charcoal/70"}`}>
                    {step.number}.
                  </p>
                  <h3 className="font-serif font-bold text-xl mb-4">{step.title}</h3>
                  <p className={`font-sans font-light text-sm ${isOdd ? "text-cream/70" : "text-charcoal/80"}`}>
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
