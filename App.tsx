import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Stories from './components/Stories';
import Contact from './components/Contact';
import Legal from './components/Legal';

export type PageView = 'home' | 'stories' | 'contact' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'stories':
        return <Stories />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Legal type="privacy" />;
      case 'terms':
        return <Legal type="terms" />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Features />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;