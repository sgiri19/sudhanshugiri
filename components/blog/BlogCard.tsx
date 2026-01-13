"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group py-6 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors"
        >
            <Link href={href} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2">
                    <span className="font-mono text-sm text-neutral-500 font-medium group-hover:text-brand-primary transition-colors">
                        {formatDate(post.date)}
                    </span>
                </div>
                <div className="md:col-span-8">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#4338ca] transition-colors mb-2">
                        {post.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-2 md:line-clamp-1">
                        {post.excerpt}
                    </p>
                </div>
                <div className="md:col-span-2 text-right hidden md:block">
                    <span className="font-mono text-xs font-bold text-[#10b981] uppercase tracking-wider">
                        {post.readingTime}
                    </span>
                </div>
            </Link>
        </motion.article>
    )
}
