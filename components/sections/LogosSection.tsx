"use client"

import { motion } from "framer-motion"

const companies = [
    { name: "Tech Mahindra", sub: "Mahindra Satyam" },
    { name: "Bytedance", sub: "TikTok/Toutiao" },
    { name: "Toppr.com", sub: "EdTech" },
    { name: "Bigspring.ai", sub: "Enterprise AI" },
    { name: "Skit.ai", sub: "Conversational AI" }
]

export function LogosSection() {
    return (
        <section className="py-16 bg-white border-y border-neutral-100">
            <div className="container mx-auto px-4">
                <p className="text-center text-[10px] uppercase tracking-[0.3em] font-black text-neutral-400 mb-10">
                    Experience at Global Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 contrast-125 grayscale">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 mb-1">
                                {company.name}
                            </span>
                            <span className="text-[8px] font-bold uppercase tracking-widest text-brand-primary mono-metric">
                                {company.sub}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
