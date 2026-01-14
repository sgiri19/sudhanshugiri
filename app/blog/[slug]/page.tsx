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
            className="rounded-[2rem] border border-neutral-100 my-12 mx-auto block max-w-full h-auto shadow-xl"
            alt={props.alt || ''}
        />
    ),
    a: (props: any) => (
        <a
            {...props}
            className="text-brand-primary border-b-2 border-brand-primary/20 hover:border-brand-primary transition-colors font-bold"
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
        const backText = from === 'work' ? 'Back to Home' : 'Back to Blog'

        return (
            <>
                <Header />
                <main className="flex-grow max-w-5xl mx-auto w-full border-x border-neutral-100 min-h-screen bg-white">
                    <article className="py-12 px-6">
                        <div>
                            <Link
                                href={backLink}
                                className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-brand-primary mb-12 transition-all mono-metric group"
                            >
                                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                {backText}
                            </Link>

                            <header className="mb-12 border-b border-neutral-100 pb-12">
                                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
                                    {metadata.title}
                                </h1>

                                <div className="flex flex-wrap gap-6 text-xs font-mono font-medium text-neutral-500 uppercase tracking-wide">
                                    <time dateTime={metadata.date}>
                                        {formatDate(metadata.date)}
                                    </time>
                                    <span className="text-neutral-300">/</span>
                                    <span>{metadata.readingTime}</span>
                                </div>
                            </header>

                            <div className="prose prose-neutral max-w-none prose-lg md:prose-2xl prose-headings:font-black prose-headings:tracking-tight prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline font-medium text-neutral-800 leading-relaxed">
                                <MDXRemote source={content} components={components} />
                            </div>
                        </div>

                        <footer className="mt-20 pt-12 border-t border-neutral-100">
                            <div className="flex flex-wrap gap-3">
                                {metadata.tags.map(tag => (
                                    <span key={tag} className="px-5 py-2 rounded-xl bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-500 uppercase tracking-widest mono-metric">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </footer>
                    </article>
                </main>
                <Footer />
            </>
        )
    } catch (error) {
        return notFound()
    }
}
