export function Footer() {
    return (
        <footer className="w-full py-16 border-t border-neutral-100">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <p className="text-sm text-neutral-500">
                        © 2026 Sudhanshu Giri. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://linkedin.com/in/sudhanshugiri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://twitter.com/sudhanshugiri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            Twitter
                        </a>
                        <a
                            href="mailto:sudhanshu@example.com"
                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
