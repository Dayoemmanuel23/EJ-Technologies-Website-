import React from 'react';
import Button from './Button';
import { HashLink } from 'react-router-hash-link';
import { ArrowRight, Code, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  // No longer needed: scrollTo

  return (
    <div id="home" className="relative bg-slate-50 pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[10%] left-1/4 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 shadow-sm mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
          <span className="text-sm font-medium text-slate-600">The #1 Choice for Nigerian Businesses</span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl mb-8 leading-[1.1]">
          Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-darkBlue">Digital</span> & 
          <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-cac"> Corporate</span> Future.
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
          EJ Technologies bridges the gap between expert software engineering and seamless business compliance. From CAC registration to Enterprise ERPs, we are your foundation for growth.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <HashLink smooth to="/#contact">
            <Button variant="primary" size="lg" className="rounded-full px-8 h-14">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </HashLink>
          <HashLink smooth to="/#services-overview">
            <Button variant="secondary" size="lg" className="rounded-full px-8 h-14">
              Explore Services
            </Button>
          </HashLink>
        </div>

        {/* Feature Cards / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
           {/* Card 1 */}
           <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-12 w-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Tech Solutions</h3>
              <p className="text-sm text-slate-500 mb-4">Web, Mobile, and Enterprise Software built for scale.</p>
              <div className="flex items-center gap-2">
                 <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-brand-blue rounded-full"></div>
                 </div>
                 <span className="text-xs font-bold text-slate-700">99% Uptime</span>
              </div>
           </div>

           {/* Card 2 */}
           <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-12 w-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Corporate Compliance</h3>
              <p className="text-sm text-slate-500 mb-4">CAC Registration and Tax Consultancy handled by pros.</p>
              <div className="flex items-center gap-2">
                 <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-brand-green rounded-full"></div>
                 </div>
                 <span className="text-xs font-bold text-slate-700">100% Legit</span>
              </div>
           </div>

           {/* Card 3 */}
           <div className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-12 w-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Energy & Brand</h3>
              <p className="text-sm text-slate-500 mb-4">Solar installation and world-class branding services.</p>
              <div className="flex items-center gap-2">
                 <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-amber-500 rounded-full"></div>
                 </div>
                 <span className="text-xs font-bold text-slate-700">24/7 Power</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;