import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Link, useNavigate } from 'react-router-dom';

import Button from './Button';
import { HashLink } from 'react-router-hash-link';
import Logo from './Logo';
import DropdownNav from './DropdownNav';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed z-50 transition-all duration-300 left-0 right-0 px-4 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div 
          className={`mx-auto max-w-5xl transition-all duration-300 ${
            scrolled 
              ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/50 rounded-full py-2.5 pl-4 pr-3 border border-slate-200/50' 
              : 'bg-transparent py-2'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-3 relative z-10 group" style={{ textDecoration: 'none' }}>
              <Logo className="h-12 w-auto" />
              <span className={`text-xl font-bold tracking-tight whitespace-nowrap ${scrolled ? 'text-slate-900' : 'text-slate-900'} group-hover:text-brand-blue transition-colors`}>
                EJ <span className="text-brand-blue">Technologies</span>
              </span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) =>
                link.subLinks ? (
                  <DropdownNav key={link.label} link={link} handleNavClick={handleNavClick} />
                ) : (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-full transition-all cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-full transition-all cursor-pointer"
                    >
                      {link.label}
                    </a>
                  )
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <HashLink smooth to="/#contact">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="rounded-full px-5"
                >
                  Get Quote
                </Button>
              </HashLink>
            </div>
            
            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-in slide-in-from-top-10 fade-in duration-200">
           <div className="pt-24 px-6 flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) =>
                  link.subLinks ? (
                    <div key={link.label}>
                      <div className="text-xl font-bold text-slate-800 py-2">{link.label}</div>
                      <div className="pl-4 flex flex-col">
                        {link.subLinks.map((sub) => (
                          sub.href.startsWith('/') ? (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="text-lg text-slate-700 hover:text-brand-blue py-1 border-b border-slate-50"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="text-lg text-slate-700 hover:text-brand-blue py-1 border-b border-slate-50"
                              onClick={(e) => handleNavClick(e, sub.href)}
                            >
                              {sub.label}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    link.href.startsWith('/') ? (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="text-2xl font-bold text-slate-800 hover:text-brand-blue py-2 border-b border-slate-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-2xl font-bold text-slate-800 hover:text-brand-blue py-2 border-b border-slate-50"
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.label}
                      </a>
                    )
                  )
                )}
              </div>
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="w-full justify-center" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Get Your Free Quote
                </Button>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;