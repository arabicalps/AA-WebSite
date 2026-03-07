import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Header = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to a section — if we're not on the home page first navigate there,
  // then wait a tick before scrolling so the DOM has rendered.
  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const goToPortfolio = () => {
    navigate('/portfolio');
    setIsMobileMenuOpen(false);
  };

  const isRTL = currentLanguage === 'ar';

  // Shared button style helper so we don't repeat ourselves
  const navBtnClass = `text-sm font-semibold transition-all duration-200 hover:text-cyan-500 relative group ${
    isScrolled ? 'text-slate-700' : 'text-white'
  }`;

  const underlineSpan = (
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
  );

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
          {/* Logo — clicking always goes home */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="/images/arabic-alps-logo.png"
              alt="Arabic Alps Logo"
              className={`h-11 w-auto transition-all duration-300 ${
                isScrolled ? 'opacity-90 brightness-0' : 'opacity-95'
              } group-hover:scale-105`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('home')} className={navBtnClass}>
              {t.nav.home}{underlineSpan}
            </button>
            <button onClick={() => scrollToSection('about')} className={navBtnClass}>
              {t.nav.about}{underlineSpan}
            </button>
            <button onClick={() => scrollToSection('services')} className={navBtnClass}>
              {t.nav.services}{underlineSpan}
            </button>
            <button onClick={() => scrollToSection('partners')} className={navBtnClass}>
              {t.nav.partners}{underlineSpan}
            </button>

            {/* Portfolio — navigates to /portfolio route */}
            <button
              onClick={goToPortfolio}
              className={`text-sm font-semibold transition-all duration-200 relative group px-4 py-2 rounded-lg border ${
                isScrolled
                  ? 'text-blue-600 border-blue-200 hover:bg-blue-50'
                  : 'text-cyan-300 border-cyan-400/40 hover:bg-cyan-400/10'
              }`}
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu toggle */}
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
              {[
                { label: t.nav.home,     id: 'home' },
                { label: t.nav.about,    id: 'about' },
                { label: t.nav.services, id: 'services' },
                { label: t.nav.partners, id: 'partners' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isScrolled ? 'text-slate-700 hover:bg-slate-50' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </button>
              ))}

              {/* Portfolio mobile link */}
              <button
                onClick={goToPortfolio}
                className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                  isScrolled
                    ? 'text-blue-600 hover:bg-blue-50'
                    : 'text-cyan-300 hover:bg-white/10'
                }`}
              >
                Portfolio
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};