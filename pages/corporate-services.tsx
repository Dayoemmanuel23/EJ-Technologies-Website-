import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import SectionHeader from '../components/SectionHeader';
import StorySection from '../components/StorySection';
import { FileCheck, Calculator } from 'lucide-react';


const CorporateServicesPage: React.FC = () => {
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
            title="Corporate Services" 
            subtitle="Navigating bureaucracy so you can focus on business."
            align="center"
            color="green"
          />
        </div>

        <StorySection
          id="cac"
          theme="green"
          title="CAC Registration"
          subtitle="Corporate Compliance"
          description="Legitimacy is the first step to business success in Nigeria. We remove the bureaucratic headache of dealing with the Corporate Affairs Commission, ensuring your business is registered correctly and quickly."
          icon={FileCheck}
          features={[
            "Business Name Registration",
            "Limited Liability Company (LTD)",
            "Incorporated Trustees (NGO)",
            "Post-Incorporation Services"
          ]}
          image="/advert.jpeg"
        />

        <StorySection
          id="tax"
          theme="green"
          reversed={true}
          title="Tax Consultancy"
          subtitle="Financial Advisory"
          description="Navigate the complexities of Nigerian tax laws with confidence. Our experts ensure you stay compliant with FIRS and State Boards, helping you avoid penalties while optimizing your tax liabilities."
          icon={Calculator}
          features={[
            "VAT & CIT Filing",
            "Tax Clearance Certificates (TCC)",
            "Tax Audit Representation",
            "Regulatory Advisory"
          ]}
          image="/tax.png"
        />
      </main>
      <Footer />
    </>
  );
};

export default CorporateServicesPage;
