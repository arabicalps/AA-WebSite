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
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: t.services.service2.title,
      description: t.services.service2.description,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Handshake,
      title: t.services.service3.title,
      description: t.services.service3.description,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Building2,
      title: t.services.service4.title,
      description: t.services.service4.description,
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Settings,
      title: t.services.service5.title,
      description: t.services.service5.description,
      color: 'from-green-500 to-lime-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
