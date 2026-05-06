"use client"

import Link from "next/link"

const pills = ["n8n", "AI Workflows", "B2B Ops", "Fractional PM", "Anthropic API"]

export function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Content */}
      <div className="flex flex-col justify-end px-8 md:px-[60px] pt-[120px] pb-[80px]">
        {/* Tagline */}
        <p className="hero-tag font-mono text-[0.68rem] uppercase tracking-[0.2em] text-coral mb-6">
          Automation Strategist · Speaker · Coach
        </p>
        
        {/* Hero Heading */}
        <h1 className="hero-heading heading-display text-[clamp(2rem,3.8vw,4.2rem)] leading-[1.1] mb-8">
          Your team is doing work that should be automated.
        </h1>
        
        {/* Pills */}
        <div className="hero-pills flex flex-wrap gap-3 mb-10">
          {pills.map((pill) => (
            <span
              key={pill}
              className="font-mono text-[0.75rem] text-coral-light px-[10px] py-[3px] border border-coral/40 rounded-sm"
            >
              {pill}
            </span>
          ))}
        </div>
        
        {/* CTAs */}
        <div className="hero-cta flex items-center gap-6">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral text-charcoal font-mono text-[0.75rem] uppercase tracking-[0.1em] hover:bg-coral-light transition-colors"
          >
            Work With Me
          </Link>
          <Link
            href="#work"
            className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-cream/80 hover:text-coral transition-colors underline underline-offset-4"
          >
            See my work
          </Link>
        </div>
      </div>
      
      {/* Right Column - YouTube Video */}
      <div className="flex relative bg-[#3A3A3A] items-center justify-center overflow-hidden p-8 py-12 lg:py-8">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aJxV39kOtPU"
            title="Riz – Automation Strategist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute right-8 bottom-8 flex-col items-center gap-4">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/40" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-[1px] h-0 bg-coral scroll-line-grow" />
        </div>
      </div>
    </section>
  )
}
