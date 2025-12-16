import React, { useState } from 'react';
import { SERVICES } from '../constants';

const ServicesApply: React.FC = () => {
    const [openService, setOpenService] = useState<number | null>(null);
    const [isDisclosureOpen, setIsDisclosureOpen] = useState<boolean>(false);

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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300">
                                <button 
                                    onClick={() => setOpenService(openService === idx ? null : idx)}
                                    className="bg-white dark:bg-surface-dark p-6 rounded-lg flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition"
                                    aria-expanded={openService === idx}
                                    aria-controls={`service-content-${idx}`}
                                >
                                    <div className="flex items-center">
                                        <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary mr-4">
                                            <span className="material-icons-outlined text-xl">{service.icon}</span>
                                        </div>
                                        <h4 className="font-bold text-sm text-slate-800 dark:text-white">{service.title}</h4>
                                    </div>
                                    <span className={`material-icons-outlined text-gray-400 transition-transform duration-300 ${openService === idx ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                <div id={`service-content-${idx}`} className={`grid transition-all duration-500 ease-in-out ${openService === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="p-6 pt-0 text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-surface-dark rounded-b-lg">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
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

                    {/* Important Disclosures Accordion */}
                    <div className="mb-12">
                        <div 
                            onClick={() => setIsDisclosureOpen(!isDisclosureOpen)}
                            className="border border-blue-100 dark:border-gray-800 rounded-lg p-4 bg-blue-50/50 dark:bg-surface-dark flex justify-between items-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                            aria-expanded={isDisclosureOpen}
                            aria-controls="disclosure-content"
                        >
                            <div className="flex items-center text-primary font-medium">
                                <span className="material-icons-outlined mr-2">description</span> Important Disclosures
                            </div>
                            <span className={`material-icons-outlined text-primary transition-transform duration-300 ${isDisclosureOpen ? 'rotate-180' : ''}`}>
                                expand_more
                            </span>
                        </div>

                        <div 
                            id="disclosure-content"
                            className={`grid transition-all duration-500 ease-in-out ${isDisclosureOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="prose dark:prose-invert prose-sm max-w-none text-slate-600 dark:text-slate-400 p-6 bg-blue-50/30 dark:bg-surface-dark/50 border border-t-0 border-blue-100 dark:border-gray-800 rounded-b-lg space-y-4">
                                    <p><strong className="text-slate-800 dark:text-slate-200">Nature of Services</strong><br/>Shannon, as an Integrative Practitioner, offers coaching, somatic education, and wellness support. She does not diagnose or treat mental or physical health conditions. This is not licensed therapy, crisis care, or medication management. The work is an educational and experiential partnership focused on personal growth, nervous system regulation, pattern shifts, and trauma integration.</p>
                                    
                                    <p><strong className="text-slate-800 dark:text-slate-200">Psychedelic Integration Coaching Services</strong><br/>Coaching for integrating non-ordinary states of consciousness, including psychedelics, plant medicines, or entheogens, is provided as non-clinical support only. Shannon does not provide substances, facilitate use, offer psychedelic-assisted therapy, or act as a sitter or guide. Coaching focuses on preparation and integration of experiences legally and independently undertaken by the client, using Trauma-Informed Care and Harm Reduction.</p>
                                    
                                    <p><strong className="text-slate-800 dark:text-slate-200">Scope of Practice</strong><br/>This work is not clinical licensed mental health therapy or treatment. No diagnosis or treatment of mental health conditions is provided. Services are for stabilized individuals maintaining their health. If you are in crisis, actively abused or traumatized, experiencing a spiritual emergency, have severe unmanaged mental health issues, recent psychotic episodes or hospitalizations, recent crisis service use, non-trauma-related personality disorders, or current emergencies, Shannon's services are not appropriate. They are not a substitute for medical care, psychiatric treatment, or crisis intervention. Clients are encouraged to maintain relationships with healthcare providers.</p>
                                    
                                    <p><strong className="text-slate-800 dark:text-slate-200">Emergency Situations</strong><br/>Emergency situations require immediate contact with crisis or emergency medical services. Shannon's services are not emergency services.</p>
                                    
                                    <p><strong className="text-slate-800 dark:text-slate-200">Professional Boundaries</strong><br/>Shannon provides educational support and coaching within clear ethical boundaries, respecting client autonomy, confidentiality, and compliance with laws and professional standards.</p>
                                    
                                    <p><strong className="text-slate-800 dark:text-slate-200">Client Responsibility</strong><br/>Clients are responsible for their decisions, actions, and well-being throughout this process. This partnership is most effective when combined with appropriate self-care and professional medical support.</p>
                                </div>
                            </div>
                        </div>
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