import type { SocialLink } from '@/types';
import { Github, Linkedin, Twitter, Mail, Rss } from 'lucide-react';

export const APP_NAME = 'Visual Echo';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter },
  { name: 'Email', url: 'mailto:youremail@example.com', icon: Mail },
  // { name: 'Blog', url: '/blog', icon: Rss }, // Example for an internal link
];
