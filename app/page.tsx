import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MarqueeStrip } from "@/components/marquee-strip"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { SpeakingSection } from "@/components/speaking-section"
import { ProcessSection } from "@/components/process-section"
import { ToolsSection } from "@/components/tools-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ExpertiseSection />
        <SpeakingSection />
        <ProcessSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
