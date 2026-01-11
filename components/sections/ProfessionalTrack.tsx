"use client"

import { motion } from "framer-motion"

export function ProfessionalTrack() {
    const history = [
        { role: "Product Leader", company: "Skit.ai", scope: "Conversational AI Leadership" },
        { role: "Product Manager", company: "Bigspring", scope: "Enterprise AI Enablement" },
        { role: "Product Manager", company: "ByteDance", scope: "Scale & Platform Growth" },
        { role: "Product Manager", company: "Toppr", scope: "EdTech Product Delivery" },
        { role: "Software Engineer", company: "Tech Mahindra", scope: "Enterprise Systems Foundation" }
    ]

    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-12 tracking-tight">Professional Track</h2>

                    <div className="space-y-8">
                        {history.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                                <div className="flex flex-col md:flex-row md:gap-8">
                                    <span className="text-lg font-bold text-[#0f172a] w-48">{item.role}</span>
                                    <span className="text-lg font-medium text-slate-700">{item.company}</span>
                                </div>
                                <span className="text-base font-normal text-slate-500 mt-1 md:mt-0">{item.scope}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
