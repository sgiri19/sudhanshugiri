export function Footer() {
    return (
        <footer className="border-t border-neutral-100 bg-white py-12">
            <div className="container mx-auto px-6 max-w-3xl">

                {/* System Status Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
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
