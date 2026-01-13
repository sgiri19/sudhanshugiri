"use client"

export function SelectedProductionWork() {
    return (
        <section className="py-12 border-b border-neutral-100">
            <h2 className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase mb-8">
                02 / Selected Works
            </h2>
            <div className="flex flex-col gap-12">
                {[
                    {
                        cat: "Conversational AI | Financial Services",
                        title: "Orchestrating High-Stakes Voice AI",
                        desc: "Owned end-to-end deployment of voice AI systems for regulated banks. Replaced legacy IVRs with adaptive neural models, reducing latency by 40%.",
                        metric: "95% accuracy • 90% CSAT"
                    },
                    {
                        cat: "Enterprise Learning Platforms",
                        title: "Scaling Enterprise Adoption",
                        desc: "Translated fragmented learner feedback into a unified product engine. Built the 'Skill Graph' feature that mapped user inputs to competency gaps.",
                        metric: "4x MAU Growth • $500k ARR"
                    }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <span className="font-mono text-[10px] font-bold text-[#4338ca] uppercase tracking-wider">
                            {item.cat}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed max-w-xl">
                            {item.desc}
                        </p>
                        <span className="font-mono text-xs font-bold text-[#10b981]">
                            {item.metric}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
