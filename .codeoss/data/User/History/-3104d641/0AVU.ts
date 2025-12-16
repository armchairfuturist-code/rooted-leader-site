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
    { title: "Integrative Whole Self Coaching", icon: "favorite_border" },
    { title: "Somatic Experiencing™ Practices", icon: "psychology" },
    { title: "Awakened and Regulated Leadership Coaching", icon: "security" },
    { title: "Spiritual Emergence Integration", icon: "visibility" },
    { title: "Reiki Energy Balancing Attunement Services", icon: "north" },
    { title: "Consulting and Speaking Services", icon: "work_outline" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: "Instagram", label: "Instagram", iconText: "Ig", colorClass: "text-pink-600" },
    { platform: "Threads", label: "Threads", iconText: "@", colorClass: "text-slate-900 dark:text-white" },
    { platform: "Facebook", label: "Facebook", iconText: "Fb", colorClass: "text-blue-600" },
    { platform: "YouTube", label: "YouTube", iconText: "Yt", colorClass: "text-red-600" },
    { platform: "Substack", label: "Substack", iconText: "Sb", colorClass: "text-orange-500" },
];