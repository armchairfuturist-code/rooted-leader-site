import React, { useState } from 'react';

const servicesPaths = [
    {
        id: "path-1",
        pathLabel: "PATH 1",
        category: "STRATEGY (START HERE)",
        title: "The Clarity & Insight Session",
        subtitle: "Strategic Mapping & Direction",
        intent: "The universal entry point. When you are in the thick of a block, you cannot see the frame. We aim for direction, not full resolution.",
        defaultPrice: 300,
        priceLabel: "Single 60-Min Strategy Session",
        perSessionRate: null, // No comparison needed for single session
        savingsLabel: null,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Experience</h4>
      <p class="mb-4">I serve as your systemic mirror. I listen to the unspoken undercurrents of your narrative—biological, energetic, and structural—to locate the 'Systemic Knot'.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Outcome</h4>
      <p class="mb-4">You leave with insight into the root of stuckness (Trauma vs Strategy), one actionable tool to claim a small win, and a clear compass for your next steps.</p>
      <p class="text-sm text-gray-500 italic mt-4">Scope: This is a single consulting session, not an intake for clinical services.</p>
    `,
        packages: [], // Single option only
        ctaLink: "https://practicequeue.com/path-1-link"
    },
    {
        id: "path-2",
        pathLabel: "PATH 2",
        category: "DEEP HEALING",
        title: "Integrative Somatics & Trauma",
        subtitle: "Restoring Capacity & Biological Safety",
        intent: "We are not talking about trauma; we are doing something about it. Metabolize the physiology of the threat response so you can return to the present.",
        defaultPrice: 1500,
        perSessionRate: 250,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Integrative Toolset</h4>
      <p class="mb-4">A bespoke blend of Somatic Experiencing (SE™) to discharge survival energy, IFS to unburden protective parts, and Polyvagal Mapping to learn your nervous system's language.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Metabolizing the '4 Fs'</h4>
      <p class="mb-4">Whether you are stuck in Fight (irritation), Flight (anxiety), Freeze (numbness), or Fawn (people-pleasing), we gently discharge the mobilized energy or 'thaw' the immobility.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Scope of Practice</h4>
      <p class="mb-4">Complex Trauma, Developmental Wounds, Narcissistic Abuse Recovery, Shock Trauma, and Chronic Stress/Burnout.</p>
    `,
        packages: [
            { sessions: 6, price: 1500, label: "6-Session Package", save: "$75" },
            { sessions: 12, price: 3000, label: "12-Session Package", save: "$300" },
            { sessions: 24, price: 6000, label: "24-Session Package", save: "$600" }
        ],
        ctaLink: "https://practicequeue.com/path-2-link"
    },
    {
        id: "path-3",
        pathLabel: "PATH 3",
        category: "SPIRITUAL INTEGRATION",
        title: "Mystical & Transpersonal Integration",
        subtitle: "Navigating the Unseen & The Expanded Self",
        intent: "A hybrid of Trauma Healing and Transpersonal Coaching. We stabilize the nervous system to make meaning of peak experiences.",
        defaultPrice: 1500,
        perSessionRate: 250,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Methodology</h4>
      <p class="mb-4">Anchoring 'Peak Experiences' into daily behavior. We use somatic titration to resolve difficult trips, closing open loops and establishing safety.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Scope</h4>
      <p class="mb-4">Psychedelic Integration, Spiritual Emergence ('Dark Nights'), Ancestral/Karmic Clearing, and processing Mystical Experiences without fear.</p>
    `,
        packages: [
            { sessions: 6, price: 1500, label: "6-Session Package", save: "$75" },
            { sessions: 12, price: 3000, label: "12-Session Package", save: "$300" },
            { sessions: 24, price: 6000, label: "24-Session Package", save: "$600" }
        ],
        ctaLink: "https://practicequeue.com/path-3-link"
    },
    {
        id: "path-4",
        pathLabel: "PATH 4",
        category: "ENERGY MEDICINE",
        title: "Energetic Recalibration",
        subtitle: "Subtle Body Energy Balancing",
        intent: "Deep, restorative work for the subtle body. Going beyond relaxation into the architecture of your energy field.",
        defaultPrice: 1500,
        perSessionRate: 250,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Modalities</h4>
      <p class="mb-4"><strong>Usui Holy Fire® III Reiki:</strong> High-frequency energy for purification and emotional healing.</p>
      <p class="mb-4"><strong>Karuna Ki Reiki:</strong> The 'Way of Compassionate Action' for shadow work and deep spiritual trauma.</p>
      <p class="mb-4"><strong>Shamanic Healing:</strong> Earth-based practices and Soul Retrieval to restore your connection to nature.</p>
    `,
        packages: [
            { sessions: 6, price: 1500, label: "6-Session Package", save: "$75" },
            { sessions: 12, price: 3000, label: "12-Session Package", save: "$300" },
            { sessions: 24, price: 6000, label: "24-Session Package", save: "$600" }
        ],
        ctaLink: "https://practicequeue.com/path-4-link"
    },
    {
        id: "path-5",
        pathLabel: "PATH 5",
        category: "MENTORSHIP (THE MASTER CONTAINER)",
        title: "The Authentic & Aligned Self",
        subtitle: "The Polymath Mentorship",
        intent: "We weave every tool in the arsenal—Trauma, Strategy, Spirit, and Health—to help you embody wholeness in a fragmented world.",
        defaultPrice: 2100,
        perSessionRate: 350,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Expertise Stack</h4>
      <p class="mb-4">Access my full background: Trauma Specialist (SEP/IFS), Executive Strategist (25+ years), Spiritual Healer (Reiki Master), and Master of Counseling background.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Who This Is For</h4>
      <p class="mb-4">Neurodivergent Creators needing workflow design, Entrepreneurs drowning in hustle, and Seekers wanting to bring their Spiritual and Professional selves into one room.</p>
    `,
        packages: [
            { sessions: 6, price: 2100, label: "6-Session Package", save: "$105" },
            { sessions: 12, price: 4200, label: "12-Session Package", save: "$420" },
            { sessions: 24, price: 8400, label: "24-Session Package", save: "$840" }
        ],
        ctaLink: "https://practicequeue.com/path-5-link"
    },
    {
        id: "path-6",
        pathLabel: "PATH 6",
        category: "CORPORATE & ADVISORY",
        title: "Strategic Advisory & Consulting",
        subtitle: "Trauma-Trained Systems Expert",
        intent: "High-Level Advisory for Visionaries. I act as a 'Systemic Auditor,' viewing the complexity of your project through a trauma-informed lens.",
        defaultPrice: "Custom",
        perSessionRate: "Varies",
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Services</h4>
      <p class="mb-4">Systems Change Consulting, Workplace Trauma Audits, and Keynote Speaking.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Engagement Options</h4>
      <p class="mb-4"><strong>Ad-Hoc:</strong> $500/hr for immediate problem solving.</p>
      <p class="mb-4"><strong>Retainer:</strong> $4,500 for 10 hours ('Second Brain' on speed dial).</p>
      <p class="mb-4"><strong>Intensives:</strong> Half-Day ($1,800) or Full-Day ($3,000).</p>
    `,
        packages: [], // Custom logic handled in UI
        ctaLink: "mailto:inquire@theintegrativepractitioner.com"
    }
];

