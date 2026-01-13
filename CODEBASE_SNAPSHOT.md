# Website Codebase Snapshot - System Architect Pivot

## Directory Structure
```
app:
admin
api
blog
favicon.ico
globals.css
icon.png
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

branding:
sg-logo-checkerboard.png
sg-logo-standard.png
sg-logo-white.png

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
Briefing.tsx
CareerLog.tsx
ClosingCTA.tsx
DecisionFramework.tsx
FeaturedCaseStudy.tsx
FeaturedPosts.tsx
Grounding.tsx
Hero.tsx
Identity.tsx
LogosSection.tsx
Milestones.tsx
OperatingContext.tsx
OperatingManual.tsx
OperatingPrinciples.tsx
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
import { Footer } from "@/components/layout/Footer"
import { Identity } from "@/components/sections/Identity"
import { Briefing } from "@/components/sections/Briefing"
import { CareerLog } from "@/components/sections/CareerLog"
import { SelectedProductionWork } from "@/components/sections/SelectedProductionWork"
import { OperatingPrinciples } from "@/components/sections/OperatingPrinciples"
import { DecisionFramework } from "@/components/sections/DecisionFramework"
import { FeaturedPosts } from "@/components/sections/FeaturedPosts"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Identity />
        <Briefing />
        <CareerLog />
        <SelectedProductionWork />
        <OperatingPrinciples />
        <DecisionFramework />
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
  --grid-color: rgba(67, 56, 202, 0.015);
}

@layer base {
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

  body {
    background-color: var(--background);
    color: var(--foreground);
    @apply antialiased;
    font-family: 'Instrument Sans', sans-serif;
    background-image:
      linear-gradient(var(--grid-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  h1,
  h2,
  h3,
  h4,
  .font-heading {
    @apply font-bold tracking-tight text-neutral-900;
  }
}

.mono-metric {
  @apply font-mono tracking-tight;
  font-variant-numeric: tabular-nums;
}

.blueprint-card {
  @apply relative overflow-hidden bg-white border-b border-neutral-200 transition-colors duration-200;
}

.blueprint-card:hover {
  @apply bg-neutral-50;
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
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <div className="max-w-4xl mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-[#4338ca] mb-6 tracking-tight">
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
export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white pt-16 pb-24">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h5 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
                            Construct
                        </h5>
                        <p className="text-2xl font-bold text-[#4338ca] leading-tight max-w-sm">
                            Building the systems that make AI profitable.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
                            Protocol
                        </h5>
                        <div className="space-y-4">
                            <a href="https://linkedin.com/in/sudhanshugiri" target="_blank" rel="noopener noreferrer" className="block text-lg font-bold text-neutral-900 hover:text-[#4338ca]">
                                LinkedIn <span className="text-neutral-300">/</span> Strategic Advisory
                            </a>
                            <a href="mailto:contact@sudhanshugiri.com" className="block text-lg font-bold text-neutral-900 hover:text-[#4338ca]">
                                Email <span className="text-neutral-300">/</span> Direct Comms
                            </a>
                        </div>
                    </div>
                </div>

                {/* System Status Bar */}
                <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div>
                            <span className="text-neutral-300 mr-2">STATUS:</span>
                            <span className="text-[#10b981]">Active Deployment @ Skit.ai</span>
                        </div>
                        <div>
                            <span className="text-neutral-300 mr-2">LOC:</span>
                            Bengaluru, IN
                        </div>
                        <div>
                            <span className="text-neutral-300 mr-2">FOCUS:</span>
                            Conversational AI Governance
                        </div>
                    </div>
                    <div>
                        SG. © 2026
                    </div>
                </div>
            </div>
        </footer>
    )
}
```

## components/sections/Identity.tsx
```tsx
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
```

## components/sections/Briefing.tsx
```tsx
export function Briefing() {
    return (
        <section className="py-16 md:py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            01 / Briefing
                        </span>
                    </div>
                    <div className="md:col-span-9 max-w-2xl">
                        <div className="prose prose-lg md:prose-xl prose-neutral font-medium text-neutral-800 leading-relaxed">
                            <p>
                                I spent a decade at places like <span className="font-bold text-[#0f172a]">ByteDance</span> and <span className="font-bold text-[#0f172a]">Skit.ai</span> learning one thing:
                            </p>
                            <p className="border-l-4 border-[#4338ca] pl-6 italic text-neutral-900">
                                Success isn't in the model; it's in the system.
                            </p>
                            <p>
                                When you are deploying AI in regulated, high-stakes environments, the "demo" doesn't matter. What matters is observability, governance, and the ability to scale without breaking.
                            </p>
                            <p>
                                I build the systems that make AI profitable, not just possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
```

