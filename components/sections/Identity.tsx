import Image from "next/image"

export function Identity() {
    return (
        <section className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 md:gap-24 border-b border-neutral-100">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#4338ca] mb-6 leading-none">
                    Sudhanshu Giri<span className="text-neutral-900">.</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-6">
                    Program Product Leader <span className="text-neutral-300 mx-2">|</span> Enterprise AI
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                    Productizing AI for high-stakes environments. I build the systems that make AI profitable, not just possible.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start font-mono text-xs font-bold uppercase tracking-widest text-[#4338ca]">
                    <span>Strategy</span>
                    <span className="text-neutral-300">•</span>
                    <span>Systems</span>
                    <span className="text-neutral-300">•</span>
                    <span>Scale</span>
                </div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
                <div className="absolute inset-0 rounded-full border-2 border-[#4338ca]/10 scale-105" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-indigo-900/5">
                    <Image
                        src="/profile.webp"
                        alt="Sudhanshu Giri"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
