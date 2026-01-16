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
        category: "INTEGRATIVE SOMATICS",
        title: "Trauma & Chronic Stress Resolution",
        subtitle: "Restoring Biological Safety & Capacity",
        intent: "We are not just talking about your history; we are metabolizing it. Trauma and chronic stress live in the nervous system, not the cognitive brain. This path applies neuroscientific somatic tools to resolve Chronic Stress, Complex Trauma, and Developmental Wounds. We focus on metabolizing the physiology of the threat response so you can return to the present moment with restored capacity.",
        defaultPrice: 1500,
        perSessionRate: 250,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Somatic Engine</h4>
      <p class="mb-4">We use a bespoke blend of Somatic Experiencing (SE™) to discharge trapped survival energy, Internal Family Systems (IFS) to unburden protective parts, and Polyvagal Mapping to navigate your biology.</p>
      
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Integrative Coaching</h4>
      <p class="mb-4">Transformation requires a life designed to hold your new capacity. I leverage my polymath background to provide education, skill-building, and strategies. We adjust your environment and daily rhythms to support your nervous system, ensuring the regulation sticks in the real world.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Metabolizing the "4 Fs"</h4>
      <p class="mb-2">We interrupt chronic survival loops:</p>
      <ul class="space-y-2 mb-4">
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[70px]">Fight:</span>
          <span>Discharging irritation, rage, and the need for control.</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[70px]">Flight:</span>
          <span>Settling anxiety, panic, and rushing.</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[70px]">Freeze:</span>
          <span>Safely "thawing" numbness, depression, and dissociation.</span>
        </li>
        <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          <span class="font-bold text-slate-900 dark:text-white min-w-[70px]">Fawn:</span>
          <span>Building boundaries to resolve people-pleasing and over-caretaking.</span>
        </li>
      </ul>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Scope of Practice</h4>
      <p class="mb-4">Trauma Resolution, Complex Trauma (C-PTSD), Developmental Wounds, Shock Trauma, Medical Trauma, and Chronic Stress / Burnout recovery.</p>
    `,
        packages: [], // Defined by standard rate logic in component
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
    },
    {
        id: "path-3",
        pathLabel: "PATH 3",
        category: "INTEGRATION",
        title: "Consciousness Integration & Expanded States",
        subtitle: "Navigating the Unseen & Grounding the Self",
        intent: "Engaging with expanded states of consciousness—whether through psychedelics, deep meditation, or spontaneous spiritual awakening—can be destabilizing if not properly grounded. This path bridges the gap between \"The Experience\" and \"Daily Life.\" We use Somatic Experiencing (SE™) to stabilize the nervous system (grounding the voltage) and Integrative Coaching to anchor the insights into your physical reality.",
        defaultPrice: 1500,
        perSessionRate: 250,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Methodology</h4>
      <p class="mb-4">This is a hybrid of Somatic Regulation and Life Coaching. We use somatic tools to ensure your nervous system can hold the frequency of your insights, and coaching tools to integrate those insights into your career, relationships, and self-concept.</p>
      
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Resolving the Difficult</h4>
      <p class="mb-4">Not all journeys are blissful. If you have had a "difficult trip" or an overwhelming opening, we use Somatic Experiencing to close open energetic loops, repair boundaries, and re-establish safety in the body.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Spiritual Emergence</h4>
      <p class="mb-4">Support for those navigating "Dark Nights of the Soul," Near-Death Experiences (NDEs), or Kundalini awakenings. We normalize the process and provide the architecture to hold the expansion.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Scope of Practice</h4>
      <p class="mb-4">Psychedelic Integration (Preparation & Processing), Spiritual Emergence, Ancestral & Karmic Pattern Clearing, and processing Ontological Shock (shifts in worldview).</p>

      <p class="text-xs italic text-slate-500 mt-6 border-t border-slate-100 dark:border-slate-800 pt-4">
        <strong>Disclaimer:</strong> Services provided are Life Coaching, Somatic Education, and Spiritual Mentoring. I do not provide, condone, or sit for the use of illegal substances.
      </p>
    `,
        packages: [], // Defined by standard rate logic in component
        ctaLink: "https://docs.google.com/forms/d/e/1FAIpQLSdMdvumB1DSyqxR0BfeBqPkB1a1Zuo_mBkX81yzs2AQZEhKBA/viewform"
    },
    {
        id: "path-4",
        pathLabel: "PATH 4",
        category: "ENERGY MEDICINE",
        title: "Energetic Recalibration",
        subtitle: "Subtle Body Architecture & Intuitive Alignment",
        intent: "This is deep, restorative work for the subtle body. We go beyond relaxation into the architecture of your energy field. Using my background as a Reiki Master and 5/1 Reflector, I act as a mirror to identify and clear energetic distortion. This path combines high-frequency energy work with Integrative Coaching to teach you how to maintain your own energetic hygiene.",
        defaultPrice: 1500,
        perSessionRate: 250,
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Modalities</h4>
      <p class="mb-4"><strong>Usui Holy Fire® III Reiki:</strong> A high-frequency energy that focuses on purification, empowerment, and clearing the Physical and Emotional bodies. It helps burn away dense stress and emotional armoring.</p>
      <p class="mb-4"><strong>Karuna Ki Reiki:</strong> Known as the "Way of Compassionate Action," this frequency targets the Transpersonal and Spiritual bodies. It is specifically potent for shadow work and soothing deep spiritual wounds.</p>
      <p class="mb-4"><strong>Seer & Mediumship Capacities:</strong> Leveraging my Reflector design, we access the unseen. This includes connecting with your "Spirit Team" (guides/ancestors), retrieving fragmented aspects of the self (Soul Retrieval), and clearing ancestral burdens from your lineage.</p>
      <p class="mb-4"><strong>Integrative Coaching & Training:</strong> I do not just clear your energy; I teach you how to hold it. We focus on grounding, shielding, and clearing techniques. <br/><br/><em>Note: For those called to the path, this container can also include training and Attunements to become a Reiki Practitioner.</em></p>
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
        subtitle: "Trauma-Informed Architecture for Visionaries & Organizations",
        intent: "Business bottlenecks are often biological problems in disguise. This path offers High-Level Advisory for Visionaries, Entrepreneurs, and Systems Change Agents. I act as a \"Systemic Auditor,\" viewing the complexity of your project through a polymathic lens—integrating 25+ years of executive strategy with deep expertise in human physiology and trauma. We build systems that are not just efficient, but sustainable.",
        defaultPrice: "Custom",
        perSessionRate: "Varies",
        deepContent: `
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The Systemic Audit</h4>
      <p class="mb-4">I look for the "Check Engine Light" in your business or project. Whether it is a stalled launch, a burning-out team, or a safety gap in your product, I identify the root systemic fracture and provide the roadmap to fix it.</p>
      
      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">The "Human Element" Strategy</h4>
      <p class="mb-4">Leveraging my background in Human Psychology and Rehabilitation, I advise on Organizational Design and Neuro-Inclusive Workflows. We structure your business environment to support the diverse nervous systems of your team and yourself, preventing burnout before it starts. <br/><em class="text-xs">Note: This is strategic consulting, not clinical case management.</em></p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Harm Reduction & Safety</h4>
      <p class="mb-4">For organizations in the Transformational or Wellness space, I design Safety Architectures. I help you build protocols that protect your community and your liability, ensuring your container is as safe as it is expansive.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Integrative Coaching</h4>
      <p class="mb-4">I do not just consult on the business; I mentor the leader. We ensure your leadership style is congruent with your values and your biological capacity.</p>

      <h4 class="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2 mt-4">Scope of Practice</h4>
      <p class="mb-4">Systems Change Consulting, Business Advisory, Workplace Stress & Resilience Audits, Harm Reduction Strategy, Integrative Program Design, and Executive/Leadership Coaching.</p>
    `,
        packages: [
            {
                sessions: "Initial Strategy",
                price: 300,
                label: "Prerequisite Session",
                perSession: "Scope & Fit",
                note: "(Book via Path 1) The prerequisite deep-dive to scope the project and assess fit.",
                save: null
            },
            {
                sessions: "10 Hour Retainer",
                price: 4500,
                label: "The Advisory Retainer",
                perSession: "Strategic Partner",
                note: "The \"Second Brain\": Systemic Expert on speed dial. Strategy calls & priority booking.",
                save: null
            },
            {
                sessions: "Strategic Intensive",
                price: 1800, // Default to Half-Day
                label: "Deep-Dive Intensive",
                perSession: "High-Impact",
                note: "Select duration above. Best for mapping, auditing, or team training.",
                save: null,
                variants: [
                    { name: "Half-Day", price: 1800, duration: "4 Hours" },
                    { name: "Full-Day", price: 3000, duration: "7 Hours" }
                ]
            },
            {
                sessions: "The Project Line",
                price: "Custom",
                label: "Consulting & Management",
                perSession: "Proposal Based",
                note: "Engagements (3-18 months) for implementation of trauma-informed systems.",
                save: null
            }
        ],
        ctaLink: "mailto:Shannon@theintegrativecounselor.com"
    }
];

