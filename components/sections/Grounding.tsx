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
                    <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-8 mono-metric">Where These Principles Come From</h2>
                    <p className="font-heading font-bold text-2xl md:text-3xl leading-relaxed text-neutral-900">
                        Over the last decade, I’ve worked across consumer platforms, enterprise products, and AI-driven systems — in environments where reliability, compliance, and outcomes mattered more than speed alone.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-500 mt-8 font-medium">
                        These principles weren’t designed in theory. They were shaped in production incidents, regulatory reviews, missed SLAs, and systems that had to work — every day.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
