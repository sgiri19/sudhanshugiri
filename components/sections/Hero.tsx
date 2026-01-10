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
                        className="max-w-3xl space-y-6"
                    >
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                            Productizing <span className="text-brand-primary">Enterprise AI.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed max-w-2xl mx-auto">
                            I build AI products that actually <span className="text-neutral-900 font-bold border-b-2 border-brand-primary/20">ship</span> — safely, scalably, and profitably.
                        </p>
                        <p className="text-lg text-neutral-500 max-w-xl mx-auto">
                            Specializing in regulated, high-stakes environments where accuracy, explainability, and ROI matter more than demos.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link
                                href="/work"
                                className="inline-flex items-center px-8 py-4 rounded-2xl bg-brand-primary text-white font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 hover:scale-[1.02]"
                            >
                                View Production Wins
                                <ArrowRight className="ml-2" size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 rounded-2xl border border-neutral-200 text-neutral-900 font-bold hover:bg-neutral-50 transition-all"
                            >
                                Let's Talk Strategy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
