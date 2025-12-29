import React, { useState } from 'react';

const servicesData = [
    {
        id: "path-1",
        badge: "Step 1: The Entry Point",
        title: "Clarity & Insight Session",
        description: "Strategic mapping to locate the 'Systemic Knot' in your nervous system or business.",
        priceDisplay: "$300",
        subPrice: "Single 60-Min Strategy Session",
        features: [
            "Root Cause Analysis (Trauma or Strategy)",
            "Actionable Somatic or Business Tool",
            "Custom Roadmap for Future Work",
            "Required prerequisite for Advisory"
        ],
        cta: "Book Strategy Session",
        isFeatured: false,
        theme: "entry"
    },
    {
        id: "path-5",
        badge: "The Signature Mentorship",
        title: "The Authentic & Aligned Self",
        description: "The 'Master Container' blending somatic healing, executive strategy, and spiritual alignment.",
        priceDisplay: "$2,100",
        subPrice: "Starting at (6-Session Package)",
        features: [
            "Trauma & Somatic Regulation (SEP/IFS)",
            "Executive Career & Business Strategy",
            "Spiritual & Energetic Alignment",
            "Neurodivergent Workflow Design"
        ],
        packages: [
            { sessions: 6, price: "$2,100", save: "$105" },
            { sessions: 12, price: "$4,200", save: "$420" },
            { sessions: 24, price: "$8,400", save: "$840" }
        ],
        cta: "Apply for Mentorship",
        isFeatured: true,
        theme: "signature"
    },
    {
        id: "path-2",
        badge: "Deep Healing",
        title: "Integrative Somatics",
        description: "Metabolize biological trauma (Fight, Flight, Freeze) and restore nervous system capacity.",
        priceDisplay: "$1,500",
        subPrice: "Starting at (6-Session Package)",
        features: [
            "Somatic Experiencing™ (SE)",
            "Polyvagal Theory Mapping",
            "Internal Family Systems (IFS)",
            "Vagus Nerve Retraining"
        ],
        packages: [
            { sessions: 6, price: "$1,500", save: "$75" },
            { sessions: 12, price: "$3,000", save: "$300" },
            { sessions: 24, price: "$6,000", save: "$600" }
        ],
        cta: "Start Healing",
        isFeatured: false,
        theme: "standard"
    },
    {
        id: "path-3",
        badge: "Spiritual Integration",
        title: "Mystical & Transpersonal",
        description: "Stabilize and integrate psychedelic journeys, spiritual emergence, and ontological shock.",
        priceDisplay: "$1,500",
        subPrice: "Starting at (6-Session Package)",
        features: [
            "Psychedelic Integration Support",
            "Processing 'Dark Nights of the Soul'",
            "Ancestral & Karmic Clearing",
            "Grounding Peak Experiences"
        ],
        packages: [
            { sessions: 6, price: "$1,500", save: "$75" },
            { sessions: 12, price: "$3,000", save: "$300" },
            { sessions: 24, price: "$6,000", save: "$600" }
        ],
        cta: "Begin Integration",
        isFeatured: false,
        theme: "standard"
    },
    {
        id: "path-4",
        badge: "Energy Medicine",
        title: "Energetic Recalibration",
        description: "Deep restorative work for the subtle body, combining Reiki and Shamanic healing.",
        priceDisplay: "$1,500",
        subPrice: "Starting at (6-Session Package)",
        features: [
            "Usui Holy Fire® III Reiki",
            "Karuna Ki Reiki (Shadow Work)",
            "Shamanic Soul Retrieval",
            "Emotional Armor Clearing"
        ],
        packages: [
            { sessions: 6, price: "$1,500", save: "$75" },
            { sessions: 12, price: "$3,000", save: "$300" },
            { sessions: 24, price: "$6,000", save: "$600" }
        ],
        cta: "Restore Balance",
        isFeatured: false,
        theme: "standard"
    },
    {
        id: "path-6",
        badge: "Corporate & Systems",
        title: "Strategic Advisory",
        description: "Trauma-informed consulting for organizations, leaders, and complex systems change.",
        priceDisplay: "Custom",
        subPrice: "Retainers & Intensives",
        features: [
            "Systems Change Consulting",
            "Workplace Trauma Audits",
            "Executive 'Second Brain' Retainers",
            "Keynote Speaking & Training"
        ],
        packages: [
            { sessions: "Ad-Hoc", price: "$500/hr", save: "" },
            { sessions: "Half-Day", price: "$1,800", save: "Intensive" },
            { sessions: "Retainer", price: "$4,500", save: "10 Hours" }
        ],
        cta: "Inquire for Scope",
        isFeatured: false,
        theme: "corporate"
    }
];

