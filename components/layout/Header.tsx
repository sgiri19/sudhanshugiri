"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/70 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-black tracking-tighter text-neutral-900 hover:scale-105 transition-transform">
                            SG<span className="text-brand-primary">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-primary mono-metric",
                                    pathname === item.href
                                        ? "text-neutral-900 underline decoration-brand-primary decoration-2 underline-offset-8"
                                        : "text-neutral-500"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="https://linkedin.com/in/sudhanshugiri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full bg-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 mono-metric"
                        >
                            Connect
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-xl hover:bg-neutral-50 transition-colors text-neutral-900"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-neutral-100 bg-white">
                    <div className="space-y-1 px-4 py-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "block px-3 py-3 text-sm font-black uppercase tracking-[0.2em] rounded-xl transition-colors mono-metric",
                                    pathname === item.href
                                        ? "bg-brand-primary/5 text-brand-primary"
                                        : "text-neutral-600 hover:bg-neutral-50"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="https://linkedin.com/in/sudhanshugiri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-3 mt-4 text-center rounded-xl bg-brand-primary text-white text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-primary/20 mono-metric"
                        >
                            Connect
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
