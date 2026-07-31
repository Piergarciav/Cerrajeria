import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

// Lazy load non-critical components
const Team = lazy(() => import('./components/Team'));
const Location = lazy(() => import('./components/Location'));
const Recommendations = lazy(() => import('./components/Recommendations'));

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1">
        <Hero />
        <Services />
        <Suspense fallback={<div className="py-12 bg-background-light dark:bg-background-dark" />}>
          <Team />
        </Suspense>
        <Suspense fallback={<div className="py-12 bg-background-light dark:bg-background-dark" />}>
          <Location />
        </Suspense>
        <Suspense fallback={<div className="py-12 bg-background-light dark:bg-background-dark" />}>
          <Recommendations />
        </Suspense>
      </main>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default App;