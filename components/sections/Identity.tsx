import Image from "next/image"

export function Identity() {
    return (
        <section className="py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
                        Sudhanshu Giri
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 mb-6">
                        Program Product Leader specializing in Enterprise AI
                    </p>
                    <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
                        I build scalable AI systems for high-stakes environments. Currently productizing conversational AI at Skit.ai. Previously at ByteDance and BigSpring.
                    </p>
                </div>

                {/* Right: Photo */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-neutral-200">
                        <Image
                            src="/profile.webp"
                            alt="Sudhanshu Giri"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
