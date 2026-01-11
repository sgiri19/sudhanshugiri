"use client"

import { motion } from "framer-motion"

const principles = [
    {
        rule: "01",
        title: "Systems over heroics.",
        desc: "I design repeatable processes and governance models that scale across teams and customers, rather than relying on individual effort or ad-hoc fixes."
    },
    {
        rule: "02",
        title: "Safety before speed.",
        desc: "In regulated environments, accuracy, explainability, and auditability take precedence over rapid experimentation."
    },
    {
        rule: "03",
        title: "Decisions beat deliverables.",
        desc: "The real leverage lies in choosing the right problems, setting the right constraints, and making trade-offs explicit."
    }
]

export function Philosophy() {
    return (
        <section className="py-24 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
                        Rules of Operation
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((item, i) => (
                        <motion.div
                            key={item.rule}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm blueprint-card hover:border-[#4338ca] hover:shadow-lg transition-all"
                        >
                            <span className="mono-metric text-sm font-bold text-[#4338ca] uppercase tracking-wider mb-4 block">
                                RULE {item.rule}
                            </span>
                            <h4 className="text-xl font-bold text-[#0f172a] mb-4 tracking-tight leading-snug">
                                {item.title}
                            </h4>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
