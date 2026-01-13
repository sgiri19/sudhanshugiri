"use client"

import { motion } from "framer-motion"

export function DecisionFramework() {
    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#4338ca] mb-8 tracking-tighter leading-tight">How I Make Decisions</h2>
                    <p className="text-lg text-slate-600 mb-12">When ambiguity is high and stakes are real, I optimize for:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { label: "Stability", desc: "Long-term system reliability over short-term wins" },
                            { label: "Signal", desc: "Evidence from production over opinions" },
                            { label: "Constraints", desc: "Explicit trade-offs around cost, latency, and risk" },
                            { label: "Ownership", desc: "Clear accountability over consensus" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col space-y-2">
                                <span className="mono-metric text-sm font-bold text-[#4338ca] uppercase tracking-wider">{item.label}</span>
                                <p className="text-lg font-medium text-[#0f172a] leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
