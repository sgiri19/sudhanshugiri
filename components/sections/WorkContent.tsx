"use client"

import { motion } from "framer-motion"
import { ShieldCheck, TrendingUp, Users, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PostMetadata } from "@/lib/mdx"

interface WorkContentProps {
    initialCaseStudies: PostMetadata[];
}

// Fallback high-impact projects if no case studies are added yet
const staticProjects = [
    {
        title: "Enterprise SaaS Platform Revamp",
        role: "Lead Product Manager",
        description: "Led the end-to-end redesign and re-architecture of a legacy SaaS platform, resulting in a 40% increase in user retention and a 25% reduction in churn.",
        impact: ["$2M ARR increase within 6 months", "Reduced page load time by 60%", "Improved NPS from 12 to 45"],
        tags: ["Product Strategy", "Next.js", "Cloud Architecture"],
        icon: <TrendingUp className="text-brand-primary" size={32} />
    },
    {
        title: "Global Supply Chain Optimizer",
        role: "Program Leader",
        description: "Synchronized multiple cross-functional squads to build a real-time logistics tracking engine for a Fortune 500 client, coordinating across 3 continents.",
        impact: ["Automated 30% of manual logistics processing", "Reduced inventory overhead by $500k/year", "Scaled to 10k+ concurrent users"],
        tags: ["Program Governance", "Agile Scaling", "Stakeholder Management"],
        icon: <Users className="text-brand-primary" size={32} />
    }
]

export function WorkContent({ initialCaseStudies }: WorkContentProps) {
    return (
        <div className="space-y-16">
            {/* Dynamic Case Studies from MDX */}
            {initialCaseStudies.map((post, index) => (
                <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[2.5rem] blueprint-card group"
                >
                    <Link
                        href={`/blog/${post.slug}?from=work`}
                        className="absolute inset-0 z-20 rounded-[2.5rem]"
                        aria-label={`Read case study: ${post.title}`}
                    />
                    <div className="lg:col-span-8">
                        <div className="flex flex-col space-y-2 mb-6">
                            <span className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] mono-metric">Case Study • {post.tags[0] || 'Leadership'}</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 group-hover:text-brand-primary/80 transition-colors">
                                {post.title}
                            </h2>
                        </div>
                        <p className="text-neutral-600 mb-8 max-w-2xl leading-relaxed text-lg font-medium">
                            {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 rounded-xl bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-500 uppercase tracking-widest mono-metric">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="inline-flex items-center text-brand-primary font-black uppercase tracking-widest text-xs hover:gap-2 transition-all group-hover:gap-2 mono-metric">
                            Read Full Case Study <ArrowRight size={18} className="ml-2 group-hover:ml-3 transition-all" />
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-neutral-50 p-8 rounded-[2rem] border border-neutral-200 flex flex-col justify-center">
                        <h3 className="text-xs font-black text-neutral-900 mb-6 flex items-center uppercase tracking-[0.2em] mono-metric">
                            <ShieldCheck size={20} className="mr-2 text-brand-primary" /> Success Points
                        </h3>
                        <ul className="space-y-5">
                            {post.impact && post.impact.length > 0 ? (
                                post.impact.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-neutral-700 font-bold leading-snug">
                                        <div className="mt-1 h-2 w-2 bg-brand-primary rounded-full shrink-0 shadow-[0_0_8px_rgba(79,70,233,0.5)]" />
                                        <span className="mono-metric">{point}</span>
                                    </li>
                                ))
                            ) : (
                                <>
                                    <li className="flex gap-4 text-sm text-neutral-700 font-medium leading-snug">
                                        <div className="mt-1 h-2 w-2 bg-brand-primary rounded-full shrink-0" />
                                        Strategic leadership and cross-functional orchestration.
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </motion.div>
            ))}

            {/* Static Highlight Projects (If no case studies yet or as extra proof) */}
            {initialCaseStudies.length === 0 && staticProjects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[2.5rem] border border-neutral-100 bg-white shadow-sm blueprint-card"
                >
                    <div className="lg:col-span-1 hidden lg:block">
                        {project.icon}
                    </div>
                    <div className="lg:col-span-7">
                        <div className="flex flex-col space-y-2 mb-6">
                            <span className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] mono-metric">{project.role}</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900">{project.title}</h2>
                        </div>
                        <p className="text-neutral-600 mb-8 max-w-2xl leading-relaxed text-lg font-medium">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 rounded-xl bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-500 uppercase tracking-widest mono-metric">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-4 bg-neutral-50 p-8 rounded-[2rem] border border-neutral-200 flex flex-col justify-center">
                        <h3 className="text-xs font-black text-neutral-900 mb-6 flex items-center uppercase tracking-[0.2em] mono-metric">
                            <ShieldCheck size={20} className="mr-2 text-brand-primary" /> Key Outcomes
                        </h3>
                        <ul className="space-y-4">
                            {project.impact.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-neutral-700 font-bold leading-snug">
                                    <div className="mt-1.5 h-1.5 w-1.5 bg-brand-primary rounded-full shrink-0 shadow-[0_0_8px_rgba(67,56,202,0.3)]" />
                                    <span className="mono-metric">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pt-16 text-center"
            >
                <h3 className="text-3xl font-black mb-8 text-neutral-900 tracking-tight">Want to build something similar?</h3>
                <Link
                    href="/contact"
                    className="inline-flex items-center px-12 py-5 bg-brand-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-brand-primary/90 transition-all shadow-2xl shadow-brand-primary/20 mono-metric"
                >
                    Let&apos;s talk Strategy
                </Link>
            </motion.div>
        </div>
    )
}
