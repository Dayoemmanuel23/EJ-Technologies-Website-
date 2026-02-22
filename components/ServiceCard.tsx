import React from 'react';

import { ServiceItem } from '../types';

import { Check } from 'lucide-react';



interface ServiceCardProps {

  service: ServiceItem;

  theme?: 'light' | 'dark';

}



const ServiceCard: React.FC<ServiceCardProps> = ({ service, theme = 'light' }) => {

  const isGreen = service.colorTheme === 'green';

  const isDark = theme === 'dark';

 

  // Dynamic styles based on theme

  const bgClass = isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100';

  const titleClass = isDark ? 'text-white' : 'text-slate-900';

  const descClass = isDark ? 'text-slate-400' : 'text-slate-600';

  const featureTextClass = isDark ? 'text-slate-300' : 'text-slate-600';

 

  // Updated Colors for Icon Backgrounds

  const iconBgClass = isDark

    ? (isGreen ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-blue/20 text-brand-blue')

    : (isGreen ? 'bg-brand-green/10 text-brand-darkGreen' : 'bg-brand-blue/10 text-brand-blue');



  return (

    <div className={`group relative flex flex-col h-full overflow-hidden rounded-2xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl border ${bgClass}`}>

      <div className={`absolute top-0 left-0 h-1 w-full ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`} />

      {service.imageUrl && (

        <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />

      )}

      <div className="p-8 flex-1 flex flex-col">

        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconBgClass}`}>

          <service.icon size={28} strokeWidth={2} />

        </div>

       

        <h3 className={`mb-3 text-xl font-bold ${titleClass}`}>

          {service.title}

        </h3>

       

        <p className={`mb-6 leading-relaxed flex-1 ${descClass}`}>

          {service.description}

        </p>

       

        <div className={`border-t pt-6 ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>

           <ul className="space-y-3">

            {service.features.map((feature, idx) => (

                <li key={idx} className={`flex items-start text-sm ${featureTextClass}`}>

                <Check className={`mr-2 h-5 w-5 shrink-0 ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`} />

                <span>{feature}</span>

                </li>

            ))}

            </ul>

        </div>

      </div>

    </div>

  );

};



export default ServiceCard;