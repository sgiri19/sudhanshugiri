export function FeaturedWork() {
    const caseStudies = [
        {
            title: "Financial Services Conversational AI Deployment",
            challenge: "A global financial services client needed to implement conversational AI for customer service operations while maintaining strict regulatory compliance and security requirements. The existing manual processes were costly and couldn't scale with demand.",
            whatIDid: "Led end-to-end implementation from discovery through production launch, managing cross-functional teams across client stakeholders, data engineering, and AI development. Established evaluation frameworks, data quality processes, and governance standards for production LLM deployment.",
            results: [
                "Achieved 95%+ accuracy in production environment",
                "Maintained 90%+ client satisfaction through rigorous quality management",
                "Expanded from initial pilot to multi-bot implementation across customer service operations",
                "Client renewed and expanded contract for additional use cases"
            ],
            tags: ["Conversational AI", "Financial Services", "Regulatory Compliance", "Production Deployment"]
        },
        {
            title: "Delivery Framework That Reduced Go-Live Time by 30%",
            challenge: "AI deployments were taking 12+ weeks from kickoff to production, with inconsistent quality and repeated mistakes across projects. The team lacked standardized processes, training materials, and integration templates.",
            whatIDid: "Created comprehensive delivery playbooks covering discovery, prompt engineering, integration, testing, and production launch. Built training systems for prompt engineers and established standardized workflows for client onboarding. Documented lessons learned from 12+ deployments into reusable frameworks.",
            results: [
                "Reduced average go-live timeline from 12 weeks to 8 weeks (30% improvement)",
                "Playbooks adopted across the organization by multiple delivery teams",
                "Quality metrics improved with standardized evaluation criteria",
                "New team members onboarded 40% faster using training materials"
            ],
            tags: ["Process Optimization", "Scalability", "Team Enablement", "Delivery Excellence"]
        },
        {
            title: "MCP Integration for Enterprise Data Access",
            challenge: "Enterprise client needed conversational AI systems to access real-time data from multiple internal systems (CRM, billing, knowledge bases) without compromising security or creating technical debt.",
            whatIDid: "Designed and implemented Model Context Protocol (MCP) integrations enabling AI systems to securely query enterprise data sources. Coordinated between client IT security, data teams, and engineering to establish API-driven workflows that met compliance requirements while maintaining low latency.",
            results: [
                "Successfully integrated 5+ enterprise data sources via MCP and REST APIs",
                "Maintained sub-2-second response times for customer-facing queries",
                "Zero security incidents through strict access controls and audit logging",
                "Solution became template for subsequent client integrations"
            ],
            tags: ["Technical Integration", "MCP", "Enterprise Architecture", "API Development"]
        },
        {
            title: "AI Product Launch Contributing to 4x User Growth",
            challenge: "At BigSpring, the platform needed AI-powered content features to improve learner engagement and retention. Required balancing user feedback, technical feasibility, and business goals while working from the Founder's Office.",
            whatIDid: "Acted as bridge between learners, enterprise customers, product, and engineering teams. Incorporated continuous user feedback into feature development, identified friction points in the learning experience, and drove targeted product improvements aligned with customer needs.",
            results: [
                "Contributed to 4x increase in monthly active users",
                "Improved user retention and sustained engagement through data-driven UX enhancements",
                "Supported ~$500K in enterprise client wins by aligning product capabilities with customer adoption signals",
                "Established feedback loops between users and product development"
            ],
            tags: ["Product Management", "User Growth", "B2B SaaS", "Customer Success"]
        }
    ]

    return (
        <section id="work" className="py-16 md:py-20 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    Featured Work
                </h2>
                <p className="text-lg text-neutral-600 mb-12">
                    Case studies from recent AI delivery and product initiatives.
                </p>

                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                {study.title}
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-2">
                                        Challenge
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {study.challenge}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-2">
                                        What I Did
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {study.whatIDid}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-2">
                                        Results
                                    </h4>
                                    <ul className="space-y-2">
                                        {study.results.map((result, resultIndex) => (
                                            <li
                                                key={resultIndex}
                                                className="flex items-start gap-2 text-neutral-600"
                                            >
                                                <span className="text-neutral-400 mt-1.5">•</span>
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {study.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-sm text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
