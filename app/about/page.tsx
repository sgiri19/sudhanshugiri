"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import { Briefcase, Rocket, Users, Target, Code, ShieldCheck, Zap } from "lucide-react"

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

const industries = ["AI & Machine Learning", "Enterprise SaaS", "EdTech", "Social & Content", "Global IT Services"]

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="lg:col-span-7 space-y-8"
                            >
                                <h1 className="text-4xl md:text-7xl font-black text-neutral-900 leading-tight">
                                    Strategic <span className="text-brand-primary">Execution</span> in AI.
                                </h1>
                                <div className="prose prose-xl prose-neutral max-w-none space-y-8">
                                    <p className="font-bold text-2xl text-neutral-800 leading-relaxed italic border-l-4 border-brand-primary pl-6">
                                        "I build AI products that actually ship — safely, scalably, and profitably."
                                    </p>
                                    <div className="space-y-6 text-neutral-600 font-medium">
                                        <p>
                                            In recent years, my work has focused on applying AI in regulated, high-stakes environments like insurance and enterprise workflows, where accuracy, explainability, and ROI matter more than demos.
                                        </p>
                                        <p>
                                            I operate at the intersection of product, delivery, and execution — translating complex, manual processes into scalable systems while managing real-world constraints such as compliance, risk, and client expectations.
                                        </p>
                                        <p>
                                            My foundation comes from over a decade of leading large-scale programs across data operations, platform delivery, and cross-functional execution, which now informs how I approach building and scaling AI-enabled products in production environments.
                                        </p>
                                        <p className="p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 text-brand-primary font-bold">
                                            Currently working as a Solutions Product Manager in conversational AI, focused on execution rigor, AI governance, and productization of production-grade systems.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="lg:col-span-5 space-y-8"
                            >
                                <div className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-xl blueprint-card">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-6 mono-metric">Expertise Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Program Governance", "Agile Scaling", "Product Vision", "AI Strategy", "Stakeholder Alignment", "Team Mentorship"].map(skill => (
                                            <span key={skill} className="px-3 py-1.5 rounded-xl bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-500 uppercase tracking-widest mono-metric">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-10 space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg shadow-brand-primary/20"><Zap size={20} /></div>
                                            <div>
                                                <h4 className="font-black text-sm text-neutral-900 mb-1 tracking-tight">Rapid Scaling</h4>
                                                <p className="text-xs text-neutral-500 leading-relaxed font-medium">Experienced in hyper-growth environments handling 100M+ users.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg shadow-brand-primary/20"><Target size={20} /></div>
                                            <div>
                                                <h4 className="font-black text-sm text-neutral-900 mb-1 tracking-tight">Outcome Driven</h4>
                                                <p className="text-xs text-neutral-500 leading-relaxed font-medium">Focused on reducing churn, increasing retention, and maximizing ROI.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-24 border-t border-neutral-100 bg-neutral-50/50">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="mb-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4 mono-metric">Principles of Operation</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                                Execution <span className="text-brand-primary">Philosophy.</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    rule: "01",
                                    title: "Production is the only metric.",
                                    desc: "Demos are easy. Getting AI into a regulated production environment with 99.9% accuracy is where the value is created."
                                },
                                {
                                    rule: "02",
                                    title: "ROI > Novelty.",
                                    desc: "Technical excellence should serve business outcomes. Every feature shippped must move the needle on churn, retention, or margin."
                                },
                                {
                                    rule: "03",
                                    title: "Precision is Non-Negotiable.",
                                    desc: "In high-stakes enterprise environments, explainability and governance are not 'nice-to-haves'—they are structural requirements."
                                },
                                {
                                    rule: "04",
                                    title: "The Technical Bridge.",
                                    desc: "Solving the gap between high-level business strategy and low-level technical execution is the core of successful productization."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm blueprint-card"
                                >
                                    <div className="text-[10px] font-black text-brand-primary mb-6 flex items-center gap-3 mono-metric">
                                        <div className="w-8 h-px bg-brand-primary/20" />
                                        RULE {item.rule}
                                    </div>
                                    <h4 className="text-xl font-black text-neutral-900 mb-4 tracking-tight leading-snug">
                                        {item.title}
                                    </h4>
                                    <p className="text-neutral-500 font-medium leading-relaxed italic">
                                        "{item.desc}"
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-24 border-t border-neutral-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-50 mb-4">Professional Track</h2>
                            <p className="text-neutral-500 font-medium">Decade plus of experience across diverse industries and world-class brands.</p>
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

                {/* Industries Section */}
                <section className="py-20 border-t border-neutral-100">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 mb-10">Industries & Specialized Domains</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {industries.map(industry => (
                                <div key={industry} className="px-8 py-3 rounded-2xl bg-white border border-neutral-100 text-[10px] font-black text-neutral-800 uppercase tracking-widest mono-metric shadow-sm">
                                    {industry}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
