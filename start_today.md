# START TODAY - Your Portfolio in 1 Hour
## No Experience Needed | 100% Free | LinkedIn Ready

---

## ⚡ What You'll Have in 60 Minutes

```
✅ Live website at: yourname.vercel.app
✅ Professional homepage
✅ About page with your bio
✅ Blog system ready for posts
✅ Contact form
✅ Ready to add to LinkedIn
```

**Cost: $0 | Time: 60 minutes | Skill: Beginner**

---

## 🎯 60-MINUTE PLAN

### Minutes 0-15: Setup
### Minutes 15-30: Generate Code
### Minutes 30-45: Customize
### Minutes 45-60: Deploy & Go Live

---

## 🚀 STEP 1: Choose Your IDE (5 min)

### **Option A: Google IDX (Recommended - Easiest)**

```
1. Go to: https://idx.google.com
2. Sign in with Google account
3. Click "New Project"
4. Select "Next.js"
5. Wait 2 minutes for setup
```

✅ **Best if:** You want simplest option, any device works

### **Option B: Cursor (More Powerful)**

```
1. Go to: https://cursor.sh  
2. Download and install
3. Open Cursor
4. Sign up (free)
```

✅ **Best if:** You have a good computer, want more features

---

## 🚀 STEP 2: Create Project (5 min)

### In Google IDX:
```bash
# Terminal opens automatically at bottom
# Run this ONE command:

npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Press ENTER when prompted (accept all defaults)
# Wait 2 minutes
```

### In Cursor:
```bash
# Open terminal (Ctrl+` or Cmd+`)
# Run these commands:

cd ~/Projects
npx create-next-app@latest my-portfolio
cd my-portfolio
cursor .

# Choose these when prompted:
# TypeScript? YES
# Tailwind? YES  
# App Router? YES
# Everything else? YES (default)
```

---

## 🚀 STEP 3: Install Blog Tools (2 min)

### Copy and paste this ONE command:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter reading-time framer-motion lucide-react next-themes date-fns
```

Press ENTER and wait 1 minute.

---

## 🚀 STEP 4: Generate Your Site with AI (10 min)

### Open AI Assistant:
- **Google IDX:** Press `Ctrl+I` or `Cmd+I`
- **Cursor:** Press `Ctrl+I` or `Cmd+I`

### Copy and paste this EXACT prompt:

```
Create a complete portfolio website with blog for a Product/Program Leader.

PAGES:
1. Homepage (app/page.tsx):
   - Hero section with greeting
   - Brief intro (placeholder: "I'm a Product Leader...")
   - 3 stat cards (Years Experience, Products Shipped, Teams Led)
   - Featured blog posts section
   - CTA button to contact

2. About page (app/about/page.tsx):
   - Detailed bio section (placeholder text)
   - Experience timeline
   - Skills grid
   - Current role section

3. Blog list (app/blog/page.tsx):
   - Grid of blog posts
   - Search bar
   - Category filter
   - Reading time on each card

4. Blog post (app/blog/[slug]/page.tsx):
   - Article content from MDX
   - Table of contents
   - Reading time
   - Share buttons
   - Related posts

5. Work page (app/work/page.tsx):
   - Project cards with description
   - Placeholder projects

6. Contact page (app/contact/page.tsx):
   - Contact form (name, email, message)
   - Social links placeholders
   - Email link

SETUP:
- Already using Next.js 14 App Router, TypeScript, Tailwind
- Add MDX support for blog
- Add 3 example blog posts in content/blog/
- Each post needs: title, date, excerpt, category, tags in frontmatter

