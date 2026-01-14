"use client"

import Link from "next/link"

export function Header() {
    return (
        <header className="w-full py-8">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-semibold text-neutral-900 hover:text-indigo-600 transition-colors"
                    >
                        Sudhanshu Giri
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link
                            href="/blog"
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
