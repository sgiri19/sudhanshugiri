import Image from "next/image"

export function Identity() {
    return (
        <section className="py-20 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 border-b border-neutral-100">
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#4338ca] mb-2 leading-none">
                    SG.
                </h1>
                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900">
                    Program Product Leader
                </h2>
                <p className="font-mono text-xs md:text-sm text-neutral-500 mt-2 tracking-wide uppercase">
                    Productizing AI for high-stakes environments
                </p>
            </div>

            <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border border-[#4338ca]">
                <Image
                    src="/profile.webp"
                    alt="Sudhanshu Giri"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}
