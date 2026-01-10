# AI IDE Prompt: Professional Portfolio Website for Program/Product Leader

## 🎯 PROJECT OVERVIEW

Create a world-class, minimalist portfolio website for a Program/Product Leader with the following characteristics:

### Primary Goals:
1. **Establish Professional Credibility** - Showcase leadership, experience, and thought leadership
2. **Content Publishing Platform** - Regular blog articles with images and rich text
3. **Engagement & Growth** - Track visitors, convert readers to connections
4. **Technical Excellence** - Fast, secure, SEO-optimized, accessible

### Target Audience:
- Hiring managers and recruiters
- Fellow product/program leaders
- Industry professionals
- Potential collaborators/clients

---

## 📋 TECHNICAL REQUIREMENTS

### Tech Stack (Static Site - High Performance):
```
Primary Choice: Next.js 14+ with App Router
- Framework: Next.js (React-based)
- Styling: Tailwind CSS (utility-first, minimalist)
- Content: MDX (Markdown + React components for blogs)
- Deployment: Vercel (free tier, automatic deployments)
- Analytics: Vercel Analytics + Google Analytics 4
- Forms: Formspree or Web3Forms (free)
- Search: Algolia or local search
- Comments: Giscus (GitHub Discussions-based, free)

Alternative: If simpler static site needed:
- Astro + Tailwind CSS + MDX
- 11ty (Eleventy) + Tailwind CSS
```

### Performance Targets:
- Lighthouse Score: 95+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Cumulative Layout Shift: < 0.1
- Page size: < 500KB (excluding images)
- Image optimization: WebP/AVIF with lazy loading

### SEO Requirements:
- Semantic HTML5 structure
- Open Graph tags (social sharing)
- Twitter Card tags
- Schema.org structured data (Person, Article, BlogPosting)
- Sitemap.xml auto-generation
- robots.txt
- Canonical URLs
- Meta descriptions (unique per page)
- RSS feed for blog
- Breadcrumb navigation
- Internal linking strategy

### Security Requirements:
- Content Security Policy (CSP) headers
- HTTPS enforced
- No external script vulnerabilities
- XSS protection
- CSRF protection for forms
- Secure headers (X-Frame-Options, X-Content-Type-Options)
- Regular dependency updates

### Accessibility Requirements:
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- ARIA labels where needed
- Color contrast ratio 4.5:1+
- Focus indicators
- Alt text for all images
- Skip to content link

---

## 🎨 DESIGN PRINCIPLES

### Style: Minimalist & Professional
```css
Design Philosophy:
- Less is more
- Content-first approach
- Generous whitespace
- Clean typography hierarchy
- Subtle animations (no distractions)
- Monochromatic or limited color palette
- Professional but approachable

Inspiration:
- Linear.app (minimalist SaaS design)
- Stripe.com (clean, professional)
- Tom Johnson's blog (content-focused)
- Paco Coursey's portfolio (minimal, elegant)
```

### Color Palette Recommendations:
```css
Primary Scheme (Professional):
--primary: #0A0A0A (almost black)
--secondary: #525252 (medium gray)
--accent: #0066CC (professional blue)
--background: #FFFFFF (white)
--surface: #F5F5F5 (light gray)
--text-primary: #171717
--text-secondary: #737373

Alternative (Warm & Approachable):
--primary: #1E293B (slate)
--secondary: #64748B (slate-500)
--accent: #0EA5E9 (sky-500)
--background: #FFFFFF
--surface: #F8FAFC
```

### Typography:
```css
Headings: Inter (600, 700, 800 weights)
Body: Inter (400, 500 weights)
Code: JetBrains Mono or Fira Code
Monospace: Space Mono (for dates, metadata)

Font loading: Use next/font with display: swap
```

---

## 📐 SITE STRUCTURE & PAGES

### Required Pages:

#### 1. Home Page (`/`)
**Purpose:** First impression, high-level overview

**Sections:**
- Hero with profile photo (circular, 200x200px) + tagline
- Brief introduction (2-3 sentences)
- Key achievements/metrics (3-4 cards)
- Featured blog posts (latest 3)
- Skills/Expertise (visual, icon-based)
- Call-to-action (contact, LinkedIn)

**Example Layout:**
```
[Profile Photo]
Hi, I'm [Name]
Program Leader | Product Strategist | Technical Leader

[2-3 sentence compelling intro]

[3 Stats/Achievements Cards]
• 10+ Years Experience
• 50+ Products Shipped
• $XXM Revenue Generated

[Latest Articles]
[Article 1] [Article 2] [Article 3]

[Let's Connect] CTA
```

