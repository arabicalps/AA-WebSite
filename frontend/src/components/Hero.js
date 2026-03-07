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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_20f41814-0350-4ab3-b01a-2a4505b2d237/artifacts/tfezso89_image.png"
          alt="Swiss Alps Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-900/90"></div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>
              <img
                src="/images/arabic-alps-logo.png"
                alt="Arabic Alps"
                className="relative h-20 w-auto opacity-95"
              />
            </div>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400/50"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400/50"></div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            <span className="block mb-2">{t.hero.title.split('&')[0]}</span>
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              {t.hero.title.includes('&') ? '& ' + t.hero.title.split('&')[1] : ''}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            {t.hero.subtitle}
          </p>

          {/* Decorative element */}
          <div className="flex justify-center py-6">
            <div className="w-1 h-16 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent rounded-full"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('services')}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white rounded-xl font-semibold overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                {t.hero.cta}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="group px-10 py-5 bg-transparent border-2 border-cyan-400/50 text-white rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-3 shadow-lg backdrop-blur-sm text-lg"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Meet Our Team
            </button>
          </div>

          {/* Trust badges - removed specific numbers */}
          <div className="pt-16 mt-20 border-t border-white/10">
            <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
              Connecting sovereign wealth from the Gulf region with Swiss precision and European investment excellence
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cyan-400/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
