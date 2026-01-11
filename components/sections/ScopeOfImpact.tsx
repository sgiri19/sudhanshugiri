"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function ScopeOfImpact() {
    return (
        <section className="py-24 bg-white border-bottom border-neutral-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-14 rounded-[2.5rem] bg-neutral-900 text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-8 font-heading">What I've Worked On</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Enterprise AI systems across financial services, education, and consumer platforms",
                                "AI implementations generating multi-million-dollar annual revenue impact",
                                "Cross-functional delivery spanning product, engineering, data, and operations",
                                "Teams operating under regulatory, scale, and customer-critical constraints"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-lg md:text-xl font-medium leading-relaxed">
                                    <div className="mt-2 h-2 w-2 bg-brand-primary rounded-full shrink-0 shadow-[0_0_12px_rgba(67,56,202,0.8)]" />
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
