"use client"

import { motion } from "framer-motion"

const experience = [
    {
        company: "Skit.ai",
        role: "Program & Product Leadership",
        period: "Recent",
        desc: "Driving Conversational AI innovations and scaling product delivery in the conversational AI space.",
        brand: "Conversational AI"
    },
    {
        company: "Bigspring.ai",
        role: "Enterprise Scaling",
        period: "Leadership",
        desc: "Focused on AI-driven enterprise productivity and skill transformation at scale.",
        brand: "Enterprise AI"
    },
    {
        company: "Bytedance",
        role: "Product Growth & Scale",
        period: "Scale Phase",
        desc: "Orchestrated high-growth initiatives within one of the world's most aggressive technical ecosystems.",
        brand: "Global Scale"
    },
    {
        company: "Toppr.com",
        role: "Program Management",
        period: "EdTech Growth",
        desc: "Led cross-functional squads to build resilient educational technology products servicing millions.",
        brand: "EdTech"
    },
    {
        company: "Tech Mahindra (Mahindra Satyam)",
        role: "Technical Foundations",
        period: "The Beginning",
        desc: "Cut my teeth in complex enterprise systems and global service delivery models.",
        brand: "IT Services"
    }
]

export function ProfessionalTrack() {
    return (
        <section className="py-24 border-t border-neutral-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tighter">
                        Professional <span className="text-brand-primary">Track.</span>
                    </h2>
                    <p className="text-neutral-500 font-medium max-w-2xl mx-auto">
                        Decade plus of experience across diverse industries and world-class technical ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all group blueprint-card"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mono-metric">{exp.brand}</span>
                                <span className="text-[10px] font-bold text-neutral-300 uppercase mono-metric">{exp.period}</span>
                            </div>
                            <h3 className="text-xl font-black text-neutral-900 mb-2 group-hover:text-brand-primary transition-colors uppercase tracking-tight">{exp.company}</h3>
                            <p className="text-sm font-bold text-neutral-500 mb-4">{exp.role}</p>
                            <p className="text-xs text-neutral-400 leading-relaxed font-medium">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
