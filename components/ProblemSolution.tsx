import React from 'react';

const ProblemSolution: React.FC = () => {
    return (
        <section className="py-20 bg-surface-light dark:bg-surface-dark/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Beyond Surface Solutions: Healing at the Root
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem Column */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30 transition-colors duration-300">
                        <h3 className="font-display text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                            Where You Are Now...
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Emotional exhaustion and burnout that conventional approaches haven't resolved.",
                                "Decision-making clouded by mental fog and overwhelm.",
                                "Feeling disconnected from your purpose and authentic self.",
                                "Carrying the invisible weight of leadership expectations."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="material-icons-outlined text-secondary mr-3 mt-1">cancel</span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solution Column */}
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30 transition-colors duration-300">
                        <h3 className="font-display text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                            Where You Want To Be...
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Experiencing lasting inner peace regardless of external circumstances.",
                                "Leading with clarity, emotional resilience, and authentic power.",
                                "Accessing your intuitive wisdom with confidence and ease.",
                                "Embodying your truest self and most aligned purpose."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="material-icons-outlined text-primary mr-3 mt-1">check_circle</span>
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProblemSolution;