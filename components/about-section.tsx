"use client"

import { ScrollReveal } from "./scroll-reveal"

const stats = [
  { number: "4+", label: "Continents worked" },
  { number: "10+", label: "Yrs in ops & product" },
  { number: "50+", label: "Automations shipped" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-charcoal py-[140px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
        {/* Left Column */}
        <ScrollReveal>
          <div>
            <p className="section-label mb-8">01 — About</p>
            <p className="ghost-text font-serif text-[8rem] font-black leading-none select-none hidden lg:block">
              Riz
            </p>
          </div>
        </ScrollReveal>
        
        {/* Right Column */}
        <ScrollReveal delay={0.1}>
          <div>
            <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-8">
              I help founders <em>reclaim their time</em> through smart automation.
            </h2>
            
            <div className="space-y-6 text-cream/70 font-sans font-light text-lg mb-12">
              <p>
                I&apos;ve spent over a decade in the trenches of operations and product—building systems that scale, breaking ones that don&apos;t, and learning when to automate and when to stay human.
              </p>
              <p>
                Today, I work with founders and operators who are drowning in manual workflows. I help them identify bottlenecks, architect elegant solutions using tools like n8n and the Anthropic API, and ship automations that actually stick.
              </p>
              <p>
                Based in Tallinn, working globally. I believe the best automation feels invisible—it just works, so you can focus on what matters.
              </p>
            </div>
            
            {/* Stats */}
            <div className="border-t border-cream/10 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[2.8rem] text-coral font-bold">{stat.number}</p>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-cream/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
