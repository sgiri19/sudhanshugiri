"use client"

import { motion } from "framer-motion"

const principles = [
    {
        rule: "01",
        context: "Promising prototypes must turn into monitored, governed systems that survive production complexity.",
        title: "Productize, don’t demo.",
        desc: ""
    },
    {
        rule: "02",
        context: "In regulated environments, unaudited decisions become failures — not features.",
        title: "Safety and scale go together.",
        desc: ""
    },
    {
        rule: "03",
        context: "Operational gaps often kill value faster than technical debt.",
        title: "Delivery is a product decision.",
        desc: ""
    },
    {
        rule: "04",
        context: "The strongest roadmap is one that delivers measurable, real-world impact.",
        title: "Outcomes > Intent.",
        desc: ""
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
