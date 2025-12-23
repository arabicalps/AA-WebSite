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
    <footer className="bg-slate-900 text-white py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img
              src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/me675xir_arabic_alps_white_letters.png"
              alt="Arabic Alps"
              className="h-10 w-auto"
            />
            <p className="text-slate-400 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('partners')} className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.nav.partners}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Arabic Alps. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
