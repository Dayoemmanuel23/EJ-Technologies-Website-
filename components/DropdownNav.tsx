import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const DropdownNav = ({ link, handleNavClick }: any) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  // Keep dropdown open until mouse leaves dropdown area (with delay)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };
  const handleButtonClick = () => setOpen((prev) => !prev);
  React.useEffect(() => {
    // Close dropdown if clicking outside
    const handleDocumentClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, []);
  // No longer needed: handleSubLinkClick
  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-brand-blue hover:bg-slate-50 rounded-full transition-all cursor-pointer flex items-center gap-1"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleButtonClick}
      >
        {link.label}
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div
        className={`absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded shadow-lg transition-opacity z-20 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {link.subLinks.map((sub: any) => (
          sub.href.startsWith('/') && sub.href.includes('#') ? (
            <HashLink
              key={sub.label}
              to={sub.href}
              smooth
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-brand-blue cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {sub.label}
            </HashLink>
          ) : sub.href.startsWith('/') ? (
            <Link
              key={sub.label}
              to={sub.href}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-brand-blue cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {sub.label}
            </Link>
          ) : (
            <a
              key={sub.label}
              href={sub.href}
              onClick={(e) => { handleNavClick(e, sub.href); setOpen(false); }}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-brand-blue cursor-pointer"
            >
              {sub.label}
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default DropdownNav;