#### 2. About Page (`/about`)
**Purpose:** Detailed background, build credibility

**Sections:**
- Extended bio (professional journey)
- Professional philosophy
- Timeline/Career path
- Skills & Expertise (detailed)
- Education & Certifications
- Current role & responsibilities
- Side projects/Volunteering
- Personal interests (humanize)

#### 3. Blog/Articles (`/blog`)
**Purpose:** Thought leadership, SEO traffic

**Features:**
- Grid/List view of all articles
- Filter by category/tag
- Search functionality
- Sort by date/popularity
- Pagination or infinite scroll
- Reading time estimates
- Featured posts section
- Categories sidebar

**Article Page (`/blog/[slug]`):**
- Hero image
- Title, date, reading time, category
- Author info (you)
- Table of contents (auto-generated)
- Content with rich formatting
- Syntax highlighting for code
- Image galleries
- Pull quotes
- Related articles
- Share buttons (LinkedIn, Twitter)
- Comments (Giscus)
- Newsletter signup

#### 4. Work/Projects (`/work`)
**Purpose:** Showcase major achievements

**Content:**
- Case studies of major projects
- Problem → Solution → Impact format
- Metrics and outcomes
- Technologies used
- Team size/role
- Visual assets (screenshots, diagrams)
- Testimonials from stakeholders

#### 5. Speaking/Media (`/speaking`) [Optional]
**Purpose:** External credibility signals

**Content:**
- Conference talks
- Podcast appearances
- Webinars
- Guest articles
- Interviews

#### 6. Contact (`/contact`)
**Purpose:** Easy way to reach you

**Content:**
- Contact form (name, email, message)
- Email address (click-to-copy)
- LinkedIn profile link
- Twitter/X profile
- GitHub profile
- Optional: Calendar booking link (Calendly)

#### 7. Uses (`/uses`) [Optional but Popular]
**Purpose:** Share your tools/stack

**Content:**
- Hardware setup
- Software tools
- Productivity apps
- Books/Resources

---

## ✨ KEY FEATURES TO IMPLEMENT

### 1. Blog System (MDX-based)
```
Features:
- Write articles in MDX (Markdown + React)
- Frontmatter for metadata (title, date, excerpt, tags, cover image)
- Auto-generate table of contents
- Reading time calculation
- Code syntax highlighting (Prism or Shiki)
- Image optimization (next/image)
- Lazy loading
- Social sharing buttons
- View count tracking
- Related articles algorithm

File structure:
/content/blog/
  ├── my-first-article.mdx
  ├── product-leadership-101.mdx
  └── agile-at-scale.mdx

Frontmatter example:
---
title: "Product Leadership 101"
date: "2025-01-10"
excerpt: "Essential principles for leading product teams"
coverImage: "/images/blog/product-leadership.jpg"
category: "Leadership"
tags: ["product", "leadership", "strategy"]
featured: true
---
```

### 2. Analytics & Tracking
```
Implement:
- Google Analytics 4 (page views, events, conversions)
- Vercel Analytics (Core Web Vitals, real user monitoring)
- Article view counter (stored in database or localStorage)
- Time on page tracking
- Scroll depth tracking
- Click tracking on CTAs
- Newsletter signup tracking
- External link tracking

Privacy:
- Cookie consent banner (GDPR compliant)
- Privacy policy page
- Opt-out mechanism
```

### 3. SEO Enhancements
```
Per-page optimization:
- Dynamic meta tags (title, description)
- Open Graph images (auto-generated or custom)
- Twitter Cards
- Structured data (JSON-LD):
  * Person schema (homepage)
  * Article schema (blog posts)
  * BreadcrumbList schema
  * Organization schema

Technical SEO:
- XML sitemap (auto-generated)
- robots.txt
- RSS feed for blog
- Canonical URLs
- Proper heading hierarchy (h1 → h2 → h3)
- Internal linking
- Image alt text
- Descriptive URLs (slugs)

Content SEO:
- Target keywords in headings
- Natural keyword density
- Long-form content (1500+ words)
- Regular publishing schedule
- Update dates on refreshed content
```

### 4. Performance Optimizations
```
Images:
- Next.js Image component (automatic optimization)
- WebP/AVIF format
- Responsive images (srcset)
- Lazy loading (below fold)
- Blur placeholder
- CDN delivery

Code:
- CSS minification
- JS code splitting
- Tree shaking
- Dynamic imports
- Prefetch critical pages

Caching:
- Static page generation (SSG)
- Incremental Static Regeneration (ISR)
- Edge caching
- Service worker (optional PWA)
```

