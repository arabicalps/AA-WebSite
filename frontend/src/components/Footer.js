import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Footer = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 luxury-grain relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-6">
            <img
              src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/me675xir_arabic_alps_white_letters.png"
              alt="Arabic Alps"
              className="h-12 w-auto opacity-90"
            />
            <p className="text-slate-400 text-base leading-relaxed max-w-md font-light">{t.footer.tagline}</p>
            
            {/* Decorative divider */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-amber-300">{t.footer.links}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('partners')} 
                  className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium"
                >
                  {t.nav.partners}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-amber-300">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-300 transition-colors duration-200 text-sm font-medium">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm font-light">
              © {new Date().getFullYear()} Arabic Alps. {t.footer.rights}
            </p>
            
            {/* Decorative dots */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};