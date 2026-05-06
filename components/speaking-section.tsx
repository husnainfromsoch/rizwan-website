"use client"

import { ScrollReveal } from "./scroll-reveal"

const formats = [
  { name: "Keynote", detail: "30-60 min mainstage" },
  { name: "Workshop", detail: "Half or full day" },
  { name: "Panel", detail: "Moderated discussion" },
  { name: "Podcast", detail: "Guest appearance" },
]

const topics = [
  "Agentic Workflows",
  "AI in Ops",
  "Founder Leverage",
  "n8n",
  "No-Code Automation",
  "Future of Work",
]

export function SpeakingSection() {
  return (
    <section id="speaking" className="bg-charcoal py-[140px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column - Quote Panel */}
        <ScrollReveal>
          <div className="relative bg-charcoal-mid h-[520px] flex items-center justify-center p-12 overflow-hidden">
            {/* Coral gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-transparent" />
            
            {/* Decorative quote mark */}
            <span className="absolute top-8 left-8 font-serif text-[12rem] text-coral/10 leading-none select-none">
              &ldquo;
            </span>
            
            {/* Quote */}
            <blockquote className="relative z-10 font-serif italic text-[clamp(1.4rem,2.5vw,2rem)] text-cream text-center leading-relaxed">
              The next decade belongs to founders who automate like engineers and think like operators.
            </blockquote>
          </div>
        </ScrollReveal>
        
        {/* Right Column - Content */}
        <ScrollReveal delay={0.1}>
          <div>
            <p className="section-label mb-4">03 — Speaking</p>
            <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-8">
              I speak to <em>founders</em> who are ready to build differently.
            </h2>
            
            <div className="space-y-6 text-cream/70 font-sans font-light text-lg mb-10">
              <p>
                I&apos;ve delivered talks across four continents—at startup conferences, corporate innovation summits, and intimate founder retreats.
              </p>
              <p>
                My sessions are tactical, story-driven, and designed to leave audiences with actionable frameworks they can implement immediately.
              </p>
            </div>
            
            {/* Formats */}
            <div className="mb-10">
              {formats.map((format) => (
                <div
                  key={format.name}
                  className="flex items-center justify-between py-4 border-b border-cream/10"
                >
                  <span className="font-serif font-bold text-lg">{format.name}</span>
                  <span className="font-mono text-[0.7rem] text-cream/50 uppercase tracking-[0.1em]">{format.detail}</span>
                </div>
              ))}
            </div>
            
            {/* Topic Pills */}
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-[0.7rem] uppercase tracking-[0.05em] text-coral-light px-4 py-2 border border-coral/40 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