### 5. User Experience Features
```
Navigation:
- Sticky header with subtle shadow on scroll
- Smooth scroll to sections
- Breadcrumbs
- "Back to top" button
- Progress bar on blog posts

Interactive elements:
- Hover effects on cards/links
- Loading states
- Error states
- Toast notifications
- Skeleton screens

Search:
- Global search (⌘+K or Ctrl+K)
- Search blog posts, projects
- Keyboard shortcuts

Dark mode:
- System preference detection
- Manual toggle
- Persistent preference (localStorage)
- Smooth transition
```

### 6. Newsletter Integration
```
Options:
- ConvertKit (free up to 1000 subscribers)
- Substack (free, but separate domain)
- EmailOctopus (free up to 2500 subscribers)
- Buttondown (simple, clean)

Features:
- Email signup form (multiple placements)
- Inline CTAs in articles
- Exit-intent popup (non-intrusive)
- Double opt-in
- Welcome email automation
- RSS-to-email for new posts
```

---

## 🗂️ PROJECT FILE STRUCTURE

```
portfolio-website/
├── app/                          # Next.js app directory
│   ├── (routes)/
│   │   ├── page.tsx             # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx         # Blog list
│   │   │   └── [slug]/
│   │   │       └── page.tsx     # Individual blog post
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── uses/
│   │       └── page.tsx
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   └── api/                     # API routes (if needed)
│       └── newsletter/
│           └── route.ts
│
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogList.tsx
│   │   ├── TableOfContents.tsx
│   │   └── ShareButtons.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── FeaturedPosts.tsx
│       └── ContactForm.tsx
│
├── content/                     # MDX blog posts
│   └── blog/
│       ├── article-1.mdx
│       └── article-2.mdx
│
├── lib/                         # Utility functions
│   ├── mdx.ts                  # MDX processing
│   ├── analytics.ts            # Analytics helpers
│   └── utils.ts                # General utilities
│
├── public/
│   ├── images/
│   │   ├── profile.jpg         # Your profile photo
│   │   ├── og-image.jpg        # Default OG image
│   │   └── blog/               # Blog post images
│   ├── fonts/                  # Custom fonts (if needed)
│   ├── favicon.ico
│   └── robots.txt
│
├── styles/
│   └── mdx.css                 # Styles for MDX content
│
├── types/
│   └── blog.ts                 # TypeScript types
│
├── .env.local                   # Environment variables
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 💻 CODE REQUIREMENTS

### TypeScript Strict Mode
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

### Component Structure Example
```typescript
// components/blog/BlogCard.tsx
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: string;
  category: string;
  readingTime: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  date, 
  slug, 
  coverImage,
  category,
  readingTime 
}: BlogCardProps) {
  return (
    <article className="group">
      {/* Minimal, clean card design */}
    </article>
  );
}
```

### Metadata for SEO (Next.js 14+)
```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.date,
      authors: ['Your Name'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}
```

---

## 🎬 ANIMATIONS & INTERACTIONS

### Subtle, Professional Animations
```
Use Framer Motion for:
- Fade in on scroll (for sections)
- Slide up for cards
- Scale on hover (buttons, cards)
- Smooth page transitions
- Loading indicators

Principles:
- Duration: 200-300ms
- Easing: ease-in-out
- No excessive motion (accessibility)
- Respect prefers-reduced-motion
```

### Micro-interactions
```
Implement:
- Hover states on all clickable elements
- Active states on buttons
- Focus indicators (keyboard navigation)
- Skeleton loading for async content
- Toast notifications for actions
- Smooth color transitions
- Ripple effect on buttons (optional)
```

---

## 📊 CONTENT STRATEGY

### Blog Article Guidelines
```
Structure each article with:

1. Compelling headline (60 chars max for SEO)
2. Engaging introduction (hook + value prop)
3. Clear subheadings (H2, H3 hierarchy)
4. Short paragraphs (3-4 lines max)
5. Bullet points for lists
6. Visual elements (images, diagrams)
7. Code examples (if technical)
8. Real-world examples/case studies
9. Actionable takeaways
10. Call-to-action at end

Length: 1200-2000 words (sweet spot for SEO)
Publishing: 1-2 articles per month (consistency > frequency)
```

### Content Pillars (for Product/Program Leader)
```
1. Product Strategy & Roadmapping
2. Team Leadership & Management
3. Agile/Program Management
4. Stakeholder Management
5. Career Development
6. Tools & Processes
7. Case Studies & Lessons Learned
8. Industry Trends & Analysis
```

### SEO Keywords to Target
```
Primary:
- "product leader"
- "program manager"
- "product strategy"
- "technical leadership"

