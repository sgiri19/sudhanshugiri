"use client"

import { motion } from "framer-motion"

export function SelectedProductionWork() {
    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-extrabold text-[#0f172a] mb-12 tracking-tight">Selected Production Work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 01 */}
                        <div className="blueprint-card bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="mono-metric text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">
                                    Conversational AI | Financial Services
                                </div>
                                <p className="text-base text-[#0f172a] leading-relaxed mb-8">
                                    Owned end-to-end deployment of high-stakes conversational AI systems, from discovery through production stabilization, ensuring accuracy, compliance, and client readiness.
                                </p>
                            </div>
                            <div className="mono-metric text-sm font-bold text-[#10b981]">
                                95%+ production accuracy • 90%+ client satisfaction
                            </div>
                        </div>

                        {/* Card 02 */}
                        <div className="blueprint-card bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="mono-metric text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">
                                    Enterprise Learning Platforms
                                </div>
                                <p className="text-base text-[#0f172a] leading-relaxed mb-8">
                                    Translated learner and enterprise feedback into scalable product improvements, driving sustained engagement and adoption across customers.
                                </p>
                            </div>
                            <div className="mono-metric text-sm font-bold text-[#10b981]">
                                4× MAU growth • ~$500K enterprise wins
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
