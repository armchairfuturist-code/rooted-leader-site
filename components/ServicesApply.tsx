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
        priceLabel: "Single 50-Min Strategy Session",
        perSessionRate: null, // No comparison needed for single session
        savingsLabel: null,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Experience</h4>
      <p class="mb-4">I serve as your systemic mirror. I listen to the unspoken undercurrents of your narrative—biological, energetic, and structural—to locate the 'Systemic Knot'.</p>
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Outcome</h4>
      <p class="mb-4">You leave with insight into the root of stuckness (Trauma vs Strategy), one actionable tool to claim a small win, and a clear compass for your next steps.</p>
      <p class="text-sm text-gray-500 italic mt-4">Scope: This is a single consulting session, not an intake for services.</p>
    `,
        packages: [], // Single option only
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
    },
    {
        id: "path-2",
        pathLabel: "PATH 2",
        category: "DEEP HEALING & INTEGRATION",
        title: "Somatics & Trauma Integration",
        subtitle: "Restoring Safety & Navigating the Unseen",
        intent: "We are not just talking about your history; we are metabolizing it. This path applies neuroscientific somatic tools to two distinct goals: 1) Resolving Chronic Stress, Trauma, & Complex Trauma to restore biological safety, and 2) Integrating Psychedelic & Mystical Experiences to ground profound insights into daily life. Whether you need to repair your nervous system or embody an expanded state of consciousness, we work at the root physiology to build lasting capacity.",
        defaultPrice: 1800,
        perSessionRate: 300,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Methodology</h4>
      <p class="mb-4">I use a bespoke blend of Somatic Experiencing (SE™) to discharge survival energy, Internal Family Systems (IFS) to unburden protective parts, and Polyvagal Mapping to navigate your biology.</p>
      
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Integrative Coaching</h4>
      <p class="mb-4">Transformation requires a life designed to hold your new capacity. I leverage my polymath background to provide education, skill-building, and strategies. We adjust your environment and daily rhythms to support your nervous system, ensuring the healing sticks in the real world.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Track A: Trauma & Stress Resolution</h4>
      <p class="mb-4">We target the physiological roots of Complex Trauma, Shock Trauma, and Chronic Stress. By metabolizing the "4 Fs"—discharging Fight (irritation/rage) and Flight (anxiety), or thawing Freeze (numbness) and Fawn (people-pleasing)—we return the system to the present moment.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Track B: Psychedelic & Mystical Integration</h4>
      <p class="mb-4">We use somatic titration to ground "Peak Experiences" into daily behavior. This includes resolving difficult trips, closing open energetic loops, and navigating Spiritual Emergence ("Dark Nights") without bypassing the body.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Scope of Practice</h4>
      <p class="mb-4">Complex Trauma, Developmental Wounds, Shock Trauma, Trauma Responses, Chronic Stress, Psychedelic Integration, Spiritual Emergence (‘Dark Nights’), and Ancestral/Karmic Clearing.</p>
    `,
        packages: [], // Defined by standard rate logic in component
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
    },
    {
        id: "path-3",
        pathLabel: "PATH 3",
        category: "NEURO-REGULATION",
        title: "Safe & Sound Neuro-Regulation",
        subtitle: "Acoustic Safety & Physiological Reset",
        intent: "This is a physiological \"hardware update\" for your nervous system. We use the Safe & Sound Protocol (SSP) to reduce auditory hypersensitivity and retune your biology for connection. This path is ideal for those navigating Neurodivergence, Sensory Processing sensitivities, or Chronic Dysregulation. We weave the listening protocol with somatic safety and practical lifestyle strategy to ensure the changes stick.",
        defaultPrice: 3000,
        perSessionRate: null,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Methodology</h4>
      <p class="mb-4">The SSP uses prosodic vocal frequencies to signal safety to the reptilian brain. This allows the system to shift out of chronic protectiveness and exercises the middle ear muscles to filter out "danger" frequencies.</p>
      
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Somatic Safety (SE™)</h4>
      <p class="mb-4">As the auditory system opens, the body may release stored tension. We use Somatic Experiencing and Parts Work to metabolize these shifts safely, ensuring the "opening" feels manageable, not flooding.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Integrative Coaching</h4>
      <p class="mb-4">A retuned nervous system requires a new lifestyle. We use a blend of holistic health coaching and strategies to redesign your daily rhythm, ensuring your environment supports your new capacity for calm.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Prerequisite & Safety</h4>
      <p class="mb-4">Sound is a potent intervention. Physiological readiness will be assessed during initial session. If the body is not yet ready for auditory stimulation, we will begin with *Path 2: Somatics & Trauma Integration* to establish somatic stability before introducing the SSP.</p>
    `,
        packages: [
            { sessions: "12", price: 3000, label: "Private 1:1 Track", save: "$300 (License Included)", perSession: 250, note: "+ 1-Year License ($300 Value). Includes dedicated co-regulation and skill-building." },
            { sessions: "12-Week", price: 1000, label: "Group Track", save: "Education & Access", perSession: "Cohort", note: "Group Track (\"Vagus Nerve Reset\"): Includes 12-Week Cohort + 1-Year License." }
        ],
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
    },
    {
        id: "path-4",
        pathLabel: "PATH 4",
        category: "ENERGY MEDICINE",
        title: "Energetic Recalibration",
        subtitle: "Subtle Body Energy Balancing",
        intent: "Deep, restorative work for the subtle body. Going beyond relaxation into the architecture of your energy field.",
        defaultPrice: 1800,
        perSessionRate: 300,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Modalities</h4>
      <p class="mb-4"><strong>Usui Holy Fire® III Reiki:</strong> High-frequency energy for purification and emotional healing.</p>
      <p class="mb-4"><strong>Karuna Ki Reiki:</strong> The 'Way of Compassionate Action' for shadow work and deep spiritual trauma.</p>
      <p class="mb-4"><strong>Shamanic Healing:</strong> Earth-based practices and Soul Retrieval to restore your connection to nature.</p>
    `,
        packages: [], // Defined by standard rate logic in component
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
    },
    {
        id: "path-5",
        pathLabel: "PATH 5",
        category: "MENTORSHIP (THE MASTER CONTAINER)",
        title: "The Authentic & Aligned Self",
        subtitle: "The Polymath Mentorship: Wholeness in a Fragmented World",
        intent: "This is the Master Container. We weave every tool in my arsenal to help you embody wholeness. In this space, we do not compartmentalize your health, your spirit, and your work: we treat them as one ecosystem. If a trauma block arises while we are designing your legacy, we resolve it. If a business challenge triggers a spiritual crisis, we integrate it.",
        defaultPrice: 2100,
        perSessionRate: 350,
        deepContent: `
      <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100/50 dark:border-emerald-800/30 mb-6">
        <p class="text-sm font-medium text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
          <span class="material-icons-outlined text-base">event_repeat</span>
          Required Cadence: Sessions must be scheduled Weekly or Bi-Weekly to maintain momentum.
        </p>
      </div>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Polymath Advantage</h4>
      <p class="mb-4">Access my full background: 25-year Business Consultant, 15-year Healer & Entrepreneur, and Integrative Trauma Practitioner. We use Somatic Experiencing (SE™), IFS Parts Work, and Polyvagal Mapping for regulation, alongside Reiki/Shamanic perspectives for alignment.</p>
      
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Shadow & Depth Work</h4>
      <p class="mb-4">We do not bypass the dark. This container is safe for your Shadow: perfectionism, rage, and imposter syndrome. We do the deep work of unlearning societal conditioning, integrating the "messy" parts of your humanity so they fuel rather than sabotage your vision.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Integrative Coaching</h4>
      <p class="mb-4">Transformation is a skill set. We move beyond insight into tangible skill-building: implementing sleep architecture, nutrition for mental well-being, and boundary protocols to build a foundation that can hold your capacity.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Strategic Design</h4>
      <p class="mb-4">Leveraging my education in human psychology and environmental supports, we identify how you uniquely work and live best. We design strategies and workflows that honor your specific neuro-cognitive profile, allowing you to thrive without masking.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Container Support</h4>
      <p class="mb-4">Includes light email support for questions and brief support between sessions.</p>

      <p class="text-sm italic text-slate-500 mt-6 border-t border-slate-100 dark:border-slate-800 pt-4">
        <strong>The Goal:</strong> Mastery of Personal Sovereignty. We build your internal architecture so that eventually, you do not need me. I aim to work myself out of a job.
      </p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-8">Who This Is For</h4>
      <ul class="space-y-3 mt-4">
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[140px]">The Neurodivergent Creator:</span>
          <span>You need a workflow that prevents burnout and strategies that work for you.</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[140px]">The Misaligned Success:</span>
          <span>You climbed the ladder, but it’s leaning against the wrong wall.</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[140px]">The Fragmented:</span>
          <span>You want to bring your Spiritual Self and your Professional Self into one room.</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[140px]">The Entrepreneur:</span>
          <span>You see your work as a Dharma but are drowning in the "Hustle."</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[140px]">The Seeker of Meaning:</span>
          <span>You are searching for purpose and want to design a life that reflects your deepest values.</span>
        </li>
      </ul>
    `,
        packages: [], // Defined by standard rate logic in component
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
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
        ctaLink: "mailto:Shannon@theintegrativecounselor.com"
    }
];

