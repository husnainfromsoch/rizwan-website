"use client"

import { useEffect, useRef, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const logos = [
  { name: "n8n", slug: "n8n" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "OpenAI", slug: "openai" },
  { name: "Airtable", slug: "airtable" },
  { name: "Notion", slug: "notion" },
  { name: "Slack", slug: "slack" },
  { name: "Webflow", slug: "webflow" },
  { name: "Zapier", slug: "zapier" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Figma", slug: "figma" },
  { name: "GitHub", slug: "github" },
  { name: "Supabase", slug: "supabase" },
  { name: "Linear", slug: "linear" },
  { name: "Make", slug: "make" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Google Sheets", slug: "googlesheets" },
]

const ICON_COLOR = "f5efe0"
const AUTO_SCROLL_MS = 2500

export function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopAutoScroll = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startAutoScroll = useCallback(() => {
    stopAutoScroll()
    timerRef.current = setInterval(() => emblaApi?.scrollNext(), AUTO_SCROLL_MS)
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
    <section className="bg-[#222222] py-16 md:py-20 px-8 md:px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-3">Stack</p>
            <h2 className="heading-display text-[clamp(1.8rem,3vw,3rem)] leading-tight">
              The tools behind the work.
            </h2>
          </div>
          <div className="flex gap-2 pb-1">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-coral hover:text-coral transition-colors"
              aria-label="Previous logo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-coral hover:text-coral transition-colors"
              aria-label="Next logo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={emblaRef}
          className="overflow-hidden"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div className="flex -ml-4">
            {logos.map((logo) => (
              <div
                key={logo.slug}
                className="flex-none basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[16.666%] pl-4"
              >
                <div className="flex flex-col items-center justify-center gap-3 py-8 px-4 bg-cream/[0.04] border border-cream/[0.08] hover:border-coral/50 hover:bg-coral/[0.06] transition-all duration-200 group cursor-default h-full">
                  <img
                    src={`https://cdn.simpleicons.org/${logo.slug}/${ICON_COLOR}`}
                    alt={logo.name}
                    width={36}
                    height={36}
                    className="opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-cream/40 group-hover:text-cream/70 transition-colors text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
