import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colorTheme: 'blue' | 'green'; // To differentiate Tech vs CAC/Eco
  features: string[];
  imageUrl?: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  modules: string[];
  duration?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  company: string;
}

export interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}