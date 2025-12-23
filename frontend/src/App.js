import React, { useState } from "react";
import "./App.css";
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Chatbot, ChatbotButton } from './components/Chatbot';
import { Footer } from './components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Services />
        <Partners />
        <Footer />
        {!isChatOpen && <ChatbotButton onClick={() => setIsChatOpen(true)} />}
        <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </LanguageProvider>
  );
}

export default App;
