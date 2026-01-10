import Link from "next/link"
import { BlogList } from "@/components/blog/BlogList"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"

export function FeaturedPosts() {
    const posts = getAllPosts().filter(post => post.featured).slice(0, 3)

    if (posts.length === 0) return null

    return (
        <section className="py-24 border-t border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">
                            Latest <span className="text-brand-primary">Insights.</span>
                        </h2>
                        <p className="text-neutral-600 font-medium leading-relaxed">
                            Deep dives into the mechanics of shipping AI and leading high-stakes programs.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-brand-primary font-black uppercase tracking-widest text-xs hover:gap-2 transition-all mono-metric"
                    >
                        All Articles
                        <ArrowRight className="ml-2" size={16} />
                    </Link>
                </div>

                <BlogList posts={posts} from="work" />
            </div>

            <div className="mt-12 text-center md:hidden">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-brand-primary font-black uppercase tracking-widest text-xs hover:gap-2 transition-all mono-metric"
                >
                    All Articles
                    <ArrowRight className="ml-2" size={16} />
                </Link>
            </div>
        </section>
    )
}