const alumniPath = {
    title: "PATH 7: THE HORIZON (Alumni Maintenance)",
    text: "If you have worked with me in the past month, you are eligible for 'Grandfathered' rates for tune-ups.",
    linkText: "Email for Alumni Access"
};

const ServiceCard = ({ service }: { service: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedPackageIdx, setSelectedPackageIdx] = useState(0);

    // Determine current display values
    const packages = service.packages || [];
    const hasPackages = packages.length > 0;
    const currentPkg = hasPackages ? packages[selectedPackageIdx] : null;

    const displayPrice = currentPkg
        ? (typeof currentPkg.price === 'number' ? `$${currentPkg.price.toLocaleString()}` : currentPkg.price)
        : (typeof service.defaultPrice === 'number' ? `$${service.defaultPrice.toLocaleString()}` : service.defaultPrice);

    const displayLabel = currentPkg ? currentPkg.label : service.priceLabel;
    const displaySave = currentPkg ? currentPkg.save : service.savingsLabel;

    return (
        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full transform translate-z-0">
            {/* Header / Visible State */}
            <div className="p-8 pb-4 flex flex-col flex-grow">
                {/* Badge */}
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
                    {service.pathLabel} • {service.category}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">
                    {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-5">
                    {service.subtitle}
                </p>

                {/* Intent/Hook */}
                <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed">
                    "{service.intent}"
                </p>

                {/* Divider to push pricing down */}
                <div className="mt-auto border-t border-gray-100 dark:border-gray-800 mb-6"></div>

                {/* Pricing Block */}
                <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-3xl font-bold text-slate-900 dark:text-white">
                            {displayPrice}
                        </span>
                        {displaySave && (
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                {displaySave.toString().startsWith('$') ? `Save ${displaySave}` : displaySave}
                            </span>
                        )}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{displayLabel}</div>

                    {service.perSessionRate && typeof service.perSessionRate === 'number' && (
                        <div className="text-xs text-slate-400 mt-1">
                            Standard Rate: ${service.perSessionRate} / session
                        </div>
                    )}
                </div>

                {/* Primary CTA */}
                <a
                    href={service.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-center rounded hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors duration-200"
                >
                    Book Now
                </a>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-4 px-6 bg-gray-50 dark:bg-slate-800/40 border-t border-gray-100 dark:border-gray-800 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-center gap-2 group"
            >
                {isExpanded ? 'Hide Scope' : 'View Full Scope & Methodology'}
                <span className={`material-icons-outlined text-base transition-transform duration-300 group-hover:translate-y-0.5 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {/* Expanded Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-4 bg-gray-50 dark:bg-slate-800/40 border-t border-gray-200 dark:border-gray-800/50">

                    {/* Package Selector */}
                    {hasPackages && (
                        <div className="mb-8">
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                                Select Package Duration
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {packages.map((pkg: any, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedPackageIdx(idx)}
                                        className={`px-3 py-2 text-xs font-bold rounded border transition-all duration-200 ${selectedPackageIdx === idx
                                                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-slate-300 dark:border-slate-500 shadow-sm'
                                                : 'bg-transparent text-slate-500 border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                                            }`}
                                    >
                                        {pkg.sessions} Sessions
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Rich Text Content */}
                    <div
                        className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: service.deepContent }}
                    />
                </div>
            </div>
        </div>
    );
};

const ServicesApply: React.FC = () => {
    const [isDisclosureOpen, setIsDisclosureOpen] = useState<boolean>(false);

    return (
        <>
            {/* Services Section */}
            <section id="services" className="py-24 bg-surface-light dark:bg-surface-dark/30 transition-colors duration-300">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-6">Services & Pricing</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Transparent pathways to profound healing and leadership. Choose the container that matches your depth of inquiry.
                        </p>
                    </div>

                    {/* Grid Layout: 1 col Mobile, 2 col Tablet, 3 col Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-start mb-16">
                        {servicesPaths.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {/* Alumni Path 7 - Full Width Banner */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-8 md:p-10 text-center shadow-xl relative overflow-hidden group">
                            {/* Subtle geometric overlay */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent transform scale-150"></div>

                            <h3 className="relative text-white font-display text-2xl font-bold mb-3">
                                {alumniPath.title}
                            </h3>
                            <p className="relative text-blue-100 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                                {alumniPath.text}
                            </p>
                            <a
                                href="mailto:shannon@theintegrativepractitioner.com?subject=Alumni%20Access%20Request"
                                className="relative inline-block border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded transition-all duration-300"
                            >
                                {alumniPath.linkText}
                            </a>
                        </div>
                    </div>

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