import { 
  Code, 
  Smartphone, 
  Globe, 
  FileCheck, 
  Sun, 
  Calculator, 
  Palette,
  Terminal,
  Shield,
  Server,
  BarChart3,
  GraduationCap
} from 'lucide-react';
import { ServiceItem, NavLink, Testimonial, TrainingCourse } from './types';


// Multi-page navigation: group under Technology Services
export const NAV_LINKS: NavLink[] = [
  {
    label: 'Technology Services',
    href: '/technology-services',
    subLinks: [
      { label: 'Software', href: '/technology-services#software' },
      { label: 'Apps', href: '/technology-services#apps' },
      { label: 'Academy', href: '/technology-services#academy' },
      { label: 'Branding', href: '/technology-services#branding' },
    ]
  },
  {
    label: 'Corporate Services',
    href: '/corporate-services',
    subLinks: [
      { label: 'CAC', href: '/corporate-services#cac' },
      { label: 'Tax', href: '/corporate-services#tax' },
    ]
  },
  { label: 'Solar', href: '/solar' },
];

export const TECH_SERVICES: ServiceItem[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom enterprise ERPs and robust software architectures tailored for scalability.',
    icon: Code,
    colorTheme: 'blue',
    features: ['Enterprise ERP', 'SaaS Platforms', 'Cloud Solutions'],
    imageUrl: '/Images/software.png'
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'High-performance web apps built with React, Next.js, and modern tools.',
    icon: Globe,
    colorTheme: 'blue',
    features: ['SPA Development', 'E-commerce', 'Progressive Web Apps']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android markets.',
    icon: Smartphone,
    colorTheme: 'blue',
    features: ['iOS & Android', 'React Native', 'Flutter']
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'training-software',
    title: 'Software Development',
    description: 'Master the art of building scalable applications from scratch. Our curriculum takes you from logic fundamentals to complex enterprise architecture.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    icon: Terminal,
    modules: ['Full Stack Development (MERN)', 'System Design & Architecture', 'API Development', 'Agile Methodologies'],
    duration: '6 Months'
  },
  {
    id: 'training-cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect digital assets in an increasingly hostile landscape. Learn defensive strategies, ethical hacking, and compliance to safeguard infrastructure.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000',
    icon: Shield,
    modules: ['Ethical Hacking & Penetration Testing', 'Network Security Protocols', 'Risk Assessment & Compliance', 'Incident Response'],
    duration: '4 Months'
  },
  {
    id: 'training-devops',
    title: 'DevOps Engineering',
    description: 'Bridge the gap between development and operations. Learn to automate deployment pipelines, manage containers, and scale cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    icon: Server,
    modules: ['CI/CD Pipelines (Jenkins/GitLab)', 'Containerization (Docker & K8s)', 'IaC (Terraform)', 'Cloud Services (AWS/Azure)'],
    duration: '5 Months'
  },
  {
    id: 'training-data',
    title: 'Data Analysis',
    description: 'Transform raw data into actionable business insights. Master the tools needed to visualize trends and drive strategic decision-making.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
    icon: BarChart3,
    modules: ['Python for Data Science', 'SQL & Database Management', 'Data Visualization (PowerBI)', 'Statistical Analysis'],
    duration: '4 Months'
  }
];

export const CORPORATE_SERVICES: ServiceItem[] = [
  {
    id: 'cac-registration',
    title: 'CAC Registration',
    description: 'Official business registration with the Corporate Affairs Commission. We handle the bureaucracy.',
    icon: FileCheck,
    colorTheme: 'green',
    features: ['Business Name', 'Company (LTD)', 'NGO/Incorporated Trustees', 'Post-Incorporation'],
    imageUrl: '/Images/advert.jpeg'
  },
  {
    id: 'tax-consultancy',
    title: 'Tax Consultancy',
    description: 'Comprehensive tax advisory to keep your business compliant with FIRS and State boards.',
    icon: Calculator,
    colorTheme: 'green',
    features: ['VAT & CIT Filing', 'TCC Processing', 'Tax Audits', 'Regulatory Advisory']
  }
];

export const OTHER_SERVICES: ServiceItem[] = [
  {
    id: 'company-branding',
    title: 'Company Branding',
    description: 'Strategic branding to give your business a world-class identity from day one.',
    icon: Palette,
    colorTheme: 'blue',
    features: ['Logo Design', 'Brand Strategy', 'Corporate Identity']
  },
  {
    id: 'solar-energy',
    title: 'Solar Energy',
    description: 'Sustainable power solutions to keep your business running 24/7 without noise.',
    icon: Sun,
    colorTheme: 'green',
    features: ['Inverter Installation', 'Solar Panels', 'Energy Audits']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sanusi Nosiru Adeshina",
    role: "Founder",
    company: "Nasworld International Nigeria Ltd",
    text: "EJ Technologies handled our CAC registration, been handling our compliance in timely payment of taxes and built our tracking software. Professional from start to finish."
  },
  {
    id: 2,
    name: "Alex Onyeka",
    role: "CEO",
    company: "Stockall Solutions Ltd",
    text: "Their branding team gave us a world-class identity that stands out, and the pace of delivery is mind blowing. Highly recommended for creative work."
  },
  {
    id: 3,
    name: "Oyinye Nkemka",
    role: "Managing Director",
    company: "Realdot Properties Ltd",
    text: "Tax compliance used to be a headache until EJ Technologies took over. Now we focus on growing our business and expanding to other regions."
  }
];

// Helper to convert training course to service item for dropdown
const trainingAsServices: ServiceItem[] = TRAINING_COURSES.map(c => ({
  id: c.id,
  title: `Training: ${c.title}`,
  description: c.description,
  icon: c.icon,
  colorTheme: 'blue',
  features: c.modules
}));

export const SERVICES = [...TECH_SERVICES, ...trainingAsServices, ...CORPORATE_SERVICES, ...OTHER_SERVICES];