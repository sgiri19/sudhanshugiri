"use client"

import { motion } from "framer-motion"

export function CareerLog() {
    const history = [
        { period: "2023–Present", role: "Product Leader", company: "Skit.ai", scope: "Led conversational AI across regulated financial deployments" },
        { period: "2022–2023", role: "Program Manager", company: "BigSpring", scope: "Scaled AI platform adoption across enterprise customers" },
        { period: "2021–2022", role: "Product Manager", company: "ByteDance", scope: "Drove growth initiatives on global consumer platforms" },
        { period: "2019–2021", role: "Associate Program Manager", company: "Toppr", scope: "Delivered learner-facing product experiences at scale" },
        { period: "2016–2019", role: "Software Engineer", company: "Tech Mahindra", scope: "Built enterprise integration systems" }
    ]

    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            03 / Log
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <div className="space-y-0">
                            {history.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-default"
                                >
                                    <div className="md:col-span-3">
                                        <span className="font-mono text-sm text-neutral-500 group-hover:text-brand-primary transition-colors">
                                            {item.period}
                                        </span>
                                    </div>
                                    <div className="md:col-span-9 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                                        <div>
                                            <span className="font-bold text-neutral-900 block md:inline md:mr-2">
                                                {item.company}
                                            </span>
                                            <span className="text-neutral-600">
                                                {item.role}
                                            </span>
                                        </div>
                                        <span className="text-sm text-neutral-400 hidden md:block">
                                            {item.scope}
                                        </span>
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
