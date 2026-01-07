import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Partners = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-slate-50 to-white luxury-grain" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">{t.partners.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">{t.partners.subtitle}</p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Partner 1 - Nawal Iona */}
          <a 
            href="https://www.linkedin.com/in/nawal-iona/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group stagger-item block"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-luxury-hover hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-blue-400/0 group-hover:border-cyan-400/50 rounded-3xl transition-all duration-500 z-10"></div>
              
              {/* Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/kt0ts2v1_Arabic%20Alps%20Nawal%20Head%20shot.png"
                  alt="Nawal Amra - Managing Partner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Blue gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-4"></div>
                  <h3 className="text-3xl font-bold text-white mb-2">Nawal Amra</h3>
                  <p className="text-cyan-300 text-sm uppercase tracking-wider font-semibold mb-3">{t.partners.partner1}</p>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-cyan-300 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">View LinkedIn Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Partner 2 - Stephan Hunold */}
          <a 
            href="https://www.linkedin.com/in/stephan-hunold/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group stagger-item block"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-luxury-hover hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 cursor-pointer">
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-blue-400/0 group-hover:border-cyan-400/50 rounded-3xl transition-all duration-500 z-10"></div>
              
              {/* Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/hwqdy865_IMG-20251224-WA0001.jpg"
                  alt="Stephan Hunold - Managing Partner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Blue gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-4"></div>
                  <h3 className="text-3xl font-bold text-white mb-2">Stephan Hunold</h3>
                  <p className="text-cyan-300 text-sm uppercase tracking-wider font-semibold mb-3">{t.partners.partner2}</p>
                  <div className="inline-flex items-center gap-2 text-white group-hover:text-cyan-300 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">View LinkedIn Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
