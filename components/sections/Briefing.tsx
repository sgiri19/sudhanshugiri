export function Briefing() {
    return (
        <section className="py-16 md:py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            01 / Briefing
                        </span>
                    </div>
                    <div className="md:col-span-9 max-w-2xl">
                        <div className="prose prose-lg md:prose-xl prose-neutral font-medium text-neutral-800 leading-relaxed">
                            <p>
                                I spent a decade at places like <span className="font-bold text-[#0f172a]">ByteDance</span> and <span className="font-bold text-[#0f172a]">Skit.ai</span> learning one thing:
                            </p>
                            <p className="border-l-4 border-[#4338ca] pl-6 italic text-neutral-900">
                                Success isn't in the model; it's in the system.
                            </p>
                            <p>
                                When you are deploying AI in regulated, high-stakes environments, the "demo" doesn't matter. What matters is observability, governance, and the ability to scale without breaking.
                            </p>
                            <p>
                                I build the systems that make AI profitable, not just possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
