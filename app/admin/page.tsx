"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Save, AlertCircle, CheckCircle2, Edit3, Plus, Trash2, Layout, FileText, ExternalLink } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentSlug, setCurrentSlug] = useState('');

    const [formData, setFormData] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0],
        excerpt: '',
        category: 'Leadership',
        coverImage: '',
        tags: '',
        impact: '',
        content: ''
    });

    const fetchPosts = useCallback(async () => {
        try {
            const res = await fetch(`/api/admin/posts?password=${password}`);
            if (res.ok) {
                const data = await res.json();
                setPosts(data);
            }
        } catch (err) {
            console.error('Failed to fetch posts');
        }
    }, [password]);

    useEffect(() => {
        if (isLoggedIn) {
            fetchPosts();
        }
    }, [isLoggedIn, fetchPosts]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || 'admin123';
        if (password === ADMIN_PIN) {
            setIsLoggedIn(true);
            setStatus({ type: null, message: '' });
        } else {
            setStatus({ type: 'error', message: 'Invalid PIN' });
        }
    };

    const handleEdit = async (slug: string) => {
        setLoading(true);
        setStatus({ type: null, message: '' });
        try {
            const res = await fetch(`/api/admin/posts?password=${password}&slug=${slug}`);
            if (res.ok) {
                const data = await res.json();
                setFormData({
                    title: data.metadata.title,
                    date: data.metadata.date,
                    excerpt: data.metadata.excerpt,
                    category: data.metadata.category,
                    coverImage: data.metadata.coverImage || '',
                    tags: data.metadata.tags.join(', '),
                    impact: data.metadata.impact?.join('\n') || '',
                    content: data.content
                });
                setIsEditing(true);
                setCurrentSlug(slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Failed to load article for editing' });
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            date: new Date().toISOString().split('T')[0],
            excerpt: '',
            category: 'Leadership',
            coverImage: '',
            tags: '',
            impact: '',
            content: ''
        });
        setIsEditing(false);
        setCurrentSlug('');
        setStatus({ type: null, message: '' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const res = await fetch('/api/admin/publish', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
                    impact: formData.impact.split('\n').map(p => p.trim()).filter(p => p),
                    password,
                    slug: currentSlug || undefined
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: isEditing ? `Article updated successfully!` : `Article published successfully!`
                });
                if (!isEditing) {
                    resetForm();
                }
                fetchPosts();
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to save' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'An error occurred. Make sure your local server is running.' });
        } finally {
            setLoading(false);
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center py-24">
                    <div className="w-full max-w-md p-10 rounded-[2.5rem] border border-neutral-100 bg-white shadow-2xl blueprint-card">
                        <div className="flex justify-center mb-8 text-brand-primary">
                            <Layout size={64} strokeWidth={2.5} />
                        </div>
                        <h1 className="text-3xl font-black mb-8 text-center text-neutral-900 tracking-tight">System Access</h1>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric ml-1">Authentication Key</label>
                                <input
                                    type="password"
                                    placeholder="Enter Access PIN"
                                    className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-bold tracking-widest text-center"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="w-full py-5 bg-brand-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 mono-metric">
                                Authorize
                            </button>
                            {status.type === 'error' && (
                                <p className="text-rose-600 text-center text-xs font-black uppercase tracking-widest mono-metric">{status.message}</p>
                            )}
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">{isEditing ? 'Edit Production Article' : 'Draft New Insight'}</h1>
                            <p className="text-neutral-500 mt-2 font-medium">Managing the production log and insights library.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            {isEditing && (
                                <button
                                    onClick={resetForm}
                                    className="px-6 py-2.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-[10px] font-black uppercase tracking-widest transition-all mono-metric"
                                >
                                    Discard Edit
                                </button>
                            )}
                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-rose-600 bg-neutral-50 px-6 py-2.5 rounded-full border border-neutral-100 transition-all mono-metric"
                            >
                                Terminate Session
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Manager Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm blueprint-card">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-8 flex items-center gap-3 mono-metric">
                                    <FileText size={16} /> Production Library
                                </h2>

                                <div className="flex flex-col gap-8">
                                    <button
                                        onClick={resetForm}
                                        className="w-full py-4 bg-brand-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 mono-metric"
                                    >
                                        <Plus size={16} /> Draft Insight
                                    </button>

                                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                        {posts.length === 0 ? (
                                            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 text-center py-12 italic mono-metric">Library Empty</p>
                                        ) : (
                                            posts.map((post) => (
                                                <div
                                                    key={post.slug}
                                                    className={`p-5 rounded-2xl border transition-all group ${currentSlug === post.slug ? 'border-brand-primary bg-brand-primary/5' : 'border-neutral-100 hover:border-brand-primary/30 hover:shadow-md'}`}
                                                >
                                                    <h3 className="font-bold text-sm leading-tight mb-2 line-clamp-2 text-neutral-900">{post.title}</h3>
                                                    <div className="text-[10px] text-neutral-400 uppercase font-black tracking-widest mb-4 mono-metric">
                                                        {formatDate(post.date)} • {post.category}
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <button
                                                            onClick={() => handleEdit(post.slug)}
                                                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary hover:text-brand-primary/80 mono-metric"
                                                        >
                                                            <Edit3 size={14} /> Open Edit
                                                        </button>
                                                        <Link
                                                            href={`/blog/${post.slug}`}
                                                            target="_blank"
                                                            className="text-neutral-300 hover:text-neutral-500 transition-colors"
                                                        >
                                                            <ExternalLink size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Editor Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-10 p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Headline Title</label>
                                        <input
                                            type="text"
                                            placeholder="The Future of Product..."
                                            className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-bold text-neutral-900"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Cover Meta Assets (URL)</label>
                                        <input
                                            type="text"
                                            placeholder="https://example.com/image.jpg"
                                            className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-medium"
                                            value={formData.coverImage}
                                            onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Log Date</label>
                                        <input
                                            type="date"
                                            className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-bold"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Classification</label>
                                        <select
                                            className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none appearance-none cursor-pointer transition-all font-bold"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option>Leadership</option>
                                            <option>Strategy</option>
                                            <option>Agile</option>
                                            <option>Technical</option>
                                            <option>Management</option>
                                            <option>Case Study</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Tag Markers (comma separated)</label>
                                    <input
                                        type="text"
                                        placeholder="product, growth, team"
                                        className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all font-bold tracking-tight"
                                        value={formData.tags}
                                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mono-metric">ROI Success Points (One Per Line - Case Study Only)</label>
                                    <textarea
                                        placeholder="Strategic leadership...&#10;Reduced churn by 20%...&#10;Scaled to 1M users..."
                                        rows={3}
                                        className="w-full p-6 rounded-[2rem] border border-neutral-100 bg-brand-primary/5 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none font-bold text-neutral-800 leading-relaxed"
                                        value={formData.impact}
                                        onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Brief Summary / Excerpt</label>
                                    <textarea
                                        placeholder="A high-impact summary for the homepage index..."
                                        rows={2}
                                        className="w-full p-4 rounded-2xl border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none resize-none transition-all font-medium leading-relaxed"
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mono-metric">Primary Content (Markdown)</label>
                                        <span className="text-[8px] text-neutral-400 uppercase font-black tracking-widest bg-neutral-50 border border-neutral-100 px-3 py-1 rounded-full mono-metric">Logic Mode</span>
                                    </div>
                                    <textarea
                                        placeholder="Write your article content here... Use ## for headers."
                                        rows={20}
                                        className="w-full p-8 rounded-[2.5rem] border border-neutral-100 bg-neutral-50 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none font-mono text-sm leading-relaxed transition-all"
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col items-center gap-8 pt-10 border-t border-neutral-100">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full md:w-auto px-20 py-5 bg-brand-primary text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-brand-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100 shadow-xl shadow-brand-primary/20 mono-metric"
                                    >
                                        {loading ? 'Processing...' : (
                                            <>
                                                <Save size={18} className="mr-3" />
                                                {isEditing ? 'Sync Changes' : 'Execute Publish'}
                                            </>
                                        )}
                                    </button>

                                    {status.type && (
                                        <div className={`p-6 rounded-[2rem] text-xs font-black uppercase tracking-widest mono-metric animate-in fade-in slide-in-from-bottom-2 duration-300 ${status.type === 'success' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                                            {status.message}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
