import { ArrowRight } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-100 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="max-w-xl">
                        <p className="text-lg md:text-xl font-medium text-[#0f172a] leading-relaxed">
                            If you’re building AI systems where correctness matters more than hype, let’s connect.
                        </p>
                    </div>
                    <div>
                        <a href="https://linkedin.com/in/sudhanshugiri" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#4338ca] font-bold text-lg hover:gap-2 transition-all">
                            LinkedIn <ArrowRight size={20} className="ml-2" />
                        </a>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-neutral-50 flex justify-between items-center text-xs font-mono text-slate-400">
                    <p>© {currentYear} Sudhanshu Giri</p>
                </div>
            </div>
        </footer>
    )
}
