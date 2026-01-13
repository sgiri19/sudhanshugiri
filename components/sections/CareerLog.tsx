export function CareerLog() {
    const history = [
        { period: "2023–Now", role: "Product Leader", company: "Skit.ai", scope: "Conversational AI for Finance" },
        { period: "2022–2023", role: "Program Manager", company: "BigSpring", scope: "Enterprise AI Adoption" },
        { period: "2021–2022", role: "Product Manager", company: "ByteDance", scope: "Global Growth Platform" },
        { period: "2019–2021", role: "Associate PM", company: "Toppr", scope: "EdTech Scale" },
    ]

    return (
        <section className="py-12 border-b border-neutral-100">
            <h2 className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase mb-8">
                03 / Career Log
            </h2>
            <div className="space-y-4">
                {history.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline">
                        <div className="md:col-span-2">
                            <span className="font-mono text-xs text-neutral-400">
                                {item.period}
                            </span>
                        </div>
                        <div className="md:col-span-5">
                            <span className="font-bold text-neutral-900 text-sm md:text-base">
                                {item.company}
                            </span>
                            <span className="text-neutral-500 text-sm md:text-base ml-2">
                                — {item.role}
                            </span>
                        </div>
                        <div className="md:col-span-5 text-right md:text-left">
                            <span className="text-xs text-neutral-500 font-medium">
                                {item.scope}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
