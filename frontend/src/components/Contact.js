import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Contact = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with actual API call
    setStatus({ type: 'success', message: t.contact.success });
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setStatus({ type: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 luxury-grain" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">{t.contact.title}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-8">{t.contact.info}</h3>
              <div className="space-y-6">
                <div className="group p-6 bg-white rounded-2xl shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-7 h-7 text-amber-600" />
                    </div>
                    <div>
                      {/*<p className="font-bold text-slate-900 mb-2 text-lg">Address</p>*/}
                      {/*<p className="text-slate-600 leading-relaxed">{t.contact.address}</p>*/}
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2 text-lg">Email</p>
                      <p className="text-slate-600">info@arabicalps.ch</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl shadow-luxury hover:shadow-luxury-hover transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-2 text-lg">Phone</p>
                      <p className="text-slate-600">+41 79 865 96 29</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <p className="text-white text-lg font-light leading-relaxed italic">
                  &ldquo;Connecting sovereign wealth with Swiss excellence through trust, precision, and cultural understanding.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-luxury-hover p-10 border border-slate-100 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-50 to-transparent rounded-bl-full"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-3">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-3">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-3">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 text-slate-900 font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-900 mb-3">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-3">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 resize-none text-slate-900 font-medium"
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-5 rounded-xl flex items-center gap-3 ${
                      status.type === 'success' 
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-2 border-green-200' 
                        : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border-2 border-red-200'
                    }`}
                  >
                    {status.type === 'success' && <CheckCircle className="w-6 h-6" />}
                    <span className="font-semibold">{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-slate-900 rounded-xl font-bold hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center gap-3 text-lg group gold-shimmer"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};