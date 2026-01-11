"use client"

import { motion } from "framer-motion"

export function WorkApproach() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8 tracking-tight">How I Approach Work</h2>

                    <div className="blueprint-card rounded-[2rem] p-8 md:p-12 bg-white border border-neutral-100 w-full">
                        <ul className="space-y-6">
                            {[
                                "Evidence before opinion",
                                "Clear ownership, even in ambiguity",
                                "Delivery decisions treated as product decisions",
                                "Calm execution in high-pressure environments"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-slate-700 text-base md:text-lg font-medium leading-relaxed items-center">
                                    <div className="h-2 w-2 bg-brand-primary rounded-full shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
