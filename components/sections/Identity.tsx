import Image from "next/image"

export function Identity() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                    {/* Left: Text Content */}
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
                            Sudhanshu Giri
                        </h1>
                        <h2 className="text-xl md:text-2xl text-neutral-600 mb-6">
                            AI Delivery Leader | Product & Delivery Management
                        </h2>
                        <div className="text-lg text-neutral-500 leading-relaxed max-w-2xl mb-6">
                            <p className="mb-4">
                                I scale AI from pilot to production and make it repeatable.
                            </p>
                            <p>
                                Over 3 years, I&apos;ve led conversational AI deployments generating $1.5M+ in ARR across financial services and regulated industries. I bridge client needs, technical execution, and business outcomes—turning complex requirements into systems that actually ship.
                            </p>
                        </div>

                        {/* Current Status */}
                        <div className="text-sm text-neutral-500 space-y-1 mb-6">
                            <p><span className="font-medium text-neutral-700">Currently:</span> Product & Delivery Manager at Camcom</p>
                            <p><span className="font-medium text-neutral-700">Previously:</span> Skit.ai, ByteDance, BigSpring</p>
                            <p><span className="font-medium text-neutral-700">Based in:</span> Bangalore, India</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://linkedin.com/in/sudhanshugiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/sudhanshugiri19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Photo */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                        <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-neutral-200">
                            <Image
                                src="/profile.webp"
                                alt="Sudhanshu Giri"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
