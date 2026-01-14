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
            <main className="flex-grow max-w-5xl mx-auto w-full border-x border-neutral-100 min-h-screen bg-white">
                <div className="py-12 px-6">
                    <div className="mb-12 border-b border-neutral-100 pb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#4338ca] mb-4 tracking-tighter">
                            Strategic Archive
                        </h1>
                        <p className="text-lg text-neutral-600 font-medium">
                            Observations on systems, governance, and AI scaling.
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
