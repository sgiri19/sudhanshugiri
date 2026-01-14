import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BlogList } from "@/components/blog/BlogList"
import { getAllPosts } from "@/lib/mdx"

export const metadata = {
    title: "Writing | Sudhanshu Giri",
    description: "Articles and insights on product strategy, AI systems, and building high-performance teams.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="max-w-4xl mx-auto px-6 md:px-8">
                <div className="py-20 md:py-32">
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
                        Writing
                    </h1>
                    <p className="text-xl text-neutral-600 mb-16">
                        Thoughts on AI systems, product strategy, and leadership.
                    </p>

                    <BlogList posts={posts} from="blog" />

                    {posts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-neutral-500">No articles found yet. Please check back later!</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}
