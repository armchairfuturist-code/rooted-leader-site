import React from 'react';

const Methodology: React.FC = () => {
    return (
        <>
            {/* The Integrative Pathway Section */}
            <section id="pathway" className="py-20 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            The Integrative Pathway to Transformation
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            While many approaches address only symptoms or focus solely on mental patterns, this integrative method creates transformation by simultaneously working with your nervous system, thought patterns, emotional landscape, energy field, and deeper sense of purpose.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "bolt",
                                title: "Nervous System Regulation",
                                desc: "Science-based techniques to reset your nervous system's baseline, releasing stored stress and creating capacity for resilience and clarity."
                            },
                            {
                                icon: "search",
                                title: "Somatic Experiencing™ Practices",
                                desc: "Address the underlying patterns behind stress and burnout with compassionate, trauma-informed practices that create lasting neurological change."
                            },
                            {
                                icon: "self_improvement",
                                title: "Authentic Self-Embodiment",
                                desc: "Reconnect with your deeper wisdom and purpose through practices that foster wholeness, intuitive leadership, and aligned action."
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg transition bg-surface-light dark:bg-surface-dark">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                                    <span className="material-icons-outlined text-primary">{card.icon}</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">{card.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-surface-light dark:bg-surface-dark/30 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-xl transition-colors duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 lg:p-16 flex flex-col justify-center">
                                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-primary text-xs font-bold px-3 py-1 rounded-full mb-6 w-max">
                                    How It Works
                                </span>
                                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    The Integrative Coaching Program
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8">
                                    This isn't just another coaching program. It's a carefully crafted journey that addresses the echoes of nervous system dysfunction by working with your nervous system's natural capacity for healing while integrating mind, body, spirit, and energy.
                                </p>
                                
                                <div className="space-y-6">
                                    {[
                                        { icon: "psychology", title: "Cutting-Edge Neuroscience", desc: "Evidence-based nervous system retraining and vagus nerve techniques that create lasting neurological change." },
                                        { icon: "favorite", title: "Trauma-Informed Healing", desc: "Integrate multiple trauma modalities to release stored patterns and create safety for deep transformation." },
                                        { icon: "history_edu", title: "Ancestral Wisdom Integration", desc: "Bridging ancient shamanic practices with modern approaches for whole-person healing and authentic embodiment." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary">
                                                    <span className="material-icons-outlined">{item.icon}</span>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <a href="#apply" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-600 transition">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                            
                            <div 
                                className="min-h-[400px] lg:min-h-full bg-cover bg-center bg-fixed"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094206239-2026a02490e2?auto=format&fit=crop&q=80&w=1200')" }}
                                role="img"
                                aria-label="A person walking on a path that splits in a mountainous area, symbolizing the choice of a new path."
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Methodology;