"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, Globe, TrendingUp } from "lucide-react"

const milestones = [
    {
        label: "Projects Shipped",
        value: "50+",
        icon: <Briefcase className="text-brand-primary" size={24} />,
        description: "Enterprise solutions"
    },
    {
        label: "Strategic ROI",
        value: "100%",
        icon: <TrendingUp className="text-brand-primary" size={24} />,
        description: "Business impact focus"
    },
    {
        label: "Global Operations",
        value: "3",
        icon: <Globe className="text-brand-primary" size={24} />,
        description: "Continents coordinated"
    },
    {
        label: "Industry Exp",
        value: "12yr",
        icon: <Award className="text-brand-primary" size={24} />,
        description: "Program leadership"
    }
]

export function Milestones() {
    return (
        <section className="py-24 border-y border-neutral-100 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {milestones.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center space-y-4 p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm blueprint-card"
                        >
                            <div className="p-4 bg-brand-primary/5 rounded-2xl text-brand-primary">
                                {item.icon}
                            </div>
                            <div>
                                <div className="text-4xl font-black text-neutral-900 mb-1 tracking-tighter">{item.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-2 mono-metric">{item.label}</div>
                                <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest leading-relaxed">{item.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
