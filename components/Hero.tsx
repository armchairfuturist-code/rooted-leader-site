import React from 'react';

const Hero: React.FC = () => {
    return (
        <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=2560"
                    alt="Serene mountain lake landscape with clear reflections and deep perspective"
                    className="w-full h-full object-cover"
                />
                {/* Overlay - Darker gradient for readability without blur */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                        <span className="material-icons-outlined text-white/90 text-sm">verified</span>
                        <span className="text-xs md:text-sm font-medium text-white/90 uppercase tracking-wider">
                            Advanced Nervous System Regulation
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                        Beyond Surface Solutions: <br />
                        <span className="text-blue-100 italic">Reclaim Your Wholeness.</span><br />
                        <span className="text-emerald-100 italic">Integrate Your Power.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="font-body text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
                        A neuroscience & polyvagal-informed approach to healing complex trauma and burnout for high-functioning leaders. Move beyond conventional approaches and cultivate sustainable resilience.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                        <a
                            href="https://nervous-system-quiz-391148693749.us-west1.run.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-primary hover:bg-blue-500 text-white text-lg px-10 py-4 rounded-md font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center tracking-wide"
                        >
                            Assess Your Nervous System
                            <span className="material-icons-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a
                            href="#services"
                            className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-10 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
                        >
                            View Integration Paths
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-80 cursor-pointer">
                <span className="material-icons-outlined text-white text-3xl md:text-4xl">expand_more</span>
            </div>
        </header>
    );
};

export default Hero;