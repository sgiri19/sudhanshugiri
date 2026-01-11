import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { Grounding } from "@/components/sections/Grounding"
import { LogosSection } from "@/components/sections/LogosSection"
import { Philosophy } from "@/components/sections/Philosophy"
import { ScopeOfImpact } from "@/components/sections/ScopeOfImpact"
import { OperatingManual } from "@/components/sections/OperatingManual"
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"
import { ClosingCTA } from "@/components/sections/ClosingCTA"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Grounding />
        <LogosSection />
        <Philosophy />
        <ScopeOfImpact />
        <OperatingManual />
        <FeaturedCaseStudy />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
