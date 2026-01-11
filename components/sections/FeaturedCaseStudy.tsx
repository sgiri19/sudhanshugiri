"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedCaseStudy() {
    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-extrabold text-[#0f172a] mb-12 tracking-tight">Featured Production Win</h2>

                    <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Context</h3>
                                <p className="text-lg font-bold text-[#0f172a]">Enterprise conversational AI for financial services</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">My Role</h3>
                                    <p className="text-base text-slate-700 font-medium">Product + delivery leadership</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Why it mattered</h3>
                                    <p className="text-base text-slate-700 font-medium">Systems that scale in regulated workflows</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Outcome</h3>
                                <div className="flex flex-wrap gap-4 text-sm font-mono font-semibold text-[#10b981]">
                                    <span>95%+ accuracy</span>
                                    <span>90%+ client satisfaction</span>
                                    <span>Multi-million ARR</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link href="/work" className="inline-flex items-center text-[#4338ca] font-bold hover:gap-2 transition-all">
                                    View Full Case Study <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
