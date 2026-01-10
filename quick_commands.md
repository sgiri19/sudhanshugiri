# Quick Command Reference Card
## Copy-Paste These Commands

---

## 🚀 INITIAL SETUP

### Google IDX Setup:
```bash
# Go to: https://idx.google.com
# Create project, then in terminal:

npx create-next-app@latest . --typescript --tailwind --app --no-src-dir

# Install blog dependencies:
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter reading-time framer-motion lucide-react next-themes date-fns

# Run development server:
npm run dev
```

### Cursor Setup:
```bash
# Install from: https://cursor.sh
# Then in terminal:

npx create-next-app@latest my-portfolio
cd my-portfolio

# Install blog dependencies:
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter reading-time framer-motion lucide-react next-themes date-fns

# Run development server:
npm run dev
```

---

## 📝 CREATE NEW BLOG POST

### 1. Create File:
```bash
# In your IDE:
content/blog/my-new-post.mdx
```

### 2. Add Frontmatter:
```yaml
---
title: "Your Post Title Here"
date: "2025-01-10"
excerpt: "A compelling 2-3 sentence description of your post"
coverImage: "/images/blog/post-name.jpg"
category: "Leadership"
tags: ["product", "strategy", "leadership"]
featured: true
---

## Your First Heading

Write your content here in Markdown...
```

### 3. Publish:
```bash
git add .
git commit -m "Add new post: Your Title"
git push
```

**Live in 1-2 minutes!**

---

## 🌐 DEPLOY TO VERCEL

### First Time Setup:
```bash
# Option 1: Through Website (Easiest)
1. Go to: https://vercel.com
2. Sign up with GitHub (free)
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy"
6. Done!

# Option 2: CLI
npm install -g vercel
vercel login
vercel
# Follow prompts
```

### After First Setup:
```bash
# Just push to GitHub:
git push

# Vercel auto-deploys in 1-2 minutes
# Check: https://vercel.com/dashboard
```

---

## 🔄 DAILY WORKFLOW

### Writing New Post:
```bash
# 1. Create .mdx file in content/blog/
# 2. Write content
# 3. Save
# 4. Test locally:
npm run dev

# 5. Deploy:
git add .
git commit -m "New post: Title"
git push

# 6. Share on LinkedIn!
```

### Updating Existing Post:
```bash
# 1. Edit .mdx file
# 2. Update date in frontmatter
# 3. Deploy:
git add .
git commit -m "Update post: Title"
git push
```

---

## 🎨 CUSTOMIZATION

### Change Colors:
```javascript
// tailwind.config.js
colors: {
  primary: '#0066CC',    // Change this
  secondary: '#525252',
  accent: '#0EA5E9',
}
```

### Add Profile Photo:
```bash
# 1. Save photo as: public/images/profile.jpg
# 2. Optimize at: squoosh.app
# 3. Reference in code:
<Image src="/images/profile.jpg" width={200} height={200} />
```

### Update About Page:
```typescript
// Edit: app/about/page.tsx
// Write your bio and experience
```

---

## 📊 ANALYTICS

### Vercel Analytics (1 minute):
```
1. Go to Vercel dashboard
2. Select your project  
3. Click "Analytics" tab
4. Click "Enable"
5. Done!
```

### Google Analytics (5 minutes):
```
1. Go to: analytics.google.com
2. Create property
3. Get ID: G-XXXXXXXXXX
4. Add to: app/layout.tsx (use AI assistant)
5. Push to GitHub
```

---

## 🔗 LINKEDIN INTEGRATION

### Add to Profile:
```
1. LinkedIn → Edit profile → Contact Info
2. Website: https://yourname.vercel.app
3. Save

4. In About section, add:
   "📖 Read my blog: yourname.vercel.app/blog"
```

### Share New Post:
```
LinkedIn Post Template:

📝 New Article: [Your Title]

[2-3 sentence teaser about the topic]

Key takeaways:
• Point 1
• Point 2  
• Point 3

Read more: https://yourname.vercel.app/blog/post-slug

#ProductManagement #Leadership #YourRelevantTags
```

---

## 🆘 TROUBLESHOOTING

### Site Not Building:
```bash
# Check for errors:
npm run build

# If errors, read carefully and fix
# Then:
git add .
git commit -m "Fix build errors"
git push
```

### Blog Post Not Showing:
```bash
# Check file location:
ls content/blog/

# Check frontmatter (no syntax errors)
# Check date format: "2025-01-10"
# Rebuild:
npm run build
npm run dev
```

### Images Not Loading:
```bash
# Images must be in: public/images/
# Reference without 'public': /images/photo.jpg
# Check file name matches exactly (case-sensitive)
```

---

## 🎯 AI ASSISTANT PROMPTS

### For Google IDX AI:
```
"Create a new blog post about [topic] with:
- Compelling title
- Professional intro
- 3-5 main sections
- Actionable takeaways
- SEO optimized
- 1500-2000 words"
```

### For Cursor AI:
```
"Help me write a product leadership article about [topic].
Structure it with:
- Hook introduction
- Framework or methodology
- Real-world example
- Common mistakes
- Key takeaways"
```

### For Improving Writing:
```
"Make this paragraph more professional and engaging:
[paste your text]"
```

---

## 📦 BACKUP & RESTORE

### Create Backup:
```bash
# Your code is already backed up on GitHub!
# To download local copy:
cd ~/backups
git clone https://github.com/yourusername/my-portfolio.git
```

### Restore from Backup:
```bash
# Clone repository:
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio

# Install dependencies:
npm install

# Run:
npm run dev
```

---

## 🚀 GOING LIVE CHECKLIST

```
Before sharing on LinkedIn:

CONTENT:
□ About page written
□ 3+ blog posts published
□ Contact form tested
□ Profile photo added

TECHNICAL:
□ All pages load correctly
□ No console errors (F12)
□ Mobile responsive
□ Forms work

SEO:
□ Analytics installed
□ Meta descriptions set
□ Alt text on images

LINKEDIN:
□ URL in profile
□ First post drafted
□ Professional preview image
```

---

## 💡 USEFUL LINKS

```
Your Sites:
• Development: http://localhost:3000
• Production: https://yourname.vercel.app
• GitHub Repo: https://github.com/yourusername/my-portfolio

Free Tools:
• IDE: https://idx.google.com or https://cursor.sh
• Hosting: https://vercel.com
• Free Photos: https://unsplash.com
• Image Optimizer: https://squoosh.app
• Form Backend: https://formspree.io
• Newsletter: https://convertkit.com

Documentation:
• Next.js: https://nextjs.org/docs
• Tailwind: https://tailwindcss.com/docs
• MDX: https://mdxjs.com
```

---

## ⏱️ TIME ESTIMATES

```
First-time Setup: 2-3 hours
Write blog post: 1-2 hours
Publish post: 2 minutes
Update content: 30 minutes
Deploy changes: 2 minutes
```

---

## 💰 COSTS

```
Everything: $0/month
Domain (optional later): $1-2/month
Total: $0-2/month
```

---

**Save this page for quick reference!**

**Start here: https://idx.google.com** ✨