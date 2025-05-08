import type { SocialLink } from '@/types';
import { Github, Linkedin, Twitter, Mail, Rss } from 'lucide-react'; // Rss can be kept if a blog is planned
import { aboutMe } from './data'; // Import aboutMe

export const APP_NAME = 'Portfolio';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Projects' }, // Changed "Works" to "Projects" for broader appeal
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: `https://linkedin.com/in/${aboutMe.name.toLowerCase().replace(/\s+/g, '')}`, icon: Linkedin }, // Made URL dynamic
  { name: 'Email', url: `mailto:${aboutMe.name.toLowerCase().replace(/\s+/g, '')}@example.com`, icon: Mail }, // Made URL dynamic, placeholder email
  // Add other relevant social links for Digital Marketing, e.g., Twitter, Instagram if used professionally
  // { name: 'GitHub', url: 'https://github.com/samsulrifai', icon: Github }, // Can be commented out if not relevant
  // { name: 'Instagram', url: 'https://twitter.com/yourusername', icon: Twitter }, // Placeholder, update if used
];
