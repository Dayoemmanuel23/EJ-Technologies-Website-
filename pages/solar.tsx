import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import { Sun, Check } from 'lucide-react';
import Button from '../components/Button';
import { HashLink } from 'react-router-hash-link';

const SolarPage: React.FC = () => {
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              {/* Content Side */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center self-start rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-bold text-brand-green mb-6">
                  <Sun size={16} className="mr-2" />
                  Sustainable Power
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
                  Solar Energy Solutions
                </h2>
                <p className="text-lg leading-relaxed text-slate-600 mb-8">
                  Power your business 24/7 without the noise and cost of generators. Our sustainable solar energy installations provide clean, reliable electricity, reducing your operational costs and carbon footprint.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                  {[
                    "Inverter Installation",
                    "Solar Panel Deployment",
                    "Energy Audits",
                    "Maintenance & Support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mt-0.5">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <HashLink smooth to="/#contact">
                    <Button 
                      variant="green" 
                      className="rounded-full px-8"
                    >
                      Get Started
                    </Button>
                  </HashLink>
                </div>
              </div>
              {/* Image Side - Both Solar Images Side by Side */}
              <div className="w-full lg:w-[48%]">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-green/20 bg-brand-green/5">
                  <div className="flex gap-4 p-4">
                  <img 
                    src="/Solar.jpeg" 
                    alt="Solar Installation" 
                    className="flex-1 h-auto object-contain rounded-lg transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="/Solar1.jpeg" 
                    alt="Solar Installation 2" 
                    className="flex-1 h-auto object-contain rounded-lg transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
    <Footer />
  </>)
}

export default SolarPage;
