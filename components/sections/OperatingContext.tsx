"use client"

import { motion } from "framer-motion"

export function OperatingContext() {
    return (
        <section className="py-24 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-extrabold text-[#4338ca] tracking-tight">Operating Context</h2>

                    <div className="space-y-6 text-lg md:text-xl text-[#0f172a] leading-relaxed">
                        <p>
                            I work at the intersection of product, delivery, and execution, building AI systems where the cost of failure is real — financial, operational, and reputational.
                        </p>
                        <p className="text-slate-600">
                            Over a decade of leading large-scale programs across enterprise platforms, data operations, and AI deployments has shaped how I approach decisions: prioritize safety, design for scale, and optimize for long-term system health over short-term wins.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
