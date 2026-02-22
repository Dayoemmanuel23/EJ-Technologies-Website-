import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: 'blue' | 'green';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  color = 'blue'
}) => {
  return (
    <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className={`text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4`}>
        {title}
        <span className={`block h-1.5 w-20 mt-3 rounded-full ${align === 'center' ? 'mx-auto' : ''} ${color === 'green' ? 'bg-brand-green' : 'bg-brand-blue'}`}></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;