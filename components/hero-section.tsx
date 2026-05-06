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
        <h1 className="hero-heading heading-display text-[clamp(4rem,7vw,7rem)] leading-[0.9] mb-8">
          Riz
          <br />
          <em>automates</em>
          <br />
          what holds
          <br />
          you back.
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
      
      {/* Right Column - Animated SVG Panel */}
      <div className="hidden lg:flex relative bg-[#3A3A3A] items-center justify-center overflow-hidden">
        {/* Animated Node Network SVG */}
        <svg
          viewBox="0 0 400 400"
          className="w-[80%] h-[80%] max-w-[400px]"
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(245,239,224,0.05)" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(234,106,71,0.3)" />
              <stop offset="100%" stopColor="rgba(234,106,71,0)" />
            </radialGradient>
          </defs>
          
          <rect width="400" height="400" fill="url(#grid)" />
          
          {/* Radial glow */}
          <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" />
          
          {/* Pentagon nodes and connections */}
          <g>
            {/* Pentagon path for connections */}
            <path
              d="M 200 80 L 314 167 L 271 300 L 129 300 L 86 167 Z"
              fill="none"
              stroke="rgba(234,106,71,0.4)"
              strokeWidth="1"
            />
            
            {/* Node points */}
            <circle cx="200" cy="80" r="6" fill="#EA6A47" />
            <circle cx="314" cy="167" r="6" fill="#EA6A47" />
            <circle cx="271" cy="300" r="6" fill="#EA6A47" />
            <circle cx="129" cy="300" r="6" fill="#EA6A47" />
            <circle cx="86" cy="167" r="6" fill="#EA6A47" />
            
            {/* Animated dot */}
            <circle r="4" fill="#F5EFE0">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 200 80 L 314 167 L 271 300 L 129 300 L 86 167 Z"
              />
            </circle>
          </g>
        </svg>
        
        {/* Bottom text */}
        <p className="absolute bottom-8 left-0 right-0 text-center font-mono text-[0.6rem] uppercase tracking-[0.3em] text-cream/20">
          Building the Future of Work
        </p>
        
        {/* Scroll indicator */}
        <div className="absolute right-8 bottom-8 flex flex-col items-center gap-4">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/40" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-[1px] h-0 bg-coral scroll-line-grow" />
        </div>
      </div>
    </section>
  )
}
