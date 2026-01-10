import { getAllPosts } from "@/lib/mdx"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function FeaturedCaseStudy() {
    const posts = getAllPosts()
    const featured = posts.find(post => post.category === 'Case Study')

    if (!featured) return null

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-brand-primary mb-4">
                            <Star size={16} fill="currentColor" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] mono-metric">Featured Production Win</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 mb-4 leading-tight">
                            Strategy in <span className="text-brand-primary italic">Action.</span>
                        </h2>
                        <p className="text-lg text-neutral-600 font-medium">
                            A deep dive into how I approach complex AI productization to deliver measurable ROI and scale.
                        </p>
                    </div>
                    <Link
                        href="/work"
                        className="text-xs font-black uppercase tracking-widest hover:text-brand-primary transition-all flex items-center gap-2 mono-metric group/btn"
                    >
                        View All Production Wins <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <Link href={`/blog/${featured.slug}?from=work`} className="group block relative overflow-hidden rounded-[2.5rem] blueprint-card">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 md:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-[10px] font-black uppercase tracking-widest text-brand-primary mono-metric">
                                    {featured.tags[0] || 'Strategy'}
                                </span>
                                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mono-metric">Case Study</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 group-hover:text-brand-primary transition-colors leading-tight">
                                {featured.title}
                            </h3>
                            <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-medium">
                                {featured.excerpt}
                            </p>
                            <div className="flex items-center text-brand-primary font-black uppercase tracking-widest text-xs gap-3 mono-metric group-hover:gap-4 transition-all">
                                Read Insight <div className="h-px w-8 bg-brand-primary/30" /> <ArrowRight size={20} />
                            </div>
                        </div>
                        <div className="hidden lg:block relative min-h-[500px]">
                            {featured.coverImage ? (
                                <img
                                    src={featured.coverImage}
                                    alt={featured.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-brand-primary p-16 flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                    <span className="text-white/10 text-[12rem] font-black uppercase select-none leading-none -rotate-12 mono-metric">
                                        SHIP
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
