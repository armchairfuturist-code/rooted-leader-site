import { NavLink, Testimonial, BlogPost, Service, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
    { label: 'About Shannon', href: '#about' },
    { label: 'Success Stories', href: '#testimonials' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "It's been awesome being in this group and working together. I'm thrilled with the results! I've improved in so many areas I had not planned on. I'm sleeping better, eating much healthier, drinking more water... I've learned to be more open minded to change.",
        author: "Angie",
        role: "Health + Life Coaching Client"
    },
    {
        quote: "I hemmed and hawed over joining this group for days before I bit the bullet. I'm so grateful that I did! For the first time in four years I feel like I have control over my diet, my decision making, my path in life.",
        author: "Doris",
        role: "Health + Life Coaching Client"
    },
    {
        quote: "Thank you for your time today, time spent reading what I sent, and the time you will spend putting things together for me. I feel like you really get me and I sense your genuine determination to help me... I have been praying to have hope.",
        author: "Christina",
        role: "Virtual Health Coaching Client"
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        category: "Trauma & Healing",
        title: "The Myth of \"Just Letting Go\"",
        excerpt: "Why cognitive strategies fail when the nervous system is stuck in survival mode, and what to do instead.",
        date: "Oct 24",
        readTime: "5 min read",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNnsvTDISxwEUsAubwA0H1R_DjXyBKxuGV2P24tsYQvmqBrD2WbQA01ME-bFlFEcYZpdaWnCRMgErItuklX-8y3ShUDbJWdrZW6-BksqY6vGnTOBkVQzgrQHR91tau1BNK-Qc5DUDJEIxai8fgz3bR__XZJUPZaDvePt_pgssb0cs5namSmsx7bh9ig2EG1gk8ioo1BcwaMMWfncrL7B-nI_9mRHY3uLluejgDcidmmnlGE3tAN6q5xoy4X2otsoAbUHDGAI82xc0",
        link: "https://theintegrativepractitioner.substack.com/"
    },
    {
        category: "Somatic Practice",
        title: "Returning to the Body",
        excerpt: "Simple somatic tools you can use at your desk to regulate your nervous system during a high-stress workday.",
        date: "Oct 18",
        readTime: "4 min read",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8HENEEiPcmn7OjrKQq5AVTYnO7sYFKm5nQvXyL5UEth6jgJAHFvp8ExasoIFv41EKXS9XIFbOKDwadZjLurG8G678etHuhEDemM2Qmvr18sgFRIRAFBQXKefCK8d81VGiRuNQINVNVUFNme6Qo-RV6ASEkJy4v_bnwr7__jQi48yfS5ep4-s2jiY0TP0GZHJr-NnGBI_37RrbrmU4zYSvUSY2xm21-neisOq4fR84JsaK4DXlG6MLi5wncVQ-vlSobIZipoPy_8A",
        link: "https://theintegrativepractitioner.substack.com/"
    },
    {
        category: "Leadership",
        title: "Leading From Within",
        excerpt: "Authentic leadership isn't about strategies; it's about the quality of presence you bring into the room.",
        date: "Oct 10",
        readTime: "7 min read",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8NGuRdaOhNY_1icjKE-BiUifBTS5PNpQeQMlOQSvFRBLOkkiGQ7v0DrMdVOnQn9BMhjKXcdPq7-jNd1Dcz9T1liNTXPhelvH942Yu-LTkdK3zrv2NNcoXCHtevstAATUF0TmHHea47Xm-uZN-HoaSS0na_jEtwIYBUS9AJa2BqDE4Ks5JYVqfRt7eW5tnYRaZQ-g9VJyyxEZ9tV4vlNaVt99mJnGi3eWBZkFLylxytw9WLMaH5fxleycVXNqtxSn8_khRWXoVcfM",
        link: "https://theintegrativepractitioner.substack.com/"
    }
];

export const SERVICES: Service[] = [
    {
        title: "Integrative Whole Self Coaching",
        description: "Stuck in life, your career, or in a life transition? This one-on-one signature coaching offering guides you to regulate your nervous system, recover from stress and trauma, and reconnect you with your Authentic Self. Using cutting-edge neuroscience, somatic practices, and ancient holistic wisdom.",
        icon: "favorite_border"
    },
    {
        title: "Somatic Experiencing™ Practices and Nervous System Regulation Coaching",
        description: "Body-based healing that integrates trauma and stress stored in your nervous system without requiring you to relive painful memories - creating safety and wholeness from within. This is highly educational and each session rebuilds your nervous system and innate capacity to be your Authentic Self.",
        icon: "psychology"
    },
    {
        title: "Awakened and Regulated Leadership Coaching",
        description: "Tailored support for founders, business owners, and executives to lead with emotional stability, make clear decisions under pressure, and maintain peak performance without sacrificing well-being or living an awakened life.",
        icon: "security"
    },
    {
        title: "Spiritual Emergence and Psychedelic Integration Coaching",
        description: "Expert support to ground and integrate insight from psychedelic experiences, spiritual awakenings, non-ordinary states, dark nights of the soul, and profound life transitions that feel overwhelming or confusing to navigate alone. Make practical life changes and personally grow in these sessions. Note: Shannon does not act as a guide, sitter, or a psychedelic-assisted therapist. This service is purely coaching and no substances are recommended or provided.",
        icon: "visibility"
    },
    {
        title: "Reiki Energy Balancing and Attunement Services",
        description: "Distance virtual Usui Holy Fire and Karuna Ki reiki energy balancing. This service is trauma-informed and balances your mind, body, spirit, and energy now, at any time in the past, and can help to manifest future goals. Shannon can also attune you to reiki to become a trauma-informed reiki practitioner.",
        icon: "north"
    },
    {
        title: "Consulting and Speaking Services for Organizations",
        description: "Expert consulting and speaking engagements for organizations looking to foster resilience, improve leadership, and create healthier work environments. Topics include nervous system health, trauma-informed practices, and integrative wellness.",
        icon: "work_outline"
    },
];

// In /home/armchairfuturist/constants.ts

export const SOCIAL_LINKS = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/theintegrativepractitioner/',
        iconText: 'I', // Or an appropriate icon/character
        colorClass: 'text-pink-500'
    },
    {
        label: 'Threads',
        href: 'https://www.threads.com/@theintegrativepractitioner',
        iconText: 'T', // Or an appropriate icon/character
        colorClass: 'text-gray-800 dark:text-gray-200'
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/theintegrativepractitioner/',
        iconText: 'F', // Or an appropriate icon/character
        colorClass: 'text-blue-600'
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@theintegrativepractitioner',
        iconText: 'Y', // Or an appropriate icon/character
        colorClass: 'text-red-500'
    },
    {
        label: 'Substack',
        href: 'https://theintegrativepractitioner.substack.com/',
        iconText: 'S', // Or an appropriate icon/character
        colorClass: 'text-orange-500'
    },
    {
        label: 'Email',
        href: 'mailto:shannon@theintegrativecounselor.com',
        iconText: 'E',
        colorClass: 'text-primary'
    }
];

// ... other constants like TESTIMONIALS, etc.
