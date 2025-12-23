import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Hero = () => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-grain"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Gold overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-900/10"></div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-l from-transparent via-amber-300/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/me675xir_arabic_alps_white_letters.png"
                alt="Arabic Alps"
                className="relative h-20 w-auto opacity-95"
              />
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-300/50"></div>
            <div className="w-2 h-2 rounded-full bg-amber-300"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-300/50"></div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            <span className="block mb-2">{t.hero.title.split('&')[0]}</span>
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent">
              {t.hero.title.includes('&') ? '& ' + t.hero.title.split('&')[1] : ''}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            {t.hero.subtitle}
          </p>

          {/* Decorative element */}
          <div className="flex justify-center py-6">
            <div className="w-1 h-16 bg-gradient-to-b from-amber-300 via-amber-400 to-transparent rounded-full"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('services')}
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 text-slate-900 rounded-xl font-semibold overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:scale-105 gold-shimmer"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                {t.hero.cta}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-10 py-5 bg-transparent border-2 border-amber-300/50 text-white rounded-xl font-semibold hover:bg-amber-300/10 hover:border-amber-300 transition-all duration-300 flex items-center gap-3 shadow-lg backdrop-blur-sm text-lg"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              {t.hero.secondary}
            </button>
          </div>

          {/* Stats or trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 border-t border-white/10 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">15+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">€5B+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Assets Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">200+</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Partnerships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-amber-300/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