Long-tail:
- "how to build a product roadmap"
- "agile at scale best practices"
- "product management frameworks"
- "stakeholder alignment strategies"
```

---

## 🔐 SECURITY IMPLEMENTATION

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONVERTKIT_API_KEY=your_key_here
FORMSPREE_ENDPOINT=your_endpoint
GISCUS_REPO=username/repo
GISCUS_REPO_ID=your_id
```

### Security Headers (next.config.js)
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

---

## 📈 ANALYTICS IMPLEMENTATION

### Track These Events
```javascript
// Key metrics to track
const events = {
  pageView: 'page_view',
  blogView: 'blog_post_view',
  newsletterSignup: 'newsletter_signup',
  contactFormSubmit: 'contact_form_submit',
  externalLinkClick: 'external_link_click',
  downloadResume: 'resume_download',
  socialClick: 'social_link_click',
  searchPerformed: 'search_query',
};

// Example tracking function
export function trackEvent(eventName: string, properties?: object) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
}
```

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Launch
```
✅ All pages responsive (mobile, tablet, desktop)
✅ All images optimized (WebP, proper sizes)
✅ All links working (internal + external)
✅ Forms tested (contact, newsletter)
✅ SEO meta tags on every page
✅ Analytics installed and working
✅ Social sharing working (test preview)
✅ Accessibility audit passed (WAVE, axe)
✅ Performance audit passed (Lighthouse 95+)
✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
✅ 404 page designed
✅ Loading states for async operations
✅ Error handling for API calls
✅ Privacy policy page
✅ Cookie consent banner
```

### Post-Launch
```
✅ Submit sitemap to Google Search Console
✅ Submit to Bing Webmaster Tools
✅ Set up Google Analytics alerts
✅ Configure Vercel Analytics
✅ Test all analytics events
✅ Share on LinkedIn, Twitter
✅ Add URL to email signature
✅ Update LinkedIn profile (link to website)
✅ Monitor Core Web Vitals
✅ Schedule regular content updates
```

---

## 🎯 SUCCESS METRICS

### Track After 3 Months
```
Traffic:
- Monthly visitors: 500+ (target)
- Blog post views: 50+ per article
- Average session duration: 2+ minutes
- Bounce rate: <60%

Engagement:
- Newsletter subscribers: 50+
- Contact form submissions: 5+
- LinkedIn profile views: 20% increase
- Social shares per article: 10+

SEO:
- Domain Authority (Moz): 10+
- Organic keywords ranking: 20+
- Top 10 Google rankings: 3+
- Backlinks: 10+

Content:
- Published articles: 6-8
- Average article length: 1500+ words
- Comments per article: 2+
```

---

## 🛠️ TOOLS & RESOURCES

### Development
- **IDE:** VS Code with extensions (Prettier, ESLint, Tailwind CSS IntelliSense)
- **Version Control:** Git + GitHub
- **Deployment:** Vercel (automatic from GitHub)
- **Package Manager:** pnpm (faster than npm)

### Design
- **Mockups:** Figma (free)
- **Icons:** Lucide Icons, Heroicons
- **Images:** Unsplash, Pexels (free stock photos)
- **Photo Editing:** Photopea (free Photoshop alternative)
- **Illustrations:** unDraw, Storyset

### Performance
- **Image Optimization:** Squoosh.app, TinyPNG
- **Performance Testing:** Lighthouse, WebPageTest
- **SEO Audit:** Screaming Frog, Ahrefs Webmaster Tools

### Analytics
- **Google Analytics 4:** Free
- **Vercel Analytics:** Free (1st 1000 users)
- **Google Search Console:** Free
- **Plausible:** Privacy-friendly alternative ($9/mo)

---

## 💡 IMPLEMENTATION STEPS

### Phase 1: Setup (Day 1)
1. Initialize Next.js project: `npx create-next-app@latest`
2. Install dependencies (Tailwind, MDX, etc.)
3. Set up folder structure
4. Configure Tailwind
5. Create base layout (Header, Footer)

### Phase 2: Core Pages (Days 2-3)
1. Build homepage with hero section
2. Create About page
3. Set up blog infrastructure (MDX)
4. Create blog list page
5. Create individual blog post template
6. Build contact page with form

### Phase 3: Content (Days 4-5)
1. Write homepage copy
2. Write about page content
3. Write 3 initial blog posts
4. Gather and optimize images
5. Create profile photo (professional)

### Phase 4: Features (Days 6-7)
1. Implement search functionality
2. Add newsletter signup
3. Integrate analytics
4. Add social sharing buttons
5. Set up comments (Giscus)
6. Implement dark mode

