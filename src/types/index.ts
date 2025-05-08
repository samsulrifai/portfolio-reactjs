import type { LucideIcon } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  briefDescription: string;
  detailedDescription: string | React.ReactNode;
  imageUrl: string;
  category: string;
  tags?: string[];
  projectUrl?: string;
  client?: string;
  date?: string;
}

export interface Skill {
  name: string;
  level?: number; // Optional: 0-100 for proficiency bar
  icon?: React.ReactNode; // e.g. SVG or Lucide icon
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logoUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
