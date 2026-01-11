"use client"

import { motion } from "framer-motion"

const principles = [
    {
        rule: "01",
        context: "Most AI failures happen after the pilot.",
        title: "Productize. Don’t demo.",
        desc: "I focus on turning promising prototypes into systems that can be monitored, governed, and scaled — without collapsing under real usage."
    },
    {
        rule: "02",
        context: "In regulated and high-stakes environments, accuracy alone isn’t enough.",
        title: "Safety and scale are not trade-offs.",
        desc: "Systems must be auditable, predictable, and resilient — by design, not by exception."
    },
    {
        rule: "03",
        context: "Roadmaps don’t fail in planning. They fail in execution gaps.",
        title: "Delivery is a product decision.",
        desc: "I work where gaps exist between product intent, engineering reality, and customer constraints."
    },
    {
        rule: "04",
        context: "I don’t optimize for narratives.",
        title: "Evidence beats opinion. Every time.",
        desc: "I optimize for metrics that survive production: adoption, reliability, latency, retention, and ROI."
    }
]

export function Philosophy() {
    return (
        <section className="py-24 border-t border-neutral-100 bg-neutral-50/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4 font-heading">Rules of Operation</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                        Execution <span className="text-brand-primary">Philosophy.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {principles.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm blueprint-card"
                        >
                            <div className="text-[10px] font-black text-brand-primary mb-4 flex items-center gap-3 mono-metric">
                                <div className="w-8 h-px bg-brand-primary/20" />
                                RULE {item.rule}
                            </div>
                            <p className="text-sm font-bold text-neutral-400 mb-3 uppercase tracking-wide">
                                {item.context}
                            </p>
                            <h4 className="text-xl font-black text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.title}
                            </h4>
                            <p className="text-neutral-500 font-medium leading-relaxed">
                                "{item.desc}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