const alumniPath = {
    title: "PATH 7: THE HORIZON (Alumni Maintenance)",
    text: "If you have worked with me in the past month, you are eligible for 'Grandfathered' rates for tune-ups.",
    linkText: "Email for Alumni Access"
};

// Pricing tier card component for prominent display
const PricingTierCard: React.FC<{ pkg: any, isSelected: boolean, onSelect: () => void, perSessionRate: number | null, isMuted?: boolean }> = ({ pkg, isSelected, onSelect, perSessionRate, isMuted }) => {
    const isBestValue = pkg.bestValue;

    return (
        <button
            onClick={isMuted ? undefined : onSelect}
            disabled={isMuted}
            className={`relative flex flex-col p-5 rounded-2xl border transition-all duration-500 text-left w-full
                ${isMuted
                    ? 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 cursor-default opacity-80'
                    : isSelected
                        ? 'border-emerald-200 bg-emerald-50/50 shadow-sm scale-[1.01]'
                        : 'border-slate-100 dark:border-slate-800 hover:border-emerald-100 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                }
            `}
        >
            {/* Best Value Indicator - Subtle Line */}
            {isBestValue && !isMuted && (
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-300 rounded-l-2xl" />
            )}

            <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    {pkg.sessions} {typeof pkg.sessions === 'number' || !pkg.sessions.toString().toLowerCase().includes('week') ? 'Sessions' : ''}
                </span>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full 
                    ${isSelected && !isMuted
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}>
                    50 min
                </span>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    ${pkg.price.toLocaleString()}
                </span>
                {pkg.originalPrice && !isMuted && (
                    <span className="text-sm text-slate-400 line-through">${pkg.originalPrice.toLocaleString()}</span>
                )}
            </div>

            <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-slate-500 dark:text-slate-500">
                    {typeof pkg.perSession === 'number' ? `$${pkg.perSession}/session` : pkg.perSession}
                </span>
                {pkg.save && (
                    <span className={`${isSelected && !isMuted ? 'bg-emerald-100' : 'bg-emerald-100/50 dark:bg-emerald-900/20'} ${isMuted ? 'text-slate-400 dark:text-slate-500' : 'text-emerald-700 dark:text-emerald-400'} text-[11px] font-medium px-2.5 py-1 rounded-full`}>
                        {pkg.save.startsWith('$') ? `Save ${pkg.save}` : pkg.save}
                    </span>
                )}
            </div>

            {pkg.note && (
                <div className="mt-2 text-[10px] text-primary font-medium">
                    {pkg.note}
                </div>
            )}
        </button>
    );
};

