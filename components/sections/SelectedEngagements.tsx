"use client"

import { motion } from "framer-motion"

const engagements = [
    {
        title: "Enterprise Conversational AI — Financial Services",
        meta: "PROGRAM OWNERSHIP · REGULATED ENVIRONMENT · MULTI-MARKET DEPLOYMENT",
        description: "Led end-to-end delivery of production conversational AI systems for financial services clients, spanning discovery, evaluation design, deployment, and stabilization. Balanced accuracy, latency, compliance, and customer readiness to ensure systems could operate reliably under real usage and regulatory scrutiny.",
        metrics: ["95%+ production accuracy", "$MM+ annual revenue impact", "90%+ customer satisfaction"]
    },
    {
        title: "AI-powered Product Platforms — EdTech / Consumer",
        meta: "PLATFORM STRATEGY · SCALE · USER EXPERIENCE",
        description: "Orchestrated the re-architecture of a legacy SaaS platform into an AI-native solution. Managed the transition from monolithic legacy code to microservices, enabling rapid deployment of new AI features while maintaining system stability for millions of users.",
        metrics: ["40% increase in user retention", "60% reduction in page load", "Improved NPS from 12 to 45"]
    },
    {
        title: "Global Supply Chain Optimization",
        meta: "PROGRAM GOVERNANCE · REAL-TIME DATA · GLOBAL TEAMS",
        description: "Synchronized multiple cross-functional squads to build a real-time logistics tracking engine for a Fortune 500 client. Coordinated delivery across 3 continents, aligning engineering, operations, and business stakeholders on a single source of truth.",
        metrics: ["Automated 30% logistics processing", "$500k/year inventory savings", "Scaled to 10k+ concurrent users"]
    }
]

export function SelectedEngagements() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-12 tracking-tight">Selected Engagements</h2>

                    <div className="space-y-16 max-w-5xl">
                        {engagements.map((item, index) => (
                            <div key={index} className="group">
                                <h3 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-brand-primary transition-colors">
                                    {item.title}
                                </h3>
                                <div className="mb-6 text-xs font-mono tracking-wide text-slate-500 uppercase">
                                    {item.meta}
                                </div>
                                <p className="text-base text-slate-700 leading-relaxed max-w-3xl mb-8">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
                                    {item.metrics.map((metric, i) => (
                                        <span key={i} className="text-sm font-semibold tracking-tight text-[#10b981] font-mono">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                                {index !== engagements.length - 1 && (
                                    <div className="h-px w-full bg-neutral-100" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
