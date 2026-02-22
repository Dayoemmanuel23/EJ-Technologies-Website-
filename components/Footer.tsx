import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from './Logo';
import { newsletterService } from '../services/api';

const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailPattern.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
      return;
    }

    setNewsletterStatus('loading');
    try {
      await newsletterService.subscribe(newsletterEmail);
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    } catch (err) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
      console.error('Newsletter subscription error:', err);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold text-slate-900">
                EJ <span className="text-brand-blue">Technologies</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Bridging the gap between technology and corporate compliance in Nigeria. We build the future while securing your business today.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/ejtechnologies1st" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
              <a href="https://x.com/ejtechnologies" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/ejtechnologies_/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="font-semibold text-brand-blue">Technology Services</li>
              <li className="pl-3"><HashLink smooth to="/technology-services#software" className="hover:text-brand-blue transition-colors cursor-pointer">Software</HashLink></li>
              <li className="pl-3"><HashLink smooth to="/technology-services#apps" className="hover:text-brand-blue transition-colors cursor-pointer">Apps</HashLink></li>
              <li className="pl-3"><HashLink smooth to="/technology-services#training" className="hover:text-brand-blue transition-colors cursor-pointer">Academy</HashLink></li>
              <li className="pl-3"><HashLink smooth to="/technology-services#branding" className="hover:text-brand-blue transition-colors cursor-pointer">Branding</HashLink></li>
              <li className="font-semibold text-brand-green pt-2">Corporate Services</li>
              <li className="pl-3"><HashLink smooth to="/corporate-services#cac" className="hover:text-brand-green transition-colors cursor-pointer">CAC Registration</HashLink></li>
              <li className="pl-3"><HashLink smooth to="/corporate-services#tax" className="hover:text-brand-green transition-colors cursor-pointer">Tax Consultancy</HashLink></li>
              <li><HashLink smooth to="/solar#solar" className="hover:text-brand-green transition-colors cursor-pointer">Solar Installation</HashLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-blue shrink-0" />
                <span>79, Ago Palace Way, Opposite Domino's Pizza,<br />Okota, Isolo, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                <span>+234 806 412 6498</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                <span>info@ejtechnologies.com.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to get updates on tax regulations and tech trends.</p>
            {newsletterStatus === 'success' && (
              <div className="text-green-600 text-sm font-medium p-3 bg-green-50 rounded mb-4">
                ✓ Subscribed successfully!
              </div>
            )}
            {newsletterStatus === 'error' && (
              <div className="text-red-600 text-sm font-medium p-3 bg-red-50 rounded mb-4">
                Failed to subscribe. Try again.
              </div>
            )}
            {newsletterStatus === 'idle' && (
              <form className="flex flex-col gap-2" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  id="newsletter-email"
                  name="newsletterEmail"
                  placeholder="Enter your email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="bg-white border border-slate-300 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-brand-blue text-slate-900 outline-none"
                />
                <button 
                  type="submit"
                  className="bg-brand-blue text-white px-4 py-2 rounded text-sm font-medium hover:bg-brand-darkBlue transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-xs text-slate-500">
          <p>&copy; 2026 EJ Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;