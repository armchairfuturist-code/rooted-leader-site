export interface NavLink {
    label: string;
    href: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface BlogPost {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    imageUrl: string;
    link: string;
}

export interface Service {
    title: string;
    icon: string;
}

export interface SocialLink {
    platform: string;
    label: string;
    iconText: string;
    colorClass: string;
}