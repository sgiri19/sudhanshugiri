import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMetadata {
    title: string
    date: string
    excerpt: string
    coverImage?: string
    category: string
    tags: string[]
    impact?: string[]
    featured: boolean
    readingTime: string
    slug: string
}

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) return []
    return fs.readdirSync(postsDirectory).filter((path) => /\.mdx?$/.test(path))
}

export function getPostBySlug(slug: string): { metadata: PostMetadata; content: string } {
    const realSlug = slug.replace(/\.mdx?$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post not found: ${fullPath}`)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
        metadata: {
            ...data,
            slug: realSlug,
            readingTime: readingTime(content).text,
        } as PostMetadata,
        content,
    }
}

export function getAllPosts(): PostMetadata[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug).metadata)
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
