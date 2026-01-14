"use client"

import Link from "next/link"

export function Writing() {
    const posts = [
        {
            title: "Field Marshal Sam Manekshaw: Leadership Under Constraint",
            date: "Jan 2026",
            slug: "unveiling-leadership-insights-from-field-marshal-sam-manekshaw"
        },
        {
            title: "Why I Build Systems, Not Demos",
            date: "Dec 2025",
            slug: "scaling-agile"
        }
    ]

    return (
        <section className="py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
                Writing
            </h2>
            <div className="space-y-8">
                {posts.map((post, index) => (
                    <Link
                        key={index}
                        href={`/blog/${post.slug}`}
                        className="block group hover:bg-neutral-50 -mx-4 px-4 py-4 rounded-lg transition-colors"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                            <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                                {post.title}
                            </h3>
                            <span className="text-sm font-mono text-neutral-400">
                                {post.date}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-8">
                <Link
                    href="/blog"
                    className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2"
                >
                    View all writing →
                </Link>
            </div>
        </section>
    )
}
