export function AreasOfExpertise() {
    const expertiseAreas = [
        "AI Delivery & Solutions Engineering",
        "Conversational AI (LLMs, Voice Bots)",
        "Financial Services & Regulated Industries",
        "Cross-Functional Team Leadership",
        "Client Success & Expansion",
        "API Integration (MCP, REST)",
        "Delivery Frameworks & Playbooks",
        "Compliance & AI Governance",
        "Product & Program Management",
        "Revenue Growth (B2B SaaS)",
        "Stakeholder Management",
        "Prompt Engineering",
        "Data Quality & Evaluation",
        "Enterprise Architecture",
        "Process Optimization"
    ]

    return (
        <section className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
                    Areas of Expertise
                </h2>

                <div className="flex flex-wrap gap-3">
                    {expertiseAreas.map((area, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 text-sm text-neutral-700 bg-neutral-50 rounded-full border border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300 transition-colors"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
