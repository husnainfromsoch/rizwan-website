"use client"

import { ScrollReveal } from "./scroll-reveal"

const tools = [
  { name: "n8n",           slug: "n8n" },
  { name: "Anthropic API", slug: "anthropic" },
  { name: "OpenAI API",    slug: "openai" },
  { name: "ClickUp",       slug: "clickup" },
  { name: "Apify",         slug: "apify" },
  { name: "Webflow",       slug: "webflow" },
  { name: "Airtable",      slug: "airtable" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Slack",         slug: "slack" },
  { name: "Make",          slug: "make" },
  { name: "Zapier",        slug: "zapier" },
  { name: "Notion",        slug: "notion" },
  { name: "HubSpot",       slug: "hubspot" },
  { name: "Linear",        slug: "linear" },
  { name: "Supabase",      slug: "supabase" },
  { name: "PostgreSQL",    slug: "postgresql" },
  { name: "Figma",         slug: "figma" },
  { name: "GitHub",        slug: "github" },
]

function ToolLogo({ slug, name }: { slug: string; name: string }) {
  return (
    <img
      src={`/logos/${slug}.svg`}
      alt={name}
      width={36}
      height={36}
      
      className="h-16 w-16 object-contain mx-auto opacity-50 group-hover:opacity-100 transition-opacity duration-200"
    />
  )
}

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

        {/* Logo Grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.slug}
                className="group flex flex-col items-center justify-center gap-3 py-7 px-3 bg-cream/[0.04] border border-cream/[0.08] hover:border-coral/40 hover:bg-coral/[0.06] hover:-translate-y-[3px] transition-all duration-200 cursor-default"
              >
                <ToolLogo slug={tool.slug} name={tool.name} />
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-cream/40 group-hover:text-cream/70 transition-colors leading-tight text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
