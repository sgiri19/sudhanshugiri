export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white pt-16 pb-24">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h5 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
                            Construct
                        </h5>
                        <p className="text-2xl font-bold text-[#4338ca] leading-tight max-w-sm">
                            Building the systems that make AI profitable.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
                            Protocol
                        </h5>
                        <div className="space-y-4">
                            <a href="https://linkedin.com/in/sudhanshugiri" target="_blank" rel="noopener noreferrer" className="block text-lg font-bold text-neutral-900 hover:text-[#4338ca]">
                                LinkedIn <span className="text-neutral-300">/</span> Strategic Advisory
                            </a>
                            <a href="mailto:contact@sudhanshugiri.com" className="block text-lg font-bold text-neutral-900 hover:text-[#4338ca]">
                                Email <span className="text-neutral-300">/</span> Direct Comms
                            </a>
                        </div>
                    </div>
                </div>

                {/* System Status Bar */}
                <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div>
                            <span className="text-neutral-300 mr-2">STATUS:</span>
                            <span className="text-[#10b981]">Active Deployment @ Skit.ai</span>
                        </div>
                        <div>
                            <span className="text-neutral-300 mr-2">LOC:</span>
                            Bengaluru, IN
                        </div>
                        <div>
                            <span className="text-neutral-300 mr-2">FOCUS:</span>
                            Conversational AI Governance
                        </div>
                    </div>
                    <div>
                        SG. © 2026
                    </div>
                </div>
            </div>
        </footer>
    )
}
