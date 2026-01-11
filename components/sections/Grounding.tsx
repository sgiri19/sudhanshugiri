"use client"

import { motion } from "framer-motion"

export function Grounding() {
    return (
        <section className="py-24 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-lg prose-neutral md:prose-xl mx-auto"
                >
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8 tracking-tight">Credibility Built in Production.</h2>
                    <p className="font-normal text-base text-slate-600 leading-relaxed">
                        Over a decade, I’ve worked across enterprise platforms, product teams, and AI systems where reliability, governance, and business impact were non-negotiable. These principles emerged from real production constraints, not academic theory.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
