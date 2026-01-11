"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 space-y-8 max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#4338ca] leading-[1.1]">
                            Productizing Enterprise AI.
                        </h1>
                        <p className="text-xl md:text-2xl text-[#0f172a] font-medium leading-relaxed max-w-2xl">
                            From pilot to production — safely, scalably, and profitably.
                        </p>
                        <p className="font-mono text-sm md:text-base text-[#0f172a]/70 tracking-wide">
                            AI Product & Delivery Leader | Regulated & High-Stakes Systems
                        </p>

                        <div className="pt-4">
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
                        className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-2xl"
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
