import Link from "next/link"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-100 bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Link href="/" className="text-xl font-black tracking-tighter text-neutral-900">
                            SG<span className="text-brand-primary">.</span>
                        </Link>
                        <p className="mt-4 text-sm text-neutral-500 font-medium max-w-xs leading-relaxed">
                            Productizing Enterprise AI. Safely, scalably, and profitably.
                        </p>
                    </div>
                    <div className="flex justify-start md:justify-end space-x-8">
                        <a href="https://linkedin.com/in/sudhanshugiri" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-brand-primary transition-all hover:scale-110">
                            <Linkedin size={22} />
                        </a>
                        <a href="https://twitter.com/sudhanshugiri" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-brand-primary transition-all hover:scale-110">
                            <Twitter size={22} />
                        </a>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-neutral-400 space-y-4 md:space-y-0 mono-metric">
                    <p>© {currentYear} Sudhanshu Giri. Mission Critical Development.</p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="hover:text-neutral-900 transition-colors">Privacy</Link>
                        <Link href="/rss.xml" className="hover:text-neutral-900 transition-colors">Insights Feed</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