## components/sections/CareerLog.tsx
```tsx
"use client"

import { motion } from "framer-motion"

export function CareerLog() {
    const history = [
        { period: "2023–Present", role: "Product Leader", company: "Skit.ai", scope: "Led conversational AI across regulated financial deployments" },
        { period: "2022–2023", role: "Program Manager", company: "BigSpring", scope: "Scaled AI platform adoption across enterprise customers" },
        { period: "2021–2022", role: "Product Manager", company: "ByteDance", scope: "Drove growth initiatives on global consumer platforms" },
        { period: "2019–2021", role: "Associate Program Manager", company: "Toppr", scope: "Delivered learner-facing product experiences at scale" },
        { period: "2016–2019", role: "Software Engineer", company: "Tech Mahindra", scope: "Built enterprise integration systems" }
    ]

    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            03 / Log
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <div className="space-y-0">
                            {history.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-default"
                                >
                                    <div className="md:col-span-3">
                                        <span className="font-mono text-sm text-neutral-500 group-hover:text-brand-primary transition-colors">
                                            {item.period}
                                        </span>
                                    </div>
                                    <div className="md:col-span-9 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                                        <div>
                                            <span className="font-bold text-neutral-900 block md:inline md:mr-2">
                                                {item.company}
                                            </span>
                                            <span className="text-neutral-600">
                                                {item.role}
                                            </span>
                                        </div>
                                        <span className="text-sm text-neutral-400 hidden md:block">
                                            {item.scope}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
```

## components/sections/OperatingPrinciples.tsx
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

export function OperatingPrinciples() {
    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            02 / Principles
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-1 gap-12">
                            {principles.map((item, i) => (
                                <motion.div
                                    key={item.rule}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                                >
                                    <div className="md:col-span-2">
                                        <span className="font-mono text-sm font-bold text-brand-primary uppercase">
                                            RULE {item.rule}
                                        </span>
                                    </div>
                                    <div className="md:col-span-10">
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-neutral-600 leading-relaxed max-w-2xl">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
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

## components/sections/FeaturedPosts.tsx
```tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    { title: "Field Marshal Sam Manekshaw: Leadership Under Constraint", date: "Jan 2026", slug: "unveiling-leadership-insights-from-field-marshal-sam-manekshaw" },
    { title: "Why I Build Systems, Not Demos", date: "Dec 2025", slug: "scaling-agile" }
]

export function FeaturedPosts() {
    return (
        <section className="py-24 border-t border-neutral-200">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <span className="font-mono text-xs font-bold tracking-widest text-neutral-400 uppercase">
                            05 / Writing
                        </span>
                    </div>
                    <div className="md:col-span-9">
                        <div className="space-y-0">
                            {posts.map((post, i) => (
                                <Link key={i} href={`/blog/${post.slug}`} className="group block py-6 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#4338ca] transition-colors">
                                            {post.title}
                                        </h3>
                                        <span className="font-mono text-sm text-neutral-400 group-hover:text-brand-primary transition-colors">
                                            {post.date}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                            <div className="pt-8">
                                <Link href="/blog" className="text-[#4338ca] font-bold hover:underline inline-flex items-center text-sm md:text-base">
                                    View Strategic Archive <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
```

## components/blog/BlogList.tsx
```tsx
import { BlogCard } from "./BlogCard"
import { type PostMetadata } from "@/lib/mdx"

interface BlogListProps {
    posts: PostMetadata[]
    from?: string
}

export function BlogList({ posts, from }: BlogListProps) {
    return (
        <div className="space-y-0 border-t border-neutral-200">
            {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} from={from} />
            ))}
        </div>
    )
}
```

## components/blog/BlogCard.tsx
```tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { formatDate } from "@/lib/utils"
import { type PostMetadata } from "@/lib/mdx"

interface BlogCardProps {
    post: PostMetadata
    index?: number
    from?: string
}

export function BlogCard({ post, index = 0, from }: BlogCardProps) {
    const href = from ? `/blog/${post.slug}?from=${from}` : `/blog/${post.slug}`
    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group py-6 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors"
        >
            <Link href={href} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-2">
                    <span className="font-mono text-sm text-neutral-500 font-medium group-hover:text-brand-primary transition-colors">
                        {formatDate(post.date)}
                    </span>
                </div>
                <div className="md:col-span-8">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#4338ca] transition-colors mb-2">
                        {post.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-2 md:line-clamp-1">
                        {post.excerpt}
                    </p>
                </div>
                <div className="md:col-span-2 text-right hidden md:block">
                    <span className="font-mono text-xs font-bold text-[#10b981] uppercase tracking-wider">
                        {post.readingTime}
                    </span>
                </div>
            </Link>
        </motion.article>
    )
}
```
