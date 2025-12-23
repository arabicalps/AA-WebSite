import React from 'react';
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
          {/* Partner 1 - With Photo */}
          <div className="group stagger-item">
            <div className="relative overflow-hidden rounded-3xl shadow-luxury-hover hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-blue-400/0 group-hover:border-cyan-400/30 rounded-3xl transition-all duration-500 z-10"></div>
              
              {/* Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/kt0ts2v1_Arabic%20Alps%20Nawal%20Head%20shot.png"
                  alt="Managing Partner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Blue gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-4"></div>
                  <h3 className="text-3xl font-bold text-white mb-2">Nawal [Last Name]</h3>
                  <p className="text-cyan-300 text-sm uppercase tracking-wider font-semibold">{t.partners.partner1}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner 2 - Placeholder */}
          <div className="group stagger-item">
            <div className="relative overflow-hidden rounded-3xl shadow-luxury-hover hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-blue-400/0 group-hover:border-cyan-400/30 rounded-3xl transition-all duration-500 z-10"></div>
              
              {/* Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-6 p-10">
                  <div className="w-40 h-40 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20 group-hover:border-cyan-400/50 transition-colors duration-500 shadow-2xl">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto"></div>
                    <h3 className="text-3xl font-bold text-white">[Name]</h3>
                    <p className="text-cyan-300 text-sm uppercase tracking-wider font-semibold">{t.partners.partner2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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