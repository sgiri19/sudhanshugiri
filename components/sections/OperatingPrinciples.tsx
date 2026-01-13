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

export function OperatingPrinciples() {
    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            02 / Principles
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 gap-12">
                            {principles.map((item, i) => (
                                <motion.div
                                    key={item.rule}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                                >
                                    <div className="md:col-span-2">
                                        <span className="font-mono text-sm font-bold text-brand-primary uppercase">
                                            RULE {item.rule}
                                        </span>
                                    </div>
                                    <div className="md:col-span-10">
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-neutral-600 leading-relaxed max-w-2xl">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
