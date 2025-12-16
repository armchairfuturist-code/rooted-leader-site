import { BlogPost, SocialLink, Testimonial } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
    {
        href: "https://theintegrativepractitioner.substack.com/",
        label: "Substack",
        iconText: "S",
        colorClass: "text-orange-500"
    },
    {
        href: "https://www.instagram.com/theintegrativepractitioner/",
        label: "Instagram",
        iconText: "I",
        colorClass: "text-pink-500"
    },
    {
        href: "https://www.threads.com/@theintegrativepractitioner",
        label: "Threads",
        iconText: "T",
        colorClass: "text-gray-700"
    },
    {
        href: "https://www.facebook.com/theintegrativepractitioner/",
        label: "Facebook",
        iconText: "f",
        colorClass: "text-blue-600"
    },
    {
        href: "https://www.youtube.com/@theintegrativepractitioner",
        label: "YouTube",
        iconText: "Y",
        colorClass: "text-red-500"
    }
];

export const TESTIMONIALS: Testimonial[] = [
    // ... existing testimonials
];

export const BLOG_POSTS: BlogPost[] = [
    // ... existing fallback blog posts
];

export const NAV_LINKS = [
    { name: 'Services', href: '#services' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];