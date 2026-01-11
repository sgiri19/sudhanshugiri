"use client"

import { motion } from "framer-motion"

export function WorkHeader() {
    return (
        <section className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#0f172a] mb-6">
                        Work. In Production.
                    </h1>
                    <h2 className="text-lg md:text-xl font-semibold text-slate-600 mb-8 max-w-2xl leading-relaxed">
                        Selected work across enterprise AI, platform delivery, and scaled execution.
                    </h2>
                    <p className="text-base text-slate-500 font-normal max-w-2xl leading-relaxed">
                        This work reflects systems that moved beyond pilots — into environments where accuracy, reliability, governance, and business outcomes were non-negotiable.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
