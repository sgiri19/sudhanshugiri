"use client"

import { motion } from "framer-motion"

const logos = [
    "Skit.ai", "BigSpring", "ByteDance", "Toppr", "Tech Mahindra"
]

export function LogosSection() {
    return (
        <section className="py-12 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {logos.map((logo, i) => (
                            <span key={i} className="text-xl md:text-2xl font-black text-[#0f172a] tracking-tight">{logo}</span>
                        ))}
                    </div>
                    <p className="mono-metric text-xs md:text-sm text-slate-500 uppercase tracking-widest">
                        Enterprise AI • Consumer Platforms • Global Scale
                    </p>
                </div>
            </div>
        </section>
    )
}