const ServiceCard = ({ service }: { service: any }) => {
    const [showPackages, setShowPackages] = useState(false);

    // Determine styles based on theme
    const getCardStyles = () => {
        switch (service.theme) {
            case 'entry':
                return "border-teal-500 dark:border-teal-400 border-2";
            case 'signature':
                return "border-primary shadow-[0_4px_20px_rgba(var(--primary-rgb,37,99,235),0.15)] dark:shadow-blue-900/30 ring-1 ring-blue-500/20 transform md:-translate-y-2 relative z-10";
            case 'corporate':
                return "border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50";
            default:
                return "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700";
        }
    };

    const isSignature = service.theme === 'signature';

    return (
        <div className={`flex flex-col h-full bg-white dark:bg-surface-dark rounded-2xl p-6 transition-all duration-300 ${getCardStyles()}`}>

            {/* Badge */}
            <div className="mb-4">
                {isSignature ? (
                    <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-white uppercase bg-primary rounded-full shadow-sm">
                        Most Popular
                    </span>
                ) : (
                    <span className={`text-xs font-bold tracking-wider uppercase ${service.theme === 'entry' ? 'text-teal-600 dark:text-teal-400' :
                            service.theme === 'corporate' ? 'text-slate-500' : 'text-slate-500'
                        }`}>
                        {service.badge}
                    </span>
                )}
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight min-h-[3rem] flex items-center">
                    {service.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        {service.priceDisplay}
                    </span>
                    {service.packages && service.priceDisplay !== "Custom" && (
                        <span className="text-sm font-medium text-slate-500">
                            / from
                        </span>
                    )}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 h-10">
                    {service.subPrice}
                </p>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 min-h-[3rem]">
                {service.description}
            </p>

            <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mb-6"></div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                        <span className="material-icons-outlined text-green-500 text-base mr-2 flex-shrink-0" style={{ fontSize: '1.25rem' }}>check</span>
                        <span className="leading-snug">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Spacer */}
            <div className="mt-auto"></div>

            {/* Package Toggle */}
            {service.packages && (
                <div className="mb-6">
                    <button
                        onClick={() => setShowPackages(!showPackages)}
                        className="flex items-center text-xs font-semibold text-primary hover:text-blue-700 transition mb-3 focus:outline-none"
                    >
                        {showPackages ? 'Hide Options' : 'View Package Options'}
                        <span className={`material-icons-outlined text-sm ml-1 transition-transform ${showPackages ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showPackages ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="space-y-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                            {service.packages.map((pkg: any, idx: number) => (
                                <div key={idx} className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-slate-700 dark:text-slate-300">
                                        {typeof pkg.sessions === 'number' ? `${pkg.sessions} Sessions` : pkg.sessions}
                                    </span>
                                    <div className="text-right">
                                        <div className="font-bold text-slate-900 dark:text-white">{pkg.price}</div>
                                        {pkg.save && <div className="text-[10px] text-green-600 dark:text-green-400">{typeof pkg.save === 'string' && pkg.save.startsWith('Save') ? pkg.save : `Save ${pkg.save}`}</div>}
                                        {pkg.save && !pkg.save.toString().startsWith('Save') && !pkg.save.toString().includes('Intensive') && !pkg.save.toString().includes('Hours') && <div className="sr-only">Savings available</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 border ${isSignature
                    ? 'bg-primary text-white border-primary hover:bg-blue-600 hover:shadow-lg'
                    : 'bg-white dark:bg-transparent text-primary border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}>
                {service.cta}
            </button>
        </div>
    );
};

const ServicesApply: React.FC = () => {
    const [isDisclosureOpen, setIsDisclosureOpen] = useState<boolean>(false);

    return (
        <>
            {/* Integrated Services & Pricing Section */}
            <section id="services" className="py-20 bg-surface-light dark:bg-surface-dark/30 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-6">Services & Pricing</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Transparent pathways to profound healing and leadership. Choose the container that matches your depth of inquiry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {servicesData.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a href="#contact" className="inline-block text-slate-500 hover:text-primary transition-colors text-sm font-medium underline underline-offset-4 cursor-pointer">
                            Existing Client? Click here for Alumni maintenance.
                        </a>
                    </div>

                    <p className="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto italic">
                        * All packages include between-session email support and custom resources.
                    </p>
                </div>
            </section>

            {/* Application Section */}
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
                                    <p><strong className="text-slate-800 dark:text-slate-200">Nature of Services</strong><br />Shannon, as an Integrative Practitioner, offers coaching, somatic education, and wellness support. She does not diagnose or treat mental or physical health conditions. This is not licensed therapy, crisis care, or medication management. The work is an educational and experiential partnership focused on personal growth, nervous system regulation, pattern shifts, and trauma integration.</p>

                                    <p><strong className="text-slate-800 dark:text-slate-200">Psychedelic Integration Coaching Services</strong><br />Coaching for integrating non-ordinary states of consciousness, including psychedelics, plant medicines, or entheogens, is provided as non-clinical support only. Shannon does not provide substances, facilitate use, offer psychedelic-assisted therapy, or act as a sitter or guide. Coaching focuses on preparation and integration of experiences legally and independently undertaken by the client, using Trauma-Informed Care and Harm Reduction.</p>

                                    <p><strong className="text-slate-800 dark:text-slate-200">Scope of Practice</strong><br />This work is not clinical licensed mental health therapy or treatment. No diagnosis or treatment of mental health conditions is provided. Services are for stabilized individuals maintaining their health. If you are in crisis, actively abused or traumatized, experiencing a spiritual emergency, have severe unmanaged mental health issues, recent psychotic episodes or hospitalizations, recent crisis service use, non-trauma-related personality disorders, or current emergencies, Shannon's services are not appropriate. They are not a substitute for medical care, psychiatric treatment, or crisis intervention. Clients are encouraged to maintain relationships with healthcare providers.</p>

                                    <p><strong className="text-slate-800 dark:text-slate-200">Emergency Situations</strong><br />Emergency situations require immediate contact with crisis or emergency medical services. Shannon's services are not emergency services.</p>

                                    <p><strong className="text-slate-800 dark:text-slate-200">Professional Boundaries</strong><br />Shannon provides educational support and coaching within clear ethical boundaries, respecting client autonomy, confidentiality, and compliance with laws and professional standards.</p>

                                    <p><strong className="text-slate-800 dark:text-slate-200">Client Responsibility</strong><br />Clients are responsible for their decisions, actions, and well-being throughout this process. This partnership is most effective when combined with appropriate self-care and professional medical support.</p>
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