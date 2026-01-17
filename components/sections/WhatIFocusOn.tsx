export function WhatIFocusOn() {
    const focusAreas = [
        {
            icon: "🔄",
            title: "Client-to-Production AI Delivery",
            description: "I translate business requirements into technical execution, managing the messy middle of AI implementations in regulated environments. I speak both stakeholder language and engineer language, ensuring nothing gets lost between \"what the client needs\" and \"what gets built.\""
        },
        {
            icon: "📋",
            title: "Building Repeatable Frameworks",
            description: "I create delivery playbooks, training systems, and integration processes that scale across teams. My frameworks have reduced go-live timelines by 30% while maintaining 95%+ production accuracy—turning one-off projects into repeatable systems."
        },
        {
            icon: "👥",
            title: "Cross-Functional Leadership",
            description: "I coordinate solutions engineers, prompt engineers, product managers, and clients through high-stakes deployments where compliance and reliability aren't optional. I've managed teams of 6+ across solutions, engineering, and product to deliver production-grade AI systems."
        },
        {
            icon: "📈",
            title: "Driving Business Outcomes",
            description: "My clients don't churn, they expand. I focus on ARR growth, retention, and measurable ROI—not just feature launches. I've driven client expansions from initial deployments to multi-year partnerships by delivering systems that actually work."
        }
    ]

    return (
        <section id="about" className="py-16 md:py-20 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    What I Focus On
                </h2>
                <p className="text-lg text-neutral-600 mb-12">
                    I operate at the intersection of client delivery, technical execution, and business outcomes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {focusAreas.map((area, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 md:p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl mb-4" aria-hidden="true">
                                {area.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                                {area.title}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
