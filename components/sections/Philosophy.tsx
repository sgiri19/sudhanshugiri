"use client"

import { motion } from "framer-motion"

const principles = [
    {
        rule: "01",
        title: "Production is the only metric.",
        desc: "Demos are easy. Getting AI into a regulated production environment with 99.9% accuracy is where the value is created."
    },
    {
        rule: "02",
        title: "ROI > Novelty.",
        desc: "Technical excellence should serve business outcomes. Every feature shippped must move the needle on churn, retention, or margin."
    },
    {
        rule: "03",
        title: "Precision is Non-Negotiable.",
        desc: "In high-stakes enterprise environments, explainability and governance are not 'nice-to-haves'—they are structural requirements."
    },
    {
        rule: "04",
        title: "The Technical Bridge.",
        desc: "Solving the gap between high-level business strategy and low-level technical execution is the core of successful productization."
    }
]

export function Philosophy() {
    return (
        <section className="py-24 border-t border-neutral-100 bg-neutral-50/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4 mono-metric">Principles of Operation</h2>
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
                            <div className="text-[10px] font-black text-brand-primary mb-6 flex items-center gap-3 mono-metric">
                                <div className="w-8 h-px bg-brand-primary/20" />
                                RULE {item.rule}
                            </div>
                            <h4 className="text-xl font-black text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.title}
                            </h4>
                            <p className="text-neutral-500 font-medium leading-relaxed italic">
                                "{item.desc}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
