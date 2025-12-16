import React from 'react';
import { SERVICES } from '../constants';

const ServicesApply: React.FC = () => {
    return (
        <>
            {/* Services */}
            <section id="services" className="py-20 bg-surface-light dark:bg-surface-dark/30 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Services</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Explore the pathways to profound healing and integrative wellness. Each offering is Trauma-Informed and designed to meet you where you are.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between hover:border-primary cursor-pointer transition">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary mr-4">
                                        <span className="material-icons-outlined text-xl">{service.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-white" dangerouslySetInnerHTML={{ __html: service.title.replace(/ /g, ' <br/> ') }}></h4>
                                </div>
                                <span className="material-icons-outlined text-gray-400">expand_more</span>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-center text-xs text-slate-500 italic mt-8 max-w-2xl mx-auto">
                        Each service addresses the echoes of Trauma and stress, creating lasting transformation through Shannon's unique integration of neuroscience, somatic wisdom, and holistic healing.
                    </p>
                </div>
            </section>

            {/* Application */}
            <section id="apply" className="py-20 bg-white dark:bg-background-dark transition-colors duration-300">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Your Application: The First Step to Tailored Transformation
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            This application is your opportunity to share your journey and aspirations. It's a vital step that allows Shannon to understand your unique needs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-blue-50 dark:bg-surface-dark p-8 rounded-xl border border-blue-100 dark:border-blue-900/30 transition-colors duration-300">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                                <span className="material-icons-outlined mr-2 text-primary">info</span> What Shannon Needs to Know
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Your specific challenges and transformation goals.",
                                    "If her integrative, somatic, and root-cause approach aligns with your needs.",
                                    "Your readiness to actively participate in your healing journey."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                        <span className="material-icons-outlined text-primary text-sm mr-2 mt-1">check_circle</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                                <span className="material-icons-outlined mr-2 text-slate-500">priority_high</span> Important Considerations
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Shannon's approach is not licensed therapy, crisis care, or medication management.",
                                    "Service fees and scheduling availability details are provided in the application.",
                                    "After submission, Shannon personally reviews and contacts you via email."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                        <span className="material-icons-outlined text-slate-400 text-sm mr-2 mt-1">info</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-12 border border-blue-100 dark:border-gray-800 rounded-lg p-4 bg-blue-50/50 dark:bg-surface-dark flex justify-between items-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                        <div className="flex items-center text-primary font-medium">
                            <span className="material-icons-outlined mr-2">description</span> Important Disclosures
                        </div>
                        <span className="material-icons-outlined text-primary">expand_more</span>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-sm italic text-slate-500">"This is more than just an application; it's the beginning of your conscious commitment to profound change."</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-blue-600 text-white px-10 py-3 rounded font-medium shadow-lg hover:shadow-xl transition">
                            Apply to be a Client
                        </a>
                        <p className="text-xs text-slate-400">By applying or scheduling, you agree to our privacy policy and terms of service.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesApply;