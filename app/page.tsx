import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { OperatingContext } from "@/components/sections/OperatingContext"
import { LogosSection } from "@/components/sections/LogosSection"
import { Philosophy } from "@/components/sections/Philosophy"
import { DecisionFramework } from "@/components/sections/DecisionFramework"
import { SelectedProductionWork } from "@/components/sections/SelectedProductionWork"
import { ProfessionalTrack } from "@/components/sections/ProfessionalTrack"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <OperatingContext />
        <LogosSection />
        <Philosophy />
        <DecisionFramework />
        <SelectedProductionWork />
        <ProfessionalTrack />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  )
}
