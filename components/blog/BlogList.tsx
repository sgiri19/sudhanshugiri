import { BlogCard } from "./BlogCard"
import { type PostMetadata } from "@/lib/mdx"

interface BlogListProps {
    posts: PostMetadata[]
    from?: string
}

export function BlogList({ posts, from }: BlogListProps) {
    return (
        <div className="space-y-0 border-t border-neutral-200">
            {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} from={from} />
            ))}
        </div>
    )
}
