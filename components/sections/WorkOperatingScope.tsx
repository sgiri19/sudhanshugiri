"use client"

import { motion } from "framer-motion"

export function WorkOperatingScope() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8 tracking-tight">Scope of Engagement</h2>

                    <div className="blueprint-card rounded-[2rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 border border-neutral-100 bg-white">
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-brand-primary mb-4 font-heading">The Work</h3>
                            <ul className="space-y-4">
                                {[
                                    "Enterprise AI systems (LLM + data workflows)",
                                    "Productized AI deployments in regulated environments",
                                    "Cross-functional delivery at scale",
                                    "Revenue-linked AI initiatives"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-slate-700 font-medium leading-snug items-start">
                                        <div className="mt-2 h-1.5 w-1.5 bg-brand-primary rounded-full shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-brand-primary mb-4 font-heading">The Execution</h3>
                            <ul className="space-y-4">
                                {[
                                    "Production readiness & stabilization",
                                    "Evaluation & governance frameworks",
                                    "Stakeholder and compliance alignment",
                                    "Execution under real-world constraints"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-slate-700 font-medium leading-snug items-start">
                                        <div className="mt-2 h-1.5 w-1.5 bg-slate-400 rounded-full shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
