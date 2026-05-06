"use client"

const marqueeText = "Automation Strategist · Operations Leader · n8n Builder · AI Workflow Architect · Fractional PM · Startup Advisor · Keynote Speaker · Thought Leader"

export function MarqueeStrip() {
  return (
    <div className="bg-coral py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-serif italic text-charcoal text-lg mx-4">
          {marqueeText} — {marqueeText} —
        </span>
        <span className="font-serif italic text-charcoal text-lg mx-4">
          {marqueeText} — {marqueeText} —
        </span>
      </div>
    </div>
  )
}