const alumniPath = {
    title: "PATH 7: THE HORIZON (Alumni Maintenance)",
    text: "If you have worked with me in the past month, you are eligible for 'Grandfathered' rates for tune-ups.",
    linkText: "Email for Alumni Access"
};

// Pricing tier card component for prominent display
const PricingTierCard: React.FC<{
    pkg: any,
    isSelected: boolean,
    onSelect: () => void,
    perSessionRate: number | null,
    isMuted?: boolean,
    variantIdx: number,
    setVariantIdx: (idx: number) => void
}> = ({ pkg, isSelected, onSelect, perSessionRate, isMuted, variantIdx, setVariantIdx }) => {
    const isBestValue = pkg.bestValue;
    const hasVariants = pkg.variants && pkg.variants.length > 0;

    // Determine active price/duration based on variant if present
    const activePrice = hasVariants ? pkg.variants[variantIdx].price : pkg.price;
    const activeDuration = hasVariants ? pkg.variants[variantIdx].duration : pkg.duration;

    // Logic to hide "Sessions" label for specific types
    const sessionLabel = typeof pkg.sessions === 'string' &&
        (pkg.sessions.toLowerCase().includes('retainer') ||
            pkg.sessions.toLowerCase().includes('strategy') ||
            pkg.sessions.toLowerCase().includes('intensive'))
        ? ''
        : (typeof pkg.sessions === 'number' || !pkg.sessions.toString().toLowerCase().includes('week') ? 'Sessions' : '');

    return (
        <div
            onClick={isMuted ? undefined : onSelect}
            className={`relative flex flex-col p-5 rounded-2xl border transition-all duration-500 text-left w-full cursor-pointer
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
                    {pkg.sessions} {sessionLabel}
                </span>

                {/* Duration Badge or Variant Toggle */}
                {!hasVariants ? (
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full 
                        ${isSelected && !isMuted
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                        }`}>
                        {activeDuration || '50 min'}
                    </span>
                ) : (
                    <div className="flex bg-slate-200 dark:bg-slate-800 rounded-full p-0.5">
                        {pkg.variants.map((v: any, idx: number) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setVariantIdx(idx);
                                    onSelect(); // Ensure card selects when toggle is clicked
                                }}
                                className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-full transition-colors ${variantIdx === idx
                                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                            >
                                {v.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    {typeof activePrice === 'number' ? `$${activePrice.toLocaleString()}` : activePrice}
                </span>
                {pkg.originalPrice && !isMuted && !hasVariants && pkg.sessions !== 6 && (
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
        </div>
    );
};

const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [variantIdx, setVariantIdx] = useState(0); // State for variants (e.g. Intensives)

    // Reset variant index when selected package changes (optional, but good for UI consistency)
    // For now we keep it simple since only one package has variants.

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
    if (service.perSessionRate && service.id !== "path-6") {
        const isPath2or3or4 = service.id === "path-2" || service.id === "path-3" || service.id === "path-4";
        packages = [
            calculateTier(service.perSessionRate, 6, isPath2or3or4 ? 0 : 5),
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

    // Handle price display with variant support
    const activePkgPrice = currentPkg?.variants ? currentPkg.variants[variantIdx].price : currentPkg?.price;

    const displayPrice = currentPkg
        ? (typeof activePkgPrice === 'number' ? `$${activePkgPrice.toLocaleString()}` : activePkgPrice)
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
                            {service.perSessionRate && service.id !== "path-2" && service.id !== "path-3" && service.id !== "path-4" && (
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
                                    variantIdx={variantIdx}
                                    setVariantIdx={setVariantIdx}
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


                {/* Divider to push CTA down */}
                <div className="mt-auto border-t border-gray-100 dark:border-gray-800 mb-6"></div>

                {/* Primary CTA */}
                <a
                    href={service.ctaLink}
                    target={isPath6 ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 font-semibold text-center rounded transition-colors duration-200 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-gray-100"
                >
                    {isPath6 ? "Discuss Your Vision" : "Join Priority Waitlist"}
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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
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