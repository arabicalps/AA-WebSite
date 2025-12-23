import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Partners = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  return (
    <section id="partners" className="py-24 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.partners.title}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.partners.subtitle}</p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Partner 1 - With Photo */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/kt0ts2v1_Arabic%20Alps%20Nawal%20Head%20shot.png"
                  alt="Managing Partner"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Nawal [Last Name]</h3>
                <p className="text-slate-200 text-sm">{t.partners.partner1}</p>
              </div>
            </div>
          </div>

          {/* Partner 2 - Placeholder */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
                    <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">[Name]</h3>
                    <p className="text-slate-300 text-sm">{t.partners.partner2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
