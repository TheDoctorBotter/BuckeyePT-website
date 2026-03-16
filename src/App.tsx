import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Disclaimers } from './components/Disclaimers';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { PrivacyPolicy, TermsOfUse } from './components/pages';

type Page = 'home' | 'privacy' | 'terms';

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/privacy': 'privacy',
  '/terms': 'terms',
};

const pageToPath: Record<Page, string> = {
  'home': '/',
  'privacy': '/privacy',
  'terms': '/terms',
};

function getPageFromPath(): Page {
  return pathToPage[window.location.pathname] || 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', pageToPath[page]);
    window.scrollTo({ top: 0 });
  };

  const handleBackToHome = () => {
    navigateTo('home');
  };

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <PrivacyPolicy onBack={handleBackToHome} />
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <TermsOfUse onBack={handleBackToHome} />
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services id="services" />
      <Testimonials id="testimonials" />
      <Disclaimers id="disclaimers" />
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
