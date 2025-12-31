import React, { useState, useEffect, useId } from 'react';
import { TESTIMONIALS, BLOG_POSTS as FALLBACK_POSTS, SOCIAL_LINKS } from '../constants';
import { BlogPost } from '../types';

const SocialProof: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white dark:bg-background-dark transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Real Results: Hear What Clients Are Saying
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Leaders, Founders & Seekers who have transformed their experience
                </p>
            </div>

            <div className="relative w-full">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* First copy of testimonials */}
                    <div className="flex gap-6 mx-3">
                        {TESTIMONIALS.map((t, index) => (
                            <TestimonialCard key={`original-${index}`} testimonial={t} />
                        ))}
                    </div>
                    {/* Second copy for seamless loop */}
                    <div className="flex gap-6 mx-3">
                        {TESTIMONIALS.map((t, index) => (
                            <TestimonialCard key={`duplicate-${index}`} testimonial={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => (
    <div
        className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] p-8 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm relative group hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
    >
        <span className="material-icons-outlined text-blue-100 dark:text-blue-900/30 text-6xl absolute top-6 left-6">format_quote</span>
        <div className="relative z-10 pt-10">
            <p className="text-base text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed min-h-[120px]">
                "{testimonial.quote}"
            </p>
            <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                <p className="font-bold text-slate-900 dark:text-white text-sm">— {testimonial.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 italic">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

export default SocialProof;