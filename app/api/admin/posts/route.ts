import { NextResponse } from 'next/server';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const password = searchParams.get('password');

        // Simple security check
        const ADMIN_PIN = process.env.ADMIN_PIN || 'admin123';
        if (password !== ADMIN_PIN) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const slug = searchParams.get('slug');

        if (slug) {
            const post = getPostBySlug(slug);
            return NextResponse.json(post);
        }

        const posts = getAllPosts();
        return NextResponse.json(posts);
    } catch (error: any) {
        console.error('Admin API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
