import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'quote' | 'privacy'>('home');

  // Function to handle navigation
  const handleNavigate = (page: 'home' | 'quote' | 'privacy', hash?: string) => {
    setCurrentPage(page);
    
    // Slight delay to allow render before scrolling
    setTimeout(() => {
      if (hash && page === 'home') {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="bg-dark min-h-screen text-white font-poppins selection:bg-primary selection:text-white flex flex-col justify-between">
      <Navbar onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <Marquee />
          <Services />
          <Portfolio onNavigate={handleNavigate} />
          <Testimonials />
          <Process />
        </>
      )}

      {currentPage === 'quote' && (
        <QuoteForm onBack={() => handleNavigate('home')} />
      )}

      {currentPage === 'privacy' && (
        <PrivacyPolicy onBack={() => handleNavigate('home')} />
      )}

      <Footer onNavigate={handleNavigate} />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5534997315975"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </main>
  );
};

export default App;