DESIGN:
- Minimalist, professional
- Black/gray/blue color scheme (primary: #0066CC)
- Inter font family
- Generous spacing
- Smooth animations
- Mobile responsive
- Dark mode support

FEATURES:
- Blog posts in MDX format
- Auto-generate reading time
- Table of contents from headings
- Syntax highlighting for code
- SEO meta tags on every page
- Responsive navigation
- Footer with links

STRUCTURE:
app/
  page.tsx (home)
  about/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  work/page.tsx
  contact/page.tsx
  layout.tsx
  globals.css
components/
  ui/ (Button, Card, Input)
  blog/ (BlogCard, BlogList)
  Header.tsx
  Footer.tsx
content/
  blog/
    example-1.mdx
    example-2.mdx
    example-3.mdx
lib/
  blog.ts (MDX processing functions)
  utils.ts
public/
  images/

Include:
- TypeScript types for all components
- Proper error handling
- Loading states
- Accessibility (ARIA labels)
- SEO-ready structure

Create ALL files with working code. Make it production-ready.
```

**Press ENTER and wait 5-8 minutes** while AI generates everything.

---

## 🚀 STEP 5: Test Locally (3 min)

### Run your site:
```bash
npm run dev
```

### Check it out:
- **IDX:** Click the preview URL that appears
- **Cursor:** Open http://localhost:3000

**You should see your portfolio!** 🎉

---

## 🚀 STEP 6: Customize (15 min)

### Quick Edits (Do These Now):

#### 1. Update Homepage (5 min)
```typescript
// Open: app/page.tsx
// Find and replace:

"I'm a Product Leader..." 
→ "Your actual intro (2-3 sentences)"

"10+ Years"
→ Your actual years of experience

"50+ Products"  
→ Your actual number

"$XXM Revenue"
→ Your actual impact metric
```

#### 2. Update About Page (5 min)
```typescript
// Open: app/about/page.tsx
// Replace placeholder bio with your actual bio
// List your actual skills
// Add your experience timeline
```

#### 3. Add Profile Photo (5 min)
```bash
# 1. Get your LinkedIn photo
# 2. Go to: https://squoosh.app
# 3. Upload photo
# 4. Choose WebP, Quality 80
# 5. Download
# 6. Save as: public/images/profile.jpg

# 7. Reference in app/page.tsx:
<Image src="/images/profile.jpg" width={200} height={200} />
```

---

## 🚀 STEP 7: Push to GitHub (5 min)

### In IDX:
```
1. Click Source Control icon (left sidebar)
2. Click "Initialize Repository"
3. Enter message: "Initial portfolio"
4. Click checkmark to commit
5. Click "Publish to GitHub"
6. Choose: Public repository
7. Name: my-portfolio
8. Click "Publish"
```

### In Cursor:
```bash
# Run these commands in terminal:

git init
git add .
git commit -m "Initial portfolio"

# Then go to github.com:
# Click "+", "New repository"
# Name: my-portfolio
# Public
# Create

# Copy the commands shown and run them:
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🚀 STEP 8: Deploy to Vercel (10 min)

### Go Live:
```
1. Open: https://vercel.com
2. Click "Sign up" → Use GitHub account
3. Click "Add New Project"
4. Find your "my-portfolio" repository
5. Click "Import"
6. Framework: Next.js (auto-detected)
7. Click "Deploy"
8. Wait 2-3 minutes ⏳
```

### **🎉 YOU'RE LIVE!**

```
Your URL: https://your-github-username.vercel.app

Share it now!
```

---

## 🚀 STEP 9: Add to LinkedIn (5 min)

### Update Your LinkedIn:
```
1. Go to LinkedIn profile
2. Click "Edit intro"
3. Website: https://your-github-username.vercel.app
4. Save

5. In "About" section, add at end:
   "📖 Read my thoughts on product leadership: 
   https://your-github-username.vercel.app/blog"

6. Save
```

### Test It:
```
1. Open LinkedIn in private/incognito tab
2. View your profile
3. Click your website link
4. Verify it opens ✅
```

---

## ✅ YOU'RE DONE!

### What You Have:
```
✅ Live portfolio website
✅ Professional homepage  
✅ About page with bio
✅ Blog system (3 example posts)
✅ Contact form
✅ Work/projects page
✅ Mobile responsive
✅ Fast loading
✅ SEO optimized
✅ Free hosting forever
✅ LinkedIn-ready URL
✅ yourname.vercel.app
```

### Time Spent: ~60 minutes
### Cost: $0
### Result: Professional portfolio

---

## 📝 NEXT: Write Your First Real Blog Post (30 min)

### Tomorrow, do this:

#### 1. Create New File:
```bash
# In your IDE:
# Create: content/blog/my-first-post.mdx
```

#### 2. Add This Template:
```yaml
---
title: "My Journey to Product Leadership"
date: "2025-01-11"
excerpt: "How I got into product management and what I've learned along the way"
category: "Career"
tags: ["career", "product", "journey"]
featured: true
---

## How It Started

Write about your background...

## Key Lessons

Share what you've learned...

## What's Next

Your future plans...
```

#### 3. Publish:
```bash
git add .
git commit -m "Add first blog post"
git push
```

**Live in 2 minutes!**

#### 4. Share on LinkedIn:
```
New on my blog: My Journey to Product Leadership

[2-3 sentences about the post]

Read more: https://yourname.vercel.app/blog/my-first-post

#ProductManagement #Career #Leadership
```

---

## 🎯 This Week's Goals

```
Day 1 (Today): ✅ Website live
Day 2: Write blog post #1
Day 3: Write blog post #2  
Day 4: Write blog post #3
Day 5: Optimize images & polish
Day 6: Share on all social media
Day 7: Rest & plan next posts
```

---

## 💡 Quick Tips

### Writing Posts:
- Use AI to help (highlight text, ask to improve)
- 1500-2000 words is ideal
- Add images for visual interest
- Use code examples if technical

### Getting Traffic:
- Share every post on LinkedIn
- Comment on others' posts
- Add value in discussions
- Consistent posting (2-4 posts/month)

### Building Credibility:
- Share real experiences
- Be authentic and humble
- Show your work and process
- Engage with readers

---

## 🆘 Stuck? Try This:

### "AI not generating code"
```
- Try again with shorter prompt
- Or ask: "Create just the homepage first"
- Build incrementally
```

### "Site not deploying"
```
1. Check Vercel dashboard for errors
2. Run locally: npm run build
3. Fix any errors shown
4. Push again
```

### "Don't know what to write"
```
Start with:
- Your journey story
- Your biggest lesson learned
- A framework you use
- A mistake you made
```

---

## 🎉 Congratulations!

You now have:
- ✅ Professional portfolio
- ✅ Blogging platform  
- ✅ LinkedIn presence
- ✅ Online credibility

**All in 60 minutes, for $0!**

---

## 📞 Your URLs (Write These Down)

```
Website: https://your-github-username.vercel.app
Blog: https://your-github-username.vercel.app/blog
GitHub: https://github.com/your-username/my-portfolio
Vercel: https://vercel.com/dashboard

FREE Tools Used:
IDE: https://idx.google.com
Hosting: https://vercel.com
Images: https://unsplash.com
Optimize: https://squoosh.app
```

---

## 🚀 Ready? START NOW!

### Click here to begin: **https://idx.google.com**

Follow steps 1-9 above.

**See you on the other side! 💪**

---

*Questions? Stuck? Re-read a step slowly. Most answers are in the detailed guide. You've got this!*