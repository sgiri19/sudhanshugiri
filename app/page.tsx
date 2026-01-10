import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { LogosSection } from "@/components/sections/LogosSection"
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <LogosSection />
        <FeaturedCaseStudy />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  )
}
