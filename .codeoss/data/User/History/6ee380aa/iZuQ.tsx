import React, { useState, useEffect, useId } from 'react';
import { TESTIMONIALS, BLOG_POSTS as FALLBACK_POSTS, SOCIAL_LINKS } from '../constants';
import { BlogPost } from '../types';

const SocialProof: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>(FALLBACK_POSTS);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            // Define social links with SVG icons directly in the component
            const SOCIAL_LINKS = [
                {
                    label: 'Substack',
                    href: 'https://theintegrativepractitioner.substack.com/',
                    icon: (
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                            <path d="M22.539 5.242H1.46V1.82h21.08v3.422zM1.46 22.18h21.08v-3.422H1.46v3.422zm0-6.843h21.08v-3.422H1.46v3.422z"/>
                        </svg>
                    ),
                    colorClass: 'text-[#FF652F]'
                },
                {
                    label: 'Instagram',
                    href: 'https://www.instagram.com/theintegrativepractitioner/',
                    icon: (
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.338.936 2.126 1.384c.765.297 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.717 2.126-1.384s.936-1.338 1.384-2.126c.297-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.65.936 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.859 0-3.211.016-3.586.061-4.859.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.38.419-.419.81-.689 1.379-.898.42-.165 1.065-.36 2.235-.421.99-.045 1.25-.06 3.18-.06h.001zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                        </svg>
                    ),
                    colorClass: 'text-[#E1306C]'
                },
                {
                    label: 'Threads',
                    href: 'https://www.threads.net/@theintegrativepractitioner',
                    icon: (
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                            <path d="M14.58.001H9.42c-2.4 0-4.68 1.2-6.06 3.18-1.32 1.92-1.56 4.38-.66 6.66.96 2.28 2.94 4.02 5.4 4.62v5.34c0 1.2.78 2.22 1.92 2.52.18.06.36.06.54.06s.36 0 .54-.06c1.14-.3 1.92-1.32 1.92-2.52v-5.34c2.46-.6 4.44-2.34 5.4-4.62.9-2.28.66-4.74-.66-6.66C19.26 1.201 16.98.001 14.58.001zm3.66 9.48c-.78 1.92-2.46 3.36-4.5 3.9v.06c.06.06.06.12.06.18 0 .6-.48 1.08-1.08 1.08s-1.08-.48-1.08-1.08c0-.06.06-.12.06-.18v-.06c-2.04-.54-3.72-1.98-4.5-3.9-.72-1.8-.48-3.9.6-5.46C8.76 2.401 10.5.961 12.42.961c1.92 0 3.66 1.44 4.62 3.06.96 1.56 1.2 3.66.48 5.46z"/>
                        </svg>
                    ),
                    colorClass: 'text-black dark:text-white'
                },
                {
                    label: 'YouTube',
                    href: 'https://www.youtube.com/@theintegrativepractitioner',
                    icon: (
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    ),
                    colorClass: 'text-[#FF0000]'
                },
                {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/theintegrativepractitioner',
                    icon: (
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    ),
                    colorClass: 'text-[#1877F2]'
                },
            ];

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
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className={`mr-2 ${link.colorClass}`}>{link.icon}</span>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{link.label}</span>
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