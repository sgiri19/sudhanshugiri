import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Identity } from "@/components/sections/Identity"
import { Briefing } from "@/components/sections/Briefing"
import { CareerLog } from "@/components/sections/CareerLog"
import { SelectedProductionWork } from "@/components/sections/SelectedProductionWork"
import { OperatingPrinciples } from "@/components/sections/OperatingPrinciples"
import { DecisionFramework } from "@/components/sections/DecisionFramework"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Identity />
        <Briefing />
        <CareerLog />
        <SelectedProductionWork />
        <OperatingPrinciples />
        <DecisionFramework />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  )
}
