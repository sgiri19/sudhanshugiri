import Link from "next/link"

export function Identity() {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-24">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="max-w-3xl">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-[#4338ca] mb-6 leading-none">
                        SG.
                    </h1>
                    <div className="space-y-2 md:space-y-4">
                        <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-900 leading-tight">
                            Program Product Leader <span className="text-neutral-300">|</span> Enterprise AI
                        </h2>
                        <p className="font-mono text-sm md:text-lg text-neutral-600 tracking-wide">
                            Productizing AI for high-stakes environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
