import Link from "next/link"

export const metadata = {
  title: "Case Study: Growpath | Riz",
  description: "How Riz consolidated five disconnected tools into one n8n workflow for Growpath.",
}

export default function CaseStudy2() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      {/* Nav */}
      <div className="px-8 md:px-[60px] py-8 border-b border-cream/10">
        <Link
          href="/"
          className="font-mono text-[0.72rem] uppercase tracking-[0.15em] text-cream/50 hover:text-coral transition-colors"
        >
          ← Back to home
        </Link>
      </div>

      <div className="max-w-[860px] mx-auto px-8 md:px-[60px] py-[80px]">

        {/* Label */}
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-coral mb-6">
          Case Study — 02
        </p>

        {/* Title */}
        <h1 className="font-serif font-black text-[clamp(2.4rem,5vw,4rem)] leading-[1.0] mb-4">
          Growpath
        </h1>
        <p className="font-sans font-light text-cream/50 text-lg mb-16">
          Five tools that didn't talk to each other. One flow that replaced two of them.
        </p>

        {/* Testimonial pull quote */}
        <blockquote className="border-l-2 border-coral pl-8 mb-16">
          <p className="font-serif italic text-[1.2rem] text-cream/80 leading-relaxed mb-4">
            "We were using five tools and nothing talked to each other. Riz built us a single flow
            in n8n that replaced two of those tools entirely. Six months later and it's never broken."
          </p>
          <footer className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cream/40">
            — Marcus D., Growpath
          </footer>
        </blockquote>

        {/* Sections */}
        <div className="space-y-14">
          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Problem</h2>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed mb-4">
              Growpath was running Airtable, HubSpot, Notion, Slack, and Google Sheets as five
              completely separate systems. Every time a deal moved forward in HubSpot, someone had to
              manually update Airtable. Every time a project kicked off, someone created a Notion
              page from scratch. Every status change required a Slack message that someone had to
              remember to send.
            </p>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed">
              Nothing was broken in isolation. The problem was the gaps between the tools — the
              manual handoffs that ate time and introduced errors whenever someone forgot a step.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Fix</h2>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed mb-4">
              Riz mapped the actual data flows between all five tools, identified which ones were
              genuinely necessary and which ones were just there out of habit, and built a central
              n8n workflow that kept HubSpot, Airtable, and Slack in sync automatically.
            </p>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed">
              Two tools were cut entirely — their functions absorbed into the workflow. The remaining
              three now update each other in real time. No Zapier middleman. No manual updates.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Result</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {[
                { number: "2",  label: "Tools eliminated" },
                { number: "6mo", label: "Running without issues" },
                { number: "0",   label: "Manual sync steps" },
              ].map((stat) => (
                <div key={stat.label} className="bg-cream/[0.04] border border-cream/10 p-6">
                  <p className="font-serif text-[2.4rem] text-coral font-bold leading-none mb-2">
                    {stat.number}
                  </p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cream/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-cream/10">
          <p className="font-sans font-light text-cream/50 mb-6">
            Got tools that don't talk to each other?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral text-charcoal font-mono text-[0.75rem] uppercase tracking-[0.1em] hover:bg-coral-light transition-colors"
          >
            Work With Me
          </Link>
        </div>

      </div>
    </div>
  )
}
