import React from 'react';
import { Target, Eye, Award, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const About = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  return (
    <section id="about" className="py-32 bg-white luxury-grain" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">{t.about.title}</h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-transparent rounded-full"></div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {t.about.description}
            </p>

            {/* Vision Box */}
            <div className="mt-10 p-8 bg-gradient-to-br from-amber-50 via-yellow-50 to-white rounded-2xl border-2 border-amber-100 shadow-luxury relative overflow-hidden group hover:shadow-luxury-hover transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-200/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl shadow-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t.about.vision}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg font-light">{t.about.visionText}</p>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-sm text-slate-600 font-medium">Excellence</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm text-slate-600 font-medium">Global Reach</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-sm text-slate-600 font-medium">Precision</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-square rounded-3xl overflow-hidden shadow-luxury-hover border-4 border-white">
                <img
                  src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/xfesbc7t_ChatGPT%20Image%20Dec%2018%2C%202025%2C%2001_15_16%20PM.png"
                  alt="Swiss Alps"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-amber-300/30 rounded-3xl -z-10"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full filter blur-3xl opacity-30 -z-20"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full filter blur-3xl opacity-20 -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};