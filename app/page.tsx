import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { LogosSection } from "@/components/sections/LogosSection"
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"
import { Footer } from "@/components/layout/Footer"
import { Philosophy } from "@/components/sections/Philosophy"
import { ProfessionalTrack } from "@/components/sections/ProfessionalTrack"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <LogosSection />
        <Philosophy />
        <ProfessionalTrack />
        <FeaturedCaseStudy />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  )
}
