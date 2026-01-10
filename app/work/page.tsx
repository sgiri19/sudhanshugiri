import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getAllPosts } from "@/lib/mdx"
import { WorkContent } from "@/components/sections/WorkContent"

export default function WorkPage() {
    const allPosts = getAllPosts();
    const caseStudies = allPosts.filter(post => post.category === 'Case Study');

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-4xl md:text-7xl font-black text-neutral-900 mb-6 leading-tight">
                            Strategic <span className="text-brand-primary">Impact.</span>
                        </h1>
                        <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                            A collection of high-stakes AI programs and enterprise products I&apos;ve led, focusing on measurable ROI and technical scale.
                        </p>
                    </div>

                    <WorkContent initialCaseStudies={caseStudies} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
