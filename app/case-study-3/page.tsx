import Link from "next/link"

export const metadata = {
  title: "Case Study: Founderflow | Riz",
  description: "How Riz ran a hands-on automation workshop for Founderflow that left the team with working drafts, not slides.",
}

export default function CaseStudy3() {
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
          Case Study — 03
        </p>

        {/* Title */}
        <h1 className="font-serif font-black text-[clamp(2.4rem,5vw,4rem)] leading-[1.0] mb-4">
          Founderflow
        </h1>
        <p className="font-sans font-light text-cream/50 text-lg mb-16">
          A workshop where the team built real automations on the day, not just learned about them.
        </p>

        {/* Testimonial pull quote */}
        <blockquote className="border-l-2 border-coral pl-8 mb-16">
          <p className="font-serif italic text-[1.2rem] text-cream/80 leading-relaxed mb-4">
            "I booked Riz for a workshop and the team walked out with actual automations drafted,
            not just ideas. That's rare. Most workshops are theory with a slide deck."
          </p>
          <footer className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cream/40">
            — Priya N., Founderflow
          </footer>
        </blockquote>

        {/* Sections */}
        <div className="space-y-14">
          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Problem</h2>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed mb-4">
              Founderflow's ops team had heard a lot about automation. They'd seen demos, read
              articles, and sat through vendor presentations. But none of it translated into anything
              they could actually build themselves. The knowledge stayed abstract.
            </p>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed">
              Priya wanted her team to leave with working drafts — automations mapped to their
              specific workflows, not generic templates they'd have to adapt later on their own.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Format</h2>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed mb-4">
              The session ran as a full day on-site. The morning covered workflow mapping: each team
              member identified one process they owned that had obvious automation potential. No
              hypotheticals — their actual work.
            </p>
            <p className="font-sans font-light text-cream/70 text-[1.05rem] leading-relaxed">
              The afternoon moved into n8n. Riz walked through tool selection, connection logic, and
              error handling in plain terms, then each person built their own draft workflow with
              direct help on blockers. By end of day, every participant had something they could
              finish and deploy the following week.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-coral mb-4">The Result</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {[
                { number: "6",    label: "Team members trained" },
                { number: "6",    label: "Live workflow drafts built" },
                { number: "1 day", label: "From zero to working drafts" },
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
            Want your team to actually understand automation — and build something on the day?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-coral text-charcoal font-mono text-[0.75rem] uppercase tracking-[0.1em] hover:bg-coral-light transition-colors"
          >
            Book a Workshop
          </Link>
        </div>

      </div>
    </div>
  )
}
