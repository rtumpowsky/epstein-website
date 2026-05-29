import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';

export default function Navigation({ currentPage, setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto pl-4 pr-4 md:pr-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <button 
            className="cursor-pointer text-left" 
            onClick={() => setCurrentPage('home')}
            aria-label="Go to home page"
          >
            <h1 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900">Dr. Michelle A. Epstein, PhD</h1>
            <p className="text-xs md:text-sm text-gray-600">Licensed Clinical Psychologist</p>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-lg font-semibold text-gray-900 hover:text-[#8E5B68] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2 rounded"
              aria-current={currentPage === 'home' ? 'page' : undefined}
              role="menuitem"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('therapy')}
              className={`text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2 rounded ${
                currentPage === 'therapy'
                  ? 'text-[#8E5B68] border-b-2 border-[#8E5B68] pb-1'
                  : 'text-gray-900 hover:text-[#8E5B68]'
              }`}
              aria-current={currentPage === 'therapy' ? 'page' : undefined}
              role="menuitem"
            >
              Therapy
            </button>
            <button
              onClick={() => setCurrentPage('coaching')}
              className={`text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2 rounded ${
                currentPage === 'coaching'
                  ? 'text-[#8E5B68] border-b-2 border-[#8E5B68] pb-1'
                  : 'text-gray-900 hover:text-[#8E5B68]'
              }`}
              aria-current={currentPage === 'coaching' ? 'page' : undefined}
              role="menuitem"
            >
              Coaching
            </button>
            <a
              href="mailto:drmichelleepstein@gmail.com"
              className="text-lg font-semibold text-gray-900 hover:text-[#8E5B68] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2 rounded"
              aria-label="Email Dr. Michelle Epstein"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/dr-michelle-a-epstein-phd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-900 hover:text-[#8E5B68] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8E5B68] focus:ring-offset-2 rounded"
              aria-label="Visit Dr. Michelle Epstein's LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={20} aria-hidden="true" />
              <span className="text-lg font-semibold">LinkedIn</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#8E5B68] rounded"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-2 border-t pt-4" role="menu">
            <button
              onClick={() => {
                setCurrentPage('home');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
              aria-current={currentPage === 'home' ? 'page' : undefined}
              role="menuitem"
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('therapy');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
              aria-current={currentPage === 'therapy' ? 'page' : undefined}
              role="menuitem"
            >
              Therapy
            </button>
            <button
              onClick={() => {
                setCurrentPage('coaching');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
              aria-current={currentPage === 'coaching' ? 'page' : undefined}
              role="menuitem"
            >
              Coaching
            </button>
            <a
              href="mailto:drmichelleepstein@gmail.com"
              className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
              aria-label="Email Dr. Michelle Epstein"
              role="menuitem"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/dr-michelle-a-epstein-phd/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-[#8E5B68]"
              aria-label="Visit Dr. Michelle Epstein's LinkedIn profile (opens in new tab)"
              role="menuitem"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}