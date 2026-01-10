"use client"

import { BlogCard } from "@/components/blog/BlogCard"
import { type PostMetadata } from "@/lib/mdx"

interface BlogListProps {
    posts: PostMetadata[]
    from?: string
}

export function BlogList({ posts, from }: BlogListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} from={from} />
            ))}
        </div>
    )
}
