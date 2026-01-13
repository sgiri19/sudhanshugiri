"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    { title: "Field Marshal Sam Manekshaw: Leadership Under Constraint", date: "Jan 2026", slug: "unveiling-leadership-insights-from-field-marshal-sam-manekshaw" },
    { title: "Why I Build Systems, Not Demos", date: "Dec 2025", slug: "scaling-agile" }
]

export function FeaturedPosts() {
    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            05 / Writing
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <div className="space-y-0">
                            {posts.map((post, i) => (
                                <Link key={i} href={`/blog/${post.slug}`} className="group block py-6 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#4338ca] transition-colors">
                                            {post.title}
                                        </h3>
                                        <span className="font-mono text-sm text-neutral-400 group-hover:text-brand-primary transition-colors">
                                            {post.date}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                            <div className="pt-8">
                                <Link href="/blog" className="text-[#4338ca] font-bold hover:underline inline-flex items-center text-sm md:text-base">
                                    View Strategic Archive <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
