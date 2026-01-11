"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function OperatingManual() {
    return (
        <section className="py-24 border-t border-neutral-100 bg-neutral-50/50">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-black text-neutral-900 mb-12 tracking-tight text-center">How I Operate</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        {[
                            { title: "Calm under pressure", desc: "Decisions made in panic are usually wrong. Reliability requires steadiness." },
                            { title: "Clear about trade-offs", desc: "No magic. We choose what to optimize: Speed, Scope, or Stability." },
                            { title: "Opinionated, but evidence-led", desc: "Strong beliefs, loosely held until data arrives." },
                            { title: "Deep respect for reality", desc: "Engineering constraints and business viability are not obstacles—they are the requirements." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col space-y-3 p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-neutral-900 flex items-center gap-3">
                                    <div className="h-2 w-2 bg-brand-primary rounded-full" />
                                    {item.title}
                                </h4>
                                <p className="text-neutral-500 font-medium leading-relaxed pl-5">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
