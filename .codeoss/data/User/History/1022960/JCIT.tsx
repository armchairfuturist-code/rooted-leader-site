import React from 'react';

const About: React.FC = () => {
    return (
        <>
            {/* Main Bio Section */}
            <section id="about" className="py-20 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        {/* Image Column */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-24">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                                    <img 
                                        src="/shan.jpg
                                    " 
                                        alt="Shannon Myers" 
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply"></div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-blue-100 dark:border-blue-900/30 rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="lg:col-span-7">
                            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold px-2 py-1 rounded mb-4">
                                Internationally Acclaimed Expert
                            </span>
                            <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-2">Shannon Myers, MS, SEP</h2>
                            <h3 className="text-lg text-slate-500 dark:text-slate-400 italic mb-8">
                                Guiding Individuals from Trauma to Transformation since 2012
                            </h3>
                            
                            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-4">
                                <p>It is a crisis no one names. We look rich on paper, yet we have never been poorer in spirit. We are living in a time of record lows in satisfaction and record highs in despair, and the body is keeping score.</p>
                                <p>You checked the boxes. You built the career. You hit the goals society handed you. Yet you are exhausted, anxious, and disconnected—a stranger in your own body, despite doing everything right.</p>
                                <p className="font-semibold text-slate-800 dark:text-slate-200">I know this feeling. I lived it.</p>
                                <p>For years, I climbed the ladder while I collected diagnoses. Complex trauma. Autoimmune disease. Chronic pain. My body was failing while my resume was succeeding. Conventional medicine offered me management—a way to cope with a broken machine.</p>
                                <p>Then, the lights went out. A near-death experience stopped everything.</p>
                                <p>In the silence between lives, I saw the truth. We are not broken. The operating system we have been running is. Real healing wasn’t about managing symptoms. It was about rewriting the code. I had to bridge modern neuroscience with something older, something human.</p>
                                <p>I didn’t just cope. I changed the inputs.</p>
                                <p>Now, I help high-performers do the same. We reframe the present to build a version of themselves that can survive the future:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>I have watched hundreds of entrepreneurs launch businesses that didn't require them to burn out.</li>
                                    <li>I helped build over 25 psychedelic-assisted therapy practices grounded in care, not just process.</li>
                                    <li>I saw executives and clinicians rebuild careers that were aligned with meaning, rather than armour.</li>
                                </ul>
                                <p className="font-medium text-slate-800 dark:text-slate-200 pt-2">This work addresses what is actually breaking. It isn’t you. It is the paradigm that shaped you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Expertise & Credentials Strip */}
            <section className="py-16 bg-blue-50 dark:bg-surface-dark/50 border-y border-blue-100 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center p-2 bg-white dark:bg-surface-dark rounded-full shadow-sm mb-4">
                            <span className="material-icons-outlined text-primary">school</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Expertise & Credentials</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            "Master of Science (MS) in Counseling | Bachelor of Science (BS) in Marketing",
                            "Trained in Multiple Trauma Modalities | IFS-Informed (Internal Family Systems)",
                            "Certified Rehabilitation Counselor (CRC) - National Certification",
                            "MAPS-Approved Training for Integration of Non-Ordinary States",
                            "Somatic Experiencing® Practitioner | Certified Rest & Restore™",
                            "Apprenticeship in Two Shamanic Lineages | Usui Holy Fire, Karuna Ki Reiki Master"
                        ].map((cred, idx) => (
                            <div key={idx} className="flex items-start">
                                <span className="material-icons-outlined text-primary mr-3 text-sm mt-1">verified</span>
                                <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300">{cred}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;