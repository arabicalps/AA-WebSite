import React from 'react';
import { Target, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const About = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  return (
    <section id="about" className="py-24 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">{t.about.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.description}
            </p>

            {/* Vision Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{t.about.vision}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">{t.about.visionText}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/xfesbc7t_ChatGPT%20Image%20Dec%2018%2C%202025%2C%2001_15_16%20PM.png"
                alt="Swiss Alps"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full filter blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full filter blur-2xl opacity-60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
