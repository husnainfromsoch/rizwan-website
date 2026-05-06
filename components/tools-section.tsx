"use client"

import { ScrollReveal } from "./scroll-reveal"

const tools = [
  "n8n",
  "Anthropic API",
  "OpenAI API",
  "ClickUp",
  "Apify",
  "Webflow",
  "Airtable",
  "Google Sheets",
  "Slack",
  "Make",
  "Zapier",
  "Notion",
  "HubSpot",
  "Linear",
  "Supabase",
  "PostgreSQL",
  "Figma",
  "GitHub",
]

export function ToolsSection() {
  return (
    <section className="bg-charcoal py-[120px] px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Header */}
        <ScrollReveal>
          <p className="section-label mb-4">05 — Stack</p>
          <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-12">
            Built with the <em>sharpest</em> tools.
          </h2>
        </ScrollReveal>
        
        {/* Tools Cloud */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-[0.7rem] uppercase tracking-[0.05em] text-cream/70 px-[22px] py-[12px] bg-cream/5 border border-cream/12 hover:bg-coral hover:text-charcoal hover:-translate-y-[3px] transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