### Phase 5: Polish (Days 8-9)
1. Optimize all images
2. Add animations (Framer Motion)
3. Test responsiveness
4. SEO optimization (meta tags)
5. Accessibility audit
6. Performance optimization

### Phase 6: Deploy (Day 10)
1. Deploy to Vercel
2. Set up custom domain (if purchased)
3. Configure analytics
4. Test production site
5. Submit to search engines
6. Share on social media

---

## 📝 PROMPT FOR AI ASSISTANT

**Use this exact prompt with your AI coding assistant:**

```
I need you to build a minimalist, high-performance portfolio website for a Program/Product Leader with the following specifications:

TECH STACK:
- Next.js 14+ with App Router
- TypeScript (strict mode)
- Tailwind CSS
- MDX for blog content
- Vercel for deployment

PAGES NEEDED:
1. Homepage: Hero with profile photo, intro, achievements, featured posts, CTA
2. About: Detailed bio, experience, skills, education
3. Blog: List view with search, filters, pagination
4. Blog Post Template: Hero image, TOC, rich content, related posts, comments
5. Work/Projects: Case studies with metrics
6. Contact: Form + social links

FEATURES:
- MDX-based blog system with frontmatter
- Full SEO optimization (meta tags, OG, Twitter Cards, Schema.org)
- Google Analytics 4 integration
- Newsletter signup (ConvertKit)
- Dark mode with system preference
- Search functionality (⌘+K)
- Responsive design (mobile-first)
- Syntax highlighting for code
- Image optimization (next/image)
- Social sharing buttons
- Reading time calculation
- View counter
- Comments (Giscus)

DESIGN:
- Minimalist, professional aesthetic
- Inspired by Linear.app and Stripe.com
- Generous whitespace
- Clean typography (Inter font)
- Subtle animations (Framer Motion)
- Color palette: blacks, grays, professional blue accent
- Smooth transitions and micro-interactions

REQUIREMENTS:
- Lighthouse score 95+ (all categories)
- WCAG 2.1 AA compliant
- Security headers (CSP, X-Frame-Options, etc.)
- TypeScript strict mode
- Component-based architecture
- Reusable UI components
- Semantic HTML5
- Auto-generated sitemap and RSS
- robots.txt
- 404 page
- Loading states
- Error boundaries

CONTENT STRUCTURE:
- Homepage sections: Hero, Stats, Featured Posts, Skills, CTA
- Blog frontmatter: title, date, excerpt, coverImage, category, tags, featured
- About sections: Bio, Timeline, Skills, Education, Current role
- Case study format: Problem, Solution, Impact, Metrics

Start with the project setup and basic structure, then we'll build out each page iteratively. Create all necessary files with the folder structure specified above.

Generate the initial project with:
1. next.config.js with image optimization and security headers
2. tailwind.config.js with custom theme
3. Base layout with Header and Footer components
4. Homepage structure
5. TypeScript types for blog posts
6. MDX configuration
7. Basic UI components (Button, Card, Input)

Make the code production-ready, fully typed, and follow Next.js 14 best practices.
```

---

## 🎓 LEARNING RESOURCES

### Official Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- MDX: https://mdxjs.com/docs
- Framer Motion: https://www.framer.com/motion

### Tutorials
- "Build a Blog with Next.js and MDX" - Lee Robinson
- "Portfolio Site Course" - Josh Comeau
- "Next.js 14 Tutorial" - Vercel YouTube

### Inspiration
- leerob.io (Lee Robinson - VP of Product at Vercel)
- rauchg.com (Guillermo Rauch - CEO of Vercel)
- kentcdodds.com (Kent C. Dodds - educator)
- cassidoo.co (Cassidy Williams - CTO)
- paco.me (Paco Coursey - designer/developer)

---

## ✅ FINAL DELIVERABLES

You should have:
```
✅ Fully functional portfolio website
✅ 3+ published blog posts
✅ SEO optimized (all pages)
✅ Analytics tracking (GA4 + Vercel)
✅ Newsletter integration
✅ Contact form working
✅ Dark mode implemented
✅ Mobile responsive
✅ Lighthouse score 95+
✅ Deployed to production (Vercel)
✅ Custom domain (optional)
✅ Search Console verified
✅ RSS feed active
✅ Social sharing working
```

---

**Copy the prompt above and paste it into your AI coding assistant (GitHub Copilot, Cursor, Claude Code, etc.) to get started!**

The AI will generate all the initial code, and you can then iterate on it to customize content and design to your preferences.

**Estimated time to complete: 7-10 days** (working a few hours per day)