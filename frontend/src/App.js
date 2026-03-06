import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Partners } from './components/Partners';
import { Chatbot, ChatbotButton } from './components/Chatbot';
import { Footer } from './components/Footer';
import Portfolio from './components/Portfolio';

// The main home page — unchanged from original
function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
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
  );
}

function App() {
  return (
    // BrowserRouter enables React Router's URL-based navigation
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
