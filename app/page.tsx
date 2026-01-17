import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Identity } from "@/components/sections/Identity"
import { WhatIFocusOn } from "@/components/sections/WhatIFocusOn"
import { Experience } from "@/components/sections/Experience"
import { FeaturedWork } from "@/components/sections/FeaturedWork"
import { AreasOfExpertise } from "@/components/sections/AreasOfExpertise"
import { Writing } from "@/components/sections/Writing"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Identity />
      <WhatIFocusOn />
      <Experience />
      <FeaturedWork />
      <AreasOfExpertise />
      <Writing />
      <Footer />
    </div>
  )
}
