const principles = [
    {
        rule: "01",
        title: "Systems over heroics",
        desc: "Design repeatable processes that scale, rather than relying on individual effort."
    },
    {
        rule: "02",
        title: "Safety before speed",
        desc: "In regulated environments, explainability takes precedence over rapid experimentation."
    },
    {
        rule: "03",
        title: "Decisions beat deliverables",
        desc: "The real leverage is in choosing the right constraints and making trade-offs explicit."
    }
]

export function OperatingPrinciples() {
    return (
        <section className="py-12 border-b border-neutral-100">
            <h2 className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase mb-8">
                03 / Operating Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {principles.map((item, i) => (
                    <div key={item.rule} className="flex flex-col space-y-4">
                        <span className="font-mono text-sm font-bold text-brand-primary uppercase">
                            RULE {item.rule}
                        </span>
                        <div>
                            <h4 className="text-xl font-bold text-neutral-900 mb-2">
                                {item.title}
                            </h4>
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
