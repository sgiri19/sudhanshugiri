export function Experience() {
    const companies = [
        {
            name: "Camcom",
            period: "January 2026 — Present",
            role: "Product & Delivery Manager",
            description: "Leading product strategy and delivery execution for AI solutions in enterprise environments."
        },
        {
            name: "Skit.ai",
            period: "January 2025 — December 2025",
            role: "Solutions Product Manager",
            description: "Led conversational AI deployments for global enterprise and financial services clients, generating $1.5M+ in ARR."
        },
        {
            name: "BigSpring",
            period: "May 2022 — December 2023",
            role: "Program Manager",
            description: "Drove AI-powered product initiatives from the Founder's Office, contributing to 4x growth in monthly active users."
        },
        {
            name: "ByteDance",
            period: "June 2020 — April 2022",
            role: "Lead Program Manager & Program Manager",
            description: "Led product development and platform delivery for global consumer platforms, managing cross-functional teams."
        },
        {
            name: "Toppr",
            period: "August 2018 — June 2020",
            role: "Associate Program Manager & Product Developer",
            description: "Built adaptive learning solutions and content platforms serving millions of students across India."
        },
        {
            name: "Excellent Educations",
            period: "January 2015 — August 2018",
            role: "Academic Manager",
            description: "Scaled operations from 1 to 3 branches, growing enrollment by 220% YoY through process optimization."
        },
        {
            name: "Tech Mahindra",
            period: "August 2012 — November 2014",
            role: "Project Coordinator / Software Engineer",
            description: "Supported enterprise application delivery for Nissan North America."
        }
    ]

    return (
        <section className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    Experience
                </h2>
                <p className="text-lg text-neutral-600 mb-12">
                    10+ years leading product and delivery across AI, edtech, and enterprise platforms.
                </p>

                <div className="space-y-8">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-neutral-200 pl-6 pb-2"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-2">
                                <h3 className="text-xl font-semibold text-neutral-900">
                                    {company.name}
                                </h3>
                                <span className="text-sm text-neutral-500 shrink-0">
                                    {company.period}
                                </span>
                            </div>
                            <p className="text-base font-medium text-neutral-700 mb-2">
                                {company.role}
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                {company.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="https://linkedin.com/in/sudhanshugiri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-neutral-700 hover:text-neutral-900 font-medium transition-colors"
                    >
                        View full experience on LinkedIn →
                    </a>
                </div>
            </div>
        </section>
    )
}
