"use client"

import Link from "next/link"

export function Header() {
    return (
        <header className="w-full py-8 sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-semibold text-neutral-900 hover:text-indigo-600 transition-colors"
                    >
                        SG.
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link
                            href="/#about"
                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/#work"
                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            Work
                        </Link>
                        <Link
                            href="/#writing"
                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            Writing
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

