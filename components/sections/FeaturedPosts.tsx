"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    { title: "Field Marshal Sam Manekshaw: Leadership Under Constraint", date: "Jan 2026", slug: "unveiling-leadership-insights-from-field-marshal-sam-manekshaw" },
    { title: "Why I Build Systems, Not Demos", date: "Dec 2025", slug: "scaling-agile" }
]

export function FeaturedPosts() {
    return (
        <section className="py-12 border-b border-neutral-100">
            <h2 className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase mb-8">
                05 / Writing
            </h2>
            <div className="space-y-4">
                {posts.map((post, i) => (
                    <Link key={i} href={`/blog/${post.slug}`} className="group block py-2 hover:bg-neutral-50 -mx-4 px-4 rounded-none transition-colors">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                                {post.title}
                            </h3>
                            <span className="font-mono text-xs text-neutral-400">
                                {post.date}
                            </span>
                        </div>
                    </Link>
                ))}
                <div className="pt-6">
                    <Link href="/blog" className="text-indigo-600 font-bold hover:underline inline-flex items-center text-sm">
                        View Strategic Archive <ArrowRight size={14} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
