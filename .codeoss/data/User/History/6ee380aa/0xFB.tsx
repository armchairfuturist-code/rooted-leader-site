import React, { useState, useEffect, useId } from 'react';
import { TESTIMONIALS, BLOG_POSTS as FALLBACK_POSTS, SOCIAL_LINKS } from '../constants';
import { BlogPost } from '../types';

const SocialProof: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {

            setIsLoading(true);
            try {
                // Using rss2json service to convert RSS to JSON and avoid CORS issues
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://theintegrativepractitioner.substack.com/feed');
                const data = await response.json();
                
                if (data.status === 'ok' && data.items) {
                    const newPosts: BlogPost[] = data.items.slice(0, 3).map((item: any) => {
                        // Attempt to extract image from enclosure (standard for podcasts/some blogs) or content
                        let imageUrl = item.enclosure?.link;
                        
                        // If no enclosure, look for first image in content
                        if (!imageUrl && item.content) {
                            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
                            if (imgMatch) {
                                imageUrl = imgMatch[1];
                            }
                        }

                        // Fallback if no image found in feed
                        if (!imageUrl) {
                            imageUrl = 'https://images.unsplash.com/photo-1499750310159-5b5f09692a6a?auto=format&fit=crop&q=80&w=800';
                        }

                        // Create excerpt from description/content
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = item.description || item.content;
                        const text = tempDiv.textContent || tempDiv.innerText || '';
                        // Clean up newlines and excessive spaces
                        const cleanText = text.replace(/\s+/g, ' ').trim();
                        const excerpt = cleanText.length > 120 ? cleanText.substring(0, 120) + '...' : cleanText;

                        // Format date
                        const dateObj = new Date(item.pubDate.replace(/-/g, '/')); // Fix for safari sometimes
                        const dateStr = !isNaN(dateObj.getTime()) 
                            ? dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                            : 'Recent';

                        return {
                            category: item.categories && item.categories.length > 0 ? item.categories[0] : "Insight",
                            title: item.title,
                            excerpt: excerpt,
                            date: dateStr,
                            readTime: "5 min read", // Estimate or placeholder
                            imageUrl: imageUrl,
                            link: item.link
                        };
                    });
                    
                    if (newPosts.length > 0) {
                        setPosts(newPosts);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
                // Silently fail to fallback
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Real Results: Hear What Clients Are Saying
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Leaders, Founders & Seekers who have transformed their experience
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.author} className="p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm relative group hover:shadow-md transition">
                                <span className="material-icons-outlined text-blue-100 dark:text-blue-900/30 text-5xl absolute top-4 left-4">format_quote</span>
                                <div className="relative z-10 pt-8">
                                    <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6">"{t.quote}"</p>
                                    <div className="text-right">
                                        <p className="font-bold text-slate-900 dark:text-white text-sm">- {t.author}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Insights */}
            <section className="py-20 bg-surface-accent-light dark:bg-surface-dark/40 border-t border-b border-blue-100 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">Latest Insights</h2>
                            <p className="text-slate-600 dark:text-slate-400">Fresh perspectives from The Integrative Practitioner on Substack</p>
                        </div>
                        <a href="https://theintegrativepractitioner.substack.com/" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center text-primary font-medium hover:text-blue-700 transition">
                            View all posts <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, idx) => (
                                <div key={idx} className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm animate-pulse">
                                    <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="p-6">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
                                        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            posts.map((post) => (
                            <a key={post.link} href={post.link} target="_blank" rel="noopener noreferrer" className="group block bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
                                <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1499750310159-5b5f09692a6a?auto=format&fit=crop&q=80&w=800';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mt-2 mb-3 group-hover:text-primary transition line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 flex items-center text-xs text-slate-500 dark:text-slate-500">
                                        <span className="material-icons-outlined text-sm mr-1">schedule</span> {post.date} • {post.readTime}
                                    </div>
                                </div>
                            </a>
                        ))}
                        ))
                        )}
                    </div>
                    
                    <div className="mt-8 text-center sm:hidden">
                        <a href="https://theintegrativepractitioner.substack.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition">
                            View all posts <span className="material-icons-outlined ml-1 text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Learn & Connect */}
            <section className="py-20 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">Learn & Connect</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8">Follow Shannon's work and insights on your favorite platforms.</p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.href}
                                href={link.href}
                                className="flex items-center px-4 py-2 bg-slate-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                            >
                                <span className={`text-lg mr-2 font-bold ${link.colorClass}`}>{link.iconText}</span> 
                                <span className="text-sm font-medium">{link.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="relative">
                        <button className="w-full max-w-lg mx-auto flex items-center justify-between px-6 py-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="flex items-center">
                                <span className="material-icons-outlined text-slate-400 mr-3">mic</span>
                                <span className="font-medium text-slate-700 dark:text-slate-200">Featured Podcasts</span>
                            </div>
                            <span className="material-icons-outlined text-slate-400">expand_more</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SocialProof;