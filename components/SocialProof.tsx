import React, { useState, useEffect, useId } from 'react';
import { TESTIMONIALS, BLOG_POSTS as FALLBACK_POSTS, SOCIAL_LINKS } from '../constants';
import { BlogPost } from '../types';

const SocialProof: React.FC = () => {
    return (
        <section id="testimonials" className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=2560"
                    alt="Peaceful blue mountain ranges in the morning mist"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="font-display text-4xl underline decoration-primary/30 md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                    Real Results: Hear What Clients Are Saying
                </h2>
                <p className="text-sm md:text-base text-slate-300 uppercase tracking-[0.2em] font-medium opacity-80">
                    Leaders, Founders & Seekers who have transformed their experience
                </p>
            </div>

            <div className="relative z-10 w-full">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {/* First copy of testimonials */}
                    <div className="flex gap-8 mx-4">
                        {TESTIMONIALS.map((t, index) => (
                            <TestimonialCard key={`original-${index}`} testimonial={t} />
                        ))}
                    </div>
                    {/* Second copy for seamless loop */}
                    <div className="flex gap-8 mx-4">
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
        className="flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl relative group transition-all duration-300 hover:bg-white/15"
    >
        <span className="material-icons-outlined text-white/10 text-8xl absolute top-4 left-4">format_quote</span>
        <div className="relative z-10">
            <p className="text-lg md:text-xl text-slate-100 italic mb-10 leading-relaxed min-h-[140px] drop-shadow-sm font-light">
                "{testimonial.quote}"
            </p>
            <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                <div>
                    <p className="font-bold text-white text-base">— {testimonial.author}</p>
                    <p className="text-xs text-blue-200 mt-1 uppercase tracking-widest font-medium">{testimonial.role}</p>
                </div>
                <div className="text-white/20">
                    <span className="material-icons-outlined text-3xl">verified</span>
                </div>
            </div>
        </div>
    </div>
);

export default SocialProof;