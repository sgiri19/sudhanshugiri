export function DecisionFramework() {
    return (
        <section className="py-12 border-b border-neutral-100">
            <h2 className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase mb-8">
                04 / Methodology
            </h2>
            <div className="space-y-6">
                {[
                    { label: "Stability", desc: "Long-term reliability > Short-term wins" },
                    { label: "Signal", desc: "Production evidence > Opinions" },
                    { label: "Constraints", desc: "Explicit trade-offs > Hidden costs" },
                    { label: "Ownership", desc: "Accountability > Consensus" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                        <span className="font-mono text-sm font-bold text-[#4338ca] uppercase tracking-wide w-32 shrink-0">
                            {item.label}
                        </span>
                        <span className="text-neutral-900 font-medium leading-relaxed">
                            {item.desc}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
