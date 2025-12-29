import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Area */}
                    <div className="flex items-center space-x-2">
                        <span className="material-icons-outlined text-primary text-3xl">spa</span>
                        <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                            The Integrative Practitioner
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#services"
                            className="text-sm font-medium hover:text-primary transition"
                        >
                            Packages
                        </a>
                        <a
                            href="#latest-insights"
                            className="text-sm font-medium hover:text-primary transition"
                        >
                            The Substack
                        </a>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="mailto:shannon@theintegrativecounselor.com" className="flex items-center text-sm font-medium hover:text-primary transition">
                            <span className="material-icons-outlined text-sm mr-1">email</span> E-mail
                        </a>
                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32NV8hog7MELSS-3L0-Ty-m6062yDiJvXZPdqt-ws-fTZMqSZKISlC9eOPyff4iXubkZKING9x" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition shadow-sm hover:shadow-md">
                            Schedule as an Existing Client
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                        >
                            <span className="material-icons-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#services"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Packages
                        </a>
                        <a
                            href="#latest-insights"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            The Substack
                        </a>
                        <a href="mailto:shannon@theintegrativecounselor.com" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
                            E-mail
                        </a>
                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ32NV8hog7MELSS-3L0-Ty-m6062yDiJvXZPdqt-ws-fTZMqSZKISlC9eOPyff4iXubkZKING9x" target="_blank" rel="noopener noreferrer" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-50 dark:hover:bg-gray-800">
                            Schedule as an Existing Client
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;