# Brand Guidelines - Sudhanshu Giri

## Overview
A minimal, typography-focused personal brand inspired by cassidoo.co and modhilalmoorthy.com. Clean, professional, and authoritative.

---

## 1. Color Palette

### Primary Colors
```css
/* Brand Primary - Indigo */
--color-brand-primary: #4338ca;
/* Use: Links, hover states, accents, section labels */

/* Backgrounds */
--background: #ffffff;        /* Pure white */
--foreground: #1a1a1a;        /* Almost black for text */
```

### Neutral Scale
```css
/* Text Colors */
text-neutral-900    /* Headings, primary text */
text-neutral-600    /* Secondary text */
text-neutral-500    /* Tertiary text, captions */
text-neutral-400    /* Dates, metadata (mono font) */

/* Borders & Dividers */
border-neutral-100  /* Subtle dividers only */
```

### Usage Rules
✅ **DO:**
- Use indigo (#4338ca) for all interactive elements
- Use neutral-900 for all headings
- Keep backgrounds pure white
- Use neutral-100 for borders (single pixel, minimal)

❌ **DON'T:**
- Use colors other than indigo/neutral palette
- Add background colors to sections
- Use shadows or gradients
- Use rounded corners (except profile photo)

---

## 2. Typography

### Fonts
```css
/* Primary Sans */
Font Family: 'Inter'
Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
Use: Body text, headings, UI elements

/* Secondary Mono */
Font Family: 'JetBrains Mono'
Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
Use: Dates, metadata, time periods, code snippets
```

### Heading Scale
```css
/* Hero/H1 */
text-5xl md:text-6xl         /* 48px/60px → 60px/72px */
font-bold                     /* 700 weight */
tracking-tight                /* -0.02em */

/* Section Headings/H2 */
text-3xl md:text-4xl         /* 30px/36px → 36px/40px */
font-bold                     /* 700 weight */

/* Subsections/H3 */
text-xl                       /* 20px/28px */
font-semibold                 /* 600 weight */

/* Body Text */
text-base                     /* 16px/24px */
font-normal                   /* 400 weight */
```

### Typography Rules
✅ **DO:**
- Use Inter for all body text and headings
- Use JetBrains Mono for dates, metadata, time periods
- Apply `tracking-tight` to headings
- Keep line-height relaxed (1.6-1.75 for body)

❌ **DON'T:**
- Mix other font families
- Use all-caps except for mono metadata
- Use italic except in specific prose contexts
- Use font weights outside the defined scale

---

## 3. Layout & Spacing

### Container
```css
/* Global Container */
max-w-4xl              /* 896px max width */
mx-auto                /* Center horizontally */
px-6 md:px-8          /* Responsive horizontal padding */
```

### Vertical Rhythm
```css
/* Between Sections */
py-16 md:py-24        /* Hero/Identity: 64px/96px */
py-12 md:py-16        /* Content sections: 48px/64px */

/* Within Components */
mb-12                  /* Section title to content */
space-y-8             /* Between list items */
gap-8 md:gap-16       /* Between columns */
```

### Layout Rules
✅ **DO:**
- Keep all content within max-w-4xl
- Use consistent vertical spacing
- Maintain generous whitespace
- Align all text left (except footer which can be centered on mobile)

❌ **DON'T:**
- Use full-width sections
- Add side borders or containers
- Create multi-column layouts (except Identity's 2-col)
- Use asymmetric padding

---

## 4. Components

### Logo/Wordmark
```
Text: "SG."
Size: text-lg (18px)
Weight: font-semibold (600)
Color: text-neutral-900
Hover: text-indigo-600
```

### Hero/Identity
```css
Layout: 2-column (text left, photo right)
Name: text-5xl md:text-6xl, font-bold
Subtitle: text-xl md:text-2xl, text-neutral-600
Photo: w-48 h-48 md:w-64 h-64, rounded-full, ring-1 ring-neutral-200
```

### Navigation
```css
Position: Static (not sticky)
Links: text-sm, text-neutral-600
Hover: text-neutral-900
```

### Links
```css
/* Standard */
Color: text-neutral-600
Hover: text-neutral-900
Transition: transition-colors

/* Primary CTA */
Color: text-indigo-600
Hover: text-indigo-700
Underline: hover:underline
```

### Blog Cards
```css
Padding: py-6
Border: border-b border-neutral-100 last:border-0
Hover: No background change
Title: text-xl font-semibold, group-hover:text-indigo-600
Date: text-sm font-mono text-neutral-400
```

---

## 5. Interaction & Motion

### Hover States
```css
/* All Links */
transition-colors     /* Smooth color transitions */
duration: 150-200ms   /* Fast, imperceptible */

/* No animations on: */
- Page load
- Scroll
- Section reveals
```

### Motion Rules
✅ **DO:**
- Use subtle color transitions on hover
- Keep transitions fast (150-200ms)
- Apply consistent easing

❌ **DON'T:**
- Use scroll animations or parallax
- Add entrance/exit animations
- Use transform effects (except minimal hover states)

---

## 6. Voice & Tone

### Writing Style
- **Direct**: No marketing jargon
- **Technical**: Use industry terminology appropriately
- **Concise**: Short sentences, clear points
- **Professional**: Confident but not arrogant

### Section Naming
```
✅ Use: "Experience", "Writing", "Work"
❌ Avoid: "My Journey", "Blog Posts", "Case Studies"
```

---

## 7. SEO & Metadata

### Page Titles
```
Format: "Sudhanshu Giri | [Page Context]"
Example: "Sudhanshu Giri | Program Product Leader & Enterprise AI Strategist"
```

### Meta Description
- Include full name
- Mention current role + companies
- Keep under 160 characters

---

## 8. Icon/Favicon

### Design
- Letters "SG" in indigo (#4338ca)
- White background
- No padding/margins
- Bold, clean typography
- Square format (512x512px minimum)

---

## Implementation Checklist

### Global
- [x] Pure white background throughout
- [x] No background grids or patterns
- [x] No vertical border containers
- [x] Consistent max-w-4xl container

### Typography
- [x] Inter for body/headings
- [x] JetBrains Mono for dates/metadata
- [x] Consistent heading sizes

### Colors
- [ ] **ISSUE**: Mixed use of `#4338ca` and `indigo-600`
  - Should standardize to one approach
  
### Spacing
- [x] Consistent section padding
- [x] Proper vertical rhythm

### Components
- [x] Logo as "SG."
- [x] Clean header/footer
- [x] Minimal blog cards

---

## Found Inconsistencies

### 🔴 Color Usage
**Issue**: Mixing hex `#4338ca` and Tailwind `indigo-600`
**Files affected**:
- Writing.tsx uses `indigo-600`
- Header.tsx uses `indigo-600`
- Other components use `#4338ca`

**Recommendation**: Standardize to Tailwind's `indigo-600` throughout for consistency with Tailwind's utility-first approach.

### 🟡 Container Widths (Not Critical - Old Files)
Some unused/old components still have `max-w-5xl`
**Files**: ProfessionalTrack, Philosophy, Hero (old)
**Note**: These are not used in the current site

---

## Recommended Fix

Should we standardize the indigo color to use Tailwind's `indigo-600` class instead of hex `#4338ca`? This would:
1. Make the codebase more consistent
2. Leverage Tailwind's color system
3. Make future theming easier

Would you like me to make this change?
