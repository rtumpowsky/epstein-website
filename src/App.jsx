import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TherapyPage from './pages/TherapyPage';
import CoachingPage from './pages/CoachingPage';

export default function App() {
  // Get initial page from URL hash or default to 'home'
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '');
    return hash && ['home', 'therapy', 'coaching'].includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());

  // Custom setCurrentPage that also updates URL hash
  const navigateTo = (page) => {
    window.history.pushState({ page }, '', `#${page}`);
    setCurrentPage(page);
  };

  // Listen for browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        // If no state, use the hash or default to home
        const hash = window.location.hash.replace('#', '');
        setCurrentPage(hash && ['home', 'therapy', 'coaching'].includes(hash) ? hash : 'home');
      }
    };

    // Set initial history state
    window.history.replaceState({ page: currentPage }, '', `#${currentPage}`);
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={navigateTo} />
      
      {currentPage === 'home' && <HomePage setCurrentPage={navigateTo} />}
      {currentPage === 'therapy' && <TherapyPage />}
      {currentPage === 'coaching' && <CoachingPage />}
      
      <Footer />
    </div>
  );
}
