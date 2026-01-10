import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, date, excerpt, category, tags, content, slug, password, coverImage, impact } = body;

        // Simple security check
        const ADMIN_PIN = process.env.ADMIN_PIN || 'admin123';
        if (password !== ADMIN_PIN) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const postsDirectory = path.join(process.cwd(), 'content/blog');

        // Ensure directory exists
        if (!fs.existsSync(postsDirectory)) {
            fs.mkdirSync(postsDirectory, { recursive: true });
        }

        // Generate slug if not provided
        const postSlug = slug || title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        const filePath = path.join(postsDirectory, `${postSlug}.mdx`);

        // escape double quotes for frontmatter
        const escape = (str: string) => str.replace(/"/g, '\\"');

        // Prepare MDX content
        const mdxContent = `---
title: "${escape(title)}"
date: "${date}"
excerpt: "${escape(excerpt)}"
coverImage: "${escape(coverImage || '')}"
category: "${category}"
tags: ${JSON.stringify(tags || [])}
impact: ${JSON.stringify(impact || [])}
featured: true
---

${content}`;

        fs.writeFileSync(filePath, mdxContent, 'utf8');

        return NextResponse.json({ success: true, slug: postSlug });
    } catch (error: any) {
        console.error('Admin API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
