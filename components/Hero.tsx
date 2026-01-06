import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="relative pt-16 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                            <span className="material-icons-outlined text-primary text-xs">verified</span>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                Advanced Nervous System Regulation & Somatic Trauma Integration
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                            Beyond Surface Solutions: <br />
                            <span className="text-primary">Reclaim Your Wholeness.</span><br />
                            <span className="text-primary">Integrate Your Power.</span>
                        </h1>

                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                            A neuroscience & polyvagal-informed approach to healing complex trauma and burnout for high-functioning leaders, founders, visionaries, and seekers. Move beyond conventional approaches and cultivate sustainable resilience from the inside out.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://nervous-system-quiz-391148693749.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                                <span className="material-icons-outlined mr-3 text-2xl">quiz</span> Assess Your Nervous System Baseline
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl blur-xl opacity-70"></div>
                        <img
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
                            alt="A large tree in a forest with its roots visible and sunlight filtering through the branches, symbolizing root healing."
                            className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
                        />
                        <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-xs font-medium text-slate-600 dark:text-slate-300">
                            Tens of thousands of leaders empowered
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Hero;