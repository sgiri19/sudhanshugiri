export function Work() {
    const experience = [
        {
            period: "2023 — Present",
            company: "Skit.ai",
            role: "Product Leader",
            description: "Leading conversational AI deployments for regulated financial institutions"
        },
        {
            period: "2022 — 2023",
            company: "BigSpring",
            role: "Program Manager",
            description: "Scaled AI platform adoption across enterprise customers"
        },
        {
            period: "2021 — 2022",
            company: "ByteDance",
            role: "Product Manager",
            description: "Growth initiatives on global consumer platforms"
        },
        {
            period: "2019 — 2021",
            company: "Toppr",
            role: "Associate PM",
            description: "Delivered learner-facing product experiences at scale"
        },
    ]

    return (
        <section className="py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
                Experience
            </h2>
            <div className="space-y-12">
                {experience.map((item, index) => (
                    <div key={index} className="group">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                            <span className="text-sm font-mono text-neutral-400 md:w-32 shrink-0">
                                {item.period}
                            </span>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-900">
                                    {item.company}
                                </h3>
                            </div>
                        </div>
                        <div className="md:ml-40">
                            <p className="text-neutral-600 mb-1">{item.role}</p>
                            <p className="text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
