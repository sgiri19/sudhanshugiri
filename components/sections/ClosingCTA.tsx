"use client"

import { motion } from "framer-motion"

export function ClosingCTA() {
    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-8">
                        If you’re building AI that has to work<br />— not just impress —
                    </h2>
                    <p className="text-xl text-neutral-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                        I’m open to conversations with teams working on enterprise or high-stakes AI systems who care about production readiness, governance, and real outcomes.
                    </p>
                    <a
                        href="https://linkedin.com/in/sudhanshugiri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-10 py-5 bg-brand-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-brand-primary/90 transition-all shadow-xl shadow-brand-primary/20 hover:shadow-2xl hover:scale-105 mono-metric"
                    >
                        Connect on LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
