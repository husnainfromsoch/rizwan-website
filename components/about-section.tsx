"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

const stats = [
  { number: "15+", label: "Happy clients" },
  { number: "10+", label: "Yrs in ops & product" },
  { number: "50+", label: "Automations shipped" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-charcoal py-[140px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
        {/* Left Column — Photo */}
        <ScrollReveal>
          <div>
            <p className="section-label mb-8">01 — About</p>
            <div className="relative max-w-sm lg:max-w-none">
              <div className="absolute inset-0 border border-coral/30 translate-x-3 translate-y-3" aria-hidden />
              <Image
                src="/placeholder-user.jpg"
                alt="Riz — Automation Strategist"
                width={480}
                height={560}
                className="relative w-full object-cover"
                priority
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column */}
        <ScrollReveal delay={0.1}>
          <div>
            <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-8">
              I help founders <em>save money and reclaim their time</em> through smart automation.
            </h2>

            <div className="space-y-6 text-cream/70 font-sans font-light text-lg mb-12">
              <p>
                I spent 10 years running ops and product at early-stage companies. Most broken workflows aren&apos;t actually broken. They were built for a 3-person team and nobody replaced them when the company hit 20.
              </p>
              <p>
                My clients are founders and ops leads at 5–50 person companies. They know something is off. They&apos;re just too close to it to see where.
              </p>
              <p>
                I find it, then build the fix. I work in n8n, Claude, Zapier, and Airtable. I pick the stack that gives me the most control over what the automation actually does, not just whether it runs.
              </p>
              <p>
                You stop thinking about the workflow. That&apos;s when you know it&apos;s done.
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
