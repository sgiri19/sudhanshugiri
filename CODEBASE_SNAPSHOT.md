# Website Codebase Snapshot - Standardized Alignment

## Directory Structure
```
app:
admin
api
blog
favicon.ico
globals.css
layout.tsx
page.tsx
work

app/admin:
page.tsx

app/api:
admin

app/api/admin:
posts
publish

app/api/admin/posts:
route.ts

app/api/admin/publish:
route.ts

app/blog:
[slug]
page.tsx

app/blog/[slug]:
page.tsx

app/work:
page.tsx

components:
blog
layout
sections
ui

components/blog:
BlogCard.tsx
BlogList.tsx

components/layout:
Footer.tsx
Header.tsx

components/sections:
ClosingCTA.tsx
DecisionFramework.tsx
FeaturedCaseStudy.tsx
FeaturedPosts.tsx
Grounding.tsx
Hero.tsx
LogosSection.tsx
Milestones.tsx
OperatingContext.tsx
OperatingManual.tsx
Philosophy.tsx
ProfessionalTrack.tsx
ScopeOfImpact.tsx
SelectedEngagements.tsx
SelectedProductionWork.tsx
WorkApproach.tsx
WorkContent.tsx
WorkHeader.tsx
WorkOperatingScope.tsx

components/ui:
```

## app/page.tsx
```tsx
import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { OperatingContext } from "@/components/sections/OperatingContext"
import { LogosSection } from "@/components/sections/LogosSection"
import { Philosophy } from "@/components/sections/Philosophy"
import { DecisionFramework } from "@/components/sections/DecisionFramework"
import { SelectedProductionWork } from "@/components/sections/SelectedProductionWork"
import { ProfessionalTrack } from "@/components/sections/ProfessionalTrack"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <OperatingContext />
        <LogosSection />
        <Philosophy />
        <DecisionFramework />
        <SelectedProductionWork />
        <ProfessionalTrack />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  )
}
```

## app/layout.tsx
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SG. | Program Leader & Product Strategist",
  description: "Personal portfolio and blog of Sudhanshu Giri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
```

## app/globals.css
```tsx
@import "tailwindcss";

@theme {
  --color-brand-primary: #4338ca;
  /* Sophisticated Mission Indigo */
  --color-brand-secondary: #0f172a;
  /* Deep Slate/Navy */
  --color-brand-accent: #10b981;
  --font-sans: "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --brand-primary: #4338ca;
  --brand-secondary: #0f172a;
  --brand-accent: #10b981;
  --grid-color: rgba(67, 56, 202, 0.02);
}

