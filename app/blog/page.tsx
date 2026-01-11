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
                        <h1 className="text-4xl md:text-7xl font-black text-neutral-900 mb-6 leading-tight">
                            The <span className="text-brand-primary">Product</span> Journal.
                        </h1>
                        <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                            This space is for thinking in public — about leadership, systems, and responsibility.
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
