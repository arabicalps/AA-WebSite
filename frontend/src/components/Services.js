import React from 'react';
import { Briefcase, TrendingUp, Building2, Globe, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Services = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  const services = [
    {
      icon: Briefcase,
      title: t.services.service1.title,
      description: t.services.service1.description,
      gradient: 'from-blue-600 via-cyan-600 to-blue-700',
      image: 'https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg'
    },
    {
      icon: TrendingUp,
      title: t.services.service2.title,
      description: t.services.service2.description,
      gradient: 'from-cyan-600 via-blue-500 to-slate-600',
      image: 'https://images.pexels.com/photos/7948058/pexels-photo-7948058.jpeg'
    },
    {
      icon: Building2,
      title: t.services.service3.title,
      description: t.services.service3.description,
      gradient: 'from-slate-600 via-blue-600 to-cyan-600',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg'
    },
    {
      icon: Globe,
      title: t.services.service4.title,
      description: t.services.service4.description,
      gradient: 'from-blue-700 via-cyan-500 to-blue-600',
      image: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg'
    },
    {
      icon: Shield,
      title: t.services.service5.title,
      description: t.services.service5.description,
      gradient: 'from-cyan-700 via-blue-700 to-slate-700',
      image: 'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg'
    },
    {
      icon: Users,
      title: t.services.service6.title,
      description: t.services.service6.description,
      gradient: 'from-blue-600 via-slate-600 to-cyan-700',
      image: 'https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-slate-50 to-white luxury-grain" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
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
                {/* Background image on hover - uniform for all boxes */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={service.image} alt="" className="w-full h-full object-cover" />
                </div>
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-5 bg-gradient-to-br ${service.gradient} rounded-2xl mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-4"></div>
                  
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
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};