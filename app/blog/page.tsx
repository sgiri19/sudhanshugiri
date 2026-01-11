import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BlogList } from "@/components/blog/BlogList"
import { getAllPosts } from "@/lib/mdx"

export const metadata = {
    title: "Blog | Sudhanshu Giri",
    description: "Recent articles and insights on product strategy, program management, and building high-performance teams.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <>
            <Header />
            <main className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
                            Writing
                        </h1>
                        <p className="text-sm md:text-base font-mono text-slate-500 font-medium leading-relaxed uppercase tracking-wide">
                            Notes on leadership, execution, and AI systems in production.
                        </p>
                    </div>

                    <BlogList posts={posts} from="blog" />

                    {posts.length === 0 && (
                        <div className="text-center py-20 border rounded-2xl border-dashed">
                            <p className="text-neutral-500">No articles found yet. Please check back later!</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}
