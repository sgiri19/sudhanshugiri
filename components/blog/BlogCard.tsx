"use client"

import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { type PostMetadata } from "@/lib/mdx"

interface BlogCardProps {
    post: PostMetadata
    index?: number
    from?: string
}

export function BlogCard({ post, index = 0, from }: BlogCardProps) {
    const href = from ? `/blog/${post.slug}?from=${from}` : `/blog/${post.slug}`
    return (
        <article className="group py-6 border-b border-neutral-100 last:border-0">
            <Link href={href} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                    </h3>
                    <span className="text-sm font-mono text-neutral-400">
                        {formatDate(post.date)}
                    </span>
                </div>
                <p className="text-neutral-600 line-clamp-2">
                    {post.excerpt}
                </p>
            </Link>
        </article>
    )
}
