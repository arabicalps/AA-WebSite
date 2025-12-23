import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Header = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isRTL = currentLanguage === 'ar';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-luxury border-b border-white/20' 
          : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/me675xir_arabic_alps_white_letters.png"
                alt="Arabic Alps Logo"
                className={`h-11 w-auto transition-all duration-300 ${
                  isScrolled ? 'opacity-90 brightness-0' : 'opacity-95'
                } group-hover:scale-105`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-semibold transition-all duration-200 hover:text-amber-600 relative group ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {t.nav.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-semibold transition-all duration-200 hover:text-amber-600 relative group ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {t.nav.about}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-semibold transition-all duration-200 hover:text-amber-600 relative group ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {t.nav.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className={`text-sm font-semibold transition-all duration-200 hover:text-amber-600 relative group ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {t.nav.partners}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-slate-700 hover:bg-slate-50' : 'text-white hover:bg-white/10'
                }`}
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-slate-700 hover:bg-slate-50' : 'text-white hover:bg-white/10'
                }`}
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-slate-700 hover:bg-slate-50' : 'text-white hover:bg-white/10'
                }`}
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('partners')}
                className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-slate-700 hover:bg-slate-50' : 'text-white hover:bg-white/10'
                }`}
              >
                {t.nav.partners}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-3 text-sm font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 rounded-lg"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
