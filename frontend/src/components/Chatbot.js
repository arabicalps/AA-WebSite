// =============================================================================
// frontend/src/components/Chatbot.js
// =============================================================================
// Changes from the original:
//   1. formData field renamed from 'interest' to 'message' — now matches
//      the contact form so both forms speak the same language to the server.
//   2. handleSubmit final step now makes a real fetch() call to /api/contact
//      instead of silently discarding the data.
//   3. Added isSending state to disable input while the server responds.
// Everything else — layout, styling, questions, translations — is unchanged.
// =============================================================================

import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, Building2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const Chatbot = ({ isOpen, onClose }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const [step, setStep] = useState(0);

  // 'interest' renamed to 'message' — same field name as the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '' // ← was 'interest'
  });

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Welcome to Arabic Alps. I'm here to help you explore exclusive investment opportunities. You can also reach us at info@arabicalps.ch. May I have your name?"
    }
  ]);

  // Tracks whether we are waiting for the server — disables input while true
  const [isSending, setIsSending] = useState(false);

  const questions = [
    { field: 'name',    icon: User,      question: "Thank you! What's your email address?" },
    { field: 'email',   icon: Mail,      question: "Great! What's your phone number?" },
    { field: 'phone',   icon: Phone,     question: 'What company or institution are you representing?' },
    { field: 'company', icon: Building2, question: 'What type of investment opportunity interests you most?' }
  ];

  // Resets the chatbot back to its initial welcome state
  const resetChatbot = () => {
    onClose();
    setStep(0);
    setIsSending(false);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setMessages([{
      type: 'bot',
      text: "Welcome to Arabic Alps. I'm here to help you explore exclusive investment opportunities. You can also reach us at info@arabicalps.ch. May I have your name?"
    }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value;
    if (!input.trim()) return;

    // Add the visitor's reply to the chat display
    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);

    // Store the value against the correct field — note 'message' is last now
    const fields = ['name', 'email', 'phone', 'company', 'message'];
    const updatedData = { ...formData, [fields[step]]: input };
    setFormData(updatedData);

    e.target.reset();

    if (step < questions.length) {
      // Not the last step — show the next question
      setTimeout(() => {
        setMessages([...newMessages, {
          type: 'bot',
          text: questions[step].question
        }]);
        setStep(step + 1);
      }, 500);

    } else {
      // Last step — now actually send the data to our serverless function
      setTimeout(async () => {
        setMessages([...newMessages, {
          type: 'bot',
          text: 'One moment, sending your enquiry securely...'
        }]);
        setIsSending(true);

        try {
          // POST all five fields to /api/contact (frontend/api/contact.js)
          // The serverless function connects to Hostpoint and emails your inbox
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData), // name, email, phone, company, message
          });

          if (response.ok) {
            setMessages([...newMessages, {
              type: 'bot',
              text: 'Thank you for your interest! Your enquiry has been sent securely to our team. We will contact you within 24 hours to discuss exclusive opportunities tailored for you.'
            }]);
          } else {
            setMessages([...newMessages, {
              type: 'bot',
              text: 'We apologise — something went wrong. Please email us directly at info@arabicalps.ch and we will respond promptly.'
            }]);
          }
        } catch (error) {
          setMessages([...newMessages, {
            type: 'bot',
            text: 'We could not connect to send your message. Please check your connection or email us at info@arabicalps.ch.'
          }]);
        }

        // Reset the chatbot 4 seconds after success or failure
        setTimeout(resetChatbot, 4000);

      }, 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <div className="bg-white rounded-2xl shadow-luxury-hover w-96 h-[600px] flex flex-col overflow-hidden border-2 border-blue-100">

        {/* Header — unchanged */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold mb-1">Arabic Alps Assistant</h3>
              <p className="text-blue-100 text-sm">Let&apos;s discuss your investment goals</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages — unchanged */}
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

        {/* Input — disabled while isSending is true to prevent double submission */}
        {step <= questions.length && (
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                name="userInput"
                placeholder={isSending ? 'Sending...' : 'Type your response...'}
                disabled={isSending}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 disabled:opacity-50"
                autoFocus
              />
              <button
                type="submit"
                disabled={isSending}
                className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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

// ChatbotButton — completely unchanged
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