import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Chatbot = ({ isOpen, onClose }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: ''
  });
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Welcome to Arabic Alps. I\'m here to help you explore exclusive investment opportunities. You can also reach us at info@arabicalps.ch. May I have your name?' }
  ]);

  const questions = [
    { field: 'name', icon: User, question: 'Thank you! What\'s your email address?' },
    { field: 'email', icon: Mail, question: 'Great! What\'s your phone number?' },
    { field: 'phone', icon: Phone, question: 'What company or institution are you representing?' },
    { field: 'company', icon: Building2, question: 'What type of investment opportunity interests you most?' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value;
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);

    // Update form data
    const fields = ['name', 'email', 'phone', 'company', 'interest'];
    const updatedData = { ...formData, [fields[step]]: input };
    setFormData(updatedData);

    // Move to next step
    if (step < questions.length) {
      setTimeout(() => {
        setMessages([...newMessages, {
          type: 'bot',
          text: questions[step].question
        }]);
        setStep(step + 1);
      }, 500);
    } else {
      // Final message
      setTimeout(() => {
        setMessages([...newMessages, {
          type: 'bot',
          text: 'Thank you for your interest! Our team will contact you within 24 hours to discuss exclusive opportunities tailored for you.'
        }]);
        // Reset after 3 seconds
        setTimeout(() => {
          onClose();
          setStep(0);
          setFormData({ name: '', email: '', phone: '', company: '', interest: '' });
          setMessages([{
            type: 'bot',
            text: 'Welcome to Arabic Alps. I\'m here to help you explore exclusive investment opportunities. You can also reach us at info@arabicalps.ch. May I have your name?'
          }]);
        }, 3000);
      }, 500);
    }

    e.target.reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <div className="bg-white rounded-2xl shadow-luxury-hover w-96 h-[600px] flex flex-col overflow-hidden border-2 border-blue-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold mb-1">Arabic Alps Assistant</h3>
              <p className="text-blue-100 text-sm">Let's discuss your investment goals</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-slate-50 to-white">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white ml-4'
                    : 'bg-white text-slate-800 shadow-md border border-slate-100 mr-4'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        {step <= questions.length && (
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                name="userInput"
                placeholder="Type your response..."
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                autoFocus
              />
              <button
                type="submit"
                className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export const ChatbotButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 p-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-luxury-hover hover:shadow-luxury transition-all duration-300 hover:scale-110 group"
    >
      <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
    </button>
  );
};