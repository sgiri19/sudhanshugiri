"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        // Your Web3Forms Access Key
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again later.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to connect to the server. Please check your internet connection.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-4xl md:text-7xl font-black text-neutral-900 mb-6 leading-tight">
                                    Let's <span className="text-brand-primary">Talk Strategy.</span>
                                </h1>
                                <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                                    Whether it's a strategic consultation, a leadership challenge, or a potential collaboration, I'm ready to dive into the execution.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a href="mailto:sudhanshu.giri@outlook.com" className="flex items-center p-6 rounded-[2rem] border border-neutral-100 bg-white hover:border-brand-primary/20 hover:shadow-xl transition-all blueprint-card group">
                                    <div className="p-4 bg-brand-primary/5 text-brand-primary rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Email Channel</span>
                                        <span className="text-sm font-bold text-neutral-900">sudhanshu.giri@outlook.com</span>
                                    </div>
                                </a>

                                <a href="https://linkedin.com/in/sudhanshugiri" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 rounded-[2rem] border border-neutral-100 bg-white hover:border-brand-primary/20 hover:shadow-xl transition-all blueprint-card group">
                                    <div className="p-4 bg-brand-primary/5 text-brand-primary rounded-2xl mr-4 group-hover:scale-110 transition-transform">
                                        <Linkedin size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Primary Link</span>
                                        <span className="text-sm font-bold text-neutral-900">linkedin.com/in/sudhanshugiri</span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-neutral-50 p-8 md:p-12 rounded-[2.5rem] border border-neutral-200 shadow-xl"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Sender Name</label>
                                        <input type="text" id="name" name="name" className="w-full p-4 rounded-xl border border-neutral-200 bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-medium" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Return Address</label>
                                        <input type="email" id="email" name="email" className="w-full p-4 rounded-xl border border-neutral-200 bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-medium" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="subject" className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Priority Subject</label>
                                    <input type="text" id="subject" name="subject" className="w-full p-4 rounded-xl border border-neutral-200 bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-medium" placeholder="Collaboration Idea" required />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Brief / Message</label>
                                    <textarea id="message" name="message" rows={5} className="w-full p-4 rounded-xl border border-neutral-200 bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none font-medium leading-relaxed" placeholder="Tell me more about your project..." required></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-brand-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-brand-primary/90 transition-all flex items-center justify-center shadow-lg shadow-brand-primary/20 disabled:opacity-50 mono-metric"
                                >
                                    {isSubmitting ? 'Transmitting...' : (
                                        <>
                                            Execute Send
                                            <Send size={18} className="ml-3" />
                                        </>
                                    )}
                                </button>

                                {submitStatus.type && (
                                    <div className={`mt-4 p-4 rounded-xl text-xs font-black uppercase tracking-widest mono-metric flex items-center gap-2 ${submitStatus.type === 'success' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                                        {submitStatus.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
