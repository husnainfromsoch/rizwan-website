"use client"

import { ScrollReveal } from "./scroll-reveal"

const steps = [
  {
    number: "01",
    title: "Discover & Diagnose",
    description: "Before anything gets built, I learn how you actually work. Not how it's supposed to work on paper.",
  },
  {
    number: "02",
    title: "Map & Architect",
    description: "I lay out what gets built, in what order, with which tools. You see the full plan before a single workflow is touched.",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "I build, you test against your real data and real edge cases. Most issues surface here. That's the point.",
  },
  {
    number: "04",
    title: "Hand Over & Scale",
    description: "Full documentation, a walkthrough with your team, and everything in your hands. No dependency on me to keep it running.",
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
              I&apos;ve run this process across enough engagements to know what breaks at each stage. The order matters. Skipping steps is where projects go wrong.
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
