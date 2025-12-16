import { BlogPost, Testimonial, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "Substack",
        href: "https://theintegrativepractitioner.substack.com/",
        iconText: "S",
        colorClass: "text-orange-500"
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/theintegrativepractitioner/",
        iconText: "IG",
        colorClass: "text-pink-500"
    },
    {
        label: "Threads",
        href: "https://www.threads.com/@theintegrativepractitioner",
        iconText: "@",
        colorClass: "text-gray-800 dark:text-gray-200"
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theintegrativepractitioner/",
        iconText: "f",
        colorClass: "text-blue-600"
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@theintegrativepractitioner",
        iconText: "▶",
        colorClass: "text-red-500"
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "This is a sample testimonial. The work we did together was transformative and helped me gain clarity.",
        author: "Jane Doe",
        role: "Founder, Tech Startup"
    },
    {
        quote: "Another great testimonial highlighting the impact of the services provided.",
        author: "John Smith",
        role: "CEO, Creative Agency"
    },
    {
        quote: "A third testimonial to show the breadth of positive feedback from clients.",
        author: "Alex Johnson",
        role: "Leader, Non-Profit"
    }
];

export const BLOG_POSTS: BlogPost[] = [
    // This is fallback content if the Substack feed fails to load.
    {
        category: "Insight",
        title: "Loading Latest Insights...",
        excerpt: "Fetching the latest articles from The Integrative Practitioner on Substack. If you're seeing this, there might be an issue with the feed.",
        date: "Recently",
        readTime: "5 min read",
        imageUrl: 'https://images.unsplash.com/photo-1499750310159-5b5f09692a6a?auto=format&fit=crop&q=80&w=800',
        link: "https://theintegrativepractitioner.substack.com/"
    }
];