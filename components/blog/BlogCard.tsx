"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col space-y-4 p-8 rounded-[2rem] border bg-white border-neutral-100 shadow-sm hover:shadow-xl transition-all blueprint-card"
        >
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4338ca] transition-colors leading-tight tracking-tight">
                    <Link href={href}>
                        <span className="absolute inset-0 z-20" />
                        {post.title}
                    </Link>
                </h3>
                <p className="text-slate-600 line-clamp-2 text-sm font-medium leading-relaxed">
                    {post.excerpt}
                </p>
                <div className="flex items-center text-xs font-bold text-slate-400 mono-metric uppercase tracking-widest pt-2">
                    {formatDate(post.date)}
                </div>
            </div>
        </motion.article>
    )
}
