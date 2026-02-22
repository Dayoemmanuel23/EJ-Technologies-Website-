import React from 'react';
import { LucideIcon, Check } from 'lucide-react';
import Button from './Button';
import { HashLink } from 'react-router-hash-link';

interface StorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  features: string[];
  theme: 'blue' | 'green';
  reversed?: boolean;
}

const StorySection: React.FC<StorySectionProps> = ({
  id,
  title,
  subtitle,
  description,
  image,
  icon: Icon,
  features,
  theme,
  reversed = false,
}) => {
  const isGreen = theme === 'green';
  
  // Theme configuration
  const accentColor = isGreen ? 'text-brand-green' : 'text-brand-blue';
  const buttonVariant = isGreen ? 'green' : 'primary';
  const iconBg = isGreen ? 'bg-brand-green/10' : 'bg-brand-blue/10';
  const checkBg = isGreen ? 'bg-green-100 text-brand-green' : 'bg-blue-100 text-brand-blue';

  // No longer needed: handleScroll

  return (
    <section id={id} className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content Side */}
          <div className="flex-1 flex flex-col justify-center">
            <div className={`inline-flex items-center self-start rounded-full ${iconBg} px-4 py-1.5 text-sm font-bold ${accentColor} mb-6`}>
                {Icon && <Icon size={16} className="mr-2" />}
                {subtitle}
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className={`flex-shrink-0 h-6 w-6 rounded-full ${checkBg} flex items-center justify-center mt-0.5`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <HashLink smooth to="/#contact">
                <Button 
                  variant={buttonVariant} 
                  className="rounded-full px-8"
                >
                  Get Started
                </Button>
              </HashLink>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-[48%]">
            <div className={`relative aspect-auto rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center ${isGreen ? 'shadow-brand-green/20 bg-brand-green/5' : 'shadow-brand-blue/20 bg-brand-blue/5'}`}>
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 opacity-10 ${isGreen ? 'bg-brand-green mix-blend-multiply' : 'bg-brand-blue mix-blend-multiply'}`}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;