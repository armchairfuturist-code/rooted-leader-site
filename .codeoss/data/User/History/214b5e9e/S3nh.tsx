import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <span className="material-icons-outlined text-primary text-4xl">spa</span>
                </div>
                
                <div className="flex justify-center space-x-6 mb-8 text-slate-400">
                    <a href="#" className="hover:text-primary transition"><i className="material-icons-outlined" style={{ fontSize: '20px' }}>link</i></a>
                    <a href="#" className="hover:text-primary transition"><i className="material-icons-outlined" style={{ fontSize: '20px' }}>camera_alt</i></a>
                    <a href="#" className="hover:text-primary transition"><i className="material-icons-outlined" style={{ fontSize: '20px' }}>alternate_email</i></a>
                    <a href="#" className="hover:text-primary transition"><i className="material-icons-outlined" style={{ fontSize: '20px' }}>facebook</i></a>
                <div className="flex justify-center space-x-6 mb-8">
                    {SOCIAL_LINKS.map(social => (
                        <a 
                            key={social.label} 
                            href={social.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={social.label}
                            className="text-slate-400 hover:text-primary transition"
                        >
                            {social.label === 'Instagram' && (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            )}
                            {social.label === 'Threads' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.321 1.555c-.27.27-.395.68-.32 1.082l.345 1.89c.052.286.27.505.556.556l1.89.345c.402.075.812-.05 1.082-.32l2.4-2.4c.42-.42.14-.98-.43-1.13l-5.4-1.4c-.57-.15-.98.26-1.13.43l-2.4 2.4c-.27.27-.05.68.32 1.082l1.89.345c.286.052.505.27.556.556l.345 1.89c.075.402.48.715.882.64l1.4-.255c.402-.075.525-.585.255-.882l-1.14-1.14a.5.5 0 0 1 0-.707l1.14-1.14c.27-.27.707-.145.882.255l.255 1.4c.075.402-.24.807-.64.882l-1.89.345c-.286.052-.505.27-.556.556l-.345 1.89c-.075.402.05.812.32 1.082l2.4 2.4c.42.42.98.14 1.13-.43l1.4-5.4c.15-.57-.26-.98-.43-1.13l-2.4-2.4Z"/>
                                </svg>
                            )}
                            {social.label === 'Facebook' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                            )}
                            {social.label === 'YouTube' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                            )}
                            {social.label === 'Substack' && (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.532 4.25H1.468A1.468 1.468 0 0 0 0 5.718v2.936h24V5.718a1.468 1.468 0 0 0-1.468-1.468zM0 15.346h24v2.936a1.468 1.468 0 0 1-1.468 1.468H1.468A1.468 1.468 0 0 1 0 18.282v-2.936zM0 10.115h24v3.763H0v-3.763z"></path></svg>
                            )}
                        </a>
                    ))}
                </div>
                
                <div className="flex justify-center space-x-8 text-sm text-slate-500 mb-8">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms of Service</a>
                </div>
                
                <p className="text-xs text-slate-400">
                    © 2025 The Integrative Counselor, LLC. All rights reserved.<br />
                    Designed with intention for deep healing and authentic empowerment.
                </p>
            </div>
        </footer>
    );
};

export default Footer;