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
            <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest text-neutral-400 mono-metric">
                <span className="text-brand-primary">
                    {post.category}
                </span>
                <div className="flex items-center">
                    <Calendar size={12} className="mr-1.5" />
                    {formatDate(post.date)}
                </div>
                <div className="flex items-center">
                    <Clock size={12} className="mr-1.5" />
                    {post.readingTime}
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-brand-primary transition-colors leading-tight">
                    <Link href={href}>
                        <span className="absolute inset-0 z-20" />
                        {post.title}
                    </Link>
                </h3>
                <p className="text-neutral-500 line-clamp-2 text-sm font-medium leading-relaxed">
                    {post.excerpt}
                </p>
            </div>

            <div className="flex items-center text-xs font-black uppercase tracking-widest text-brand-primary mono-metric group-hover:gap-1 transition-all">
                Read Insight
                <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>
        </motion.article>
    )
}
