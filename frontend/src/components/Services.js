import React from 'react';
import { TrendingUp, FileText, Handshake, Building2, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Services = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  const services = [
    {
      icon: TrendingUp,
      title: t.services.service1.title,
      description: t.services.service1.description,
      gradient: 'from-amber-400 via-yellow-500 to-amber-600'
    },
    {
      icon: FileText,
      title: t.services.service2.title,
      description: t.services.service2.description,
      gradient: 'from-blue-400 via-cyan-500 to-teal-600'
    },
    {
      icon: Handshake,
      title: t.services.service3.title,
      description: t.services.service3.description,
      gradient: 'from-violet-400 via-purple-500 to-indigo-600'
    },
    {
      icon: Building2,
      title: t.services.service4.title,
      description: t.services.service4.description,
      gradient: 'from-rose-400 via-pink-500 to-red-600'
    },
    {
      icon: Settings,
      title: t.services.service5.title,
      description: t.services.service5.description,
      gradient: 'from-emerald-400 via-teal-500 to-green-600'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-slate-50 to-white luxury-grain" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">{t.services.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="stagger-item group relative bg-white rounded-2xl p-10 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-3 border border-slate-100 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-5 bg-gradient-to-br ${service.gradient} rounded-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full mb-4"></div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-300"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
