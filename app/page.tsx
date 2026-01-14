import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Identity } from "@/components/sections/Identity"
import { Work } from "@/components/sections/Work"
import { Writing } from "@/components/sections/Writing"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 md:px-8">
        <Identity />
        <Work />
        <Writing />
      </main>
      <Footer />
    </div>
  )
}
