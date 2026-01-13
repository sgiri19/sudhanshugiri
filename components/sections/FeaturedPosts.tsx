"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    { title: "Field Marshal Sam Manekshaw: Leadership Under Constraint", slug: "unveiling-leadership-insights-from-field-marshal-sam-manekshaw" },
    { title: "Why I Build Systems, Not Demos", slug: "scaling-agile" }
]

export function FeaturedPosts() {
    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="flex justify-between items-baseline mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-[#4338ca] tracking-tighter leading-tight">Writing</h2>
                    <Link href="/blog" className="text-[#4338ca] font-bold hover:gap-2 transition-all inline-flex items-center">
                        Read on the Blog <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, i) => (
                        <Link key={i} href={`/blog/${post.slug}`} className="group block p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-[#4338ca] transition-all">
                            <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4338ca] transition-colors leading-snug">
                                {post.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
