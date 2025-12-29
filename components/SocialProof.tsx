import React, { useState, useEffect, useId } from 'react';
import { TESTIMONIALS, BLOG_POSTS as FALLBACK_POSTS, SOCIAL_LINKS } from '../constants';
import { BlogPost } from '../types';

const SocialProof: React.FC = () => {
    // Helper component for rendering social media SVG icons
    const SocialIcon: React.FC<{ platform: string; className?: string }> = ({ platform, className = "w-5 h-5" }) => {
        switch (platform.toLowerCase()) {
            case 'instagram':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.936 20.644.523 19.854.217c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227a3.495 3.495 0 0 1-.896 1.382c-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.06-1.805-.249-2.227-.413a3.495 3.495 0 0 1-1.382-.896c-.419-.42-.679-.82-1.381-.896-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.175 8.797 2.16 12 2.16zm0 3.24c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.44-.645 1.44-1.441s-.645-1.44-1.44-1.44z" />
                    </svg>
                );
            case 'threads':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Threads</title>
                        <path d="M14.58.001H9.42c-2.4 0-4.68.95-6.36 2.64C1.37 4.32.42 6.6.42 9v6c0 2.4.95 4.68 2.64 6.36 1.68 1.69 3.96 2.64 6.36 2.64h5.16c2.4 0 4.68-.95 6.36-2.64 1.69-1.68 2.64-3.96 2.64-6.36V9c0-2.4-.95-4.68-2.64-6.36C19.26.951 16.98.001 14.58.001ZM21.58 15c0 1.8-.71 3.51-1.98 4.79-1.27 1.27-2.98 1.98-4.79 1.98H9.42c-1.8 0-3.51-.71-4.79-1.98C3.36 18.51 2.65 16.8 2.65 15V9c0-1.8.71-3.51 1.98-4.79C5.91 2.94 7.62 2.23 9.42 2.23h5.16c1.8 0 3.51.71 4.79 1.98 1.27 1.28 1.98 2.99 1.98 4.79v6Z M9.75 12c0-1.24.5-2.4 1.32-3.25.82-.85 1.93-1.33 3.18-1.33 1.25 0 2.36.48 3.18 1.33.82.85 1.32 2.01 1.32 3.25 0 1.25-.5 2.4-1.32 3.25-.82.85-1.93 1.33-3.18 1.33-1.25 0-2.36-.48-3.18-1.33C10.25 14.4 9.75 13.25 9.75 12Zm2.23 0c0 .53.21 1.02.58 1.39.37.37.86.58 1.39.58.53 0 1.02-.21 1.39-.58.37-.37.58-.86.58-1.39 0-.53-.21-1.02-.58-1.39-.37-.37-.86-.58-1.39-.58-.53 0-1.02.21-1.39.58-.37.37-.58.86-.58 1.39Z" />
                    </svg>
                );
            case 'facebook':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Facebook</title>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                );
            case 'youtube':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>YouTube</title>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                );
            case 'spotify':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Spotify</title>
                        <path d="M12 0C5.378 0 0 5.378 0 12s5.378 12 12 12 12-5.378 12-12S18.622 0 12 0zm5.503 17.306c-.22.36-.677.472-1.037.253-2.846-1.74-6.427-2.13-10.647-1.168-.413.094-.827-.164-.92-.577-.094-.413.164-.827.577-.92 4.62-1.057 8.57-.613 11.774 1.348.36.22.472.677.253 1.037zm1.468-3.258c-.277.45-.86.593-1.31.316-3.257-2-8.216-2.58-12.064-1.41-.51.155-1.04-.142-1.196-.65-.155-.51.142-1.04.65-1.196 4.398-1.332 9.87-.67 13.605 1.63.45.277.593.86.316 1.31zm.13-3.393c-3.906-2.32-10.345-2.535-14.11-.14-.6.38-1.38.18-1.76-.42-.38-.6-.18-1.38.42-1.76 4.32-2.62 11.45-2.36 15.93.3.61.36.81 1.15.45 1.76-.36.61-1.15.81-1.76.45z" />
                    </svg>
                );
            case 'podbean':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Podbean</title>
                        <path d="M12.015 0C5.38 0 0 5.38 0 12.015S5.38 24.03 12.015 24.03s12.03-5.395 12.03-12.015S18.65 0 12.015 0zm6.55 12.015a6.55 6.55 0 11-13.1 0 6.55 6.55 0 0113.1 0z" />
                        <path d="M12.015 8.165a3.85 3.85 0 100 7.7 3.85 3.85 0 000-7.7z" />
                    </svg>
                );
            case 'buzzsprout':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Buzzsprout</title>
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                );
            case 'substack':
                return (
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
                        <title>Substack</title>
                        <path d="M22.539 5.269H1.46V1.47h21.08v3.799zm0 17.26H1.46v-3.798h21.08v3.798zM1.46 9.067v5.865h21.08V9.067H1.46Z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
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
    );
};

export default SocialProof;