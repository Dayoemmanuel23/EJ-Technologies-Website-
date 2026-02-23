import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import SectionHeader from '../components/SectionHeader';
import StorySection from '../components/StorySection';
import TrainingCard from '../components/TrainingCard';
import { Code, Smartphone, Palette } from 'lucide-react';
import { TRAINING_COURSES } from '../constants';


const TechnologyServicesPage: React.FC = () => {
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
        <div className="pt-20 pb-8 px-4">
          <SectionHeader 
            title="Technology Services" 
            subtitle="Robust software solutions for the modern enterprise."
            align="center"
            color="blue"
          />
        </div>

        {/* Ensure IDs for hash navigation */}
        <div id="software">
          <StorySection
            id="software-section"
            theme="blue"
            title="Software Development"
            subtitle="Enterprise Solutions"
            description="We engineer robust, scalable software architectures that serve as the backbone of your enterprise. From custom ERPs to complex cloud infrastructures, our code drives your business logic efficiently."
            icon={Code}
            features={[
              "Custom ERP Development",
              "Cloud Infrastructure Management",
              "API Integration & Development",
              "Legacy System Modernization"
            ]}
            image="/software.png"
          />
        </div>

        <div id="apps">
          <StorySection
            id="apps-section"
            theme="blue"
            reversed={true}
            title="Web & Mobile Applications"
            subtitle="User Experience"
            description="In a mobile-first world, we craft applications that are not just functional but delightful. Using React Native and Flutter, we deliver seamless cross-platform experiences that keep your users engaged."
            icon={Smartphone}
            features={[
              "iOS & Android Development",
              "Progressive Web Apps (PWA)",
              "E-commerce Platforms",
              "User-Centric UI/UX Design"
            ]}
            image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1000"
          />
        </div>

        <div id="academy">
          <div id="training" className="pt-24 pb-12 bg-slate-50/50">
            <div className="px-4">
              <SectionHeader 
                title="Training Academy" 
                subtitle="Empowering your workforce with in-demand technical skills."
                align="center"
                color="blue"
              />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TRAINING_COURSES.map((course) => (
                  <TrainingCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="branding">
          <div className="pt-24 pb-8 px-4">
            <SectionHeader 
              title="Company Branding" 
              subtitle="Identity & Design"
              align="center"
              color="blue"
            />
          </div>
          <StorySection
            id="branding-section"
            theme="blue"
            reversed={true}
            title="Company Branding"
            subtitle="Identity & Design"
            description="First impressions matter. We give your business a world-class identity that stands out in the market. From logo design to complete corporate style guides, we visualize your brand's voice."
            icon={Palette}
            features={[
              "Logo Design & Brand Marks",
              "Corporate Identity Packages",
              "Marketing Collateral",
              "Brand Strategy Guidelines"
            ]}
            image="/Brand1.png"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TechnologyServicesPage;
