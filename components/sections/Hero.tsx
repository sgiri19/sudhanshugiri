"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:max-w-2xl space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#4338ca] leading-[1.1]">
                            Productizing Enterprise AI.
                        </h1>
                        <p className="text-xl md:text-2xl text-[#0f172a] font-medium leading-relaxed">
                            From pilot to production — safely, scalably, and profitably.
                        </p>
                        <p className="font-mono text-sm md:text-base text-[#0f172a]/70 tracking-wide">
                            AI Product & Delivery Leader | Regulated & High-Stakes Systems
                        </p>

                        <div className="pt-2">
                            <a
                                href="https://linkedin.com/in/sudhanshugiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#4338ca] font-bold hover:gap-2 transition-all group"
                            >
                                Connect on LinkedIn
                                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-neutral-50 shadow-xl shadow-indigo-500/10"
                    >
                        <Image
                            src="/profile.webp"
                            alt="Sudhanshu Giri"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
