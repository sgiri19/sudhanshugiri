import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WorkHeader } from "@/components/sections/WorkHeader"
import { WorkOperatingScope } from "@/components/sections/WorkOperatingScope"
import { SelectedEngagements } from "@/components/sections/SelectedEngagements"
import { WorkApproach } from "@/components/sections/WorkApproach"
import { ClosingCTA } from "@/components/sections/ClosingCTA"

export const metadata = {
    title: "Work | Sudhanshu Giri",
    description: "Scope of engagement and selected production-grade AI initiatives.",
}

export default function WorkPage() {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <WorkHeader />
                <WorkOperatingScope />
                <SelectedEngagements />
                <WorkApproach />
                <ClosingCTA />
            </main>
            <Footer />
        </>
    )
}