@layer base {
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

  body {
    background-color: var(--background);
    color: var(--foreground);
    @apply antialiased;
    font-family: 'Instrument Sans', sans-serif;
    background-image:
      linear-gradient(var(--grid-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 60px 60px;
    /* Larger, cleaner grid */
  }

  h1,
  h2,
  h3,
  h4,
  .font-heading {
    @apply font-black tracking-tight text-neutral-900;
  }
}

.mono-metric {
  @apply font-mono tracking-tight;
  font-variant-numeric: tabular-nums;
}

.blueprint-card {
  @apply relative overflow-hidden bg-white border border-neutral-100 shadow-sm transition-all duration-300;
  background-image: radial-gradient(circle at 1.5px 1.5px, rgba(67, 56, 202, 0.03) 1px, transparent 0);
  background-size: 32px 32px;
}

.blueprint-card:hover {
  @apply border-brand-primary/20 shadow-2xl shadow-brand-primary/5;
}```

## app/blog/page.tsx
```tsx
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { BlogList } from "@/components/blog/BlogList"
import { getAllPosts } from "@/lib/mdx"

export const metadata = {
    title: "Blog | Sudhanshu Giri",
    description: "Recent articles and insights on product strategy, program management, and building high-performance teams.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <>
            <Header />
            <main className="flex-grow py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
                            Writing
                        </h1>
                        <p className="text-sm md:text-base font-mono text-slate-500 font-medium leading-relaxed uppercase tracking-wide">
                            Notes on leadership, execution, and AI systems in production.
                        </p>
                    </div>

                    <BlogList posts={posts} from="blog" />

                    {posts.length === 0 && (
                        <div className="text-center py-20 border rounded-2xl border-dashed">
                            <p className="text-neutral-500">No articles found yet. Please check back later!</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}
```

## components/layout/Header.tsx
```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Blog", href: "/blog" },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/70 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-neutral-900 hover:scale-105 transition-transform">
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
```

## components/layout/Footer.tsx
```tsx
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
```

## components/sections/Hero.tsx
```tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:max-w-2xl space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#4338ca] leading-[1.1]">
                            Productizing Enterprise AI.
                        </h1>
                        <p className="text-xl md:text-2xl text-[#0f172a] font-medium leading-relaxed">
                            From pilot to production — safely, scalably, and profitably.
                        </p>
                        <p className="font-mono text-sm md:text-base text-[#0f172a]/70 tracking-wide">
                            AI Product & Delivery Leader | Regulated & High-Stakes Systems
                        </p>

                        <div className="pt-2">
                            <a
                                href="https://linkedin.com/in/sudhanshugiri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#4338ca] font-bold hover:gap-2 transition-all group"
                            >
                                Connect on LinkedIn
                                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-neutral-50 shadow-xl shadow-indigo-500/10"
                    >
                        <Image
                            src="/profile.webp"
                            alt="Sudhanshu Giri"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
```

## components/sections/OperatingContext.tsx
```tsx
"use client"

import { motion } from "framer-motion"

export function OperatingContext() {
    return (
        <section className="pt-12 pb-24 md:pt-16 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#4338ca] tracking-tighter leading-tight mb-8">
                        Operating Context
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-[#0f172a] leading-relaxed">
                        <p>
                            I work at the intersection of product, delivery, and execution, building AI systems where the cost of failure is real — financial, operational, and reputational.
                        </p>
                        <p className="text-slate-600">
                            Over a decade of leading large-scale programs across enterprise platforms, data operations, and AI deployments has shaped how I approach decisions: prioritize safety, design for scale, and optimize for long-term system health over short-term wins.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
```

## components/sections/LogosSection.tsx
```tsx
"use client"

import { motion } from "framer-motion"

const logos = [
    "Skit.ai", "BigSpring", "ByteDance", "Toppr", "Tech Mahindra"
]

export function LogosSection() {
    return (
        <section className="py-12 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {logos.map((logo, i) => (
                            <span key={i} className="text-xl md:text-2xl font-black text-[#0f172a] tracking-tight">{logo}</span>
                        ))}
                    </div>
                    <p className="mono-metric text-xs md:text-sm text-slate-500 uppercase tracking-widest">
                        Enterprise AI • Consumer Platforms • Global Scale
                    </p>
                </div>
            </div>
        </section>
    )
}
```

## components/sections/Philosophy.tsx
```tsx
"use client"

import { motion } from "framer-motion"

const principles = [
    {
        rule: "01",
        title: "Systems over heroics.",
        desc: "I design repeatable processes and governance models that scale across teams and customers, rather than relying on individual effort or ad-hoc fixes."
    },
    {
        rule: "02",
        title: "Safety before speed.",
        desc: "In regulated environments, accuracy, explainability, and auditability take precedence over rapid experimentation."
    },
    {
        rule: "03",
        title: "Decisions beat deliverables.",
        desc: "The real leverage lies in choosing the right problems, setting the right constraints, and making trade-offs explicit."
    }
]

export function Philosophy() {
    return (
        <section className="py-24 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#4338ca] tracking-tighter leading-tight mb-4">
                        Rules of Operation
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((item, i) => (
                        <motion.div
                            key={item.rule}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm blueprint-card hover:border-[#4338ca] hover:shadow-lg transition-all"
                        >
                            <span className="mono-metric text-sm font-bold text-[#4338ca] uppercase tracking-wider mb-4 block">
                                RULE {item.rule}
                            </span>
                            <h4 className="text-xl font-bold text-[#0f172a] mb-4 tracking-tight leading-snug">
                                {item.title}
                            </h4>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
```

## components/sections/DecisionFramework.tsx
```tsx
"use client"

import { motion } from "framer-motion"

export function DecisionFramework() {
    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#4338ca] mb-8 tracking-tighter leading-tight">How I Make Decisions</h2>
                    <p className="text-lg text-slate-600 mb-12">When ambiguity is high and stakes are real, I optimize for:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { label: "Stability", desc: "Long-term system reliability over short-term wins" },
                            { label: "Signal", desc: "Evidence from production over opinions" },
                            { label: "Constraints", desc: "Explicit trade-offs around cost, latency, and risk" },
                            { label: "Ownership", desc: "Clear accountability over consensus" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col space-y-2">
                                <span className="mono-metric text-sm font-bold text-[#4338ca] uppercase tracking-wider">{item.label}</span>
                                <p className="text-lg font-medium text-[#0f172a] leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
```

## components/sections/SelectedProductionWork.tsx
```tsx
"use client"

import { motion } from "framer-motion"

export function SelectedProductionWork() {
    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#4338ca] mb-12 tracking-tighter leading-tight">Selected Production Work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 01 */}
                        <div className="blueprint-card bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="mono-metric text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">
                                    Conversational AI | Financial Services
                                </div>
                                <p className="text-base text-[#0f172a] leading-relaxed mb-8">
                                    Owned end-to-end deployment of high-stakes conversational AI systems, from discovery through production stabilization, ensuring accuracy, compliance, and client readiness.
                                </p>
                            </div>
                            <div className="mono-metric text-sm font-bold text-[#10b981]">
                                95%+ production accuracy • 90%+ client satisfaction
                            </div>
                        </div>

                        {/* Card 02 */}
                        <div className="blueprint-card bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-100 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="mono-metric text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">
                                    Enterprise Learning Platforms
                                </div>
                                <p className="text-base text-[#0f172a] leading-relaxed mb-8">
                                    Translated learner and enterprise feedback into scalable product improvements, driving sustained engagement and adoption across customers.
                                </p>
                            </div>
                            <div className="mono-metric text-sm font-bold text-[#10b981]">
                                4× MAU growth • ~$500K enterprise wins
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
```

## components/sections/ProfessionalTrack.tsx
```tsx
"use client"

import { motion } from "framer-motion"

export function ProfessionalTrack() {
    const history = [
        { role: "Product Leader", company: "Skit.ai", scope: "Led conversational AI across regulated financial deployments" },
        { role: "Program Manager", company: "BigSpring", scope: "Scaled AI platform adoption across enterprise customers" },
        { role: "Product Manager", company: "ByteDance", scope: "Drove growth initiatives on global consumer platforms" },
        { role: "Associate Program Manager", company: "Toppr", scope: "Delivered learner-facing product experiences at scale" },
        { role: "Software Engineer", company: "Tech Mahindra", scope: "Built enterprise integration systems" }
    ]

    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-black text-[#4338ca] mb-12 tracking-tighter leading-tight">Professional Track</h2>

                    <div className="space-y-8">
                        {history.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                                <div className="flex flex-col md:flex-row md:gap-8">
                                    <span className="text-lg font-bold text-[#0f172a] w-48">{item.role}</span>
                                    <span className="text-lg font-medium text-slate-700">{item.company}</span>
                                </div>
                                <span className="text-base font-normal text-slate-500 mt-1 md:mt-0">{item.scope}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
```

## components/sections/FeaturedPosts.tsx
```tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    { title: "Field Marshal Sam Manekshaw: Leadership Under Constraint", slug: "unveiling-leadership-insights-from-field-marshal-sam-manekshaw" },
    { title: "Why I Build Systems, Not Demos", slug: "scaling-agile" }
]

export function FeaturedPosts() {
    return (
        <section className="py-24 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="flex justify-between items-baseline mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-[#4338ca] tracking-tighter leading-tight">Writing</h2>
                    <Link href="/blog" className="text-[#4338ca] font-bold hover:gap-2 transition-all inline-flex items-center">
                        Read on the Blog <ArrowRight size={18} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post, i) => (
                        <Link key={i} href={`/blog/${post.slug}`} className="group block p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-[#4338ca] transition-all">
                            <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#4338ca] transition-colors leading-snug">
                                {post.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
```
