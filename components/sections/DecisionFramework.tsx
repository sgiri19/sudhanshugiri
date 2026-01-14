export function DecisionFramework() {
    return (
        <section className="py-12 border-b border-neutral-100">
            <h2 className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase mb-8">
                04 / Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {[
                    { label: "Stability", desc: "Long-term reliability > Short-term wins" },
                    { label: "Signal", desc: "Production evidence > Opinions" },
                    { label: "Constraints", desc: "Explicit trade-offs > Hidden costs" },
                    { label: "Ownership", desc: "Accountability > Consensus" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col space-y-2">
                        <span className="font-mono text-sm font-bold text-indigo-600 uppercase tracking-wide">
                            {item.label}
                        </span>
                        <span className="text-neutral-900 font-medium leading-relaxed text-lg">
                            {item.desc}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
