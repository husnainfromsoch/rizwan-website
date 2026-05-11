"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column - Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-24 xl:px-32 pt-32 pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen">

        {/* Tagline */}
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-cream/50 mb-6">
          ( Automation Strategist · Speaker · Coach )
        </p>

        {/* Hero Heading */}
        <h1 className="font-serif font-black text-[clamp(3rem,5.5vw,5.8rem)] leading-[0.95] text-cream mb-6">
          Riz<br />
          <span className="text-coral italic">automates</span><br />
          what holds<br />
          you back.
        </h1>

        {/* Description */}
        <p className="font-sans text-[1rem] text-cream/60 leading-relaxed max-w-md mb-8">
          I help B2B teams eliminate manual operations through smart automation — using n8n, AI agents, and the Anthropic API.
        </p>

        {/* CTA */}
        <div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral text-charcoal font-sans font-bold text-[0.8rem] uppercase tracking-[0.12em] rounded-full hover:bg-coral-light transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Right Column - YouTube Video */}
      <div className="flex-1 relative bg-[#1E1E1E] flex items-center justify-center overflow-hidden min-h-[50vw] lg:min-h-screen">
        {/* Subtle corner accent */}
        <div className="absolute top-0 left-0 w-[2px] h-24 bg-coral opacity-60" />
        <div className="absolute top-0 left-0 h-[2px] w-24 bg-coral opacity-60" />

        {/* Video container */}
        <div className="w-full max-w-2xl px-6 lg:px-10">
          <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/aJxV39kOtPU"
              title="Riz – Automation Strategist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Caption below video */}
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cream/25 mt-4 text-center">
            Watch the intro ↑
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute right-8 bottom-8 flex-col items-center gap-3">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-cream/30" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-coral/40" />
        </div>
      </div>
    </section>
  )
}
