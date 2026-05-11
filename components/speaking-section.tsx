"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const testimonials = [
  {
    name: "Sarah K.",
    company: "TechStart Labs",
    quote:
      "Riz mapped our entire ops workflow in a single call and had the first automation running by end of week. We cut 12 hours of manual work from our team's schedule.",
    summary:
      "TechStart Labs was manually routing leads through three tools and a spreadsheet. Riz replaced the whole chain with a single n8n flow — CRM intake, Slack alerts, and task creation all handled automatically.",
    href: "/case-study-1",
  },
  {
    name: "Marcus D.",
    company: "Growpath",
    quote:
      "We were using five tools and nothing talked to each other. Riz built us a single flow in n8n that replaced two of those tools entirely. Six months later and it's never broken.",
    summary:
      "Growpath had Airtable, HubSpot, Notion, Slack, and Google Sheets all running independently. Riz consolidated the core data layer into one workflow that kept everything in sync without any manual input.",
    href: "/case-study-2",
  },
  {
    name: "Priya N.",
    company: "Founderflow",
    quote:
      "I booked Riz for a workshop and the team walked out with actual automations drafted, not just ideas. That's rare. Most workshops are theory with a slide deck.",
    summary:
      "Founderflow needed their ops team to understand automation hands-on, not in theory. The full-day session covered workflow mapping, tool selection, and live n8n builds — each team member left with a working draft.",
    href: "/case-study-3",
  },
]

export function SpeakingSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true })
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopAutoScroll = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startAutoScroll = useCallback(() => {
    stopAutoScroll()
    timerRef.current = setInterval(() => emblaApi?.scrollNext(), 3000)
  }, [emblaApi, stopAutoScroll])

  useEffect(() => {
    if (!emblaApi) return
    startAutoScroll()
    return stopAutoScroll
  }, [emblaApi, startAutoScroll, stopAutoScroll])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
    startAutoScroll()
  }, [emblaApi, startAutoScroll])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
    startAutoScroll()
  }, [emblaApi, startAutoScroll])

  return (
    <section id="testimonials" className="bg-charcoal py-[120px]">

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-[60px]">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-4">03 — Testimonials</p>
              <h2 className="heading-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold mb-3">
                What clients <em>say</em>
              </h2>
              <p className="font-sans font-light text-cream/50 text-lg">
                Real results from real founders
              </p>
            </div>

            {/* Desktop nav */}
            <div className="hidden sm:flex gap-2 pb-1 shrink-0">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-coral hover:text-coral transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-coral hover:text-coral transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div className="px-8 md:px-[60px]">
        <div ref={emblaRef} className="overflow-hidden" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div className="flex -ml-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-none basis-[88%] sm:basis-[60%] lg:basis-1/3 pl-6"
              >
                <div className="flex flex-col bg-[#2F2F2F] border border-cream/10 rounded-2xl overflow-hidden hover:border-coral/30 transition-colors duration-300 h-full">

                  {/* Testimonial zone */}
                  <div className="flex flex-col flex-1 p-8 gap-4">
                    <span
                      className="font-serif text-[3.5rem] text-coral/20 leading-none select-none -mb-2"
                      aria-hidden
                    >
                      &ldquo;
                    </span>

                    <p className="font-sans font-light text-cream/80 text-[1rem] leading-relaxed flex-1">
                      {t.quote}
                    </p>

                    <div className="border-t border-cream/10 pt-5 mt-auto">
                      <p className="font-serif font-bold text-cream text-base leading-tight">{t.name}</p>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-cream/40 mt-1">
                        {t.company}
                      </p>
                    </div>
                  </div>

                  {/* Case study zone */}
                  <div className="border-t border-cream/10 bg-cream/[0.03] px-8 py-7 flex flex-col gap-4">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-coral">
                      Case Study
                    </p>
                    <p className="font-sans font-light text-cream/60 text-sm leading-relaxed">
                      {t.summary}
                    </p>
                    <Link
                      href={t.href}
                      className="mt-1 inline-flex items-center justify-center w-full px-6 py-3 bg-coral text-charcoal font-mono font-bold text-[0.7rem] uppercase tracking-[0.1em] rounded-lg hover:bg-coral-light transition-colors"
                    >
                      View Case Study →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="flex sm:hidden gap-2 justify-center mt-8 px-8">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-coral hover:text-coral transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-coral hover:text-coral transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  )
}
