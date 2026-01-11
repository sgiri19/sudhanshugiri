"use client"

import Image from "next/image"
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
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                            Productizing <span className="text-brand-primary">Enterprise AI.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-neutral-600 font-bold leading-relaxed max-w-3xl mx-auto">
                            From pilot to production — safely, scalably, and with measurable ROI.
                        </p>
                        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                            I work at the intersection of AI systems, product strategy, and delivery execution — helping teams move beyond demos into production-grade systems that actually run the business.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
