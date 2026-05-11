import Link from "next/link"

export const metadata = {
  title: "Case Study: TechStart Labs | Riz",
  description: "How Riz cut 12 hours of weekly manual work for TechStart Labs through a single n8n automation.",
}

export default function CaseStudy1() {
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
          Case Study — 01
        </p>

        {/* Title */}
        <h1 className="font-serif font-black text-[clamp(2.4rem,5vw,4rem)] leading-[1.0] mb-4">
          TechStart Labs
        </h1>
        <p className="font-sans font-light text-cream/50 text-lg mb-16">
          Replacing a 12-hour manual ops chain with a single automated workflow.
        </p>

        {/* Testimonial pull quote */}
        <blockquote className="border-l-2 border-coral pl-8 mb-16">
          <p className="font-serif italic text-[1.2rem] text-cream/80 leading-relaxed mb-4">
            "Riz mapped our entire ops workflow in a single call and had the first automation running
            by end of week. We cut 12 hours of manual work from our team's schedule. I didn't expect
            it to happen that fast."
          </p>
          <footer className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cream/40">
            — Sarah K., TechStart Labs
          </footer>
        </blockquote>

        {/* Sections */}
        <div className="space-y-14">
          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Problem</h2>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed mb-4">
              TechStart Labs was growing quickly but their lead intake process hadn't kept up. Every
              new lead came in through a form, sat in a spreadsheet, got manually copied into the CRM,
              triggered a Slack message someone had to remember to send, and eventually landed in a
              project management tool — if anyone remembered.
            </p>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed">
              Three people were spending a combined 12 hours per week on this. It wasn't complex work.
              It was just repetitive, and nobody had stopped to ask whether it needed to be manual.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Fix</h2>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed mb-4">
              After a single discovery call to map how leads actually moved through their system, Riz
              built one n8n workflow that handled the entire chain: form submission triggered CRM
              entry, which triggered a Slack alert to the right person, which automatically created a
              task in their project management tool with the correct template and due date.
            </p>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed">
              No new tools. No new logins. Just the existing stack, finally connected.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Result</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {[
                { number: "12hrs", label: "Saved per week" },
                { number: "1",     label: "Workflow replaced it all" },
                { number: "0",     label: "Manual steps remaining" },
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
            Running the same kind of manual workflow in your team?
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
