import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getPostBySlug } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostPageProps {
    params: {
        slug: string
    }
}

const components = {
    YouTube: ({ id }: { id: string }) => (
        <div className="aspect-video w-full my-8">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
            ></iframe>
        </div>
    ),
    img: (props: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            {...props}
            className="rounded-lg my-8 mx-auto block max-w-full h-auto"
            alt={props.alt || ''}
        />
    ),
    a: (props: any) => (
        <a
            {...props}
            className="text-indigo-600 hover:text-indigo-700 underline"
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        />
    )
}

export default async function PostPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const resolvedParams = await params
        const resolvedSearchParams = await searchParams
        const { metadata, content } = getPostBySlug(resolvedParams.slug)

        const from = resolvedSearchParams.from
        const backLink = from === 'work' ? '/' : '/blog'
        const backText = from === 'work' ? 'Back to Home' : 'Back to Writing'

        return (
            <div className="min-h-screen bg-white">
                <Header />
                <main className="max-w-4xl mx-auto px-6 md:px-8">
                    <article className="py-20 md:py-32">
                        <Link
                            href={backLink}
                            className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            {backText}
                        </Link>

                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                                {metadata.title}
                            </h1>

                            <div className="flex items-center gap-4 text-sm text-neutral-500">
                                <time dateTime={metadata.date}>
                                    {formatDate(metadata.date)}
                                </time>
                                <span>·</span>
                                <span>{metadata.readingTime}</span>
                            </div>
                        </header>

                        <div className="prose prose-lg prose-neutral max-w-none">
                            <MDXRemote source={content} components={components} />
                        </div>

                        <footer className="mt-16 pt-8 border-t border-neutral-100">
                            <div className="flex flex-wrap gap-2">
                                {metadata.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </footer>
                    </article>
                </main>
                <Footer />
            </div>
        )
    } catch (error) {
        return notFound()
    }
}
