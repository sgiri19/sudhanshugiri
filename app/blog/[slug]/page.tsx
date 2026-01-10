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
        const backLink = from === 'work' ? '/work' : '/blog'
        const backText = from === 'work' ? 'Back to Work' : 'Back to Blog'

        return (
            <>
                <Header />
                <main className="flex-grow py-16 md:py-24">
                    <article className="container mx-auto px-4 max-w-4xl">
                        <Link
                            href={backLink}
                            className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-brand-primary mb-12 transition-all mono-metric group"
                        >
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            {backText}
                        </Link>

                        {/* Hero Section */}
                        <div className="relative w-full h-[300px] md:h-[600px] mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-50">
                            {metadata.coverImage ? (
                                <img
                                    src={metadata.coverImage}
                                    alt={metadata.title}
                                    className="object-cover object-center w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                />
                            ) : (
                                <div className="w-full h-full bg-brand-primary flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_0)] bg-[size:40px_40px]"></div>
                                    <span className="text-white/10 text-6xl md:text-[15rem] font-black uppercase tracking-tighter select-none leading-none -rotate-12 mono-metric">
                                        {metadata.category}
                                    </span>
                                </div>
                            )}
                        </div>

                        <header className="mb-16">
                            <h1 className="text-4xl md:text-7xl font-black text-neutral-900 leading-[1.1] mb-8 tracking-tighter italic">
                                {metadata.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mono-metric">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-brand-primary" />
                                    {formatDate(metadata.date)}
                                </div>
                                <div className="h-4 w-px bg-neutral-100 hidden md:block" />
                                <div className="flex items-center gap-2 text-brand-primary">
                                    {metadata.category}
                                </div>
                                <div className="h-4 w-px bg-neutral-100 hidden md:block" />
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-brand-primary" />
                                    {metadata.readingTime}
                                </div>
                            </div>
                        </header>

                        <div className="prose prose-neutral max-w-none prose-lg md:prose-2xl prose-headings:font-black prose-headings:tracking-tight prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline font-medium text-neutral-800 leading-relaxed">
                            <MDXRemote source={content} components={components} />
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
