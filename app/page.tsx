import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { LogosSection } from "@/components/sections/LogosSection"
import { Grounding } from "@/components/sections/Grounding"
import { Philosophy } from "@/components/sections/Philosophy"
import { ProfessionalTrack } from "@/components/sections/ProfessionalTrack"
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
        <LogosSection />
        <Grounding />
        <Philosophy />
        <ProfessionalTrack />
        <FeaturedCaseStudy />
        <FeaturedPosts />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