const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Dynamic package calculation based on standard rate logic
    const calculateTier = (baseRate: number, sessions: number, discountPercent: number) => {
        const originalPrice = baseRate * sessions;
        // Round final price to nearest 100
        const rawFinalPrice = originalPrice * (1 - discountPercent / 100);
        const finalPrice = Math.round(rawFinalPrice / 100) * 100;

        const actualSavings = originalPrice - finalPrice;
        const actualPercent = Math.round((actualSavings / originalPrice) * 100);
        const perSession = finalPrice / sessions;

        return {
            sessions,
            price: finalPrice,
            originalPrice,
            discount: `${actualPercent}%`,
            save: `$${actualSavings.toLocaleString()}`,
            perSession: Math.round(perSession),
            label: `${sessions}-Session Package`,
            bestValue: sessions === 24
        };
    };

    let packages = service.packages || [];
    if (service.perSessionRate && service.id !== "path-3" && service.id !== "path-6") {
        packages = [
            calculateTier(service.perSessionRate, 6, 5),
            calculateTier(service.perSessionRate, 12, 10),
            calculateTier(service.perSessionRate, 24, 15),
        ];
    }

    const [selectedPackageIdx, setSelectedPackageIdx] = useState(() => {
        // Default to best value package if available
        const bestValueIdx = packages?.findIndex((p: any) => p.bestValue);
        return bestValueIdx >= 0 ? bestValueIdx : 0;
    });

    // Determine current display values
    const hasPackages = packages.length > 0;
    const currentPkg = hasPackages ? packages[selectedPackageIdx] : null;

    const displayPrice = currentPkg
        ? (typeof currentPkg.price === 'number' ? `$${currentPkg.price.toLocaleString()}` : currentPkg.price)
        : (typeof service.defaultPrice === 'number' ? `$${service.defaultPrice.toLocaleString()}` : service.defaultPrice);

    const displayLabel = currentPkg ? currentPkg.label : service.priceLabel;
    const displaySave = currentPkg ? currentPkg.save : service.savingsLabel;
    const displayDiscount = currentPkg?.discount;
    const isBestValue = currentPkg?.bestValue;

    // Special handling for Path 6 - Custom/Advisory
    const isPath6 = service.id === "path-6";

    return (
        <div className={`bg-white dark:bg-surface-dark border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full transform translate-z-0 border-gray-200 dark:border-gray-800`}>
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
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                    "{service.intent}"
                </p>

                {/* Package Pricing Grid - Prominently displayed */}
                {hasPackages && (
                    <div className="mb-6 space-y-3">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                Package Selections
                            </span>
                            {service.perSessionRate && (
                                <span className="text-[10px] text-slate-400 font-medium">
                                    Standard Rate: ${service.perSessionRate}/session
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            {packages.map((pkg: any, idx: number) => (
                                <PricingTierCard
                                    key={idx}
                                    pkg={pkg}
                                    isSelected={selectedPackageIdx === idx}
                                    onSelect={() => setSelectedPackageIdx(idx)}
                                    perSessionRate={service.perSessionRate}
                                    isMuted={service.id === "path-3"}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Single Session Pricing (for Path 1) */}
                {!hasPackages && !isPath6 && (
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex items-baseline gap-3 mb-1">
                            <span className="text-3xl font-bold text-primary">
                                {displayPrice}
                            </span>
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{displayLabel}</div>
                    </div>
                )}

                {/* Custom Pricing (Path 6) */}
                {isPath6 && (
                    <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Custom Engagement
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Tailored to your organization's unique needs
                        </p>
                    </div>
                )}

                {/* Divider to push CTA down */}
                <div className="mt-auto border-t border-gray-100 dark:border-gray-800 mb-6"></div>

                {/* Primary CTA */}
                <a
                    href={service.id === "path-3" ? "#" : service.ctaLink}
                    target={isPath6 ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    onClick={(e) => service.id === "path-3" && e.preventDefault()}
                    className={`block w-full py-3 px-4 font-semibold text-center rounded transition-colors duration-200 ${service.id === "path-3"
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 cursor-default opacity-90"
                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100"
                        }`}
                >
                    {isPath6 ? "Discuss Your Vision" : service.id === "path-3" ? "Coming Q1 2026" : "Join Priority Waitlist"}
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
                    <div className="max-w-4xl mx-auto mb-20">
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

                    {/* Application Content (Merged) */}
                    <div id="apply" className="max-w-5xl mx-auto">

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
                </div>
            </section>
        </>
    );
};

export default ServicesApply;