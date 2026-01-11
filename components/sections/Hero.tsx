"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl"
                    >
                        <Image
                            src="/profile.webp"
                            alt="Sudhanshu Giri"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-4xl space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0f172a] leading-[1.1]">
                            Productizing Enterprise AI.
                        </h1>
                        <p className="text-lg md:text-lg text-slate-700 font-semibold leading-relaxed max-w-3xl mx-auto">
                            Delivering AI systems that work — not just demos — in regulated, high-stakes environments.
                        </p>
                        <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                            Focused on accuracy, explainability, and measurable ROI.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link
                                href="/work"
                                className="inline-flex items-center px-8 py-4 rounded-xl bg-[#4338ca] text-white font-semibold hover:bg-[#4338ca]/90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            >
                                View Production Wins
                            </Link>
                            <a
                                href="https://linkedin.com/in/sudhanshugiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 rounded-xl border border-[#0f172a] text-[#0f172a] font-semibold hover:bg-neutral-50 transition-all"
                            >
                                Let's Talk Strategy
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
