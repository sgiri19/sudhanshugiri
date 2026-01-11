"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function OperatingManual() {
    return (
        <section className="py-24 border-t border-neutral-100 bg-neutral-50/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-black text-neutral-900 mb-8 tracking-tight">What I Don't Optimize For</h3>
                        <ul className="space-y-4">
                            {[
                                "Hype cycles or vanity metrics",
                                "Demo-driven roadmaps without production clearance",
                                "Speed at the cost of governance",
                                "Politics over shipping"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-neutral-500 font-medium">
                                    <X className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl font-black text-neutral-900 mb-8 tracking-tight">What You Can Expect</h3>
                        <ul className="space-y-4">
                            {[
                                "Clear priorities from Day 1",
                                "Honest trade-offs (Quality vs. Speed)",
                                "Calm execution under pressure",
                                "Deep respect for engineering constraints"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-neutral-900 font-bold">
                                    <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
